import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  
  Box,
} from "@mui/material";
import JoditEditor from "jodit-react";

const Test = () => {
  const editor = useRef(null);

  const [categories, setCategories] = useState([]); // List of categories
  

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const [image, setImage] = useState(null);

  // Handle field changes
 

  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };

  // Handle file input
  
  // Submit form
  const createPost = (event) => {
    event.preventDefault();
    console.log(post);
    console.log(image);
  };

  return (
    <Box className="wrapper" sx={{ mt: 3 }}>
      <Card elevation={3}>
        <CardContent>
          
          <form onSubmit={createPost}>
            {/* Title Input */}
           

            {/* JoditEditor for Post Content */}
            <Box my={3}>
              <Typography variant="subtitle1" gutterBottom>
                Post Content
              </Typography>
              <JoditEditor
                ref={editor}
                value={post.content}
                onChange={(newContent) => contentFieldChanaged(newContent)}
              />
            </Box>

            {/* Buttons */}
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Create Post
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="button"
                  variant="outlined"
                  color="secondary"
                  size="large"
                  onClick={() =>
                    setPost({ title: "", content: "", categoryId: "" })
                  }
                >
                  Reset Content
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Test;

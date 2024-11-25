import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import JoditEditor from "jodit-react";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";

const centreOptions = [
  { id: 1, name: "Centre 1" },
  { id: 2, name: "Centre 2" },
];

const itemOptions = [
  { id: 1, name: "Test 1" },
  { id: 2, name: "Test 2" },
];

const genderOptions = [
  { id: "male", name: "Male" },
  { id: "female", name: "Female" },
  { id: "other", name: "Other" },
];

const validationSchema = Yup.object({
  centre: Yup.string().required("Centre is required"),
  test: Yup.string().required("Test is required"),
  templateName: Yup.string().required("Template Name is required"),
  gender: Yup.string().required("Gender is required"),
});

const InvestigationTemplateMaster = () => {
  const [anchorElCentre, setAnchorElCentre] = useState(null);
  const [anchorElItem, setAnchorElItem] = useState(null);
  const [editorData, setEditorData] = useState("");
  const editor = useRef(null);

  // Refocus editor on mount (optional)
  useEffect(() => {
    if (editor.current) {
      editor.current.focus();
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          centre: "",
          test: "",
          templateName: "",
          gender: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form data:", values);
          console.log("Editor content:", editorData);
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <div className="mb-[50px] pl-2">
              <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
                <Box
                  className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
                  style={{ backgroundColor: "#1976d2" }}
                >
                  <Typography style={{ color: "#fff" }}>
                    Template Master
                  </Typography>
                </Box>
                <Divider className="divider" />

                <Grid container spacing={1} p={1}>
                  {/* Centre Field */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl
                      fullWidth
                      error={Boolean(errors.centre && touched.centre)}
                    >
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          sx={{ mr: "3px" }}
                          className="formlableborder"
                        >
                          <FormLabel>Centre</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            fullWidth
                            onClick={(e) => setAnchorElCentre(e.currentTarget)}
                            value={values.centre}
                            placeholder="Select Centre"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          {touched.centre && errors.centre && (
                            <Typography color="error" variant="caption">
                              {errors.centre}
                            </Typography>
                          )}
                          <CustomMenuSearch
                            options={centreOptions}
                            selectedOptions={
                              values.centre
                                ? [{ id: values.centre, name: values.centre }]
                                : []
                            }
                            setSelectedOptions={(value) =>
                              setFieldValue("centre", value[0]?.name || "")
                            }
                            placeholder="Search Centre"
                            anchorEl={anchorElCentre}
                            onClose={() => setAnchorElCentre(null)}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Test Field */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl
                      fullWidth
                      error={Boolean(errors.test && touched.test)}
                    >
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          sx={{ mr: "3px" }}
                          className="formlableborder"
                        >
                          <FormLabel>Test</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            fullWidth
                            onClick={(e) => setAnchorElItem(e.currentTarget)}
                            value={values.test}
                            placeholder="Select Test"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          {touched.test && errors.test && (
                            <Typography color="error" variant="caption">
                              {errors.test}
                            </Typography>
                          )}
                          <CustomMenuSearch
                            options={itemOptions}
                            selectedOptions={
                              values.test
                                ? [{ id: values.test, name: values.test }]
                                : []
                            }
                            setSelectedOptions={(value) =>
                              setFieldValue("test", value[0]?.name || "")
                            }
                            placeholder="Search Test"
                            anchorEl={anchorElItem}
                            onClose={() => setAnchorElItem(null)}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Template Name Field */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl
                      fullWidth
                      error={Boolean(
                        errors.templateName && touched.templateName
                      )}
                    >
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          sx={{ mr: "3px" }}
                          className="formlableborder"
                        >
                          <FormLabel>Template Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            fullWidth
                            placeholder="Enter Template Name"
                            value={values.templateName}
                            onChange={(e) =>
                              setFieldValue("templateName", e.target.value)
                            }
                          />
                          {touched.templateName && errors.templateName && (
                            <Typography color="error" variant="caption">
                              {errors.templateName}
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Gender Field */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl
                      fullWidth
                      error={Boolean(errors.gender && touched.gender)}
                    >
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          sx={{ mr: "3px" }}
                          className="formlableborder"
                        >
                          <FormLabel>Gender</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            select
                            fullWidth
                            placeholder="Select Gender"
                            value={values.gender}
                            onChange={(e) =>
                              setFieldValue("gender", e.target.value)
                            }
                          >
                            {genderOptions.map((option) => (
                              <MenuItem key={option.id} value={option.name}>
                                {option.name}
                              </MenuItem>
                            ))}
                          </TextField>
                          {touched.gender && errors.gender && (
                            <Typography color="error" variant="caption">
                              {errors.gender}
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Jodit Editor */}
                <div style={{ margin: "20px" }}>
                 
                  <JoditEditor
                    ref={editor}
                    value={editorData}
                    config={{
                      readonly: false, // Enable editing
                      toolbar: true,
                    }}
                    onBlur={newContent => setFieldValue("EditorData",newContent)}
                    // onChange={(newContent) => console.log(newContent)} 
                  />
                  <div style={{ marginTop: "20px" }}>
                    <h3>Output Data (HTML):</h3>
                    <pre>{editorData}</pre>
                  </div>
                </div>

                <Box textAlign="center" p={2}>
                  <button type="submit" className="project-thim text-white border-none rounded-md">Submit</button>
                </Box>
              </Box>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvestigationTemplateMaster;

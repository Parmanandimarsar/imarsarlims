import React from "react";
import { GridOverlay } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
const CustomNoRowsOverlay = () => {
  return (
    <GridOverlay>
      <Box
      sx={{
        height: "20px", 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        color: "gray", 
      }}
      >
        <Typography variant="h6">No data found</Typography>
      </Box>
    </GridOverlay>
  );
};

export default CustomNoRowsOverlay;

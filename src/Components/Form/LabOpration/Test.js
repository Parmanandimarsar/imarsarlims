import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, MenuItem, Button, Box } from "@mui/material";

const Test = () => {

    const [primaryDropdown, setPrimaryDropdown] = useState("");
    const [secondaryDropdown, setSecondaryDropdown] = useState([]);
    const [selectedData, setSelectedData] = useState({
      a: [],
      b: [],
      c: [],
    });
    const [rows, setRows] = useState([]);
  
    const primaryOptions = ["a", "b", "c"];
    const secondaryOptions = [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
      { id: 3, name: "Option 3" },
      { id: 4, name: "Option 4" },
    ];
  
    const handlePrimaryChange = (event) => {
      setPrimaryDropdown(event.target.value);
      setRows(selectedData[event.target.value] || []);
    };
  
    const handleSecondaryChange = (event) => {
      const {
        target: { value },
      } = event;
      setSecondaryDropdown(typeof value === "string" ? value.split(",") : value);
    };
  
    const handleSaveData = () => {
      if (!primaryDropdown) {
        alert("Please select a primary category (a, b, or c).");
        return;
      }
      const updatedData = {
        ...selectedData,
        [primaryDropdown]: [...selectedData[primaryDropdown], ...secondaryDropdown],
      };
      setSelectedData(updatedData);
      setRows(updatedData[primaryDropdown]);
      setSecondaryDropdown([]);
    };
  
    const columns = [
      { field: "id", headerName: "ID", width: 100 },
      { field: "name", headerName: "Name", width: 200 },
    ];



  return (
    <Box sx={{ padding: 2 }}>
    <TextField
      select
      label="Select Category"
      value={primaryDropdown}
      onChange={handlePrimaryChange}
      fullWidth
    >
      {primaryOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>

    <TextField
      select
      label="Select Options"
      value={secondaryDropdown}
      onChange={handleSecondaryChange}
      SelectProps={{
        multiple: true,
      }}
      fullWidth
      sx={{ marginTop: 2 }}
    >
      {secondaryOptions.map((option) => (
        <MenuItem key={option.id} value={option}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>

    <Button
      variant="contained"
      color="primary"
      onClick={handleSaveData}
      sx={{ marginTop: 2 }}
    >
      Save Data
    </Button>

    <Box sx={{ height: 400, marginTop: 2 }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Box>
  </Box>
  )
}

export default Test
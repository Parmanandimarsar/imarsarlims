import React, { useState } from "react";
import { Grid, FormControl, FormLabel, TextField, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MasterLabTestMaster } from "../../../TableField/TablefieldsColumns";
import { ExportToExcel } from "../../../ConstantComponents/ExcelExport";
import DataGridTable from "../../../ConstantComponents/DataGridTable";

// Define row as an array of objects
const initialRows = [
  {
    id: 1,
    testType: "Test",
    testName: "cdf",
    testCode: 35,
    testMethod: "Jon",
    sampleVolume: "2ml",
    containerColor: "Black",
    department: "gfg",
    gender: "male",
    reportType: "yes",
    sampleType: ["Sample Type 1"],
    active: true,
  },
  {
    id: 2,
    testType: "Profile",
    testName: "cdf",
    testCode: 35,
    testMethod: "Jon",
    sampleVolume: "1ml",
    containerColor: "Blue",
    department: "gfg",
    gender: "male",
    reportType: "yes",
    sampleType: ["Sample Type 2"],
    active: true,
  },

  // Add more rows if needed
];

const LabTestMasterTable = ({ onSetEditRow }) => {
  const [rows, setRows] = useState(initialRows); // Rows to display
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  const handleEdit = (row) => {
    // console.log("Editing row:", row);
    onSetEditRow(row); // Call edit function with selected row
  };

  const handleToggleActive = (row) => {
    const updatedRows = rows.map((r) =>
      r.id === row.id ? { ...r, active: !r.active } : r
    );
    setRows(updatedRows);
  };

  // Handle search logic
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter rows based on search term
    const filteredRows = initialRows.filter((row) => {
      const testName = row.testName ? row.testName.toLowerCase() : "";
      const testCode = row.testCode ? String(row.testCode).toLowerCase() : ""; // Convert testCode to string
      const department = row.department ? row.department.toLowerCase() : "";

      return (
        testName.includes(term) ||
        testCode.includes(term) ||
        department.includes(term)
      );
    });

    setRows(filteredRows);
  };

  const exportToExcel = () => {
    const columns = MasterLabTestMaster(handleToggleActive, handleEdit);
    const headers = columns.map((column) => column.headerName);
    const data = rows.map((row) => columns.map((column) => row[column.field]));

    ExportToExcel(data, headers, "rate_type_master.xlsx");
  };

  return (
    <div>
      <div className="flex">
        <Grid container spacing={1} className="pl-1">
          {/* Search Field */}
          <Grid item xs={12} sm={6} md={5} lg={6}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid item xs={3} className="formlableborder">
                  <FormLabel>Search</FormLabel>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    fullWidth
                    placeholder="Search by Test Name, Test Code, or Department"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>

        <button
          className="border p-1 px-3 mx-5 border-none rounded-lg project-thim text-white"
          onClick={exportToExcel}
        >
          Export
        </button>
      </div>
      <Box sx={{ height: 300, width: "100%" }}>
        <DataGridTable
          rows={rows} // Filtered rows
          columns={MasterLabTestMaster(handleToggleActive, handleEdit)}
        />
      </Box>
    </div>
  );
};

export default LabTestMasterTable;

import React, { useState } from "react";
import { Grid, FormControl, FormLabel, TextField, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MasterLabTestMaster } from "../../../TableField/TablefieldsColumns";
import { ExportToExcel } from "../../../ConstantItems/ExcelExport";

// Define row as an array of objects
const initialRows = [
  {
    id: 1,
    testName: "Snow",
    packageName: "abcd",
    testMethod: "Jon",
    testCode: 35,
    sampleVolume: "434",
    containerColor: "45",
    department: "gfg",
    gender: "564",
    reportType: "yes",
    sampleType: "other",
    actions: "5%",
  },
  // Add more rows if needed
];

const LabTestMasterTable = () => {
  const [rows, setRows] = useState(initialRows); // Rows to display
  const [searchTerm, setSearchTerm] = useState(""); // Search term

  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleToggleActive = () => {};
  // Handle search logic
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter rows based on search term
    const filteredRows = initialRows.filter(
      (row) =>
        row.testName.toLowerCase().includes(term) ||
        row.testCode.toLowerCase().includes(term) ||
        row.department.toLowerCase().includes(term)
    );
    setRows(filteredRows);
  };
  const exportToExcel = () => {
    const headers = ["S.No", "Rate Type", "Center", "Active"];
    const data = rows.map((row) => [
      row.id,
      row.rateType,
      row.center.join(", "),
      row.active ? "Active" : "Inactive",
    ]);

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
      <Box sx={{ height: 300, width: "100%", mt: 2 }}>
        <DataGrid
          rows={rows} // Filtered rows
          columns={MasterLabTestMaster(
            handleEdit,
            handleDelete,
            handleToggleActive
          )}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          columnHeaderHeight={20}
          rowHeight={25}
          headerHeight={20}
          hideFooterSelectedRowCount
        />
      </Box>
    </div>
  );
};

export default LabTestMasterTable;

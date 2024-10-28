import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
  FormLabel,
  Grid,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const ReportingHelpMaster = () => {
  const [investigation, setInvestigation] = useState("");
  const [observation, setObservation] = useState("");
  const [observationOptions, setObservationOptions] = useState([]);
  const [tableData, setTableData] = useState([]);

  // Mock Data for Investigation
  const investigationOptions = [
    { id: 1, name: "Investigation 1" },
    { id: 2, name: "Investigation 2" },
  ];

  // Fetch observation data based on selected investigation
  useEffect(() => {
    if (investigation) {
      // Replace with API call to fetch observation options for selected investigation
      const fetchedObservations = investigation === "Investigation 1"
        ? [{ id: "obs1", name: "Observation A" }, { id: "obs2", name: "Observation B" }]
        : [{ id: "obs3", name: "Observation C" }, { id: "obs4", name: "Observation D" }];
      
      setObservationOptions(fetchedObservations);
      setObservation(""); // Reset observation when investigation changes
      setTableData([]); // Clear table data when a new investigation is selected
    }
  }, [investigation]);

  // Fetch table data based on selected observation
  useEffect(() => {
    if (observation) {
      // Replace with API call to fetch table data for selected observation
      const fetchedTableData = observation === "Observation A"
        ? [{ id: 1, masterName: "Master Data 1A" }, { id: 2, masterName: "Master Data 2A" }]
        : observation === "Observation B"
        ? [{ id: 3, masterName: "Master Data 1B" }, { id: 4, masterName: "Master Data 2B" }]
        : observation === "Observation C"
        ? [{ id: 5, masterName: "Master Data 1C" }, { id: 6, masterName: "Master Data 2C" }]
        : [{ id: 7, masterName: "Master Data 1D" }, { id: 8, masterName: "Master Data 2D" }];
      
      setTableData(fetchedTableData);
    }
  }, [observation]);

  // Remove row handler
  const handleRemove = (id) => {
    setTableData((prev) => prev.filter((row) => row.id !== id));
  };

  // DataGrid columns
  const columns = [
    { field: "id", headerName: "SNo", width: 100 },
    { field: "masterName", headerName: "Master Name", width: 200 },
    {
      field: "remove",
      headerName: "Remove",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleRemove(params.row.id)}
        >
          Remove
        </Button>
      ),
    },
  ];

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">Reporting Help Master</Typography>
        </Box>
        <Divider className="divider" />

        <Grid container spacing={2} p={2}>
          {/* Investigation Select Field */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid item xs={3} sx={{ mr: "3px" }}>
                  <FormLabel>Investigation</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    value={investigation}
                    onChange={(e) => setInvestigation(e.target.value)}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>Select Investigation</em>
                    </MenuItem>
                    {investigationOptions.map((option) => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>

          {/* Observation Select Field */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth disabled={!investigation}>
              <Grid container alignItems="center">
                <Grid item xs={3} sx={{ mr: "3px" }}>
                  <FormLabel>Observation</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    value={observation}
                    onChange={(e) => setObservation(e.target.value)}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>Select Observation</em>
                    </MenuItem>
                    {observationOptions.map((option) => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>

        {/* DataGrid for Observation Data */}
        <Box mt={2}>
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight
          />
        </Box>
      </Box>
    </div>
  );
};

export default ReportingHelpMaster;

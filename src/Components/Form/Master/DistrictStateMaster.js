import React, { useState } from "react";
import {
  Typography,
  MenuItem,
  Select,
  FormControl,
  Box,
  FormLabel,
  Divider,
  Paper,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SideNave from "../../../Pages/MainLayout/SideNav";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import { MasterDistrictStateTable } from "../../TableField/TablefieldsColumns";
import CustomNoRowsOverlay from "../../NoDataFoundTable/CustomNoRowsOverlay";

const DistrictStateMaster = () => {
  const [selectedState, setSelectedState] = useState(""); // State to store the selected state
  const [selectedDistrict, setSelectedDistrict] = useState(""); // State to store the selected district
  const [selectedCity, setSelectedCity] = useState(""); // State to store the selected city
  const [districts, setDistricts] = useState([]); // State to store the list of districts
  const [cities, setCities] = useState([]); // State to store the list of cities
  const [addedRows, setAddedRows] = useState([]); // State to store added rows to the table
  const [editRowId, setEditRowId] = useState(null);
  const paginationModel = { page: 0, pageSize: 5 };

  const stateDistrictCityData = {
    "Uttar Pradesh": {
      Agra: ["Agra City", "Fatehpur Sikri", "Kiraoli"],
      Aligarh: ["Aligarh City", "Khair", "Atrauli"],
      Allahabad: ["Allahabad City", "Phulpur", "Soraon"],
      Varanasi: ["Varanasi City", "Ramnagar", "Pindra"],
    },
    Maharashtra: {
      Mumbai: ["South Mumbai", "Andheri", "Borivali"],
      Pune: ["Pune City", "Kothrud", "Shivajinagar"],
      Nagpur: ["Nagpur City", "Hingna", "Kamthi"],
      Nashik: ["Nashik City", "Sinnar", "Igatpuri"],
    },
    Gujarat: {
      Ahmedabad: ["Ahmedabad City", "Sanand", "Dholka"],
      Surat: ["Surat City", "Bardoli", "Choryasi"],
      Vadodara: ["Vadodara City", "Dabhoi", "Karjan"],
      Rajkot: ["Rajkot City", "Morbi", "Jetpur"],
    },
  };

  // Handle State Change
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    setCities([]);
    setDistricts(Object.keys(stateDistrictCityData[state] || {}));
  };

  // Handle District Change
  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setCities(stateDistrictCityData[selectedState][district] || []);
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const handleAdd = () => {
    if (editRowId) {
      // If editing, update the row
      const updatedRows = addedRows.map((row) =>
        row.id === editRowId
          ? {
              ...row,
              state: selectedState,
              district: selectedDistrict,
              city: selectedCity,
            }
          : row
      );
      setAddedRows(updatedRows);
      setEditRowId(null);
    } else {
      // Add new row
      if (selectedState && selectedDistrict && selectedCity) {
        const newRow = {
          id: addedRows.length + 1,
          state: selectedState,
          district: selectedDistrict,
          city: selectedCity,
        };
        setAddedRows([...addedRows, newRow]);
      } else {
        alert("Please select state, district, and city.");
      }
    }
    // Optionally, reset the selection
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedCity("");
    setDistricts([]);
    setCities([]);
  };
  const handleEdit = (row) => {
    setEditRowId(row.id);
    setSelectedState(row.state);
    setSelectedDistrict(row.district);
    setSelectedCity(row.city);
    setDistricts(Object.keys(stateDistrictCityData[row.state] || {}));
    setCities(stateDistrictCityData[row.state][row.district] || []);
  };
  
  // const CustomNoRowsOverlay = () => {
  //   return (
  //     <GridOverlay
  //       sx={{
  //         height: "20px", // Custom height
  //         display: "flex", // Flex for centering
  //         justifyContent: "center",
  //         alignItems: "center",
  //         color: "gray",
  //         backgroundColor: "#f9f9f9", // Optional background to make it stand out
          
  //       }}
  //     >
  //       <Typography variant="h6">Data not found</Typography>
  //     </GridOverlay>
  //   );
  // };

  console.log("addedRows", addedRows);

  return (
    
        
      <div className="   mb-[50px] pl-2">
        <Box className="bg-white p-2 rounded-lg  pb-5  border " autoComplete="off">
          <Box className="flex justify-between items-center bg-slate-50   ml-4  rounded-t-lg">
            <Typography className="text-[#28a745] ">
              District State Master
            </Typography>
          </Box>
          <Divider className="divider" />

          <div className="pl-1 pr-1  p-2">
            <Grid container spacing={2}>
              {/* State Dropdown */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth>
                  <Grid container alignItems="center">
                    <Grid item xs={4}>
                      <FormLabel>State</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <Select
                        name="State"
                        value={selectedState}
                        placeholder="Select State"
                        onChange={handleStateChange}
                        fullWidth
                        variant="outlined"
                        size="small"
                        displayEmpty
                      >
                        <MenuItem value="" disabled>
                          State Select
                        </MenuItem>
                        {Object.keys(stateDistrictCityData).map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>

              {/* District Dropdown */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth>
                  <Grid container alignItems="center">
                    <Grid item xs={4}>
                      <FormLabel>District</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <Select
                        name="District"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        placeholder="Select District"
                        fullWidth
                        variant="outlined"
                        size="small"
                        disabled={!selectedState} // Disable if no state selected
                        displayEmpty
                      >
                        <MenuItem value="" disabled>
                          Select District{" "}
                        </MenuItem>
                        {districts.map((district) => (
                          <MenuItem key={district} value={district}>
                            {district}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>

              {/* City Dropdown */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth>
                  <Grid container alignItems="center">
                    <Grid item xs={4}>
                      <FormLabel>City</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <Select
                        name="City"
                        value={selectedCity}
                        onChange={handleCityChange}
                        placeholder="Select City"
                        fullWidth
                        variant="outlined"
                        size="small"
                        disabled={!selectedDistrict} // Disable if no district selected
                        displayEmpty
                      >
                        <MenuItem value="" disabled>
                          {" "}
                          Select City{" "}
                        </MenuItem>
                        {cities.map((city) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>

              {/* Search Button */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl fullWidth>
                  <Grid container alignItems="center">
                    <Grid item xs={12}>
                      <button
                        className="border-2 rounded-lg px-5 bg-green-600 text-white "
                        onClick={handleAdd}
                      >
                        {editRowId ? "Update" : "Add"}
                      </button>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </div>

          {/* Table Section */}
          <Divider className="divider" />
          <div className="border  mt-2  ml-1 mr-1 w-[650px] rounded-md ">
            <Paper
              sx={{
                minHeight: 50,
                width: "100%",
                padding: "3px",
                maxHeight: 400,
              }}
            >
              <DataGrid
                className="PaymentVoucherTable"
                rows={addedRows}
                columns={MasterDistrictStateTable(handleEdit)}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                rowHeight={30}
                headerHeight={30}
                columnHeaderHeight={20}
                checkboxSelection={false}
                hideFooterSelectedRowCount
                slots={{
                  noRowsOverlay: CustomNoRowsOverlay, 
                }}
                sx={{
                  height: "80px", 
                  maxHeight: "80px", 
                  overflow: "hidden", 
                }}
              />
            </Paper>
          </div>
        </Box>
      </div>
  
  );
};

export default DistrictStateMaster;

import React, { useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Grid,
  Button,
  Divider,
  FormLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DraggableDataGrid from "../../ConstantComponents/DragableComponents/DraggableDataGrid";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";

const departmentOptions = [
  { id: 1, name: "Department A" },
  { id: 2, name: "Department B" },
];

const validationSchema = Yup.object({
  department: Yup.string().required("Department is required"),
  test: Yup.string().required("Test is required"),
  profile: Yup.string().required("Profile is required"),
});

const LabTestMappingMaster = () => {
  const [testOptions, setTestOptions] = useState([]);
  const [profileOptions, setProfileOptions] = useState([]);
  const [rows, setRows] = useState([]);

  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [anchorElTest, setAnchorElTest] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElObservation, setAnchorObservation] = useState(null);
  const [observationOptions, setObservationOptions] = useState([
    { id: 1, name: "Observation 1" },
    { id: 2, name: "Observation 2" },
    // Add more items as needed
  ]);

  const [selectedObservations, setSelectedObservations] = useState([]);

  const handleObservationSelect = (newSelectedOptions) => {
    setSelectedObservations(newSelectedOptions);
  };

  const testOptionsByDepartment = {
    "Department A": [
      { id: 1, name: "Test A1" },
      { id: 2, name: "Test A2" },
    ],
    "Department B": [
      { id: 3, name: "Test B1" },
      { id: 4, name: "Test B2" },
    ],
  };
  const profileOptionsByTest = {
    "Test A1": [
      { id: 1, name: "Profile X1" },
      { id: 2, name: "Profile X2" },
    ],
    "Test B1": [
      { id: 3, name: "Profile Y1" },
      { id: 4, name: "Profile Y2" },
    ],
  };

  const rowsByProfile = {
    "Profile X1": [
      { sn: 1, name: "Sample X1", id: 1 },
      { sn: 2, name: "Sample X2", id: 2 },
    ],
    "Profile X2": [
      { sn: 3, name: "Sample X3", id: 3 },
      { sn: 4, name: "Sample X4", id: 4 },
    ],
    "Profile Y1": [
      { sn: 5, name: "Sample Y1", id: 5 },
      { sn: 6, name: "Sample Y2", id: 6 },
    ],
    "Profile Y2": [
      { sn: 7, name: "Sample Y3", id: 7 },
      { sn: 8, name: "Sample Y4", id: 8 },
    ],
  };

  const handleRemoveRow = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleCheckboxChange = (id, field) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: !row[field] } : row
      )
    );
  };
  const handleMappingClick = (values) => {
    // Check if a profile is selected
    if (values.profile) {
      // Get rows from the selected profile
      const profileRows = rowsByProfile[values.profile] || [];

      // Map selected observations to create new rows
      const observationRows = selectedObservations.map((obs, index) => ({
        sn: profileRows.length + index + 1,
        name: obs.name,
        id: obs.id,
      }));

      // Update the rows with the profile rows and selected observations
      setRows([...profileRows, ...observationRows]);
    } else {
      alert("Please select a profile before mapping.");
    }
  };

  return (
    <Box className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box
          className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
          style={{ backgroundColor: "#1976d2" }}
        >
          <Typography className="pl-1">Lab Test Mapping Master</Typography>
        </Box>
        <Divider />
        <Formik
          initialValues={{ department: "", test: "", profile: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form values:", values);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <Grid container spacing={1} p={1}>
                {/* Department Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ mr: "3px" }}
                      className="formlableborder"
                    >
                      <FormLabel> Department</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl
                        error={Boolean(errors.department && touched.department)}
                        fullWidth
                      >
                        <TextField
                          onClick={(e) =>
                            setAnchorElDepartment(e.currentTarget)
                          }
                          value={values.department}
                          placeholder="Select Department"
                          InputProps={{ readOnly: true }}
                        />
                        {touched.department && errors.department && (
                          <Typography color="error">
                            {errors.department}
                          </Typography>
                        )}
                        <CustomMenuSearch
                          options={departmentOptions}
                          selectedOptions={
                            values.department
                              ? [
                                  {
                                    id: values.department,
                                    name: values.department,
                                  },
                                ]
                              : []
                          }
                          setSelectedOptions={(value) => {
                            const selectedDepartment = value[0]?.name || "";
                            setFieldValue("department", selectedDepartment);
                            setFieldValue("test", "");
                            setFieldValue("profile", "");
                            setTestOptions(
                              testOptionsByDepartment[selectedDepartment] || []
                            );
                            setProfileOptions([]); // Clear profile options
                          }}
                          anchorEl={anchorElDepartment}
                          onClose={() => setAnchorElDepartment(null)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Test Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ mr: "3px" }}
                      className="formlableborder"
                    >
                      <FormLabel> Test</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl
                        error={Boolean(errors.test && touched.test)}
                        fullWidth
                      >
                        <TextField
                          onClick={(e) => setAnchorElTest(e.currentTarget)}
                          value={values.test}
                          placeholder="Select Test"
                          InputProps={{ readOnly: true }}
                        />
                        {touched.test && errors.test && (
                          <Typography color="error">{errors.test}</Typography>
                        )}
                        <CustomMenuSearch
                          options={testOptions}
                          selectedOptions={
                            values.test
                              ? [{ id: values.test, name: values.test }]
                              : []
                          }
                          setSelectedOptions={(value) => {
                            const selectedTest = value[0]?.name || "";
                            setFieldValue("test", selectedTest);
                            setFieldValue("profile", ""); // Reset profile on test change
                            setProfileOptions(
                              profileOptionsByTest[selectedTest] || []
                            );
                          }}
                          anchorEl={anchorElTest}
                          onClose={() => setAnchorElTest(null)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Profile Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ mr: "3px" }}
                      className="formlableborder"
                    >
                      <FormLabel> Profile</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl
                        error={Boolean(errors.profile && touched.profile)}
                        fullWidth
                      >
                        <TextField
                          onClick={(e) => setAnchorElProfile(e.currentTarget)}
                          value={values.profile}
                          placeholder="Select Profile"
                          InputProps={{ readOnly: true }}
                        />
                        {touched.profile && errors.profile && (
                          <Typography color="error">
                            {errors.profile}
                          </Typography>
                        )}
                        <CustomMenuSearch
                          options={profileOptions}
                          selectedOptions={
                            values.profile
                              ? [{ id: values.profile, name: values.profile }]
                              : []
                          }
                          setSelectedOptions={(value) => {
                            const selectedProfile = value[0]?.name || "";
                            setFieldValue("profile", selectedProfile);
                            // Fetch rows based on profile selection
                            setRows(rowsByProfile[selectedProfile] || []);
                          }}
                          anchorEl={anchorElProfile}
                          onClose={() => setAnchorElProfile(null)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider />
              <Grid container spacing={1} p={1}>
                <Grid item xs={12} sm={4} md={3}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ mr: "3px" }}
                      className="formlableborder"
                    >
                      <FormLabel> Observation</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl fullWidth>
                        <TextField
                          onClick={(e) => setAnchorObservation(e.currentTarget)}
                          placeholder="Select Observation"
                          value={
                            selectedObservations.length
                              ? selectedObservations
                                  .map((dept) => dept.name)
                                  .join(", ")
                              : ""
                          }
                          InputProps={{ readOnly: true }}
                        />
                        <CustomMenuSearch
                          options={observationOptions}
                          selectedOptions={selectedObservations} // Use selectedObservations from state
                          setSelectedOptions={handleObservationSelect} // Ensure this function is defined
                          anchorEl={anchorElObservation}
                          onClose={() => setAnchorObservation(null)}
                          isCheckboxMenu
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Box textAlign="center">
                  <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={()=>handleMappingClick(values)}
                  >
                    Mapping
                  </Button>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
       

        <DraggableDataGrid
          rows={rows}
          setRows={setRows}
          handleRemoveRow={handleRemoveRow}
          handleCheckboxChange={handleCheckboxChange}
        />
      </Box>
    </Box>
  );
};

export default LabTestMappingMaster;

import React, { useState, useEffect } from "react";
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
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";
import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid

const departmentOptions = [
  { id: 1, name: "Department A" },
  { id: 2, name: "Department B" },
];
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

const validationSchema = Yup.object({
  department: Yup.string().required("Department is required"),
  test: Yup.string().required("Test is required"),
  profile: Yup.string().required("Profile is required"),
});

const LabTestMappingMaster = () => {
  const [testOptions, setTestOptions] = useState([]);
  const [profileOptions, setProfileOptions] = useState([]);
  const [dataGridRows, setDataGridRows] = useState([]); // Data for DataGrid
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [anchorElTest, setAnchorElTest] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);

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
          initialValues={{
            department: "",
            test: "",
            profile: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Fetch data based on selected profile and set to DataGrid
            const fetchedData = [
              { id: 1, name: "Sample Data 1" },
              { id: 2, name: "Sample Data 2" },
            ];
            setDataGridRows(fetchedData);
            console.log("Form values:", values);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <Grid container spacing={2} p={2}>
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
                            setFieldValue("test", ""); // Reset test on department change
                            setFieldValue("profile", ""); // Reset profile on department change
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
                      <FormLabel> test</FormLabel>
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
                      <Typography color="error">{errors.profile}</Typography>
                    )}
                    <CustomMenuSearch
                      options={profileOptions}
                      selectedOptions={
                        values.profile
                          ? [{ id: values.profile, name: values.profile }]
                          : []
                      }
                      setSelectedOptions={(value) =>
                        setFieldValue("profile", value[0]?.name || "")
                      }
                      anchorEl={anchorElProfile}
                      onClose={() => setAnchorElProfile(null)}
                    />
                  </FormControl>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Box textAlign="center" p={2}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>

        {/* DataGrid to show selected data */}
        <Box mt={2} height={300}>
          <DataGrid
            rows={dataGridRows}
            columns={[
              { field: "id", headerName: "ID", width: 100 },
              { field: "name", headerName: "Name", width: 200 },
            ]}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LabTestMappingMaster;

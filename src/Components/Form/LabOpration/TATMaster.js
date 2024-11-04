import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";
import DataGridTable from "../../ConstantComponents/DataGridTable";
import { TATMastercolumns } from "../../TableField/TablefieldsColumns";

const centreOptions = [
  { id: 1, name: "Centre 1" },
  { id: 2, name: "Centre 2" },
];

const departmentOptions = [
  { id: 1, name: "Department 1" },
  { id: 2, name: "Department 2" },
];

const testOptionsByDepartment = {
  "Department 1": [
    { id: 1, name: "Test 1" },
    { id: 2, name: "Test 2" },
  ],
  "Department 2": [
    { id: 3, name: "Test 3" },
    { id: 4, name: "Test 4" },
  ],
};

const validationSchema = Yup.object({
  centre: Yup.string().required("Centre is required"),
  department: Yup.string().required("Department is required"),
  test: Yup.string().required("Test is required"),
});

const TATMaster = () => {
  const [testOptions, setTestOptions] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [anchorElCentre, setAnchorElCentre] = useState(null);
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [anchorElTest, setAnchorElTest] = useState(null);
  const [rows, setRows] = useState([
    {
      id: 1,
      startTime: "",
      endTime: "12:00 PM",
      testName: "abcd",
      regColl: "",
      collRecv: "",
      tatType: "",
      mins: "",
      days: "",
    },
  ]);
  useEffect(() => {
    if (selectedDepartment) {
      setTestOptions(testOptionsByDepartment[selectedDepartment.name] || []);
    } else {
      setTestOptions([]);
    }
  }, [selectedDepartment]);

  

  

  const handleFormSubmit = (values) => {
    // Save form values along with the updated rows
    console.log("Form data:", values);
    console.log("Table data:", rows);
    // Add your save logic here (e.g., sending data to an API)
  };
  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box
          className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
          style={{ backgroundColor: "#1976d2" }}
        >
          <Typography className="pl-1" style={{ color: "#fff" }}>
            TAT Master
          </Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={{
            centre: "",
            department: "",
            test: "",
          }}
         
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <Grid container spacing={1} p={2}>
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
                          placeholder="Centre"
                          anchorEl={anchorElCentre}
                          onClose={() => setAnchorElCentre(null)}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Department Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.department && touched.department)}
                  >
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Department</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          onClick={(e) =>
                            setAnchorElDepartment(e.currentTarget)
                          }
                          value={values.department}
                          placeholder="Select Department"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        {touched.department && errors.department && (
                          <Typography color="error" variant="caption">
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
                            const selectedDept = value[0];
                            setFieldValue(
                              "department",
                              selectedDept?.name || ""
                            );
                            setSelectedDepartment(selectedDept);
                          }}
                          placeholder="Search Department"
                          anchorEl={anchorElDepartment}
                          onClose={() => setAnchorElDepartment(null)}
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
                          onClick={(e) => setAnchorElTest(e.currentTarget)}
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
                          options={testOptions}
                          selectedOptions={
                            values.test
                              ? [{ id: values.test, name: values.test }]
                              : []
                          }
                          setSelectedOptions={(value) =>
                            setFieldValue("test", value[0]?.name || "")
                          }
                          placeholder="Search Test"
                          anchorEl={anchorElTest}
                          onClose={() => setAnchorElTest(null)}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>

              <DataGridTable
                rows={rows}
                columns={TATMastercolumns}
                
              />
              <Box textAlign="center" p={2}>
                <button type="submit" variant="contained" color="primary">
                  Submit
                </button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default TATMaster;

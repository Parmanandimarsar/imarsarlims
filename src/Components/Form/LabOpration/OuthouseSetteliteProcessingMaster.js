import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Box,
  Typography,
  Divider,
  Checkbox,
} from "@mui/material";
import DataGridTable from "../../ConstantItems/DataGridTable";
import { OuthouseSetteliteProcessingMasterColumns } from "../../TableField/TablefieldsColumns";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  bookingCentre: Yup.string().required("Booking Centre is required"),
  department: Yup.string().required("Department is required"),
  labTest: Yup.array().min(1, "LabTest is required"),
});

const OuthouseSetteliteProcessingMaster = () => {
 
  const [rows, setRows] = useState([]);

  // Mock data for Booking Centres, Departments, labTest, and Labs
  const [centres, setCentres] = useState([
    { id: "1", name: "Centre A" },
    { id: "2", name: "Centre B" },
    { id: "3", name: "Centre C" },
  ]);
  const [processingCentre, setProcessingCentre] = useState([
    { id: "1", name: "Centre A" },
    { id: "2", name: "Centre B" },
    { id: "3", name: "Centre C" },
  ]);
  const [departments, setDepartments] = useState([
    { id: "1", name: "Pathology" },
    { id: "2", name: "Radiology" },
    { id: "3", name: "Microbiology" },
  ]);

  const [labTest, setlabTest] = useState({
    Pathology: ["Blood Test", "Urine Test"],
    Radiology: ["X-Ray", "MRI"],
    Microbiology: ["Culture Test", "Sensitivity Test"],
  });

 

  const [investigationOptions, setInvestigationOptions] = useState([]);

  const [editRow, setEditRow] = useState(null);
 

  // Fetch labTest for the selected department
  const handleDepartmentChange = (departmentName, setFieldValue) => {
    const selectedlabTest = labTest[departmentName] || [];
    setInvestigationOptions(selectedlabTest);
    setFieldValue("labTest", []); // Clear labTest selection when department changes
  };

  const initialValues = {
    bookingCentre: "",
    department: "",
    labTest: [],
    processingCentre: "",
  };

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Submitted with values:", values);
    if (editRow) {
      setRows((pre) =>
        pre.map((item) =>
          item.id === editRow.id ? { ...pre, ...values } : item
        )
      );
      setEditRow(null);
    } else {
      setRows((prev) => [...prev, { ...values, id: new Date().getTime() }]);
    }

    resetForm();
  };
  const handleDelete = (row) => {


    const deleteitem = rows.filter((item) => item.id !== row.id);
 

    setRows(deleteitem);
  };
  const handleEdit = (row) => {
    setEditRow(row);
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">OutHouse Settelite Processing Master</Typography>
        </Box>
        <Divider className="divider" />

        <Formik
          enableReinitialize
          initialValues={editRow || initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, handleChange, setFieldValue, values }) => (
            <Form>
              <Grid container spacing={1} className="pl-1">
                {/* Booking Centre Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Booking Centre</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="bookingCentre"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                        >
                          <MenuItem value="" disabled>
                            Select Centre
                          </MenuItem>
                          {centres.map((centre) => (
                            <MenuItem key={centre.id} value={centre.name}>
                              {centre.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/*Processing Centre*/}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Processing Ce.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="processingCentre"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.processingCentre}
                          onChange={(e) => {
                            setFieldValue("processingCentre", e.target.value);
                            // Update labTest options
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select Department
                          </MenuItem>
                          {processingCentre.map((processingCentre) => (
                            <MenuItem
                              key={processingCentre.id}
                              value={processingCentre.name}
                            >
                              {processingCentre.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                {/* Department Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Department</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="department"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.department}
                          onChange={(e) => {
                            setFieldValue("department", e.target.value);
                            handleDepartmentChange(
                              e.target.value,
                              setFieldValue
                            ); // Update labTest options
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select Department
                          </MenuItem>
                          {departments.map((department) => (
                            <MenuItem
                              key={department.id}
                              value={department.name}
                            >
                              {department.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* labTest Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Lab Test</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="labTest"
                          multiple
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.labTest} // values.labTest should be an array
                          onChange={(e) =>
                            setFieldValue("labTest", e.target.value)
                          }
                          renderValue={(selected) =>
                            selected.length > 0
                              ? selected.join(", ")
                              : "Select LabTest"
                          }
                        >
                          <MenuItem value="" disabled>
                            Select LabTest
                          </MenuItem>
                          {investigationOptions.map((labTest, index) => (
                            <MenuItem key={index} value={labTest}>
                              <Checkbox
                                checked={
                                  values.labTest.indexOf(labTest) >
                                  -1
                                }
                              />
                              {labTest}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>


                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box className="h-6 flex justify-end">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="border px-3 mx-5 border-none rounded-lg project-thim text-white"
                    >
                      {editRow ? "Update" : "Save"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        <Divider className="divider" />
        <div className="h-[150px] w-full">
          <DataGridTable
            rows={rows}
            columns={OuthouseSetteliteProcessingMasterColumns(handleDelete, handleEdit)}
          />
        </div>
      </Box>
    </div>
  );
};

export default OuthouseSetteliteProcessingMaster;

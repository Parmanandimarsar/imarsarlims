// import React from 'react'

// const OuthouseSetteliteProcessingMaster = () => {
//   return (
//     <div>OuthouseSetteliteProcessingMaster</div>
//   )
// }

// export default OuthouseSetteliteProcessingMaster

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
} from "@mui/material";
import DataGridTable from "../../ConstantItems/DataGridTable";
import { OuthouseSetteliteProcessingMasterColumns } from "../../TableField/TablefieldsColumns";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  bookingCentre: Yup.string().required("Booking Centre is required"),
  department: Yup.string().required("Department is required"),
  investigation: Yup.string().required("Investigation is required"),
  lab: Yup.string().required("Lab is required"),
  rate: Yup.number()
    .required("Rate is required")
    .positive("Rate must be positive"),
});

const OuthouseSetteliteProcessingMaster = () => {
  const [rows, setRows] = useState([]);

  // Mock data for Booking Centres, Departments, Investigations, and Labs
  const [centres, setCentres] = useState([
    { id: "1", name: "Centre A" },
    { id: "2", name: "Centre B" },
    { id: "3", name: "Centre C" },
  ]);

  const [departments, setDepartments] = useState([
    { id: "1", name: "Pathology" },
    { id: "2", name: "Radiology" },
    { id: "3", name: "Microbiology" },
  ]);

  const [investigations, setInvestigations] = useState({
    Pathology: ["Blood Test", "Urine Test"],
    Radiology: ["X-Ray", "MRI"],
    Microbiology: ["Culture Test", "Sensitivity Test"],
  });

  const [labOptions, setLabOptions] = useState([
    { id: "1", name: "Lab A" },
    { id: "2", name: "Lab B" },
    { id: "3", name: "Lab C" },
  ]);

  const [investigationOptions, setInvestigationOptions] = useState([]);

  const [editRow, setEditRow] = useState(null);

  // Fetch investigations for the selected department
  const handleDepartmentChange = (departmentName, setFieldValue) => {
    const selectedInvestigations = investigations[departmentName] || [];
    setInvestigationOptions(selectedInvestigations);
    setFieldValue("investigation", ""); // Clear investigation selection when department changes
  };

  const initialValues = {
    bookingCentre: "",
    department: "",
    investigation: "",
    lab: "",
    rate: "",
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
    console.log("deleterow", row);

    const deleteitem = rows.filter((item) => item.id !== row.id);
    console.log("deleteitem", deleteitem);

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
                            ); // Update investigation options
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

                {/* Investigation Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Investigation</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="investigation"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                        >
                          <MenuItem value="" disabled>
                            Select Investigation
                          </MenuItem>
                          {investigationOptions.map((investigation, index) => (
                            <MenuItem key={index} value={investigation}>
                              {investigation}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Lab Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Lab</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="lab"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                        >
                          <MenuItem value="" disabled>
                            Select Lab
                          </MenuItem>
                          {labOptions.map((lab) => (
                            <MenuItem key={lab.id} value={lab.name}>
                              {lab.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Rate Text Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Rate</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="rate"
                          fullWidth
                          variant="outlined"
                          size="small"
                          type="number"
                          error={touched.rate && !!errors.rate}
                          helperText={touched.rate && errors.rate}
                        />
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
            columns={OuthouseSetteliteProcessingMasterColumns(
              handleDelete,
              handleEdit
            )}
          />
        </div>
      </Box>
    </div>
  );
};

export default OuthouseSetteliteProcessingMaster;

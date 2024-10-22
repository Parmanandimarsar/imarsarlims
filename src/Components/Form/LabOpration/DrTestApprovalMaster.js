import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import DataGridTable from "../../ConstantItems/DataGridTable";
import { DrTestApprovalMasterColumns } from "../../TableField/TablefieldsColumns";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  centre: Yup.string().required("Centre is required"),
  employee: Yup.string().required("Employee is required"),
  doctorName: Yup.string().required("Doctor Name is required"),
  signUpload: Yup.mixed().required("Signature is required"),
});

const DrTestApprovalMaster = () => {
    const [rows,setRows]=useState([])
  // Mock data for Centres, Employees, and Doctors
  const [centres, setCentres] = useState([
    { id: "1", name: "Centre A" },
    { id: "2", name: "Centre B" },
    { id: "3", name: "Centre C" },
  ]);

  const [employees, setEmployees] = useState([
    { id: "1", name: "John Doe", centreName: "Centre A" },
    { id: "2", name: "Jane Smith", centreName: "Centre A" },
    { id: "3", name: "Jack Brown", centreName: "Centre B" },
    { id: "4", name: "Jill White", centreName: "Centre C" },
  ]);

  const [doctors, setDoctors] = useState([
    { id: "1", name: "Dr. Adams" },
    { id: "2", name: "Dr. Baker" },
    { id: "3", name: "Dr. Carter" },
  ]);

  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [editRow, setEditRow] = useState(null);
 
  // Fetch employees for the selected centre
  const handleCentreChange = (centreName, setFieldValue) => {
    const selectedEmployees = employees.filter(emp => emp.centreName === centreName);
    setEmployeeOptions(selectedEmployees);
    setFieldValue("employee", ""); // Clear employee selection when centre changes
  };

  const initialValues = {
    centre: "",
    employee: "",
    doctorName: "",
    signUpload: null,
    activate:false,
    approve: true,
    notApprove: true,
    hold: true,
    unHold: true,
  };

  const handleFormSubmit = (values, { resetForm, setErrors }) => {
    console.log("Form Submitted with values:", values);
    setRows((pre)=>[...pre,{...values,id:new Date().getTime()}])
    // Add logic for form submission

    resetForm();
  };
  const handleToggleActive = (row) => {
    const updatedRows = rows.map((r) =>
      r.id === row.id ? { ...r, activate: !r.activate } : r
    );
    setRows(updatedRows);
  };
  const handleEdit=(row)=>{
    setEditRow(row)
  }


  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">Dr Test Approval Master</Typography>
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
                {/* Centre Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>Centre</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="centre"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.centre}
                          onChange={(e) => {
                            setFieldValue("centre", e.target.value);
                            handleCentreChange(e.target.value, setFieldValue); // Fetch employees for selected centre
                          }}
                        >
                          <MenuItem value="" disabled>Select Centre</MenuItem>
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

                {/* Employee Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>Employee</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="employee"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.employee}
                          onChange={(e) => setFieldValue("employee", e.target.value)}
                        >
                          <MenuItem value="" disabled>Select Employee</MenuItem>
                          {employeeOptions.map((employee) => (
                            <MenuItem key={employee.id} value={employee.name}>
                              {employee.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Doctor Name Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>Doctor</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="doctorName"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.doctorName}
                          onChange={(e) => setFieldValue("doctorName", e.target.value)}
                        >
                          <MenuItem value="" disabled>Select Doctor</MenuItem>
                          {doctors.map((doctor) => (
                            <MenuItem key={doctor.id} value={doctor.name}>
                              {doctor.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Sign Upload */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>Signature</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <input
                          id="signUpload"
                          name="signUpload"
                          type="file"
                          onChange={(e) => setFieldValue("signUpload", e.currentTarget.files[0])}
                        />
                        {errors.signUpload && touched.signUpload && (
                          <Typography variant="caption" color="error">
                            {errors.signUpload}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Approve / Not Approve Checkboxes */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        name="approve"
                        checked={values.approve}
                        onChange={handleChange}
                      />
                    }
                    label="Approve"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="notApprove"
                        size="small"
                        checked={values.notApprove}
                        onChange={handleChange}
                      />
                    }
                    label="Not Approve"
                  />
                </Grid>

                {/* Hold / UnHold Checkboxes */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="hold"
                        size="small"
                        checked={values.hold}
                        onChange={handleChange}
                      />
                    }
                    label="Hold"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="unHold"
                        size="small"
                        checked={values.unHold}
                        onChange={handleChange}
                      />
                    }
                    label="UnHold"
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box className=" h-6 flex justify-end ">
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
            columns={DrTestApprovalMasterColumns(handleToggleActive,handleEdit)}
          />
        </div>
      </Box>
    </div>
  );
};

export default DrTestApprovalMaster;

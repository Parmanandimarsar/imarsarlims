import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import * as Yup from "yup";

const ReferenceRange = () => {
  // Validation Schema
  const validationSchema = Yup.object().shape({
    centre: Yup.string().required("Centre is required"),
    machine: Yup.string().required("Machine is required"),
    ageType: Yup.string().required("Age Type is required"),
    gender: Yup.string().required("Gender is required"),
  });

  // Initial Values
  const initialValues = {
    centre: "",
    machine: "",
    ageType: "",
    gender: "",
  };

  // Form Submit Handler
  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Submitted with values:", values);
    resetForm();
  };

  return (
    <Box className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box
          className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg"
          style={{ backgroundColor: "#1976d2" }}
        >
          <Typography className="pl-1">Reference Range Form</Typography>
        </Box>
        <Divider className="divider" />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, handleChange, values }) => (
            <Form>
              <Grid container spacing={1} className="pl-1">
                {/* Centre Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
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
                          onChange={handleChange}
                          error={touched.centre && Boolean(errors.centre)}
                        >
                          <MenuItem value="" disabled>
                            Select Centre
                          </MenuItem>
                          <MenuItem value="Centre1">Centre 1</MenuItem>
                          <MenuItem value="Centre2">Centre 2</MenuItem>
                          <MenuItem value="Centre3">Centre 3</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Machine Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Machine</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="machine"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.machine}
                          onChange={handleChange}
                          error={touched.machine && Boolean(errors.machine)}
                        >
                          <MenuItem value="" disabled>
                            Select Machine
                          </MenuItem>
                          <MenuItem value="Machine1">Machine 1</MenuItem>
                          <MenuItem value="Machine2">Machine 2</MenuItem>
                          <MenuItem value="Machine3">Machine 3</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Age Type Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Age Type</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="ageType"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.ageType}
                          onChange={handleChange}
                          error={touched.ageType && Boolean(errors.ageType)}
                        >
                          <MenuItem value="" disabled>
                            Select Age Type
                          </MenuItem>
                          <MenuItem value="Child">Child</MenuItem>
                          <MenuItem value="Adult">Adult</MenuItem>
                          <MenuItem value="Senior">Senior</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Gender Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Gender</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="gender"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.gender}
                          onChange={handleChange}
                          error={touched.gender && Boolean(errors.gender)}
                        >
                          <MenuItem value="" disabled>
                            Select Gender
                          </MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
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
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        <Divider className="divider" />
      </Box>
    </Box>
  );
};

export default ReferenceRange;

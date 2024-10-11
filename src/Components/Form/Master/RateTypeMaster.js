import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
const names = ["Rate1", "Rate2", "Rate3", "Rate4"];
const RateTypeMaster = () => {
  const initialValues = {
    centreType: "",
    center: [],
  };

  // Validation schema
  const validationSchema = Yup.object().shape({});
  console.log("setFieldValue", initialValues);
  // Form submission handler
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form Submitted!", values);
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography> Employee Master</Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, touched, errors, setFieldValue, values }) => (
            console.log("errors", errors),
            (
              <Form className="p-1">
                <Grid container spacing={2}>
                  {/* Centre Type Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Rate Type</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centreType"
                              fullWidth
                              placeholder="Enter Rate Type"
                              size="small"
                              displayEmpty
                              error={touched.centreType && !!errors.centreType}
                            ></Field>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Center</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Select
                              placeholder="select"
                              multiple
                              value={values.center}
                              onChange={(event) => {
                                const {
                                  target: { value },
                                } = event;
                                setFieldValue(
                                  "center",
                                  typeof value === "string"
                                    ? value.split(",")
                                    : value
                                );
                              }}
                              renderValue={(selected) => selected.join(", ")}
                            >
                              {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                  <Checkbox
                                    checked={values.center.includes(name)}
                                    size="small"
                                    sx={{ fontSize: "12px" }}
                                  />
                                  <ListItemText primary={name} />
                                </MenuItem>
                              ))}
                            </Select>
                            <ErrorMessage
                              name="center"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <div className=" flex items-end  ml-auto justify-end  ">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      className=" left-0"
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>

                <Divider className="divider" />
                <div className="bg-gray-200 ">
                  <Typography className="titleheadingtext">
                    Access Type
                  </Typography>
                </div>
                <Divider className="divider" />
                {/* Access Type Checkbox Group */}

                <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    className="mt-4  left-0"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default RateTypeMaster;

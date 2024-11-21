import React, { useState } from "react";
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
  Modal,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import * as Yup from "yup";
const NewObservationModal = ({ open, handleClose }) => {
  const validationSchema = Yup.object().shape({
    observationName: Yup.string().required("Observation Name is required"),
    sortName: Yup.string().required("Sort Name is required"),
    suffixName: Yup.string().required("Suffix Name is required"),
    methodName: Yup.string().required("Method Name is required"),
    gender: Yup.string().required("Gender is required"),
    roundUp: Yup.string().required("Round Up is required"),
  });
  const initialValues = {
    observationName: "",
    sortName: "",
    suffixName: "",
    methodName: "",
    gender: "",
    roundUp: "",
  };
 
  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Submitted with values:", values);
    // Logic for form submission
    resetForm();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          borderRadius: "8px",
        }}
      >
        <div className=" absolute  right-2 top-2  ">
          <RxCross2 className="text-gray-500 text-2xl" onClick={handleClose} />
        </div>
        <div className="mb-[50px] pl-2">
          <Typography className="pl-1">Observation Master Form</Typography>
          <Divider className="divider" />

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ touched, errors, handleChange, values }) => (
              <Form>
                <Grid container spacing={1} className="pl-1">
                  {/* Observation Name */}
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Observation Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="observationName"
                            variant="outlined"
                            size="small"
                            fullWidth
                            error={
                              touched.observationName &&
                              Boolean(errors.observationName)
                            }
                            helperText={
                              touched.observationName && errors.observationName
                            }
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Sort Name */}
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Sort Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="sortName"
                            variant="outlined"
                            size="small"
                            fullWidth
                            error={touched.sortName && Boolean(errors.sortName)}
                            helperText={touched.sortName && errors.sortName}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Suffix Name */}
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Suffix Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="suffixName"
                            variant="outlined"
                            size="small"
                            fullWidth
                            error={
                              touched.suffixName && Boolean(errors.suffixName)
                            }
                            helperText={touched.suffixName && errors.suffixName}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Method Name */}
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Method Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="methodName"
                            variant="outlined"
                            size="small"
                            fullWidth
                            error={
                              touched.methodName && Boolean(errors.methodName)
                            }
                            helperText={touched.methodName && errors.methodName}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Gender Dropdown */}
                  <Grid item xs={12} sm={6} md={6} lg={6}>
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

                  {/* Round Up Dropdown */}
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Round Up</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="roundUp"
                            fullWidth
                            displayEmpty
                            variant="outlined"
                            size="small"
                            value={values.roundUp}
                            onChange={handleChange}
                          >
                            <MenuItem value="" disabled>
                              Select Round Up
                            </MenuItem>
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
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
        </div>
      </Box>
    </Modal>
  );
};

export default NewObservationModal;

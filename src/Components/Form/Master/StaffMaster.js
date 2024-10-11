import React from "react";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Box,
  FormLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNave from "../../../Pages/MainLayout/SideNav";

const StaffMaster = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    staffName: Yup.string().required("Staff Name is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    relation: Yup.string().required("Relation is required"),
    relaionname: Yup.string().required("Relation Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    department: Yup.string().required("Department is required"),
    staffDesignation: Yup.string().required("Staff Designation is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    district: Yup.string().required("District is required"),
    city: Yup.string().required("City is required"),
    stateCode: Yup.string().required("State Code is required"),
    pinCode: Yup.string()
      .matches(/^[0-9]{6}$/, "Invalid pin code")
      .required("Pin Code is required"),
    stdCode: Yup.string().required("STD Code is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    title: "",
    staffName: "",
    mobile: "",
    relation: "",
    relaionname: "",
    email: "",
    department: "",
    staffDesignation: "",
    address: "",
    state: "",
    district: "",
    city: "",
    location: "",
    stdCode: "",
    stateCode: "",
    pinCode: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    

      <div className="  mb-[50px] pl-2">
        <Box className="bg-white p-2 rounded-lg shadow-lg border" autoComplete="off">
          <Box className="flex justify-between items-center mb-1">
            <Typography
             
            >
              Staff Master
            </Typography>
            <Box className="flex gap-2 staff-master-form">
              <TextField placeholder="Search" />
              <Button variant="contained">Search</Button>
            </Box>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="staff-master-form">
                <Grid container spacing={2}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Title</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="title"
                            fullWidth
                            size="small"
                            error={touched.title && !!errors.title}
                            // helperText={touched.title && errors.title}
                          >
                            <MenuItem value="Mr">Mr</MenuItem>
                            <MenuItem value="Mrs">Mrs</MenuItem>
                            <MenuItem value="Ms">Ms</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Staff Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="staffName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.staffName && !!errors.staffName}
                            // helperText={touched.staffName && errors.staffName}
                          />
                          <ErrorMessage
                            name="staffName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Mobile</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mobile"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.mobile && !!errors.mobile}
                            // helperText={touched.mobile && errors.mobile}
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 2 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Relation</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="relation"
                            fullWidth
                            size="small"
                            error={touched.relation && !!errors.relation}
                            // helperText={touched.relation && errors.relation}
                          >
                            <MenuItem value="S/O">S/O</MenuItem>
                            <MenuItem value="D/O">D/O</MenuItem>
                            <MenuItem value="W/O">W/O</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="relation"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Relation Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="relaionname"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.relaionname && !!errors.relaionname}
                          />
                          <ErrorMessage
                            name="relaionname"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Email</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.email && !!errors.email}
                            // helperText={touched.email && errors.email}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 3 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Department</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="department"
                            fullWidth
                            size="small"
                            error={touched.department && !!errors.department}
                            // helperText={touched.department && errors.department}
                          >
                            <MenuItem value="Department1">Department1</MenuItem>
                            <MenuItem value="Department2">Department2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="department"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Designation</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="staffDesignation"
                            fullWidth
                            size="small"
                            error={
                              touched.staffDesignation &&
                              !!errors.staffDesignation
                            }
                          >
                            <MenuItem value="Designation1">
                              Designation1
                            </MenuItem>
                            <MenuItem value="Designation2">
                              Designation2
                            </MenuItem>
                          </Field>
                          <ErrorMessage
                            name="staffDesignation"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Address</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="address"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.address && !!errors.address}
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Row 4 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>State</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="state"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.state && !!errors.state}
                            // helperText={touched.state && errors.state}
                          />
                          <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>District</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="district"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.district && !!errors.district}
                            // helperText={touched.district && errors.district}
                          />
                          <ErrorMessage
                            name="district"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>City</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            fullWidth
                            name="city"
                            size="small"
                            error={touched.city && !!errors.city}
                            // helperText={touched.city && errors.city}
                          >
                            <MenuItem value="City1">City1</MenuItem>
                            <MenuItem value="City2">City2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="city"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 5*/}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>State Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="stateCode"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.stateCode && !!errors.stateCode}
                            // helperText={touched.stateCode && errors.stateCode}
                          />
                          <ErrorMessage
                            name="stateCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Pin Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="pinCode"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.pinCode && !!errors.pinCode}
                            // helperText={touched.pinCode && errors.pinCode}
                          />
                          <ErrorMessage
                            name="pinCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>STD Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="stdCode"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.stdCode && !!errors.stdCode}
                            // helperText={touched.stdCode && errors.stdCode}
                          />
                          <ErrorMessage
                            name="stdCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Row 5*/}

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Password</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.password && !!errors.password}
                            // helperText={touched.password && errors.password}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Confirm Password</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="confirmPassword"
                            type="password"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.confirmPassword &&
                              !!errors.confirmPassword
                            }
                            // helperText={
                            //   touched.confirmPassword && errors.confirmPassword
                            // }
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Additional Rows can be added similarly */}
                </Grid>

                {/* Buttons */}
                <Box className="mt-6 flex gap-4 justify-end ">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="small"
                  >
                    Save
                  </Button>

                  <Button
                    type="button"
                    color="error"
                    variant="outlined"
                    size="small"
                  >
                    Deactivate
                  </Button>
                  <Button
                    type="reset"
                    color="default"
                    variant="outlined"
                    size="small"
                  >
                    Clear
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    
  );
};

export default StaffMaster;

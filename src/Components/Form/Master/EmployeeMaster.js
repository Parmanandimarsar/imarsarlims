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
  Radio,
  RadioGroup,
} from "@mui/material";
const names = ["Rate1", "Rate2", "Rate3", "Rate4"];
const EmployeeMaster = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const initialValues = {
    department: [], // Multiple selection field
    centre: [], // Multiple selection field
    accessRole: [], // Multiple selection field
    // Add other fields accordingly
  };

  const validationSchema = Yup.object().shape({
    // centreType: Yup.string().required("Centre Type is required"),
  });
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
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1  rounded-t-lg">
          <Typography className="pl-1"> Employee Master</Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            isSubmitting,
            touched,
            errors,
            handleChange,
            setFieldValue,
            values,
          }) => (
            console.log(errors, "eroro"),
            (
              <Form>
                <Grid container spacing={1} className="pl-1">
                  {/* Emp Code Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Emp Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="empCode"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Employee Code"
                              variant="outlined"
                              size="small"
                            />
                            <ErrorMessage
                              name="empCode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Title Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container spacing={0.2} alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Title</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="title"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.title && !!errors.title}
                            >
                              <MenuItem value="" disabled>
                                Select Title
                              </MenuItem>
                              <MenuItem value="Mr">Mr</MenuItem>
                              <MenuItem value="Ms">Ms</MenuItem>
                              <MenuItem value="Mrs">Mrs</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="title"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* First Name Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>First Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="firstName"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter First Name"
                              variant="outlined"
                              size="small"
                              error={touched.firstName && !!errors.firstName}
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Last Name Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Last Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="lastName"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Last Name"
                              variant="outlined"
                              size="small"
                              error={touched.lastName && !!errors.lastName}
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Address Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Address</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="address"
                              fullWidth
                              placeholder="Enter Address"
                              variant="outlined"
                              size="small"
                              error={touched.address && !!errors.address}
                            />
                            <ErrorMessage
                              name="address"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Pincode Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Pincode</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="pincode"
                              fullWidth
                              placeholder="Enter Pincode"
                              variant="outlined"
                              size="small"
                              error={touched.pincode && !!errors.pincode}
                            />
                            <ErrorMessage
                              name="pincode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Email ID Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Email ID</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="email"
                              fullWidth
                              placeholder="Enter Email ID"
                              variant="outlined"
                              className="mandatoryfield"
                              size="small"
                              error={touched.email && !!errors.email}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Mobile Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Mobile Number</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="mobile"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Mobile Number"
                              variant="outlined"
                              size="small"
                              error={touched.mobile && !!errors.mobile}
                            />
                            <ErrorMessage
                              name="mobile"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Mobile2 Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Mobile 2</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="mobile2"
                              fullWidth
                              placeholder="Enter Mobile 2 Number"
                              variant="outlined"
                              size="small"
                              error={touched.mobile2 && !!errors.mobile2}
                            />
                            <ErrorMessage
                              name="mobile2"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Qualification Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Qualification</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="qualification"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.qualification && !!errors.qualification
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Qualification
                              </MenuItem>
                              <MenuItem value="Bachelors">Bachelors</MenuItem>
                              <MenuItem value="Masters">Masters</MenuItem>
                              <MenuItem value="PhD">PhD</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="qualification"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* From IP*/}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>From IP</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="fromIP"
                              fullWidth
                              placeholder="Enter From IP Range"
                              variant="outlined"
                              size="small"
                              error={touched.fromIP && !!errors.fromIP}
                            />
                            <ErrorMessage
                              name="fromIP"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* ID Type Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>To IP </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="toIP"
                              fullWidth
                              placeholder="Enter To IP Range"
                              variant="outlined"
                              size="small"
                              error={touched.toIP && !!errors.toIP}
                            />
                            <ErrorMessage
                              name="toIP"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* DOB Date */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>DOB</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              type="date"
                              name="dob"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Select DOB"
                              variant="outlined"
                              size="small"
                              error={touched.dob && !!errors.dob}
                            />
                            <ErrorMessage
                              name="dob"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Blood Group Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Blood Group</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="bloodGroup"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.bloodGroup && !!errors.bloodGroup}
                            >
                              <MenuItem value="" disabled>
                                Select Blood Group
                              </MenuItem>
                              <MenuItem value="A+">A+</MenuItem>
                              <MenuItem value="A-">A-</MenuItem>
                              <MenuItem value="B+">B+</MenuItem>
                              <MenuItem value="B-">B-</MenuItem>
                              <MenuItem value="O+">O+</MenuItem>
                              <MenuItem value="O-">O-</MenuItem>
                              <MenuItem value="AB+">AB+</MenuItem>
                              <MenuItem value="AB-">AB-</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="bloodGroup"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Username Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Username</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="username"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Username"
                              variant="outlined"
                              size="small"
                              error={touched.username && !!errors.username}
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Password Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Password</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              type="password"
                              name="password"
                              className="mandatoryfield"
                              fullWidth
                              placeholder="Enter Password"
                              variant="outlined"
                              size="small"
                              error={touched.password && !!errors.password}
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Confirm Password Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Confirm Pass.</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              type="password"
                              name="confirmPassword"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Confirm Password"
                              variant="outlined"
                              size="small"
                              error={
                                touched.confirmPassword &&
                                !!errors.confirmPassword
                              }
                            />
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Department Dropdown (Checkbox Select) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Department</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="department"
                              multiple
                              displayEmpty
                              className="mandatoryfield"
                              variant="outlined"
                              size="small"
                              renderValue={(selected) =>
                                selected.join(", ") || "Select Department"
                              }
                            >
                              {["HR", "Finance", "Operations"].map((dept) => (
                                <MenuItem key={dept} value={dept}>
                                  <Checkbox
                                    checked={values.department.includes(dept)}
                                  />
                                  {dept}
                                </MenuItem>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="department"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Centre Dropdown (Checkbox Select) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Centre</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="centre"
                              multiple
                              className="mandatoryfield"
                              displayEmpty
                              variant="outlined"
                              renderValue={(selected) =>
                                selected.join(", ") || "Select Centre"
                              }
                            >
                              {["Centre 1", "Centre 2", "Centre 3"].map(
                                (centre) => (
                                  <MenuItem key={centre} value={centre}>
                                    <Checkbox
                                      checked={values.centre.includes(centre)}
                                    />
                                    {centre}
                                  </MenuItem>
                                )
                              )}
                            </Field>
                            <ErrorMessage
                              name="centre"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Access Role Dropdown (Checkbox Select) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Access Role</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="accessRole"
                              multiple
                              displayEmpty
                              variant="outlined"
                              className="mandatoryfield"
                              size="small"
                              renderValue={(selected) =>
                                selected.join(", ") || "Select Access Role"
                              }
                            >
                              {["Admin", "Manager", "User"].map((role) => (
                                <MenuItem key={role} value={role}>
                                  <Checkbox
                                    checked={values.accessRole.includes(role)}
                                  />
                                  {role}
                                </MenuItem>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="accessRole"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Designation Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Designation</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="designation"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.designation && !!errors.designation
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Designation
                              </MenuItem>
                              <MenuItem value="Manager">Manager</MenuItem>
                              <MenuItem value="Supervisor">Supervisor</MenuItem>
                              <MenuItem value="Staff">Staff</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="designation"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Default Centre Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Default Centre</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="defaultCentre"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.defaultCentre && !!errors.defaultCentre
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Default Centre
                              </MenuItem>
                              <MenuItem value="Centre 1">Centre 1</MenuItem>
                              <MenuItem value="Centre 2">Centre 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="defaultCentre"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Default Role Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Default Role</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="defaultRole"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.defaultRole && !!errors.defaultRole
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Default Role
                              </MenuItem>
                              <MenuItem value="Admin">Admin</MenuItem>
                              <MenuItem value="Manager">Manager</MenuItem>
                              <MenuItem value="User">User</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="defaultRole"
                              component="div"
                              className="text-red-600 text-xs"
                            />
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
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Profil-pic</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <input
                            type="file"
                            name="profilpic"
                            style={{
                              width: "100%",
                              boxSizing: "border-box",
                              overflow: "hidden",
                            }}
                            className="mandatoryfield overflow-hidden"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              setFieldValue("profilpic", file);
                              setImagePreview(URL.createObjectURL(file));
                            }}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Continue with other fields for Department, Centre, Access Role, Zone, State, City, Area, Designation, Default Centre, Default Role as needed */}
                </Grid>
                <Divider className="divider" />
                <Grid container spacing={1}>
                  <div className="w-full flex mt-2  pl-6">
                    <Grid item xs={12} spacing={2}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Field
                                  type="checkbox"
                                  name="active"
                                  className="m-1"
                                />
                              }
                              label="Active"
                            />
                            <FormControlLabel
                              control={
                                <Field
                                  type="checkbox"
                                  name="salesteammember"
                                  className="m-1"
                                />
                              }
                              label="Sales Team Member"
                            />
                            <FormControlLabel
                              control={
                                <Field
                                  type="checkbox"
                                  name="allowduereport"
                                  className="m-1"
                                />
                              }
                              label="AllowDueReport"
                            />
                            <FormControlLabel
                              control={
                                <Field
                                  type="checkbox"
                                  name="hiderate"
                                  className="m-1"
                                />
                              }
                              label="Hide Rate"
                            />
                            <FormControlLabel
                              control={
                                <Field
                                  type="checkbox"
                                  name="dis.approved"
                                  className="m-1"
                                />
                              }
                              label="Dis.Approved"
                            />
                            <FormControlLabel
                              control={
                                <Field
                                  type="checkbox"
                                  name="loginotp"
                                  className="m-1 p-2"
                                />
                              }
                              label="LoginOTP"
                            />
                            <FormControlLabel
                              control={
                                <Field
                                  type="checkbox"
                                  name="authenticationdevice"
                                  className="m-1 p-2"
                                />
                              }
                              label="Authentication Device"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </div>
                </Grid>
                <Divider className="divider" />
                <Grid spacing={1}>
                  <div className="flex pl-2 re">
                    <div className="w-[70%]">
                      <Grid container alignItems="center">
                        <Grid item xs={12}>
                          <FormControl>
                            <Typography className="titleheadingtext">
                              Employee Type
                            </Typography>
                            <RadioGroup
                              aria-label="employee"
                              row
                              onChange={handleChange}
                              name="employee"
                              value={values.employee}
                              className="ml-2 top-0"
                            >
                              <FormControlLabel
                                value="none"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="None"
                              />
                              <FormControlLabel
                                value="phlebotomist"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="Phlebotomist"
                              />
                              <FormControlLabel
                                value="radiologist"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="Radiologist"
                              />
                              <FormControlLabel
                                value="consultantdoctor"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="Consultant Doctor"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="border w-[100px] h-[100px] rounded-full ">
                      <img
                        src={
                          imagePreview
                            ? imagePreview
                            : "http://103.230.84.132:9090/images/defaultimg.png"
                        }
                        alt="Profile Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
                <div className="mt-6  flex items-end gap-4 ml-0 justify-end   p-2 ">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    className="mt-4  left-0"
                  >
                    Save
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

export default EmployeeMaster;

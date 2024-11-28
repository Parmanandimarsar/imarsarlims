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
  Radio,
  RadioGroup,
} from "@mui/material";
import { postData } from "../../../Api/apiServices";
const names = ["Rate1", "Rate2", "Rate3", "Rate4"];
const EmployeeMaster = () => {
  const API_ENDPOINT = "empMaster/SaveEmployee";
  const [imagePreview, setImagePreview] = useState(null);
  const initialValues = {
    isActive: "",
    address: "",
    allowDueReport: "",
    authenticationdevice: "",
    bloodGroup: "",
    centreId: "",
    defaultrole: "",
    designationId: "",
    disapproved: "",
    dob: "",
    email: "",
    empCode: "",
    employee: "",
    fName: "",
    fromIP: "",
    lName: "",
    isemailotp: "",
    mobileNo: "",
    landline: "",
    password: "",
    pinCode: "",
    fileName: "",
    qualification: "",
    isSalesTeamMember: "",
    title: "",
    toIP: "",
    zone:"",
    state:"",
    city:"",
    area:"",
    userName: "",
    deptAccess: [], // Multiple selection field
    centre: [], // Multiple selection field
    accessRole: [], // Multiple selection field
    // Add other fields accordingly
  };

  const validationSchema = Yup.object().shape({
    // centreId: Yup.string().required("Centre Type is required"),
  });
  console.log("setFieldValue", initialValues);
  // Form submission handler
  const onSubmit = async(values, { setSubmitting }) => {
    console.log("Form Submitted!", values);


    try {
      const response = await postData(API_ENDPOINT, values); // Call the reusable service
      // setMessage("Employee saved successfully!");
      // setEmployee({ name: "", email: "", department: "" }); 
      console.log("response",response);
      
    } catch (err) {
      // setError("Failed to save employee. Please try again."); // Error message
      console.error(err);
    }
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
                            name="fName"
                            fullWidth
                            className="mandatoryfield"
                            placeholder="Enter First Name"
                            variant="outlined"
                            size="small"
                            error={touched.fName && !!errors.fName}
                          />
                          <ErrorMessage
                            name="fName"
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
                            name="lName"
                            fullWidth
                            className="mandatoryfield"
                            placeholder="Enter Last Name"
                            variant="outlined"
                            size="small"
                            error={touched.lName && !!errors.lName}
                          />
                          <ErrorMessage
                            name="lName"
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
                            type="number"
                            name="pinCode"
                            fullWidth
                            placeholder="Enter Pincode"
                            variant="outlined"
                            size="small"
                            error={touched.pinCode && !!errors.pinCode}
                          />
                          <ErrorMessage
                            name="pinCode"
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
                            name="mobileNo"
                            fullWidth
                            className="mandatoryfield"
                            placeholder="Enter Mobile Number"
                            variant="outlined"
                            size="small"
                            error={touched.mobileNo && !!errors.mobileNo}
                          />
                          <ErrorMessage
                            name="mobileNo"
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
                            name="landline"
                            fullWidth
                            placeholder="Enter Mobile 2 Number"
                            variant="outlined"
                            size="small"
                            error={touched.landline && !!errors.landline}
                          />
                          <ErrorMessage
                            name="landline"
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
                            name="userName"
                            fullWidth
                            className="mandatoryfield"
                            placeholder="Enter Username"
                            variant="outlined"
                            size="small"
                            error={touched.userName && !!errors.userName}
                          />
                          <ErrorMessage
                            name="userName"
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
                        <FormLabel>Department Acc.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <Field
                            as={Select}
                            name="deptAccess"
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
                                  checked={values.deptAccess.includes(dept)}
                                />
                                {dept}
                              </MenuItem>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="deptAccess"
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
                
                  {/* Zone Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Zone </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="zone"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.zone && !!errors.zone}
                            >
                              <MenuItem value="" disabled>
                                Select Zone
                              </MenuItem>
                              <MenuItem value="1">Zone 1</MenuItem>
                              <MenuItem value="2">Zone 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="zone"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* State Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>State </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="state"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.state && !!errors.state}
                            >
                              <MenuItem value="" disabled>
                                Select State
                              </MenuItem>
                              <MenuItem value="1">State 1</MenuItem>
                              <MenuItem value="2">State 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="state"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* City Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>City </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="city"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.city && !!errors.city}
                            >
                              <MenuItem value="" disabled>
                                Select City
                              </MenuItem>
                              <MenuItem value="1">City 1</MenuItem>
                              <MenuItem value="2">City 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="city"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Area Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Area </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="area"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.area && !!errors.area}
                            >
                              <MenuItem value="" disabled>
                                Select Area
                              </MenuItem>
                              <MenuItem value="1">Area 1</MenuItem>
                              <MenuItem value="2">Area 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="area"
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
                            name="designationId"
                            fullWidth
                            displayEmpty
                            variant="outlined"
                            size="small"
                            error={
                              touched.designationId && !!errors.designationId
                            }
                          >
                            <MenuItem value="" disabled>
                              Select Designation
                            </MenuItem>
                            <MenuItem value="1">Manager</MenuItem>
                            <MenuItem value="2">Supervisor</MenuItem>
                            <MenuItem value="3">Staff</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="designationId"
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
                            name="centreId"
                            fullWidth
                            displayEmpty
                            variant="outlined"
                            size="small"
                            error={
                              touched.centreId && !!errors.centreId
                            }
                          >
                            <MenuItem value="" disabled>
                              Select Default Centre
                            </MenuItem>
                            <MenuItem value="1">Centre 1</MenuItem>
                            <MenuItem value="2">Centre 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="centreId"
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
                            name="defaultrole"
                            fullWidth
                            displayEmpty
                            variant="outlined"
                            size="small"
                            error={touched.defaultrole && !!errors.defaultrole}
                          >
                            <MenuItem value="" disabled>
                              Select Default Role
                            </MenuItem>
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="Manager">Manager</MenuItem>
                            <MenuItem value="User">User</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="defaultrole"
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
                          name="fileName"
                          style={{
                            width: "100%",
                            boxSizing: "border-box",
                            overflow: "hidden",
                          }}
                          className="mandatoryfield overflow-hidden"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("fileName", file);
                            setImagePreview(URL.createObjectURL(file));
                          }}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
               
              </Grid>
              <Divider className="divider" />
              <Grid container spacing={1}>
                <div className="w-full flex mt-2  pl-6">
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isActive"
                                className="m-1"
                              />
                            }
                            label="Active"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isSalesTeamMember"
                                className="m-1"
                              />
                            }
                            label="Sales Team Member"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="allowDueReport"
                                className="m-1"
                              />
                            }
                            label="allowDueReport"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="rate"
                                className="m-1"
                              />
                            }
                            label="Hide Rate"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="disapproved"
                                className="m-1"
                              />
                            }
                            label="Dis.Approved"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isemailotp"
                                className="m-1 p-2"
                              />
                            }
                            label="LoginEmailOTP"
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
              <Grid>
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
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default EmployeeMaster;

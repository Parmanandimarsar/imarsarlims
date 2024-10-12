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
const ClientMaster = () => {
  const [centreType, setCentreType] = useState("");
  const initialValues = {
    centreType: "",
    parentCentre: "",
    processingLab: "",
    // centerCode: "",
    // centerName: "",
    // centreMobileNo: "",
    // centreLandlineNo: "",
    // centreAddress: "",
    // centreAddress1: "",
    // centrePincode: "",
    state: "",
    // centreEmailID: "",

    // minCashBooking: "",
    paymentMode: "",
    clientmrp: "",
    salesExecutive: "",
    documentType: "",
    rateType: [],
    empcentreaccess: [],
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    // centreType: Yup.string().required("Centre Type is required"),
    // parentCentre: Yup.string().required("Parent Centre is required"),
    // processingLab: Yup.string().required("Processing Lab is required"),
    // centerCode: Yup.string().required("Center Code is required"),
    // centerName: Yup.string().required("Center Name is required"),
    // centreMobileNo: Yup.number()
    //   .typeError("Must be a number")
    //   .required("Centre Mobile No. is required"),
    // centreLandlineNo: Yup.number()
    //   .typeError("Must be a number")
    //   .required("Centre Landline No. is required"),
    // centreAddress: Yup.string().required("Centre Address is required"),
    // centreAddress1: Yup.string().required("Centre Address 1 is required"),
    // centrePincode: Yup.number()
    //   .typeError("Must be a number")
    //   .required("Centre Pincode is required"),
    // state: Yup.string().required("State is required"),
    // centreEmailID: Yup.string()
    //   .email("Invalid email format")
    //   .required("Centre Email ID is required"),
    // creditPeriod: Yup.date().required("Credit Period is required"),
    // minCashBooking: Yup.number()
    //   .typeError("Must be a number")
    //   .required("Min Cash Booking in % is required"),
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
    <div className="mb-[50px] pl-2 " >
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography> Client Master</Typography>
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Centre Type</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="centreType"
                              fullWidth
                              className="mandatoryfield"
                              size="small"
                              displayEmpty
                              // error={touched.centreType && !!errors.centreType}
                              onChange={(event) => {
                                const value = event.target.value;
                                setFieldValue("centreType", value);
                                setCentreType(value); // Update the state
                              }}
                              // className="mandetryfield"
                            >
                              {/* Placeholder */}
                              <MenuItem value="" disabled>
                                Select
                              </MenuItem>

                              <MenuItem value="Franchisee">Franchisee</MenuItem>
                              <MenuItem value="sub Franchisee">
                                Sub Franchisee
                              </MenuItem>
                            </Field>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Parent Centre Dropdown */}
                  {/* Conditionally Render Parent Centre Dropdown */}
                  {centreType === "sub Franchisee" ? (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4} className="formlableborder">
                            <FormLabel>Parent Centre</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <FormControl fullWidth>
                              <Field
                                as={Select}
                                name="parentCentre"
                                fullWidth
                                displayEmpty
                                variant="outlined"
                                size="small"
                                error={
                                  touched.parentCentre && !!errors.parentCentre
                                }
                                className="mandetryfield"
                              >
                                <MenuItem value="" disabled>
                                  Select
                                </MenuItem>
                                <MenuItem value="parent1">
                                  Parent Centre 1
                                </MenuItem>
                                <MenuItem value="parent2">
                                  Parent Centre 2
                                </MenuItem>
                              </Field>
                              <ErrorMessage
                                name="parentCentre"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  ) : null}

                  {/* Processing Lab Dropdown */}
                  {/* Conditionally Render Processing Lab Dropdown */}
                  {centreType === "Franchisee" ||
                  centreType === "sub Franchisee" ? (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4} className="formlableborder">
                            <FormLabel>Processing Lab</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <FormControl fullWidth>
                              <Field
                                as={Select}
                                name="processingLab"
                                fullWidth
                                displayEmpty
                                variant="outlined"
                                size="small"
                                error={
                                  touched.processingLab &&
                                  !!errors.processingLab
                                }
                              >
                                <MenuItem value="" disabled>
                                  Select
                                </MenuItem>
                                <MenuItem value="lab1">Lab 1</MenuItem>
                                <MenuItem value="lab2">Lab 2</MenuItem>
                              </Field>
                              <ErrorMessage
                                name="processingLab"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  ) : null}

                  {/* Center Code */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Center Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              className="mandatoryfield"
                              as={TextField}
                              name="centerCode"
                              fullWidth
                              placeholder="Enter 6 Digit Center Code"
                              variant="outlined"
                              size="small"
                              error={touched.centerCode && !!errors.centerCode}
                            />
                            <ErrorMessage
                              name="centerCode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Center Name */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Center Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centerName"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Center Name"
                              variant="outlined"
                              size="small"
                              error={touched.centerName && !!errors.centerName}
                            />
                            <ErrorMessage
                              name="centerName"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Centre Mobile No. */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Centre Mobile No.</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centreMobileNo"
                              className="mandatoryfield"
                              type="number"
                              placeholder="Enter Centre Mobile No."
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.centreMobileNo &&
                                !!errors.centreMobileNo
                              }
                            />
                            <ErrorMessage
                              name="centreMobileNo"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Centre Landline No. */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Centre LandL.No.</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centreLandlineNo"
                              type="number"
                              placeholder="Enter Centre Landline No."
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.centreLandlineNo &&
                                !!errors.centreLandlineNo
                              }
                            />
                            <ErrorMessage
                              name="centreLandlineNo"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Centre Address */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Centre Address</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centreAddress"
                              className="mandatoryfield"
                              placeholder="Enter Centre Address"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.centreAddress && !!errors.centreAddress
                              }
                            />
                            <ErrorMessage
                              name="centreAddress"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Centre Address 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Centre Address 1</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centreAddress1"
                              fullWidth
                              placeholder="Enter Centre Address1"
                              variant="outlined"
                              size="small"
                              error={
                                touched.centreAddress1 &&
                                !!errors.centreAddress1
                              }
                            />
                            <ErrorMessage
                              name="centreAddress1"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Centre Pincode */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Centre Pincode</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centrePincode"
                              type="number"
                              placeholder="Enter Centre Pincode"
                              className="mandatoryfield"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.centrePincode && !!errors.centrePincode
                              }
                            />
                            <ErrorMessage
                              name="centrePincode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* State Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>State</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="state"
                              fullWidth
                              className="mandatoryfield"
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.state && !!errors.state}
                            >
                              <MenuItem value="" disabled>
                                Select
                              </MenuItem>
                              <MenuItem value="state1">State 1</MenuItem>
                              <MenuItem value="state2">State 2</MenuItem>
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
                  {/* Centre Email ID */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Centre Email ID</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="centreEmailID"
                              type="email"
                              placeholder="Enter Centre Email ID"
                              fullWidth
                              className="mandatoryfield"
                              variant="outlined"
                              size="small"
                              error={
                                touched.centreEmailID && !!errors.centreEmailID
                              }
                            />
                            <ErrorMessage
                              name="centreEmailID"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Credit Period */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Credit Period</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="creditPeriod"
                              type="date"
                              fullWidth
                              variant="outlined"
                              size="small"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              error={
                                touched.creditPeriod && !!errors.creditPeriod
                              }
                            />
                            <ErrorMessage
                              name="creditPeriod"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Min Cash Booking in % */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Min Cash Book. %</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="minCashBooking"
                              type="number"
                              className="mandatoryfield"
                              placeholder="Enter Minimum booking Amount on Registration"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.minCashBooking &&
                                !!errors.minCashBooking
                              }
                            />
                            <ErrorMessage
                              name="minCashBooking"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider className="divider" />
                <div className="bg-gray-200 ">
                  <Typography className="titleheadingtext">
                    Other Details
                  </Typography>
                </div>
                <Divider className="divider" />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Payment Mode</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              className="mandatoryfield"
                              name="paymentMode"
                              fullWidth
                              variant="outlined"
                              displayEmpty
                              size="small"
                              error={
                                touched.paymentMode && !!errors.paymentMode
                              }
                            >
                              <MenuItem value="" disabled>
                                -Select-
                              </MenuItem>
                              <MenuItem value="credit">credit</MenuItem>
                              <MenuItem value="credit">cash</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="category"
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Client MRP</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="clientmrp"
                              fullWidth
                              variant="outlined"
                              displayEmpty
                              size="small"
                              error={
                                touched.paymentMode && !!errors.paymentMode
                              }
                            >
                              <MenuItem value="" disabled>
                                Select MRP
                              </MenuItem>
                              <MenuItem value="clientmrp">clientmrp</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="category"
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Rate Type</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Select
                              placeholder="select"
                              multiple
                              className="mandatoryfield"
                              value={values.rateType}
                              onChange={(event) => {
                                const {
                                  target: { value },
                                } = event;
                                setFieldValue(
                                  "rateType",
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
                                    checked={values.rateType.includes(name)}
                                    size="small"
                                    sx={{ fontSize: "12px" }}
                                  />
                                  <ListItemText primary={name} />
                                </MenuItem>
                              ))}
                            </Select>
                            <ErrorMessage
                              name="rateType"
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Adhar Card No.</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="adharCardNo"
                              fullWidth
                              type="number"
                              className="mandatoryfield"
                              placeholder="Enter Adhar Number"
                              variant="outlined"
                              size="small"
                              error={
                                touched.adharCardNo && !!errors.adharCardNo
                              }
                            />
                            <ErrorMessage
                              name="adharCardNo"
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Report Email</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="reportEmail"
                              fullWidth
                              placeholder="Enter Report Email ID"
                              variant="outlined"
                              size="small"
                              error={
                                touched.reportEmail && !!errors.reportEmail
                              }
                            />
                            <ErrorMessage
                              name="reportEmail"
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Credit Limit</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="creditLimit"
                              fullWidth
                              placeholder="Enter Credit Limit"
                              variant="outlined"
                              size="small"
                              error={
                                touched.creditLimit && !!errors.creditLimit
                              }
                            />
                            <ErrorMessage
                              name="creditLimit"
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Owner Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="ownerName"
                              fullWidth
                              placeholder="Enter Owner Name"
                              variant="outlined"
                              className="mandatoryfield"
                              size="small"
                              error={touched.ownerName && !!errors.ownerName}
                            />
                            <ErrorMessage
                              name="ownerName"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* PAN Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>PAN Number</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="panNumber"
                            className="mandatoryfield"
                            fullWidth
                            placeholder="Enter PAN Number"
                            variant="outlined"
                            size="small"
                            error={touched.panNumber && !!errors.panNumber}
                          />
                          <ErrorMessage
                            name="panNumber"
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
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Emp Centre Access</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Select
                              multiple
                              className="mandatoryfield"
                              value={values.empcentreaccess}
                              onChange={(event) => {
                                const value = event.target.value;
                                setFieldValue(
                                  "empcentreaccess",
                                  typeof value === "string"
                                    ? value.split(",")
                                    : value
                                );
                              }}
                              renderValue={(selected) => selected.join(", ")}
                              displayEmpty
                              size="small"
                              variant="outlined"
                            >
                              <MenuItem disabled value="">
                                <em>Select Access Centres</em>
                              </MenuItem>
                              {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                  <Checkbox
                                    checked={values.empcentreaccess.includes(
                                      name
                                    )}
                                    size="small"
                                  />
                                  <ListItemText primary={name} />
                                </MenuItem>
                              ))}
                            </Select>
                            <ErrorMessage
                              name="empcentreaccess"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Sales Executives Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Sales Executives</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="salesExecutive"
                            fullWidth
                            className="mandatoryfield"
                            displayEmpty
                            variant="outlined"
                            size="small"
                            error={
                              touched.salesExecutive && !!errors.salesExecutive
                            }
                          >
                            <MenuItem value="" disabled>
                              -Select-
                            </MenuItem>
                            <MenuItem value="executive1">Executive 1</MenuItem>
                            <MenuItem value="executive2">Executive 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="salesExecutive"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                <Divider className="divider" />
                <div className="bg-gray-200 ">
                  <Typography className="titleheadingtext">
                    Upload Documents
                  </Typography>
                </div>
                <Divider className="divider" />

                <Grid container spacing={2}>
                  {/* Document Type Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Document Type</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="documentType"
                            fullWidth
                            displayEmpty
                            variant="outlined"
                            size="small"
                            error={
                              touched.documentType && !!errors.documentType
                            }
                          >
                            <MenuItem value="" disabled>
                              -Select-
                            </MenuItem>
                            <MenuItem value="doc1">PAN Card</MenuItem>
                            <MenuItem value="doc2"> Adhar Card</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="documentType"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Choose File */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Choose File</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <input
                            type="file"
                            name="chooseFile"
                            className="mandatoryfield"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              setFieldValue("chooseFile", file);
                            }}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Cheque No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Cheque No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="chequeNo"
                            fullWidth
                            placeholder="Enter Cheque No"
                            variant="outlined"
                            size="small"
                            error={touched.chequeNo && !!errors.chequeNo}
                          />
                          <ErrorMessage
                            name="chequeNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Bank Name */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Bank Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="bankName"
                            fullWidth
                            placeholder="Enter Bank Name"
                            variant="outlined"
                            size="small"
                            error={touched.bankName && !!errors.bankName}
                          />
                          <ErrorMessage
                            name="bankName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Cheque Amount */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Cheque Amount</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="chequeAmount"
                            type="number"
                            fullWidth
                            placeholder="Enter Cheque Amount"
                            variant="outlined"
                            size="small"
                            error={
                              touched.chequeAmount && !!errors.chequeAmount
                            }
                          />
                          <ErrorMessage
                            name="chequeAmount"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider className="divider" />
                <div className="bg-gray-200 ">
                  <Typography className="titleheadingtext">
                    Access Type
                  </Typography>
                </div>
                <Divider className="divider" />
                {/* Access Type Checkbox Group */}
                <Grid container>
                  <Grid item xs={12} sx={{ml:"7px"}}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isPrePrintedBarcode"
                                className="m-1"
                              />
                            }
                            label="PrePrinted Barcode"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isActive"
                                className="m-2"
                              />
                            }
                            label="Active"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isReportLock"
                                className="m-2"
                              />
                            }
                            label="Report Lock"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isBookingLock"
                                className="m-2 "
                              />
                            }
                            label="Booking Lock"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isSmsAllow"
                                className="m-2"
                              />
                            }
                            label="Sms Allow"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isEmailAllow"
                                className="m-2"
                              />
                            }
                            label="Email Allow"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isShowBackcover"
                                className="m-2"
                              />
                            }
                            label="Show Backcover"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="isShowISO"
                                className="m-2"
                              />
                            }
                            label="Show ISO"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="cetrifuse"
                                className="m-2"
                              />
                            }
                            label="cetrifuse"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="Receptionaresa"
                                className="m-2"
                              />
                            }
                            label="Reception aresa"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="waitingarea"
                                className="m-2"
                              />
                            }
                            label="Waiting area"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="watercooler"
                                className="m-2"
                              />
                            }
                            label="Watercooler"
                          />
                          <FormControlLabel
                            control={
                              <Field
                                type="checkbox"
                                name="ac"
                                className="m-2"
                              />
                            }
                            label="AC"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

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

export default ClientMaster;

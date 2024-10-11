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

const CompanyMaster = () => {
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("company Name is required"),
    designation: Yup.string().required(" Designation is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    district: Yup.string().required("District is required"),
    state: Yup.string().required("State is required"),
    pinCode: Yup.string()
      .matches(/^[0-9]{6}$/, "Invalid pin code")
      .required("Pin Code is required"),
    country: Yup.string().required("country is required"),
    phone: Yup.string().required("Phone Number is require"),

    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    stdCode: Yup.string().required("STD Code is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gstNo: Yup.string().required("GST No is required"),
    tinNo: Yup.string().required("Tin Number is required"),
    dealerCode: Yup.string().required("dealer Code is required"),
    jurisDiction: Yup.string().required("jurisDiction is required"),
  });

  const initialValues = {
    companyName: "",
    designation: "",
    address: "",
    city: "",
    district: "",
    state: "",
    pinCode: "",
    country: "",
    phone: "",
    mobile: "",
    stdCode: "",
    email: "",
    gstNo: "",
    tinNo: "",
    dealerCode: "",
    jurisDiction: "",
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
        <Box className="bg-white p-2 rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1">
            <Typography
              variant="h5"
              component="h1"
              className="text-center mb-6"
            >
              Company Master
            </Typography>
            <Box className="flex gap-2"></Box>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="company-master-form">
                <Grid container spacing={2}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Company Name<span style={{ color: 'red' }}> *</span></FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="companyName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.companyName && !!errors.companyName}
                          />
                          <ErrorMessage
                            name="companyName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Designation</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="designation"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.designation && !!errors.designation}
                          />
                          <ErrorMessage
                            name="designation"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
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
                            // helperText={touched.address && errors.address}
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
                  {/* Row 2 */}
                  <Grid item xs={12} sm={4}>
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
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>District</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="district"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.district && !!errors.district}
                          >
                            <MenuItem value="City1">district1</MenuItem>
                            <MenuItem value="City2">district2</MenuItem>
                          </Field>

                          <ErrorMessage
                            name="district"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>State</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="state"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.state && !!errors.state}
                            // helperText={touched.state && errors.state}
                          >
                            <MenuItem value="state1">district1</MenuItem>
                            <MenuItem value="state2">district2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 3 */}

                  <Grid item xs={12} sm={4}>
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

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Country</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="country"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.country && !!errors.country}
                            // helperText={touched.pinCode && errors.pinCode}
                          />
                          <ErrorMessage
                            name="country"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Phone No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="phone"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.phone && !!errors.phone}
                            // helperText={touched.mobile && errors.mobile}
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 4 */}

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Mobile No</FormLabel>
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

                  <Grid item xs={12} sm={4}>
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

                  <Grid item xs={12} sm={4}>
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

                  {/* Row 5*/}

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>GST No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="gstNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.gstNo && !!errors.gstNo}
                          />
                          <ErrorMessage
                            name="gstNo"
                            component="div"
                            className="text-red-600  text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Tin No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="tinNo"
                            fullWidth
                            size="small"
                            error={touched.tinNo && !!errors.tinNo}
                          />
                          <ErrorMessage
                            name="tinNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Dealer Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="dealerCode"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.dealerCode && !!errors.dealerCode}
                          />
                          <ErrorMessage
                            name="dealerCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Row 6*/}
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Juris Diction</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="jurisDiction"
                            fullWidth
                            size="small"
                            error={
                              touched.jurisDiction && !!errors.jurisDiction
                            }
                            // helperText={touched.department && errors.department}
                          >
                            <MenuItem value="jurisDiction">
                              Department1
                            </MenuItem>
                            <MenuItem value="Department2">Department2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="jurisDiction"
                            component="div"
                            className="text-red-600 text-xs "
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Buttons */}
                <Box className="mt-6 flex gap-4 justify-end">
                  <Button type="submit" color="primary" variant="contained">
                    Save
                  </Button>

                  <Button type="button" color="error" variant="outlined">
                    Deactivate
                  </Button>
                  <Button type="reset" color="default" variant="outlined">
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

export default CompanyMaster;

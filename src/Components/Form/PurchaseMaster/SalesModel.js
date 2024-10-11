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
  Grid,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNave from "../../../Pages/MainLayout/SideNav";

const SalesModel = () => {
  const validationSchema = Yup.object().shape({
    docNo: Yup.string().required("Doc No is required"),
    date: Yup.string().required("Date is required"),
    caption: Yup.string().required("Caption is required"),
    seName: Yup.string().required("SE Name is required"),
    location: Yup.string().required("Location is required"),
    customer: Yup.string().required("Customer is required"),
    financierName: Yup.string().required("Financier Name is required"),
    entryType: Yup.string().required("Entry type is required"),
    title: Yup.string().required("Title is required"),
    name: Yup.string().required("Name is required"),
    district: Yup.string().required("District is required"),
    misc: Yup.string().required("Misc is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    mobileNo: Yup.number().required("Mobile No is required"),
    pinNo: Yup.number().required("Pin No is required"),
    taxableType: Yup.string().required("Taxable type is required"),
    modelName: Yup.string().required("Model Name is required"),
    exShowroom: Yup.string().required("Ex-ShowRoom is required"),
    regd: Yup.string().required("Regd is required"),
    insurance: Yup.string().required("Insurance is required"),
    hpa: Yup.string().required("HPA is required"),
    hsnCode: Yup.string().required("HSN Code is required"),
    qty: Yup.number().required("Qty is required"),
    tax: Yup.number().required("Tax is required"),
    salePrice: Yup.number().required("Sale Price is required"),
    validTo: Yup.string().required("Valid To date is required"),
    totalMisc: Yup.number().required("Total Misc is required"),
    discount: Yup.number().required("Discount is required"),
    others: Yup.number().required("Others is required"),
    totalTaxable: Yup.number().required("Total Taxable is required"),
    igst: Yup.number().required("IGST is required"),
    netAmount: Yup.number().required("Net Amount is required"),
    remarks: Yup.string().required("Remarks are required"),
  });

  const initialValues = {
    docNo: "",
    date: "",
    caption: "",
    seName: "",
    location: "",
    customer: "",
    financierName: "",
    entryType: "",
    title: "",
    name: "",
    district: "",
    misc: "",
    address: "",
    state: "",
    city: "",
    mobileNo: "",
    pinNo: "",
    taxableType: "",
    modelName: "",
    exShowroom: "",
    regd: "",
    insurance: "",
    hpa: "",
    hsnCode: "",
    qty: "",
    tax: "",
    salePrice: "",
    validTo: "",
    totalMisc: "",
    discount: "",
    others: "",
    totalTaxable: "",
    igst: "",
    netAmount: "",
    remarks: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values, "Submitted values");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
        <div className=" mb-[50px] pl-2">
          <Box className="bg-white p-1 rounded-lg shadow-lg border" autoComplete="off">
            <Box className="flex justify-between items-center">
              <Typography >
                Sales Model
              </Typography>
            </Box>
            <Divider className="divider" />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, errors, touched, isSubmitting }) => (
                <Form autoComplete="off" className="purchase-order-form">
               
                    <Grid container spacing={1}>
                      {/* Row 1 */}

                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                          <Grid container alignItems="center">
                            <Grid item xs={4}>
                              <FormLabel>Doc No</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={TextField}
                                name="docNo"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.docNo && !!errors.docNo}
                              />
                              <ErrorMessage
                                name="docNo"
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
                              <FormLabel>Date</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={TextField}
                                type="date"
                                name="date"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.date && !!errors.date}
                              />
                              <ErrorMessage
                                name="date"
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
                              <FormLabel>Caption</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={TextField}
                                name="caption"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.caption && !!errors.caption}
                              />
                              <ErrorMessage
                                name="caption"
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
                              <FormLabel>SE Name</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={Select}
                                name="seName"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.seName && !!errors.seName}
                              >
                                <MenuItem value="se1">SE 1</MenuItem>
                                <MenuItem value="se2">SE 2</MenuItem>
                              </Field>
                              <ErrorMessage
                                name="seName"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Grid>

                      {/* Row 2 */}
                      {/* Location Field */}
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                          <Grid container alignItems="center">
                            <Grid item xs={4}>
                              <FormLabel>Location</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={Select}
                                name="location"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.location && !!errors.location}
                              >
                                <MenuItem value="">Select Location</MenuItem>
                                <MenuItem value="location1">
                                  Location 1
                                </MenuItem>
                                <MenuItem value="location2">
                                  Location 2
                                </MenuItem>
                              </Field>
                              <ErrorMessage
                                name="location"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Grid>

                      {/* Customer Field */}
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                          <Grid container alignItems="center">
                            <Grid item xs={4}>
                              <FormLabel>Customer</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={Select}
                                name="customer"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.customer && !!errors.customer}
                              >
                                <MenuItem value="">Select Customer</MenuItem>
                                <MenuItem value="customer1">
                                  Customer 1
                                </MenuItem>
                                <MenuItem value="customer2">
                                  Customer 2
                                </MenuItem>
                              </Field>
                              <ErrorMessage
                                name="customer"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Grid>

                      {/* Financier Name Field */}
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                          <Grid container alignItems="center">
                            <Grid item xs={4}>
                              <FormLabel>Financier Name</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={Select}
                                name="financierName"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={
                                  touched.financierName &&
                                  !!errors.financierName
                                }
                              >
                                <MenuItem value="">Select Financier</MenuItem>
                                <MenuItem value="financier1">
                                  Financier 1
                                </MenuItem>
                                <MenuItem value="financier2">
                                  Financier 2
                                </MenuItem>
                              </Field>
                              <ErrorMessage
                                name="financierName"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Grid>
                    </Grid>
                

                  {/* Other fields here... */}
                  {/* Row 2 - Radio Buttons (Entry, Ledger) */}
           
                  <Divider className="divider" />
                      <Grid item xs={12}>
                        <FormControl component="fieldset">
                          <Grid container alignItems="center">
                            <Grid item xs={4}>
                              <FormLabel component="legend">
                                Entry Type
                              </FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={RadioGroup}
                                row
                                name="entryType"
                                defaultValue="entry"
                                className="flex"
                              >
                                <Grid item xs={6}>
                                  <FormControlLabel
                                    value="entry"
                                    control={
                                      <Radio
                                        sx={{
                                          "& .MuiSvgIcon-root": {
                                            fontSize: 13,
                                          },
                                        }}
                                      />
                                    }
                                    label="Entry"
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <FormControlLabel
                                    value="ledger"
                                    control={
                                      <Radio
                                        sx={{
                                          "& .MuiSvgIcon-root": {
                                            fontSize: 13,
                                          },
                                        }}
                                      />
                                    }
                                    label="Ledger"
                                  />
                                </Grid>
                              </Field>
                              <ErrorMessage
                                name="entryType"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Grid>
                      <Divider className="divider" />
                      <Grid container spacing={1}>
                      {/* Row 3 - Form fields: Title, Name, District, Misc, Address, State, City, Mob No, Pin No */}
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
                                variant="outlined"
                                size="small"
                              >
                                <MenuItem value="mr">Mr.</MenuItem>
                                <MenuItem value="mrs">Mrs.</MenuItem>
                                <MenuItem value="ms">Ms.</MenuItem>
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
                              <FormLabel>Name</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={TextField}
                                name="name"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.name && !!errors.name}
                              />
                              <ErrorMessage
                                name="name"
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
                              <FormLabel>Misc</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={TextField}
                                name="misc"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.misc && !!errors.misc}
                              />
                              <ErrorMessage
                                name="misc"
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

                      <Grid item xs={12} sm={6} md={4} lg={3}>
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
                              >
                                <MenuItem value="state1">State 1</MenuItem>
                                <MenuItem value="state2">State 2</MenuItem>
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

                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                          <Grid container alignItems="center">
                            <Grid item xs={4}>
                              <FormLabel>City</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={Select}
                                name="city"
                                fullWidth
                                variant="outlined"
                                size="small"
                              >
                                <MenuItem value="city1">City 1</MenuItem>
                                <MenuItem value="city2">City 2</MenuItem>
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

                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                          <Grid container alignItems="center">
                            <Grid item xs={4}>
                              <FormLabel>Mobile No</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={TextField}
                                name="mobNo"
                                type="number"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.mobNo && !!errors.mobNo}
                              />
                              <ErrorMessage
                                name="mobNo"
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
                              <FormLabel>Pin No</FormLabel>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as={TextField}
                                name="pinNo"
                                type="number"
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={touched.pinNo && !!errors.pinNo}
                              />
                              <ErrorMessage
                                name="pinNo"
                                component="div"
                                className="text-red-600 text-xs"
                              />
                            </Grid>
                          </Grid>
                        </FormControl>
                      </Grid>
                    </Grid>
                
                  {/* Row 4 - Form fields: PAN No, Date of Birth, Account No, Account Type, Bank Name, IFSC */}
                  {/* Row 5 - Model Name, Ex-ShowRoom, Regd, Insurance, HPA, HSN Code */}
                  
                  <Divider className="divider" />
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel component="legend">Tax Type</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={RadioGroup}
                              row
                              name="taxableType"
                              defaultValue="taxable"
                              className="flex"
                            >
                              <Grid item xs={6}>
                                <FormControlLabel
                                  value="taxable"
                                  control={
                                    <Radio
                                      sx={{
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 13,
                                        },
                                      }}
                                    />
                                  }
                                  label="Taxable"
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <FormControlLabel
                                  value="taxpaid"
                                  control={
                                    <Radio
                                      sx={{
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 13,
                                        },
                                      }}
                                    />
                                  }
                                  label="Taxpaid"
                                />
                              </Grid>
                            </Field>
                            <ErrorMessage
                              name="entryType"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    <Divider className="divider" />
                    <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Model Name</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="modelName"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.modelName && !!errors.modelName}
                            >
                              <MenuItem value="model1">Model 1</MenuItem>
                              <MenuItem value="model2">Model 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="modelName"
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
                            <FormLabel>Ex-ShowRoom</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="exShowRoom"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.exShowRoom && !!errors.exShowRoom}
                            >
                              <MenuItem value="showroom1">Showroom 1</MenuItem>
                              <MenuItem value="showroom2">Showroom 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="exShowRoom"
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
                            <FormLabel>Regd</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="regd"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.regd && !!errors.regd}
                            />
                            <ErrorMessage
                              name="regd"
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
                            <FormLabel>Insurance</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="insurance"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.insurance && !!errors.insurance}
                            />
                            <ErrorMessage
                              name="insurance"
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
                            <FormLabel>HPA</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="hpa"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.hpa && !!errors.hpa}
                            />
                            <ErrorMessage
                              name="hpa"
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
                            <FormLabel>HSN Code</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="hsnCode"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.hsnCode && !!errors.hsnCode}
                            />
                            <ErrorMessage
                              name="hsnCode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    {/* Row 6 - Qty, Tax, Sale Price, Valid To, Total Misc, Discount, Others, Total Taxable, IGST, Net Amount, Remarks */}

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Qty</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="qty"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.qty && !!errors.qty}
                            />
                            <ErrorMessage
                              name="qty"
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
                            <FormLabel>Tax</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="tax"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.tax && !!errors.tax}
                            />
                            <ErrorMessage
                              name="tax"
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
                            <FormLabel>Sale Price</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="salePrice"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.salePrice && !!errors.salePrice}
                            />
                            <ErrorMessage
                              name="salePrice"
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
                            <FormLabel>Valid To</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              type="date"
                              name="validTo"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.validTo && !!errors.validTo}
                            />
                            <ErrorMessage
                              name="validTo"
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
                            <FormLabel>Total Misc</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="totalMisc"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.totalMisc && !!errors.totalMisc}
                            />
                            <ErrorMessage
                              name="totalMisc"
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
                            <FormLabel>Discount</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="discount"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.discount && !!errors.discount}
                            />
                            <ErrorMessage
                              name="discount"
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
                            <FormLabel>Others</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="others"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.others && !!errors.others}
                            />
                            <ErrorMessage
                              name="others"
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
                            <FormLabel>Total Taxable</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="totalTaxable"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.totalTaxable && !!errors.totalTaxable
                              }
                            />
                            <ErrorMessage
                              name="totalTaxable"
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
                            <FormLabel>IGST</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="igst"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.igst && !!errors.igst}
                            />
                            <ErrorMessage
                              name="igst"
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
                            <FormLabel>Net Amount</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="netAmount"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.netAmount && !!errors.netAmount}
                            />
                            <ErrorMessage
                              name="netAmount"
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
                            <FormLabel>Remarks</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="remarks"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.remarks && !!errors.remarks}
                            />
                            <ErrorMessage
                              name="remarks"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </Grid>
               
                  <Divider className="divider" />
                  <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
                    <Button
                      size="small"
                      type="button"
                      color="error"
                      variant="outlined"
                      className="p-2"
                    >
                      ExportToExcel
                    </Button>
                    <Button
                      size="small"
                      type="button"
                      color="error"
                      variant="outlined"
                      className="p-2"
                    >
                      Print
                    </Button>
                    <Button
                      size="small"
                      type="button"
                      color="error"
                      variant="outlined"
                      className="p-2"
                    >
                      New
                    </Button>

                    <Button
                      size="small"
                      type="submit"
                      color="primary"
                      variant="contained"
                      className="project-thim p-2"
                      disabled={isSubmitting}
                    >
                      Save
                    </Button>

                    <Button
                      size="small"
                      type="button"
                      color="error"
                      variant="outlined"
                      className="p-2"
                    >
                      Delete
                    </Button>

                    <Button
                      size="small"
                      type="reset"
                      color="default"
                      variant="outlined"
                      className="p-2"
                    >
                      Refresh
                    </Button>

                    <Button
                      size="small"
                      color="default"
                      variant="outlined"
                      className="p-2"
                    >
                      Exit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
  
    </>
  );
};

export default SalesModel;

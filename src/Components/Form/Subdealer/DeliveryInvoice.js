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
  FormControlLabel,
  Box,
  Typography,
  Divider,
  Checkbox,
} from "@mui/material";
import TrcDetailsModal from "./TrcDetailsModal";

const DeliveryInvoice = () => {
  // Initial values
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const initialValues = {
    vsChallanNo: "",
    date: "",
    model: "",
    financerName: "",
    challanNo: "",
    location: "",
    address: "",
    partyName: "",
    mobileNo: "",
    chassisNo: "",
    vehicleNo: "",
    engineNo: "",
    mode: "",
    color: "",
    price: "",
    mfgMonthYear: "",
    chargeNo: "",
    discount: "",
    batteryNo: "",
    gstPercentage: "",
    wrcNo: "",
    keyNo: "",
    cessPercentage: "",
    total: "",
    addrss: "",
    eInvoiceStatus: "",
    irn: "",
    ackNo: "",
    ackDate: "",
    ewagNo: "",
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    vsChallanNo: Yup.string().required("VSChallan No is required"),
    date: Yup.date().required("Date is required"),
    model: Yup.string().required("Model is required"),
    financerName: Yup.string().required("Financer Name is required"),
    challanNo: Yup.string().required("Challan No is required"),
    location: Yup.string().required("Location is required"),
    address: Yup.string().required("Address is required"),
    partyName: Yup.string().required("Party Name is required"),
    mobileNo: Yup.number().required("Mobile No is required"),
    chassisNo: Yup.string().required("Chassis No is required"),
    vehicleNo: Yup.string().required("Vehicle No is required"),
    engineNo: Yup.string().required("Engine No is required"),
    mode: Yup.string().required("Mode is required"),
    color: Yup.string().required("Color is required"),
    price: Yup.number().required("Price is required"),
    mfgMonthYear: Yup.date().required("MFG Month/Year is required"),
    chargeNo: Yup.string().required("Charge No is required"),
    discount: Yup.number().required("Discount is required"),
    batteryNo: Yup.string().required("Battery No is required"),
    gstPercentage: Yup.number().required("GST % is required"),
    wrcNo: Yup.number().required("WRC No is required"),
    keyNo: Yup.string().required("Key No is required"),
    cessPercentage: Yup.string().required("Cess % is required"),
    total: Yup.number().required("Total is required"),
    addrss: Yup.string().required("Address is required"),
    eInvoiceStatus: Yup.string().required("EInvoice Status is required"),
    irn: Yup.string().required("IRN is required"),
    ackNo: Yup.number().required("ACK No is required"),
    ackDate: Yup.date().required("ACK Date is required"),
    ewagNo: Yup.string().required("EWAG No is required"),
  });

  // Form submission handler
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form Submitted!", values);
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
  const handelModalOpen = () => {
    setDetailModalOpen(!detailModalOpen);
  };
  return (
    <div className="w-full flex">
      <div className=" mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography>Delivery Invoice</Typography>
          </Box>
          <Divider className="divider" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="p-1">
                <Grid container spacing={1}>
                  {/* VSChallan No Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>VSChallan No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="vsChallanNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.vsChallanNo && !!errors.vsChallanNo}
                          >
                            {/* Example MenuItems; replace with your options */}
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="vsChallanNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Date */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="date"
                            type="date"
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

                  {/* Model Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Model</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="model"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.model && !!errors.model}
                          >
                            {/* Example MenuItems; replace with your options */}
                            <MenuItem value="model1">Model 1</MenuItem>
                            <MenuItem value="model2">Model 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="model"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Financer Name Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Financer Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="financerName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.financerName && !!errors.financerName
                            }
                          >
                            {/* Example MenuItems; replace with your options */}
                            <MenuItem value="financer1">Financer 1</MenuItem>
                            <MenuItem value="financer2">Financer 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="financerName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Challan No Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Challan No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="challanNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.challanNo && !!errors.challanNo}
                          >
                            {/* Example MenuItems; replace with your options */}
                            <MenuItem value="challan1">Challan 1</MenuItem>
                            <MenuItem value="challan2">Challan 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="challanNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Location */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Location</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="location"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.location && !!errors.location}
                          />
                          <ErrorMessage
                            name="location"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Address */}
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

                  {/* Party Name */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Party Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="partyName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.partyName && !!errors.partyName}
                          />
                          <ErrorMessage
                            name="partyName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Mobile No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Mobile No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mobileNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.mobileNo && !!errors.mobileNo}
                          />
                          <ErrorMessage
                            name="mobileNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider className="divider" />
                <Box>
                  <Typography>Access Details</Typography>
                </Box>
                <Divider className="divider" />
                <Grid container spacing={1}>
                  {/* Chassis No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Chassis No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="chassisNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.chassisNo && !!errors.chassisNo}
                          />
                          <ErrorMessage
                            name="chassisNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Vehicle No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Vehicle No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="vehicleNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.vehicleNo && !!errors.vehicleNo}
                          />
                          <ErrorMessage
                            name="vehicleNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Engine No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Engine No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="engineNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.engineNo && !!errors.engineNo}
                          />
                          <ErrorMessage
                            name="engineNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Mode Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Mode</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="mode"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.mode && !!errors.mode}
                          >
                            <MenuItem value="manual">Manual</MenuItem>
                            <MenuItem value="automatic">Automatic</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="mode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Color */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Color</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="color"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.color && !!errors.color}
                          />
                          <ErrorMessage
                            name="color"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Price */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Price</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="price"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.price && !!errors.price}
                          />
                          <ErrorMessage
                            name="price"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* MFG Month/Year */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>MFG Month/Year</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mfgMonthYear"
                            type="month"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.mfgMonthYear && !!errors.mfgMonthYear
                            }
                          />
                          <ErrorMessage
                            name="mfgMonthYear"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Charge No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Charge No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="chargeNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.chargeNo && !!errors.chargeNo}
                          />
                          <ErrorMessage
                            name="chargeNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Discount */}
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
                            type="number"
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

                  {/* Battery No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Battery No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="batteryNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.batteryNo && !!errors.batteryNo}
                          />
                          <ErrorMessage
                            name="batteryNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* GST Percentage */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>GST %</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="gstPercentage"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.gstPercentage && !!errors.gstPercentage
                            }
                          />
                          <ErrorMessage
                            name="gstPercentage"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* WRC No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>WRC No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="wrcNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.wrcNo && !!errors.wrcNo}
                          />
                          <ErrorMessage
                            name="wrcNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Key No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Key No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="keyNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.keyNo && !!errors.keyNo}
                          />
                          <ErrorMessage
                            name="keyNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Cess Percentage */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Cess %</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="cessPercentage"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.cessPercentage && !!errors.cessPercentage
                            }
                          />
                          <ErrorMessage
                            name="cessPercentage"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Total */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Total</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="total"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.total && !!errors.total}
                          />
                          <ErrorMessage
                            name="total"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Address */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Address</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="addrss"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.addrss && !!errors.addrss}
                          />
                          <ErrorMessage
                            name="addrss"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                <Divider className="divider" />
                <Box>
                  <Typography>EInvoice Details</Typography>
                </Box>
                <Divider className="divider" />
                {/* EInvoice Status */}
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>EInvoice Status</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="eInvoiceStatus"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.eInvoiceStatus && !!errors.eInvoiceStatus
                            }
                          />
                          <ErrorMessage
                            name="eInvoiceStatus"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* IRN */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>IRN</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="irn"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.irn && !!errors.irn}
                          />
                          <ErrorMessage
                            name="irn"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* ACK No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>ACK No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="ackNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.ackNo && !!errors.ackNo}
                          />
                          <ErrorMessage
                            name="ackNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* ACK Date */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>ACK Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="ackDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.ackDate && !!errors.ackDate}
                          />
                          <ErrorMessage
                            name="ackDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* EWAG No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>EWAG No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="ewagNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.ewagNo && !!errors.ewagNo}
                          />
                          <ErrorMessage
                            name="ewagNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                <div>
                  <FormControlLabel
                    control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
                    label="Print After Save"
                  />

                  {/* Subsidy Invoice */}
                  <FormControlLabel
                    control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
                    label="Subsidy Invoice"
                    size="small"
                  />

                  {/* Send SMS After Save */}
                  <FormControlLabel
                    control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
                    label="Send SMS After Save"
                    size="small"
                  />

                  {/* Invoice */}
                  <FormControlLabel
                    control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
                    size="small"
                    label="Invoice"
                  />

                  {/* Sale Certificate */}
                  <FormControlLabel
                    control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
                    label="Sale Certificate"
                    size="small"
                  />

                  {/* Form No.20 */}
                  <FormControlLabel
                    control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
                    size="small"
                    label="Form No.20"
                  />

                  {/* Invoice With Access Form No.19 */}
                  <FormControlLabel
                    control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
                    label="Invoice With Access Form No.19"
                  />
                </div>

                {/* Submission Button */}
                <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
                  <Button
                    size="small"
                    type="button"
                    color="error"
                    variant="outlined"
                    className="p-2"
                    onClick={handelModalOpen}
                  >
                    EINVOICE
                  </Button>
                  <Button
                    size="small"
                    type="button"
                    color="error"
                    variant="outlined"
                    className="p-2"
                  >
                    EWAGBILL
                  </Button>
                  <Button
                    size="small"
                    type="button"
                    variant="contained"
                    className="p-2 bg-sky-600"
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
      <TrcDetailsModal
        detailModalOpen={detailModalOpen}
        handelModalOpen={handelModalOpen}
      />
    </div>
  );
};

export default DeliveryInvoice;

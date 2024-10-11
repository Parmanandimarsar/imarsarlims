import React from "react";
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
} from "@mui/material";
import SideNave from "../../../Pages/MainLayout/SideNav";

const SalesInvoice = () => {
  // Initial values
  const initialValues = {
    slnvSDNo: "",
    date: "",
    salePerson: "",
    dealer: "",
    location: "",
    challanNo: "",
    hsnNo: "",
    gst: "",
    cost: "",
    discount: "",
    value: "",
    monthsYear: "",
    model: "",
    chassis: "",
    engineNo: "",
    keyNo: "",
    pono: "",
    colour: "",
    batteryNo: "",
    wrcNo: "",
    chooseFile: null,
    loadExcelNo: "",
    remarks: "",
    grossAmount: "",
    tradeDiscount: "",
    taxable: "",
    igst: "",
    cgst: "",
    sgst: "",
    cess: "",
    others: "",
    netAmount: "",
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    slnvSDNo: Yup.string().required("SlnvSDNo is required"),
    date: Yup.date().required("Date is required"),
    salePerson: Yup.string().required("Sale Person is required"),
    dealer: Yup.string().required("Dealer is required"),
    location: Yup.string().required("Location is required"),
    challanNo: Yup.string().required("Challan No is required"),
    hsnNo: Yup.string().required("HSN No is required"),
    gst: Yup.string().required("GST is required"),
    cost: Yup.string().required("Cost is required"),
    discount: Yup.string().required("Discount is required"),
    value: Yup.string().required("Value is required"),
    monthsYear: Yup.date().required("Months/Year is required"),
    model: Yup.string().required("Model is required"),
    chassis: Yup.string().required("Chassis is required"),
    engineNo: Yup.string().required("Engine No is required"),
    keyNo: Yup.string().required("Key No is required"),
    pono: Yup.string().required("PONO is required"),
    colour: Yup.string().required("Colour is required"),
    batteryNo: Yup.string().required("Battery No is required"),
    wrcNo: Yup.string().required("WRC No is required"),
    chooseFile: Yup.mixed().required("Choose File is required"),
    loadExcelNo: Yup.string().required("Load Excel No is required"),
    remarks: Yup.string().required("Remarks is required"),
    grossAmount: Yup.number().required("Gross Amount is required"),
    tradeDiscount: Yup.number().required("Trade Discount is required"),
    taxable: Yup.number().required("Taxable is required"),
    igst: Yup.string().required("IGST is required"),
    cgst: Yup.string().required("CGST is required"),
    sgst: Yup.string().required("SGST is required"),
    cess: Yup.string().required("CESS is required"),
    others: Yup.string().required("Others is required"),
    netAmount: Yup.number().required("Net Amount is required"),
  });

  // Form submission handler
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form Submitted!", values);
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className=" mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Sales Invoice</Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, touched, errors, setFieldValue }) => (
            <Form>
              <Grid container spacing={1}>
                {/* SlnvSDNo */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>SlnvSDNo</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="slnvSDNo"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.slnvSDNo && !!errors.slnvSDNo}
                        />
                        <ErrorMessage
                          name="slnvSDNo"
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

                {/* Sale Person */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Sale Person</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="salePerson"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.salePerson && !!errors.salePerson}
                        >
                          <MenuItem value="Person1">Person 1</MenuItem>
                          <MenuItem value="Person2">Person 2</MenuItem>
                          {/* Add more options */}
                        </Field>
                        <ErrorMessage
                          name="salePerson"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Dealer */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Dealer</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="dealer"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.dealer && !!errors.dealer}
                        >
                          <MenuItem value="Dealer1">Dealer 1</MenuItem>
                          <MenuItem value="Dealer2">Dealer 2</MenuItem>
                          {/* Add more options */}
                        </Field>
                        <ErrorMessage
                          name="dealer"
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
                          as={Select}
                          name="location"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.location && !!errors.location}
                        >
                          <MenuItem value="Location1">Location 1</MenuItem>
                          <MenuItem value="Location2">Location 2</MenuItem>
                          {/* Add more options */}
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
                          <MenuItem value="Challan1">Challan 1</MenuItem>
                          <MenuItem value="Challan2">Challan 2</MenuItem>
                          {/* Add more options */}
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

                {/* HSN No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>HSN No</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="hsnNo"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.hsnNo && !!errors.hsnNo}
                        />
                        <ErrorMessage
                          name="hsnNo"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* GST */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>GST</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="gst"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.gst && !!errors.gst}
                        />
                        <ErrorMessage
                          name="gst"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Cost */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Cost</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="cost"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.cost && !!errors.cost}
                        />
                        <ErrorMessage
                          name="cost"
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

                {/* Value */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Value</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="value"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.value && !!errors.value}
                        />
                        <ErrorMessage
                          name="value"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Months/Year */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Months/Year</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="monthsYear"
                          type="date"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.monthsYear && !!errors.monthsYear}
                        />
                        <ErrorMessage
                          name="monthsYear"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Model */}
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
                          <MenuItem value="Model1">Model 1</MenuItem>
                          <MenuItem value="Model2">Model 2</MenuItem>
                          {/* Add more options */}
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

                {/* Chassis */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Chassis</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="chassis"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.chassis && !!errors.chassis}
                        >
                          <MenuItem value="Chassis1">Chassis 1</MenuItem>
                          <MenuItem value="Chassis2">Chassis 2</MenuItem>
                          {/* Add more options */}
                        </Field>
                        <ErrorMessage
                          name="chassis"
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
                          as={Select}
                          name="engineNo"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.engineNo && !!errors.engineNo}
                        >
                          <MenuItem value="Engine1">Engine 1</MenuItem>
                          <MenuItem value="Engine2">Engine 2</MenuItem>
                          {/* Add more options */}
                        </Field>
                        <ErrorMessage
                          name="engineNo"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Remaining Fields */}

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

                {/* PONO */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>PONO</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="pono"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.pono && !!errors.pono}
                        />
                        <ErrorMessage
                          name="pono"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                {/* Add the rest of the fields following this pattern */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Colour</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="colour"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.colour && !!errors.colour}
                        >
                          <MenuItem value="Red">Red</MenuItem>
                          <MenuItem value="Blue">Blue</MenuItem>
                          {/* Add more options */}
                        </Field>
                        <ErrorMessage
                          name="colour"
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

                {/* Choose File */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Choose File</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <input
                          type="file"
                          name="chooseFile"
                          onChange={(event) => {
                            setFieldValue(
                              "chooseFile",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <ErrorMessage
                          name="chooseFile"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Load Excel No */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Load Excel No</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="loadExcelNo"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.loadExcelNo && !!errors.loadExcelNo}
                        />
                        <ErrorMessage
                          name="loadExcelNo"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Remarks */}
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

                {/* Gross Amount */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Gross Amount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="grossAmount"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.grossAmount && !!errors.grossAmount}
                        />
                        <ErrorMessage
                          name="grossAmount"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Trade Discount */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Trade Discount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="tradeDiscount"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.tradeDiscount && !!errors.tradeDiscount
                          }
                        />
                        <ErrorMessage
                          name="tradeDiscount"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Taxable Amount */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Taxable Amount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="taxable"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.taxable && !!errors.taxable}
                        />
                        <ErrorMessage
                          name="taxable"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* IGST */}
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

                {/* CGST */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>CGST</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="cgst"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.cgst && !!errors.cgst}
                        />
                        <ErrorMessage
                          name="cgst"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* SGST */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>SGST</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="sgst"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.sgst && !!errors.sgst}
                        />
                        <ErrorMessage
                          name="sgst"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* CESS */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>CESS</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="cess"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.cess && !!errors.cess}
                        />
                        <ErrorMessage
                          name="cess"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Others */}
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

                {/* Net Amount */}
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
                          type="number"
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
                {/* Submit Button */}
              </Grid>
              <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
                <Button
                  size="small"
                  type="button"
                  color="error"
                  variant="outlined"
                  className="p-2"
                >
                  MiscCharge
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
                  className="p-2"
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
  );
};

export default SalesInvoice;

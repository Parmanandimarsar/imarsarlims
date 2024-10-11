

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
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import SideNav from "../../../Pages/MainLayout/SideNav";
import AccessDetailsDeliveryModal from "./AccessDetailsDeliveryModal";

const DeliveryChallan = () => {
  // Initial values
  const [detailModalOpen,setDetailModalOpen]=useState(false)
  const initialValues = {
    vsChallanNo: "",
    date: "",
    model: "",
    source: "",
    seName: "",
    buyerName: "",
    location: "",
    color: "",
    chassisNo: "",
    engineNo: "",
    keyNo: "",
    batteryNo: "",
    basic: "",
    discount: "",
    gst: "",
    calculation: "exShowRoom", // default value
    mfgMonthYear: "",
    poNo: "",
    wrcNo: "",
    exShowRoom: "",
    insurance: "",
    access: "",
    redg: "",
    hpa: "",
    agreement: "",
    other: "",
    miss: "",
    totalAmount: "",
    advanceAmt: "",
    financeAmt: "",
    tradeDiscount: "",
    refund: "",
    totalReceive: "",
    balAmt: "",
    grandTotal: "",
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    vsChallanNo: Yup.string().required("VSChallan No is required"),
    date: Yup.date().required("Date is required"),
    model: Yup.string().required("Model is required"),
    source: Yup.string().required("Source is required"),
    seName: Yup.string().required("SE Name is required"),
    buyerName: Yup.string().required("Buyer Name is required"),
    location: Yup.string().required("Location is required"),
    color: Yup.string().required("Colour is required"),
    chassisNo: Yup.string().required("Chassis No is required"),
    engineNo: Yup.string().required("Engine No is required"),
    keyNo: Yup.string().required("Key No is required"),
    batteryNo: Yup.string().required("Battery No is required"),
    basic: Yup.string().required("Basic is required"),
    discount: Yup.number().required("Discount is required"),
    gst: Yup.number().required("GST is required"),
    mfgMonthYear: Yup.date().required("Mfg Month/Year is required"),
    poNo: Yup.string().required("Po No is required"),
    wrcNo: Yup.string().required("WRC No is required"),
    exShowRoom: Yup.string().required("Ex-Show Room is required"),
    insurance: Yup.string().required("Insurance is required"),
    access: Yup.string().required("Access is required"),
    redg: Yup.string().required("Redg is required"),
    hpa: Yup.string().required("HPA is required"),
    agreement: Yup.string().required("Agreement is required"),
    other: Yup.string().required("Other is required"),
    miss: Yup.string().required("Miss is required"),
    totalAmount: Yup.number().required("Total Amount is required"),
    advanceAmt: Yup.number().required("Advance Amt is required"),
    financeAmt: Yup.number().required("Finance Amt is required"),
    tradeDiscount: Yup.number().required("Trade Discount is required"),
    refund: Yup.number().required("Refund is required"),
    totalReceive: Yup.number().required("Total Receive is required"),
    balAmt: Yup.number().required("Bal Amt is required"),
    grandTotal: Yup.number().required("Grand Total is required"),
  });

  // Form submission handler
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form Submitted!", values);
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };
const handeAccessDetails=()=>{
    setDetailModalOpen(!detailModalOpen)
}
  return (
    <div className="w-full flex">
     

      <div className="  mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography >
            Delivery Challan
            </Typography>
          </Box>
          <Divider className="divider" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, touched, errors, setFieldValue }) => (
              <Form className="p-1">
                <Grid container spacing={1}>
                  {/* VSChallan No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>VSChallan No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="vsChallanNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.vsChallanNo && !!errors.vsChallanNo}
                          />
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
                            {/* Add more options as needed */}
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

                  {/* Source */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Source</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="source"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.source && !!errors.source}
                          >
                            <MenuItem value="Source1">Source 1</MenuItem>
                            <MenuItem value="Source2">Source 2</MenuItem>
                            {/* Add more options as needed */}
                          </Field>
                          <ErrorMessage
                            name="source"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* SE Name */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>SE Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="seName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.seName && !!errors.seName}
                          />
                          <ErrorMessage
                            name="seName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Buyer Name */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Buyer Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="buyerName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.buyerName && !!errors.buyerName}
                          />
                          <ErrorMessage
                            name="buyerName"
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

                  {/* Basic */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Basic</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="basic"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.basic && !!errors.basic}
                          />
                          <ErrorMessage
                            name="basic"
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
                            type="number"
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
                </Grid>
                <Divider className="divider" />
                <Grid container spacing={1}>
                  {/* Calculation Method */}
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel component="legend">
                            Calculation Method
                          </FormLabel>
                        </Grid>
                        <Grid item xs={12}>
                          <Field as={RadioGroup} name="calculation" row>
                            <FormControlLabel
                              value="exShowRoom"
                              control={<Radio />}
                              label="Ex-ShowRoom"
                            />
                            <FormControlLabel
                              value="basic"
                              control={<Radio />}
                              label="Basic"
                            />
                          </Field>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider className="divider" />
                <Grid container spacing={1}>
                  {/* Mfg Month/Year */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Mfg Month/Year</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mfgMonthYear"
                            type="date"
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

                  {/* PO No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>PO No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="poNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.poNo && !!errors.poNo}
                          />
                          <ErrorMessage
                            name="poNo"
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

                  {/* Ex-Show Room */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Ex-Show Room</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="exShowRoom"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.exShowRoom && !!errors.exShowRoom}
                          />
                          <ErrorMessage
                            name="exShowRoom"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Insurance */}
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

                  {/* Access */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Access</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="access"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.access && !!errors.access}
                          />
                          <ErrorMessage
                            name="access"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Redg */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Redg</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="redg"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.redg && !!errors.redg}
                          />
                          <ErrorMessage
                            name="redg"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* HPA */}
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

                  {/* Agreement */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Agreement</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="agreement"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.agreement && !!errors.agreement}
                          />
                          <ErrorMessage
                            name="agreement"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Other */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Other</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="other"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.other && !!errors.other}
                          />
                          <ErrorMessage
                            name="other"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Miss */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Miss</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="miss"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.miss && !!errors.miss}
                          />
                          <ErrorMessage
                            name="miss"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Total Amount */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Total Amount</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="totalAmount"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.totalAmount && !!errors.totalAmount}
                          />
                          <ErrorMessage
                            name="totalAmount"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Advance Amount */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Advance Amount</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="advanceAmt"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.advanceAmt && !!errors.advanceAmt}
                          />
                          <ErrorMessage
                            name="advanceAmt"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Finance Amount */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Finance Amount</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="financeAmt"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.financeAmt && !!errors.financeAmt}
                          />
                          <ErrorMessage
                            name="financeAmt"
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
                  {/* Refund */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Refund</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="refund"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.refund && !!errors.refund}
                          />
                          <ErrorMessage
                            name="refund"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Total Receive */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Total Receive</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="totalReceive"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.totalReceive && !!errors.totalReceive
                            }
                          />
                          <ErrorMessage
                            name="totalReceive"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Balance Amount */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Balance Amount</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="balAmt"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.balAmt && !!errors.balAmt}
                          />
                          <ErrorMessage
                            name="balAmt"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Grand Total */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Grand Total</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="grandTotal"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.grandTotal && !!errors.grandTotal}
                          />
                          <ErrorMessage
                            name="grandTotal"
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
                    onClick={handeAccessDetails}
                  >
                  Access Details
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
      <AccessDetailsDeliveryModal detailModalOpen={detailModalOpen} handeAccessDetails={handeAccessDetails}/>
    </div>
  );
};

export default DeliveryChallan;

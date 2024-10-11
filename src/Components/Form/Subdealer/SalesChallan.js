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
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SalesChallan = () => {
  // Validation schema
  const validationSchema = Yup.object().shape({
    slnvSDNo: Yup.string().required("SLNV SD No is required"),
    date: Yup.date().required("Date is required"),
    salePerson: Yup.string().required("Sale Person is required"),
    dealer: Yup.string().required("Dealer is required"),
    location: Yup.string().required("Location is required"),
    hsnNo: Yup.string().required("HSN NO is required"),
    gst: Yup.number().required("GST is required"),
    cost: Yup.number().required("Cost is required"),
    discount: Yup.number().required("Discount is required"),
    value: Yup.number().required("Value is required"),
    monthsYear: Yup.date().required("Months/Year is required"),
    model: Yup.string().required("Model is required"),
    chassis: Yup.string().required("Chassis is required"),
    engineNo: Yup.string().required("Engine No is required"),
    keyNo: Yup.number().required("Key No is required"),
    poNo: Yup.number().required("PO No is required"),
    colour: Yup.string().required("Colour is required"),
    batteryNo: Yup.string().required("Battery No is required"),
    wrcNo: Yup.number().required("WRC No is required"),
    chooseFile: Yup.string().required("Choose File is required"),
    loadExcelNo: Yup.string().required("Load Excel No is required"),
    remarks: Yup.string().required("Remarks are required"),
    gross: Yup.number().required("Gross is required"),
    others: Yup.string().required("Others are required"),
    discountAmount: Yup.string().required("Discount is required"),
    netAmount: Yup.number().required("Net Amount is required"),
    gstAmount: Yup.number().required("GST Amount is required"),
    finalCost: Yup.number().required("Final Cost is required"),
  });

  const initialValues = {
    slnvSDNo: "",
    date: "",
    salePerson: "",
    dealer: "",
    location: "",
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
    poNo: "",
    colour: "",
    batteryNo: "",
    wrcNo: "",
    chooseFile: "",
    loadExcelNo: "",
    remarks: "",
    gross: "",
    others: "",
    discountAmount: "",
    netAmount: "",
    gstAmount: "",
    finalCost: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className=" mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Sales Challan</Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, setFieldValue }) => (
            <Form autoComplete="off" className="staff-master-form">
              <Grid container spacing={1}>
                {/* Row 1 */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>SLNV SD No</FormLabel>
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
                          <MenuItem value="">Select Sale Person</MenuItem>
                          <MenuItem value="sp1">Sale Person 1</MenuItem>
                          <MenuItem value="sp2">Sale Person 2</MenuItem>
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
                          <MenuItem value="">Select Dealer</MenuItem>
                          <MenuItem value="dealer1">Dealer 1</MenuItem>
                          <MenuItem value="dealer2">Dealer 2</MenuItem>
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
                          <MenuItem value="loc1">Location 1</MenuItem>
                          <MenuItem value="loc2">Location 2</MenuItem>
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

                {/* Row 2 */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>HSN NO</FormLabel>
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
                          <MenuItem value="">Select Model</MenuItem>
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
                          <MenuItem value="">Select Chassis</MenuItem>
                          <MenuItem value="chassis1">Chassis 1</MenuItem>
                          <MenuItem value="chassis2">Chassis 2</MenuItem>
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
                          <MenuItem value="">Select Engine No</MenuItem>
                          <MenuItem value="engineNo1">Engine No 1</MenuItem>
                          <MenuItem value="engineNo2">Engine No 2</MenuItem>
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
                          <MenuItem value="">Select Colour</MenuItem>
                          <MenuItem value="red">Red</MenuItem>
                          <MenuItem value="blue">Blue</MenuItem>
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
                            setFieldValue("file", event.currentTarget.files[0]);
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

                {/* Discount */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Discount Amount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="discountAmount"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.discountAmount && !!errors.discountAmount
                          }
                        />
                        <ErrorMessage
                          name="discountAmount"
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

                {/* GST */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>GST Amount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="gstAmount"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.gstAmount && !!errors.gstAmount}
                        />
                        <ErrorMessage
                          name="gstAmount"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Final Cost */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Final Cost</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="finalCost"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.finalCost && !!errors.finalCost}
                        />
                        <ErrorMessage
                          name="finalCost"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>
              {/* Submit Button */}
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

export default SalesChallan;

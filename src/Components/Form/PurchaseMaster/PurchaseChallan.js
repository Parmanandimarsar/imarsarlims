import React, { useState } from "react";
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
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MiscChargeModal from "./MiscChargeModal";

const PurchaseChallanVehicle = () => {
const [openMicModal,setOpenMicModal]=useState(false)
const handelModelOpen=()=>{
  setOpenMicModal(!openMicModal)
}

  const validationSchema = Yup.object().shape({
    plnvSRNo: Yup.string().required("PLNV SR No is required"),
    date: Yup.date().required("Date is required"),
    splrInvNo: Yup.number().required("Supplier Invoice No is required"),
    splrInvDate: Yup.date().required("Supplier Invoice Date is required"),
    placeOfSupply: Yup.string().required("Place of Supply is required"),
    supplierName: Yup.string().required("Supplier Name is required"),
    location: Yup.string().required("Location is required"),
    model: Yup.string().required("Model is required"),
    chassisNo: Yup.number().required("Chassis No is required"),
    engineNo: Yup.string().required("Engine No is required"),
    keyNo: Yup.number().required("Key No is required"),
    phoneNo: Yup.number().required("Phone No is required"),
    color: Yup.string().required("Color is required"),
    batteryNo: Yup.string().required("Battery No is required"),
    wrcNo: Yup.number().required("WRC No is required"),
    price: Yup.number().required("Price is required"),
    gst: Yup.string().required("GST% is required"),
    hsnCode: Yup.string().required("HSN Code is required"),
    grossAmount: Yup.number().required("Gross Amount is required"),
    otherCharges: Yup.string().required("otherCharges details are required"),
    igst: Yup.string().required("IGST is required"),
    cgst: Yup.string().required("CGST is required"),
    sgst: Yup.string().required("SGST is required"),
    cess: Yup.string().required("CESS is required"),
    discount: Yup.string().required("Discount is required"),
    netAmount: Yup.number().required("Net Amount is required"),
  });

  const initialValues = {
    plnvSRNo: "",
    date: "",
    splrInvNo: "",
    splrInvDate: "",
    placeOfSupply: "",
    supplierName: "",
    location: "",
    model: "",
    chassisNo: "",
    engineNo: "",
    keyNo: "",
    phoneNo: "",
    color: "",
    batteryNo: "",
    wrcNo: "",
    price: "",
    gst: "",
    hsnCode: "",
    grossAmount: "",
    other: "",
    igst: "",
    cgst: "",
    sgst: "",
    cess: "",
    discount: "",
    netAmount: "",
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
     

        <div className="  mb-[50px] pl-2">
          <Box className="bg-white p-2 rounded-lg shadow-lg border" autoComplete="off">
            <Box className=" flex justify-between text-green-700 items-center mb-1">
              <Typography
               
              >
                Purchase Challan Vehicle
              </Typography>
            </Box>
            <Divider className="divider" />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, errors, touched, isSubmitting }) => (
                <Form autoComplete="off">
                  <Grid container spacing={1}>
                    {/* Row 1 */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>PLNV SR No</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="plnvSRNo"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.plnvSRNo && !!errors.plnvSRNo}
                            />
                            <ErrorMessage
                              name="plnvSRNo"
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
                            <FormLabel>Supplier Inv.No</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="splrInvNo"
                              type="number"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.splrInvNo && !!errors.splrInvNo}
                            />
                            <ErrorMessage
                              name="splrInvNo"
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
                            <FormLabel>Supplier Inv.Date</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              type="date"
                              name="splrInvDate"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.splrInvDate && !!errors.splrInvDate
                              }
                            />
                            <ErrorMessage
                              name="splrInvDate"
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
                            <FormLabel>Place of Supply</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="placeOfSupply"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.placeOfSupply && !!errors.placeOfSupply
                              }
                            >
                              <MenuItem value="place1">Place 1</MenuItem>
                              <MenuItem value="place2">Place 2</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="placeOfSupply"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                    {/* Row 2 - continued */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Supplier Name</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="supplierName"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.supplierName && !!errors.supplierName
                              }
                            />
                            <ErrorMessage
                              name="supplierName"
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

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Model</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="model"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.model && !!errors.model}
                            />
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
                            <FormLabel>Chassis No</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="chassisNo"
                              type="number"
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

                    {/* Row 3 */}
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
                              type="number"
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
                            <FormLabel>Phone No</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="phoneNo"
                              type="number"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.phoneNo && !!errors.phoneNo}
                            />
                            <ErrorMessage
                              name="phoneNo"
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

                    {/* Row 4 */}
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
                              type="number"
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

                    {/* Add remaining fields like GST, HSN Code, Gross Amount, Other details, IGST, CGST, SGST, CESS, Discount, and Net Amount in similar fashion */}

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>GST%</FormLabel>
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
                              error={
                                touched.grossAmount && !!errors.grossAmount
                              }
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

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Other Charges</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="otherCharges"
                              type="number"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={
                                touched.otherCharges && !!errors.otherCharges
                              }
                            />
                            <ErrorMessage
                              name="otherCharges"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    {/* Add more fields as needed */}
                    {/* Row 5 - Additional Tax and Financial Information */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>IGST%</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="igst"
                              type="number"
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
                            <FormLabel>CGST%</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="cgst"
                              type="number"
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

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>SGST%</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="sgst"
                              type="number"
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

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>CESS%</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="cess"
                              type="number"
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
                    {/* Row 6 - Additional Charges or Discounts */}

                    {/* Row 7 - Summary Information */}

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
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={6}>
                            <button className="border p-1 rounded-lg font-bold">
                              Sent SMS After Save
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button className="border p-1 rounded-lg font-bold">
                              Print After Save
                            </button>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <button className="border p-1 rounded-lg font-bold bg-[#1A9A87] text-white"
                          onClick={handelModelOpen}
                          >
                            Misc Charge
                          </button>
                        </Grid>
                      </FormControl>
                    </Grid>
                    {/* Row 3 */}
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
    
      <MiscChargeModal openMicModal={openMicModal} handelModelOpen={handelModelOpen}/>
    </>
  );
};

export default PurchaseChallanVehicle;

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
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNave from "../../../Pages/MainLayout/SideNav";
import { DataGrid } from "@mui/x-data-grid";
import {
    PaymentVouchercolumns,
  } from "../../TableField/TablefieldsColumns";

const PaymentVoucher = () => {
    const paginationModel = { page: 0, pageSize: 5 };
    const rows = [
        {
          id: 1,
          igst: "Snow",
          cgst: "Jon",
          sgst: 35,
          cess: "434",
          regd: "45",
          insur: "gfg",
          hpa: "564",
          agree: "yes",
          other: "oyther",
          discount: "5%",
        },
        {
          id: 1,
          igst: "Snow",
          cgst: "Jon",
          sgst: 35,
          cess: "434",
          regd: "45",
          insur: "gfg",
          hpa: "564",
          agree: "yes",
          other: "oyther",
          discount: "5%",
        },
        {
          id: 1,
          igst: "Snow",
          cgst: "Jon",
          sgst: 35,
          cess: "434",
          regd: "45",
          insur: "gfg",
          hpa: "564",
          agree: "yes",
          other: "oyther",
          discount: "5%",
        },
        {
          id: 1,
          igst: "Snow",
          cgst: "Jon",
          sgst: 35,
          cess: "434",
          regd: "45",
          insur: "gfg",
          hpa: "564",
          agree: "yes",
          other: "oyther",
          discount: "5%",
        },
        {
          id: 1,
          igst: "Snow",
          cgst: "Jon",
          sgst: 35,
          cess: "434",
          regd: "45",
          insur: "gfg",
          hpa: "564",
          agree: "yes",
          other: "oyther",
          discount: "5%",
        },
        {
          id: 1,
          igst: "Snow",
          cgst: "Jon",
          sgst: 35,
          cess: "434",
          regd: "45",
          insur: "gfg",
          hpa: "564",
          agree: "yes",
          other: "oyther",
          discount: "5%",
        },
      ];
  const validationSchema = Yup.object().shape({
    fromDate: Yup.date().required("From Date is required"),
    toDate: Yup.date().required("To Date is required"),
    pvNo: Yup.string().required("PV No is required"),
    date: Yup.date().required("Date is required"),
    customerAccount: Yup.string().required("Customer A/c is required"),
    vehicleModel: Yup.string().required("Vehicle Model is required"),
    totalAmount: Yup.number().required("Total Amount is required"),
    drPaidAmount: Yup.number().required("DrPaid Amount is required"),
    balAmount: Yup.number().required("Balance Amount is required"),
    remarks: Yup.string().required("Remarks are required"),
  });

  const initialValues = {
    fromDate: "",
    toDate: "",
    pvNo: "",
    date: "",
    customerAccount: "",
    vehicleModel: "",
    totalAmount: "",
    drPaidAmount: "",
    balAmount: "",
    remarks: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
   

      <div className="  mb-[50px] pl-2">
        <Box className="bg-white  rounded-lg shadow-lg p-1" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1  rounded-t-lg">
            <Typography
             
            >
            Payment Voucher  
            </Typography>
          </Box>
          <Divider className="divider" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="staff-master-form">
                <Grid container spacing={1}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>From Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="fromDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.fromDate && !!errors.fromDate}
                          />
                          <ErrorMessage
                            name="fromDate"
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
                          <FormLabel>To Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="toDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.toDate && !!errors.toDate}
                          />
                          <ErrorMessage
                            name="toDate"
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
                          <FormLabel>PV No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="pvNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.pvNo && !!errors.pvNo}
                          />
                          <ErrorMessage
                            name="pvNo"
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
                          <FormLabel>Customer A/c</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="customerAccount"
                            fullWidth
                            size="small"
                            error={
                              touched.customerAccount &&
                              !!errors.customerAccount
                            }
                          >
                            <MenuItem value="Customer1">Customer 1</MenuItem>
                            <MenuItem value="Customer2">Customer 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="customerAccount"
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
                          <FormLabel>Vehicle Model</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="vehicleModel"
                            fullWidth
                            size="small"
                            error={
                              touched.vehicleModel && !!errors.vehicleModel
                            }
                          >
                            <MenuItem value="Model1">Model 1</MenuItem>
                            <MenuItem value="Model2">Model 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="vehicleModel"
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

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>DrPaid Amount</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="drPaidAmount"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.drPaidAmount && !!errors.drPaidAmount
                            }
                          />
                          <ErrorMessage
                            name="drPaidAmount"
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
                          <FormLabel>Bal. Amount</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="balAmount"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.balAmount && !!errors.balAmount}
                          />
                          <ErrorMessage
                            name="balAmount"
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
                          <FormLabel>Remarks</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="remarks"
                            fullWidth
                            variant="outlined"
                            size="small"
                            // multiline
                            // rows={1}
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
                <div className="border border-[#338691] mt-2 rounded-lg">
               
                <Paper
                  sx={{
                    minHeight: 100,
                    width: "100%",
                    padding: "3px",
                    maxHeight: 400,
                  }}
                >
                <DataGrid
                className="PaymentVoucherTable"
                rows={rows}
                columns={PaymentVouchercolumns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                rowHeight={30}
                headerHeight={30}
                columnHeaderHeight={20}
               
              />
                </Paper>
              </div>

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
   
  );
};

export default PaymentVoucher;

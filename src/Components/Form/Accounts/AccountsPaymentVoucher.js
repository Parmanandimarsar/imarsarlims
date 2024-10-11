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
import { DataGrid } from "@mui/x-data-grid";
import { AccountPaymentVoucherTable } from "../../TableField/TablefieldsColumns";
const AccountsPaymentVoucher = () => {
  // Validation schema
  const paginationModel = { page: 0, pageSize: 5 };
  const validationSchema = Yup.object().shape({
    pvNo: Yup.string().required("PV No is required"),
    date: Yup.date().required("Date is required"),
    customerAccount: Yup.string().required("Customer A/c is required"),
    voucherMode: Yup.string().required("Voucher Mode is required"),
    totalAmount: Yup.number()
      .typeError("Total Amount must be a number")
      .required("Total Amount is required"),
    paidAmount: Yup.number()
      .typeError("Paid Amount must be a number")
      .required("Paid Amount is required"),
    balanceAmount: Yup.number()
      .typeError("Balance Amount must be a number")
      .required("Balance Amount is required"),
    remarks: Yup.string().required("Remarks are required"),
  });
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
  const initialValues = {
    pvNo: "",
    date: "",
    customerAccount: "",
    voucherMode: "",
    totalAmount: "",
    paidAmount: "",
    balanceAmount: "",
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
    <div className=" mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Account Payment Voucher</Typography>
        </Box>
        <Divider className="divider" />
        <div className="flex pl-1 pr-1">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>Branch</FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <Select
                      name="branch"
                      // value={formValues.branch}
                      // onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem value="">Branch Select</MenuItem>
                      <MenuItem value="rv1">Branch 1</MenuItem>
                      <MenuItem value="rv2">Branch 2</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>From</FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      name="date"
                      type="date"
                      fullWidth
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <FormLabel>To</FormLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      name="date"
                      type="date"
                      fullWidth
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Grid container alignItems="center">
                  <Grid item xs={12}>
                    <button className="border-2 rounded-lg pl-1 pr-1 bg-green-600 text-white ">
                      Export To Excel
                    </button>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className="border border-[#338691] mt-2 rounded-lg ml-1 mr-1">
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
              columns={AccountPaymentVoucherTable}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              rowHeight={30}
              headerHeight={30}
              columnHeaderHeight={20}
            />
          </Paper>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form autoComplete="off" className="mt-2 pl-1 pr-1">
              <Grid container spacing={1}>
                {/* PV No */}
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

                {/* Customer */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Customer</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="customerAccount"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.customerAccount && !!errors.customerAccount
                          }
                        >
                          <MenuItem value="">Select Customer</MenuItem>
                          <MenuItem value="customer1">Customer 1</MenuItem>
                          <MenuItem value="customer2">Customer 2</MenuItem>
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

                {/* Voucher Mode */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Voucher Mode</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="voucherMode"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.voucherMode && !!errors.voucherMode}
                        >
                          <MenuItem value="">Select Voucher Mode</MenuItem>
                          <MenuItem value="mode1">Mode 1</MenuItem>
                          <MenuItem value="mode2">Mode 2</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="voucherMode"
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

                {/* Paid Amount */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Paid Amount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="paidAmount"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.paidAmount && !!errors.paidAmount}
                        />
                        <ErrorMessage
                          name="paidAmount"
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
                          name="balanceAmount"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.balanceAmount && !!errors.balanceAmount
                          }
                        />
                        <ErrorMessage
                          name="balanceAmount"
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
              </Grid>

              <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
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

export default AccountsPaymentVoucher;

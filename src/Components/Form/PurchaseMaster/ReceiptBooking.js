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
import { ReceiptBookingTable } from "../../TableField/TablefieldsColumns";
const ReceiptBooking = () => {
  // Validation schema
  const paginationModel = { page: 0, pageSize: 5 };
  const validationSchema = Yup.object().shape({
    rvNo: Yup.string().required("RV No is required"),
    date: Yup.date().required("Date is required"),
    customerAccount: Yup.string().required("Customer A/c is required"),
    balance: Yup.number().required("Balance is required"),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid mobile number")
      .required("Mobile is required"),
    mode: Yup.string().required("Mode is required"),
    paidAmount: Yup.string().required("Paid Amount is required"),
    remarks: Yup.string().required("Remarks are required"),
    vehicleModel: Yup.string().required("Model is required"),
    colour: Yup.string().required("Colour is required"),
    hpa: Yup.string().required("HPA is required"),
    dueReminderDate: Yup.date().required("Due Reminder Date is required"),
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
    rvNo: "",
    date: "",
    customerAccount: "",
    balance: "",
    mobile: "",
    mode: "",
    paidAmount: "",
    remarks: "",
    vehicleModel: "",
    colour: "",
    hpa: "",
    dueReminderDate: "",
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
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography
            
            >
              Receipt Booking
            </Typography>
          </Box>
          <Divider className="divider" />
          <div className="flex">
            <Grid container spacing={1}>
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
                columns={ReceiptBookingTable}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                rowHeight={30}
                headerHeight={30}
                columnHeaderHeight={30}
              />
            </Paper>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="mt-5">
                <Grid container spacing={1}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>RV No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="rvNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.rvNo && !!errors.rvNo}
                          >
                            <MenuItem value="">Select RV No</MenuItem>
                            <MenuItem value="rv1">RV 1</MenuItem>
                            <MenuItem value="rv2">RV 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="rvNo"
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
                          <FormLabel>Customer A/c</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="customerAccount"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.customerAccount &&
                              !!errors.customerAccount
                            }
                          >
                            <MenuItem value="">Select Customer A/c</MenuItem>
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

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Balance</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="balance"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.balance && !!errors.balance}
                          />
                          <ErrorMessage
                            name="balance"
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
                          <FormLabel>Mobile</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mobile"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.mobile && !!errors.mobile}
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
                            <MenuItem value="">Select Mode</MenuItem>
                            <MenuItem value="cash">Cash</MenuItem>
                            <MenuItem value="cheque">Cheque</MenuItem>
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

                  {/* Row 3 */}
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
                            variant="outlined"
                            size="small"
                            error={
                              touched.vehicleModel && !!errors.vehicleModel
                            }
                          >
                            <MenuItem value="">Select Model</MenuItem>
                            <MenuItem value="model1">Model 1</MenuItem>
                            <MenuItem value="model2">Model 2</MenuItem>
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
                          <FormLabel>Due Reminder Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="dueReminderDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.dueReminderDate &&
                              !!errors.dueReminderDate
                            }
                          />
                          <ErrorMessage
                            name="dueReminderDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                <div className="mt-6  flex items-end gap-4 ml-0 justify-end  rounded-md ">
                  <Button
                    size="small"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    
                    Smssent
                  </Button>

                  <Button
                    size="small"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    TotalAmount
                  
                  </Button>
                  <Button
                    size="small"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    PrintAfterSave
                  </Button>
                  <Button
                    size="small"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    SentSMSAfterSave
                  </Button>
                </div>
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

export default ReceiptBooking;

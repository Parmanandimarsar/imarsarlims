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
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNave from "../../../Pages/MainLayout/SideNav";
import { DataGrid } from "@mui/x-data-grid";
import { AccountExpenseBookTable } from "../../TableField/TablefieldsColumns";
const ExpenseBook = () => {
  // Validation schema
  const paginationModel = { page: 0, pageSize: 5 };
  const validationSchema = Yup.object().shape({
    voucherTypee: Yup.string().required("Voucher Type is required"),
    evNo: Yup.number()
      .typeError("EVNO must be a number")
      .required("EVNO is required"),
    voucherMode: Yup.string().required("Voucher Mode is required"),
    expenseDetails: Yup.string().required("Expense Details are required"),
    purposeEx: Yup.string().required("Purpose/Ex is required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Amount is required"),
    narrationRem: Yup.string().required("Narration/Rem is required"),
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
    voucherTypee: "",
    evNo: "",
    voucherMode: "",
    expenseDetails: "",
    purposeEx: "",
    amount: "",
    narrationRem: "",
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
          <Typography >
            Expense Book
          </Typography>
        </Box>
        <Divider className="divider" />
        <div className=" pl-1 pr-1">
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
                    <button className="border-2 rounded-lg  px-5 bg-green-600 text-white ">
                      show
                    </button>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
          <div className="flex">
            <FormControlLabel
              control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
              label="Print After Save"
            />
            <FormControlLabel
              control={<Checkbox sx={{ transform: "scale(0.8)" }} />}
              label="Print After Save"
            />
          </div>
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
              columns={AccountExpenseBookTable}
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
                {/* Voucher Typee */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Voucher Typee</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="voucherTypee"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.voucherTypee && !!errors.voucherTypee}
                        >
                          <MenuItem value="">Select Voucher Typee</MenuItem>
                          <MenuItem value="type1">Type 1</MenuItem>
                          <MenuItem value="type2">Type 2</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="voucherTypee"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* EVNO */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>EVNO</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="evNo"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.evNo && !!errors.evNo}
                        />
                        <ErrorMessage
                          name="evNo"
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

                {/* Expense Details */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Expense Details</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="expenseDetails"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.expenseDetails && !!errors.expenseDetails
                          }
                        >
                          <MenuItem value="">Select Expense Details</MenuItem>
                          <MenuItem value="exp1">Expense 1</MenuItem>
                          <MenuItem value="exp2">Expense 2</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="expenseDetails"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Purpose/Ex */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Purpose/Ex</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="purposeEx"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.purposeEx && !!errors.purposeEx}
                        >
                          <MenuItem value="">Select Purpose/Ex</MenuItem>
                          <MenuItem value="purpose1">Purpose 1</MenuItem>
                          <MenuItem value="purpose2">Purpose 2</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="purposeEx"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Amount */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Amount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="amount"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.amount && !!errors.amount}
                        />
                        <ErrorMessage
                          name="amount"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Narration/Rem */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Narration/Rem</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="narrationRem"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.narrationRem && !!errors.narrationRem}
                        />
                        <ErrorMessage
                          name="narrationRem"
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
                  Export To Excel
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

export default ExpenseBook;

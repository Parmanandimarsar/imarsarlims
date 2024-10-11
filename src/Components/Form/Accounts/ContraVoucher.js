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
import { AccountContraVoucherTable } from "../../TableField/TablefieldsColumns";
const ContraVoucher = () => {
  // Validation schema
  const paginationModel = { page: 0, pageSize: 5 };
  const validationSchema = Yup.object().shape({
    voucherType: Yup.string().required("Voucher Type is required"),
    cvNo: Yup.string().required("CV No is required"),
    voucherMode: Yup.string().required("Voucher Mode is required"),
    location: Yup.string().required("Location is required"),
    head: Yup.string().required("Head is required"),
    particulars: Yup.string().required("Particulars are required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Amount is required"),
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
    voucherType: "",
    cvNo: "",
    voucherMode: "",
    location: "",
    head: "",
    particulars: "",
    amount: "",
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
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography
             
            >
              Accounts Contra Voucher
            </Typography>
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
                columns={AccountContraVoucherTable}
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
                  {/* Voucher Type */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Voucher Type</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="voucherType"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.voucherType && !!errors.voucherType}
                          >
                            <MenuItem value="">Select Voucher Type</MenuItem>
                            <MenuItem value="type1">Type 1</MenuItem>
                            <MenuItem value="type2">Type 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="voucherType"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* CV No */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>CV No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="cvNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.cvNo && !!errors.cvNo}
                          />
                          <ErrorMessage
                            name="cvNo"
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

                  {/* Head */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Head</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="head"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.head && !!errors.head}
                          >
                            <MenuItem value="">Select Head</MenuItem>
                            <MenuItem value="head1">Head 1</MenuItem>
                            <MenuItem value="head2">Head 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="head"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Particulars */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Particulars</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="particulars"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.particulars && !!errors.particulars}
                          >
                            <MenuItem value="">Select Particulars</MenuItem>
                            <MenuItem value="part1">Particular 1</MenuItem>
                            <MenuItem value="part2">Particular 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="particulars"
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

export default ContraVoucher;

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
import { AccountIncomeTable } from "../../TableField/TablefieldsColumns";
const Income = () => {
  // Validation schema
  const paginationModel = { page: 0, pageSize: 5 };
  //   const validationSchema = Yup.object().shape({
  //     voucherType: Yup.string().required("Voucher Type is required"),
  //     incomeNo: Yup.number()
  //       .typeError("Income No must be a number")
  //       .required("Income No is required"),
  //     voucherMode: Yup.string().required("Voucher Mode is required"),
  //     location: Yup.string().required("Location is required"),
  //     incomeDetails: Yup.string().required("Income Details are required"),
  //     incomeBy: Yup.number()
  //       .typeError("Income By must be a number")
  //       .required("Income By is required"),
  //     amount: Yup.number()
  //       .typeError("Amount must be a number")
  //       .required("Amount is required"),
  //     remarks: Yup.string().required("Remarks are required"),
  //   });
  //   const initialValues = {
  //     voucherType: "",
  //     incomeNo: "",
  //     voucherMode: "",
  //     location: "",
  //     incomeDetails: "",
  //     incomeBy: "",
  //     amount: "0.00",
  //     remarks: "",
  //   };
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

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };
  const formFields = [
    {
      name: "voucherType",
      label: "Voucher Type",
      type: "select",
      options: [
        { value: "", label: "Select Voucher Type" },
        { value: "type1", label: "Type 1" },
        { value: "type2", label: "Type 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Voucher Type is required"),
    },
    {
      name: "incomeNo",
      label: "Income No",
      type: "number",
      initialValue: "",
      validation: Yup.number()
        .typeError("Income No must be a number")
        .required("Income No is required"),
    },
    {
      name: "voucherMode",
      label: "Voucher Mode",
      type: "select",
      options: [
        { value: "", label: "Select Voucher Mode" },
        { value: "mode1", label: "Mode 1" },
        { value: "mode2", label: "Mode 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Voucher Mode is required"),
    },
    {
      name: "location",
      label: "Location",
      type: "select",
      options: [
        { value: "", label: "Select Location" },
        { value: "loc1", label: "Location 1" },
        { value: "loc2", label: "Location 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Location is required"),
    },
    {
      name: "incomeDetails",
      label: "Income Details",
      type: "select",
      options: [
        { value: "", label: "Select Income Details" },
        { value: "detail1", label: "Detail 1" },
        { value: "detail2", label: "Detail 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Income Details are required"),
    },
    {
      name: "incomeBy",
      label: "Income By",
      type: "number",
      initialValue: "",
      validation: Yup.number()
        .typeError("Income By must be a number")
        .required("Income By is required"),
    },
    {
      name: "amount",
      label: "Amount",
      type: "number",
      initialValue: "0.00",
      validation: Yup.number()
        .typeError("Amount must be a number")
        .required("Amount is required"),
    },
    {
      name: "remarks",
      label: "Remarks",
      type: "text",
      initialValue: "",
      validation: Yup.string().required("Remarks are required"),
    },
  ];
  // Generate initial values
  const initialValues = formFields.reduce((values, field) => {
    values[field.name] = field.initialValue;
    return values;
  }, {});

  // Generate validation schema
  const validationSchema = Yup.object().shape(
    formFields.reduce((schema, field) => {
      schema[field.name] = field.validation;
      return schema;
    }, {})
  );

  return (
    

      <div className="  mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography
            
            >
              Income
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
                columns={AccountIncomeTable}
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
                  {formFields.map((field) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={field.name}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>{field.label}</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            {field.type === "select" ? (
                              <Field
                                as={Select}
                                name={field.name}
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={
                                  touched[field.name] && !!errors[field.name]
                                }
                              >
                                {field.options.map((option) => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Field>
                            ) : (
                              <Field
                                as={TextField}
                                name={field.name}
                                type={field.type}
                                fullWidth
                                variant="outlined"
                                size="small"
                                multiline={field.type === "text"}
                                error={
                                  touched[field.name] && !!errors[field.name]
                                }
                              />
                            )}
                            <ErrorMessage
                              name={field.name}
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  ))}
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

export default Income;

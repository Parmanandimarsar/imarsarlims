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
import { AccountReceiptTable } from "../../TableField/TablefieldsColumns";
const Receipt = () => {
  // Validation schema
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

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };
  const formFields = [
    {
      name: "voucherNo",
      label: "Voucher No ",
      type: "select",
      initialValue: "",
      options: [
        { value: "", label: "Select Voucher Type" },
        { value: "type1", label: "Type 1" },
        { value: "type2", label: "Type 2" },
      ],
      validation: Yup.string().required("Voucher No is required"),
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      initialValue: "",
      validation: Yup.date().required("Date is required"),
    },
    {
      name: "customer",
      label: "Customer",
      type: "select",
      options: [
        { value: "", label: "Select Customer Type" },
        { value: "Customer", label: "Customer 1" },
        { value: "Customer", label: "Customer 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Voucher Type is required"),
    },
    {
      name: "bal",
      label: "Bal",
      type: "number",
      initialValue: "0.00",
      validation: Yup.number()
        .typeError("Amount must be a number")
        .required("Amount is required"),
    },
    {
      name: "mode",
      label: "Mode",
      type: "text",
      initialValue: "",
      validation: Yup.string().required("Mode is required"),
    },
    {
      name: "model",
      label: "Model",
      type: "select",
      options: [
        { value: "", label: "Select Model " },
        { value: "Model", label: "Model 1" },
        { value: "Model", label: "Model 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Model Type is required"),
    },
    {
      name: "paid Amount",
      label: "Paid Amount",
      type: "number",
      initialValue: "0.00",
      validation: Yup.number()
        .typeError("Amount must be a number")
        .required("Amount is required"),
    },
    {
      name: "colour",
      label: "Colour",
      type: "select",
      options: [
        { value: "", label: "Select Colour " },
        { value: "Colour", label: "Colour 1" },
        { value: "Colour", label: "Colour 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Colour Type is required"),
    },
    {
      name: "hpa",
      label: "HPA",
      type: "select",
      options: [
        { value: "", label: "Select HPA " },
        { value: "HPA", label: "HPA 1" },
        { value: "HPA", label: "HPA 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("HPA Type is required"),
    },
    {
      name: "dua reminderDate",
      label: "Dua ReminderDate",
      type: "select",
      options: [
        { value: "", label: "Select Dua ReminderDate " },
        { value: "Dua ReminderDate", label: "Dua ReminderDate 1" },
        { value: "Dua ReminderDate", label: "Dua ReminderDate 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Dua ReminderDate Type is required"),
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
    // console.log("value",values,"field",field);
    // console.log("values[field.name]", values[field.name]);

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
          <Typography>Receipt</Typography>
        </Box>
        <Divider className="divider" />
        <div className=" pl-1 pr-1">
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
              columns={AccountReceiptTable}
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
                              // multiline={field.type === "text"}
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

export default Receipt;

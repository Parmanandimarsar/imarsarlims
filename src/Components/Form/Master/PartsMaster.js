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
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNave from "../../../Pages/MainLayout/SideNav";

const PartsMaster = () => {
  const formFields = [
    {
      name: "reqSerialNos",
      label: "Req Serial Nos",
      type: "checkbox",
    },
    {
      name: "discountInChallan",
      label: "Discount in Challan",
      type: "checkbox",
    },
    {
      name: "partSearch",
      label: "Part Search",
      type: "select",
      options: [
        { value: "", label: "Select Part" },
        { value: "part1", label: "Part 1" },
        { value: "part2", label: "Part 2" },
      ],
    },
    {
      name: "partNo",
      label: "Part No",
      type: "text",
      validation: Yup.string().required("Part No is required"),
    },
    {
      name: "group",
      label: "Group",
      type: "select",
      options: [
        { value: "", label: "Select Group" },
        { value: "group1", label: "Group 1" },
        { value: "group2", label: "Group 2" },
      ],
      validation: Yup.string().required("Group is required"),
    },
    {
      name: "manufacturer",
      label: "Manufacturer",
      type: "select",
      options: [
        { value: "", label: "Select Manufacturer" },
        { value: "man1", label: "Manufacturer 1" },
        { value: "man2", label: "Manufacturer 2" },
      ],
      validation: Yup.string().required("Manufacturer is required"),
    },
    {
      name: "unit",
      label: "Unit",
      type: "select",
      options: [
        { value: "", label: "Select Unit" },
        { value: "man1", label: "Unit 1" },
        { value: "man2", label: "Unit 2" },
      ],
      validation: Yup.string().required("Unit is required"),
    },

    {
      name: "hsnNo",
      label: "HSN No",
      type: "text",
      validation: Yup.string().required("HSN No is required"),
    },
    {
      name: "hsnCode",
      label: "HSN Code",
      type: "select",
      options: [
        { value: "", label: "Select Unit" },
        { value: "man1", label: "Unit 1" },
        { value: "man2", label: "Unit 2" },
      ],
    },
    {
        name: "igst",
        label: "IGST",
        type: "text",
        validation: Yup.string().required("IGST No is required"),
      },
      {
        name: "cgst",
        label: "CGST",
        type: "text",
        validation: Yup.string().required("CGST No is required"),
      },
      {
        name: "sgst",
        label: "SGST",
        type: "text",
        validation: Yup.string().required("SGST No is required"),
      },
      {
        name: "wef",
        label: "W.E.F",
        type: "Date",
        validation: Yup.date().required("W.E.F  is required"),
      },
      {
        name: "hdp",
        label: "HDP ",
        type: "text",
        validation: Yup.string().required("HDP No is required"),
      },
    {
      name: "mrp",
      label: "MRP",
      type: "number",
      validation: Yup.number().required("MRP is required"),
    },
    {
        name: "binno",
        label: "BinNo",
        type: "text",
        validation: Yup.string().required("BinNo  No is required"),
      },
    {
      name: "orderQty",
      label: "Order Qty",
      type: "number",
      validation: Yup.number().required("Order Qty is required"),
    },
    {
      name: "salePrice",
      label: "Sale Price",
      type: "number",
      validation: Yup.number().required("Sale Price is required"),
    },
    {
      name: "discount",
      label: "Discount",
      type: "number",
      validation: Yup.number().required("Discount is required"),
    },
    {
      name: "margin",
      label: "Margin",
      type: "number",
      validation: Yup.number().required("Margin is required"),
    },
    {
      name: "amount",
      label: "Amount",
      type: "number",
      validation: Yup.number().required("Amount is required"),
    },
    {
      name: "moq",
      label: "MOQ",
      type: "number",
      validation: Yup.number().required("MOQ is required"),
    },
    {
      name: "rol",
      label: "ROL",
      type: "number",
      validation: Yup.number().required("ROL is required"),
    },
    {
      name: "minStock",
      label: "Min Stock",
      type: "number",
      validation: Yup.number().required("Min Stock is required"),
    },
    {
      name: "maxStock",
      label: "Max Stock",
      type: "number",
      validation: Yup.number().required("Max Stock is required"),
    },
    { name: "opening", label: "Opening", type: "number" },
    { name: "price", label: "Price", type: "number" },
    { name: "value", label: "Value", type: "number" },
    { name: "closing", label: "Closing", type: "number" },
  ];
  const initialValues = formFields.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? false : "";
    return acc;
  }, {});

  const validationSchema = Yup.object().shape(
    formFields.reduce((acc, field) => {
      if (field.validation) {
        acc[field.name] = field.validation;
      }
      return acc;
    }, {})
  );

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    

      <div className="mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg border" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography >
              Parts master
            </Typography>
          </Box>
          <Divider className="divider" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            className="p-1"
          >
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="staff-master-form p-2">
                <Grid container spacing={1}>
                  {formFields.map((field) => {
                    if (field.type === "checkbox") {
                      return (
                        <Grid item xs={12} sm={6} key={field.name}>
                          <FormControlLabel
                            control={
                              <Field
                                as={Checkbox }
                                name={field.name}
                                color="primary"
                                size="small"
                                sx={{ 
                                    '&.Mui-checked': {
                                      transform: 'scale(1)', 
                                    },
                                  }}
                              />
                            }
                            label={<p className="text-[12px] font-bold ">{field.label}</p>}
                          />
                        </Grid>
                      );
                    } else if (field.type === "select") {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          key={field.name}
                        >
                          <FormControl fullWidth>
                            <Grid container alignItems="center">
                              <Grid item xs={4}>
                                <FormLabel>{field.label}</FormLabel>
                              </Grid>
                              <Grid item xs={8}>
                                <Field
                                  as={Select}
                                  name={field.name}
                                  fullWidth
                                  variant="outlined"
                                  size="small"
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
                                <ErrorMessage
                                  name={field.name}
                                  component="div"
                                  className="text-red-600 text-xs"
                                />
                              </Grid>
                            </Grid>
                          </FormControl>
                        </Grid>
                      );
                    } else {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          key={field.name}
                        >
                          <FormControl fullWidth>
                            <Grid container alignItems="center">
                              <Grid item xs={4}>
                                <FormLabel>{field.label}</FormLabel>
                              </Grid>
                              <Grid item xs={8}>
                                <Field
                                  as={TextField}
                                  name={field.name}
                                  type={field.type}
                                  fullWidth
                                  variant="outlined"
                                  size="small"
                                  error={
                                    touched[field.name] && !!errors[field.name]
                                  }
                                />
                                <ErrorMessage
                                  name={field.name}
                                  component="div"
                                  className="text-red-600 text-xs"
                                />
                              </Grid>
                            </Grid>
                          </FormControl>
                        </Grid>
                      );
                    }
                  })}
                </Grid>


                <div className="mt-6  flex items-end gap-4 ml-0 justify-end border rounded-md p-2 border-[#1A9A87]">
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
                  //   disabled={isSubmitting}
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

export default PartsMaster;

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

const LocationMaster = () => {
  const formFields = [
   
    {
      name: "partSearch",
      label: "Search",
      type: "select",
      options: [
        { value: "", label: "Select Part" },
        { value: "part1", label: "Part 1" },
        { value: "part2", label: "Part 2" },
      ],
    },
    {
        name: "LocationName",
        label: "LocationName",
        type: "select",
        options: [
          { value: "", label: "Select LocationName" },
          { value: "part1", label: "LocationName 1" },
          { value: "part2", label: "LocationName 2" },
        ],
      },
    {
      name: "locationdas",
      label: "Location Das",
      type: "text",
      validation: Yup.string().required("Location Das is required"),
    },
    {
        name: "address",
        label: "Address",
        type: "text",
        validation: Yup.string().required("Address is required"),
      },
      {
        name: "cantact",
        label: "Cantact",
        type: "text",
        validation: Yup.string().required("Cantact is required"),
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
      name: "City",
      label: "City",
      type: "select",
      options: [
        { value: "", label: "Select City" },
        { value: "man1", label: "City 1" },
        { value: "man2", label: "City 2" },
      ],
      validation: Yup.string().required("City is required"),
    },
    {
      name: "jurisdiction",
      label: "Jurisdiction",
      type: "select",
      options: [
        { value: "", label: "Select Jurisdiction" },
        { value: "man1", label: "Jurisdiction 1" },
        { value: "man2", label: "Jurisdiction 2" },
      ],
      
    },
    {
        name: "district",
        label: "District",
        type: "select",
        options: [
          { value: "", label: "Select District" },
          { value: "man1", label: "District 1" },
          { value: "man2", label: "District 2" },
        ],
        
      },
      {
        name: "state ",
        label: "State ",
        type: "select",
        options: [
          { value: "", label: "Select State " },
          { value: "man1", label: "State  1" },
          { value: "man2", label: "State  2" },
        ],
        
      },
    {
      name: "pincode",
      label: "Pincode",
      type: "number",
      validation: Yup.number().required("pincode No is required"),
    },
    {
      name: "stdcode",
      label: "STD Code",
      type: "text",
      
    },
    {
        name: "mailid",
        label: "Mail ID",
        type: "text",
        validation: Yup.string()
          .email("Invalid email format")
          .required("Mail ID is required"),
      },      
      {
        name: "dealercode ",
        label: "Dealer Code ",
        type: "text",
        validation: Yup.string().required("Dealer Code is required"),
      },
      {
        name: "gstcode",
        label: "GST Code",
        type: "text",
        validation: Yup.string().required("GST Code  is required"),
      },
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
    

      <div className="  mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
            <Typography >
            Location Master
            </Typography>
          </Box>
          <Divider className="divider" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            className="p-3"
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

export default LocationMaster;

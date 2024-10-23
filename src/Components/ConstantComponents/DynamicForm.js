import React from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Box,
  FormLabel,
  Grid,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography,  Divider } from "@mui/material";
import * as Yup from "yup";
const DynamicForm = ({ initialValues, validationSchema, fields, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, touched, errors, isSubmitting }) => (
        <Form autoComplete="off">
          <Grid container spacing={2}>
            {fields.map((field, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <FormControl fullWidth>
                  <Grid container alignItems="center">
                    <Grid item xs={4}>
                      <FormLabel>{field.label}</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      {/* Text Field (including date) */}
                      {(field.type === "text" || field.type === "date") && (
                        <Field
                          as={TextField}
                          name={field.name}
                          type={field.type} // Set type to 'date' or 'text' dynamically
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched[field.name] && !!errors[field.name]}
                        />
                      )}

                      {/* Select Field */}
                      {field.type === "select" && (
                        <Field
                          as={Select}
                          name={field.name}
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched[field.name] && !!errors[field.name]}
                        >
                          {field.options.map((option) => (
                            <MenuItem value={option.value} key={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                      )}

                      {/* File Input Field */}
                      {field.type === "file" && (
                        <input
                          type="file"
                          name={field.name}
                          onChange={(event) => {
                            setFieldValue(
                              field.name,
                              event.currentTarget.files[0]
                            );
                          }}
                          style={{
                            width: "100%",
                            padding: "2px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                          }}
                        />
                      )}

                      {/* Error Message */}
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

          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;




const ClientMaster = () => {
  // Define form fields
  const formFields = [
    {
      name: "description",
      label: "Description",
      type: "text",
      initialValue: "",
      validation: Yup.string().required("Description is required"),
    },
    {
      name: "creditLimitDate",
      label: "Credit Limit Date",
      type: "date",
      initialValue: "",
      validation: Yup.date().required("Credit Limit Date is required"),
    },
    {
      name: "group",
      label: "Group",
      type: "select",
      options: [
        { value: "group1", label: "Group 1" },
        { value: "group2", label: "Group 2" },
      ],
      initialValue: "",
      validation: Yup.string().required("Group is required"),
    },
    {
      name: "document1",
      label: "Document 1",
      type: "file",
      initialValue: null,
      validation: Yup.mixed().required("Document is required"),
    },
  ];

  // Build initialValues dynamically
  const initialValues = formFields.reduce(
    (acc, field) => ({ ...acc, [field.name]: field.initialValue }),
    {}
  );

  // Build validationSchema dynamically
  const validationSchema = Yup.object(
    formFields.reduce(
      (acc, field) => ({ ...acc, [field.name]: field.validation }),
      {}
    )
  );

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values, "Submitted Values");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white p-2 rounded-lg border" autoComplete="off">
        <Box className="flex justify-between items-center mb-1">
          <Typography className="text-[#28a745]">Client Master</Typography>
          <Box className="flex gap-2"></Box>
        </Box>
        <Divider className="divider" />

        <DynamicForm
          fields={formFields}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      </Box>
    </div>
  );
};



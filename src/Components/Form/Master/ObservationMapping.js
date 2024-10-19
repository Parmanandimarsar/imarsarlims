
import { Box, Typography, FormControl, FormLabel, Grid, Select, MenuItem, Checkbox, ListItemText, TextField } from "@mui/material";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MasterObservationMapping } from "../../TableField/TablefieldsColumns";
import { DataGrid } from "@mui/x-data-grid";

const ObservationMapping = () => {
  const names = ["Type A", "Type B", "Type C"]; // Sample types options

  const initialValues = {
    selectedClients: [],
    fromDate: '',
    toDate: '',
  };

  const validationSchema = Yup.object().shape({
    selectedClients: Yup.array().min(1, "At least one client is required"),
    sampleType: Yup.array().min(1, "At least one sample type is required"),
    fromDate: Yup.date().required("From Date is required"),
    toDate: Yup.date().required("To Date is required").min(Yup.ref('fromDate'), "To Date must be after From Date"),
  });

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography className="titleheadingtext">Observation Mapping</Typography>
        </Box>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values); // Handle form submission
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ values, touched, errors, setFieldValue }) => (
            <Form>
              <Grid container spacing={2}>
                {/* Clients Field (Dropdown for Multiple Selection) */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>Clients</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="selectedClients"
                          multiple
                          fullWidth
                          variant="outlined"
                          size="small"
                          renderValue={(selected) => {
                            if (!selected || selected.length === 0) {
                              return <span>Select Clients</span>;
                            }
                            return selected.join(", "); // Display selected client names
                          }}
                          onChange={(event) => {
                            const { value } = event.target;
                            setFieldValue(
                              "selectedClients",
                              typeof value === "string" ? value.split(",") : value
                            );
                          }}
                        >
                          <MenuItem disabled value="">
                            <span>Select Clients</span>
                          </MenuItem>
                          {/* Replace with actual client data */}
                          {["Client 1", "Client 2", "Client 3"].map((client) => (
                            <MenuItem key={client} value={client}>
                              <Checkbox checked={values.selectedClients.indexOf(client) > -1} />
                              <ListItemText primary={client} />
                            </MenuItem>
                          ))}
                        </Field>
                        <ErrorMessage name="selectedClients" component="div" className="text-red-600 text-xs" />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                
                {/* From Date Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>From Date</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="fromDate"
                          type="date"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                        />
                        <ErrorMessage name="fromDate" component="div" className="text-red-600 text-xs" />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* To Date Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>To Date</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="toDate"
                          type="date"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                        />
                        <ErrorMessage name="toDate" component="div" className="text-red-600 text-xs" />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                <Box sx={{ mt: 2 }} className=" flex justify-end ">
                <button type="submit" className="border-none rounded-md project-thim text-white">
                  Submit
                </button>
              </Box>
              </Grid>

              {/* Submit Button */}
             
            </Form>
          )}
        </Formik>

        <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
        <DataGrid
         className="datagridtable"
        //   rows={"rows"}
          columns={MasterObservationMapping}
          pageSize={5}
          rowsPerPageOptions={[5]}
          columnHeaderHeight={20}
          rowHeight={25}
          headerHeight={20}
        />
      </div>
      </Box>
    </div>
  );
};

export default ObservationMapping;

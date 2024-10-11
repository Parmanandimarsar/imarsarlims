import React, { useState } from "react";

import {
  Button,
  TextField,
  Typography,
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Divider,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SideNave from "../../../Pages/MainLayout/SideNav";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MiscMaster = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State for single radio selection

  const radioOptions = [
    "Title",
    "Bank Mode",
    "State",
    "Department",
    "Designation",
    "Source",
    "Service Type",
    "Labour Group",
    "Ledger Group",
    "Colour",
    "Unit",
    "Sale Certificate Details",
    "Item Group",
    "Category",
  ];

  const validationSchema = Yup.object().shape({
    miscMaster: Yup.string().required("MiscMaster is required"),
    miscName: Yup.string().required("MiscName is required"),
    search: Yup.string().required("Search is required"),
  });

  const initialValues = {
    miscMaster: "",
    miscName: "",
    search: "",
  };

  const submitForm = async (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    console.log("Selected option:", selectedOption);

    setSubmitting(true);

    // Prepare data to send
    const dataToSend = {
      ...values,
      selectedOption, // Include selected radio option in the payload
    };
    console.log(dataToSend, "555555555");

    setSubmitting(false);
  };

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      

        <div className="mb-[50px] pl-2">
          <Box className="bg-white p-1 rounded-lg shadow-lg border" autoComplete="off">
            <Box className="flex justify-between items-center ">
              <Typography
                
              >
                Misc. Master
              </Typography>
            </Box>
            <Divider
              className="divider"
            />

            {/* Formik Form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitForm}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form autoComplete="off" className="ledger-details-form">
                  <Grid container spacing={2}>
                    {/* Row 1 */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={4}>
                            <FormLabel>Misc. Master</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="miscMaster"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.miscMaster && !!errors.miscMaster}
                            />
                            <ErrorMessage
                              name="miscMaster"
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
                            <FormLabel>Misc Name</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="miscName"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.miscName && !!errors.miscName}
                            />
                            <ErrorMessage
                              name="miscName"
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
                            <FormLabel>Search</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="search"
                              fullWidth
                              variant="outlined"
                              size="small"
                              error={touched.search && !!errors.search}
                            />
                            <ErrorMessage
                              name="search"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </Grid>

                  {/* Radio Group and Table Layout */}
                  <div className="border-2 border-[#1A9A87] rounded-lg p-1 mt-3 mb-1">
                    <Grid container spacing={1} >
                      <Grid item xs={6} sm={12} md={12}>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Select Option
                          </FormLabel>
                          <RadioGroup
                            value={selectedOption}
                            onChange={handleRadioChange}
                          >
                            <Grid container>
                              {radioOptions.map((option, index) => (
                                <Grid item xs={6} sm={4} md={2} key={index}>
                                  <FormControlLabel
                                    control={<Radio size="small" />}
                                    value={option}
                                    label={option}
                                    sx={{
                                      "& .MuiFormControlLabel-label": {
                                        // fontSize: "6px",
                                        fontWeight:"500"
                                        
                                      },
                                    }}
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>

                  <Grid item xs={12} sm={6} md={6}>
                    <Typography >Selected Data</Typography>
                    <Divider className="divider"/>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow
                            className="project-thim text-white"
                            sx={{ color: "white" }}
                          >
                            <TableCell sx={{ color: "white", padding: "1px" }}>
                              Sr.No
                            </TableCell>
                            <TableCell sx={{ color: "white", padding: "1px" }}>
                              Type_Name
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {selectedOption ? (
                            <TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                                font: "11px",
                              }}
                            >
                              <TableCell className="textbold">1</TableCell>
                              <TableCell className="textbold">
                                {selectedOption}
                              </TableCell>
                            </TableRow>
                          ) : (
                            <TableRow>
                              <TableCell colSpan={2}>No data</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  {/* Submit Button */}

                  <Box className="mt-6 flex items-end gap-4 ml-0 justify-end border-2 rounded-md p-2 border-[#1A9A87]">
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
                      Close
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
     
    </>
  );
};

export default MiscMaster;

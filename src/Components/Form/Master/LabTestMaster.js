import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Divider,
  ListItemText,
} from "@mui/material";

const names = ["Sample Type 1", "Sample Type 2", "Sample Type 3"];
const documents = ["Document 1", "Document 2", "Document 3"];

const LabTestMaster = () => {
  const [selectedItemType, setSelectedItemType] = useState("Test");
  const initialValues = {
    itemType: "",
    itemName: "",
    profileName: "",
    displayName: "",
    testMethod: "",
    testCode: "",
    shortName: "",
    sampleVolume: "",
    containerColor: "",
    testRemarks: "",
    department: "",
    gender: "",
    reportType: "",
    sampleType: [],
    document: [],
    ageGroupInDays: "",
    sampleLogisticsTemp: "",
    allergyTest: false,
    consentForm: null,
  };

  const validationSchema = Yup.object({
    // itemType: Yup.string().required("Item Type is required"),
    // itemName: Yup.string().required("Item Name is required"),
    // profileName: Yup.string().required("Profile Name is required"),
    // displayName: Yup.string().required("Display Name is required"),
    // testMethod: Yup.string().required("Test Method is required"),
    // testCode: Yup.string().required("Test Code is required"),
    // shortName: Yup.string().required("Short Name is required"),
    // sampleVolume: Yup.number()
    //   .required("Sample Volume is required")
    //   .positive("Sample Volume must be positive")
    //   .typeError("Sample Volume must be a number"),
    // containerColor: Yup.string().required("Container Color is required"),
    // testRemarks: Yup.string().required("Test Remarks are required"),
    // department: Yup.string().required("Department is required"),
    // gender: Yup.string().required("Gender is required"),
    // reportType: Yup.string().required("Report Type is required"),
    // sampleType: Yup.array().min(1, "At least one Sample Type is required"),
    // document: Yup.array().min(1, "At least one Document is required"),
    // ageGroupInDays: Yup.number()
    //   .required("Age Group (In Days) is required")
    //   .min(1, "Age Group must be at least 1 day")
    //   .typeError("Age Group must be a number"),
    // sampleLogisticsTemp: Yup.number()
    //   .required("Sample Logistics Temp is required")
    //   .typeError("Sample Logistics Temp must be a number"),
    // allergyTest: Yup.boolean(),
    // consentForm: Yup.mixed().required("Consent Form is required"),
  });

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("Form Submitted!", values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    resetForm();
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography className="pl-1">Lab Test Master</Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            isSubmitting,
            touched,
            errors,
            handleChange,
            setFieldValue,
            values,
          }) => (
            <Form>
              <Grid container spacing={1} className="pl-1">
                {/* Item Type Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Item Type</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="itemType"
                          className="mandatoryfield"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.itemType}
                          onChange={(e) => {
                            const selectedType = e.target.value;
                            setFieldValue("itemType", selectedType);
                            setSelectedItemType(selectedType); // Update local state for selected itemType
                          }}
                          error={touched.itemType && !!errors.itemType}
                        >
                          <MenuItem value="" disabled>
                            Select Item Type
                          </MenuItem>
                          <MenuItem value="Test">Test</MenuItem>
                          <MenuItem value="Profile">Profile</MenuItem>
                          <MenuItem value="Packages">Packages</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="itemType"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Conditionally Render Fields Based on Selected Item Type */}

                {/* Show Item Name field when "Test" is selected */}
                {selectedItemType === "Test" && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Item Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            className="mandatoryfield"
                            name="itemName"
                            fullWidth
                            placeholder="Enter Item Name"
                            variant="outlined"
                            size="small"
                            error={touched.itemName && !!errors.itemName}
                          />
                        </Grid>
                      </Grid>
                      <ErrorMessage
                        name="itemName"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </FormControl>
                  </Grid>
                )}

                {/* Show Profile Name field when "Profile" is selected */}
                {selectedItemType === "Profile" && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Profile Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="profileName"
                            className="mandatoryfield"
                            fullWidth
                            placeholder="Enter Profile Name"
                            variant="outlined"
                            size="small"
                            error={touched.profileName && !!errors.profileName}
                          />
                        </Grid>
                      </Grid>
                      <ErrorMessage
                        name="profileName"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </FormControl>
                  </Grid>
                )}

                {/* Show Package Name field when "Packages" is selected */}
                {selectedItemType === "Packages" && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Package Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="packageName"
                            className="mandatoryfield"
                            fullWidth
                            placeholder="Enter Package Name"
                            variant="outlined"
                            size="small"
                            error={touched.packageName && !!errors.packageName}
                          />
                        </Grid>
                      </Grid>
                      <ErrorMessage
                        name="packageName"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </FormControl>
                  </Grid>
                )}

                {/* Display Name (always shown) */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Display Name</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="displayName"
                          fullWidth
                          placeholder="Enter Display Name"
                          variant="outlined"
                          size="small"
                          error={touched.displayName && !!errors.displayName}
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="displayName"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Test Method (disable when Profile or Packages is selected) */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Test Method</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          className="mandatoryfield"
                          name="testMethod"
                          fullWidth
                          placeholder="Enter Test Method"
                          variant="outlined"
                          size="small"
                          disabled={
                            selectedItemType === "Profile" ||
                            selectedItemType === "Packages"
                          }
                          sx={{
                            backgroundColor:
                              selectedItemType === "Profile" ||
                              selectedItemType === "Packages"
                                ? "#f0f0f0"
                                : "white",
                          }}
                          error={touched.testMethod && !!errors.testMethod}
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="testMethod"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Package Name (shown for Packages) */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Package Name</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          className="mandatoryfield"
                          name="packageName"
                          fullWidth
                          placeholder="Enter Package Name"
                          variant="outlined"
                          size="small"
                          error={touched.packageName && !!errors.packageName}
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="packageName"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Test Code */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Test Code</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          className="mandatoryfield"
                          name="testCode"
                          fullWidth
                          placeholder="Enter Test Code"
                          variant="outlined"
                          size="small"
                          error={touched.testCode && !!errors.testCode}
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="testCode"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Short Name */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Short Name</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="shortName"
                          fullWidth
                          placeholder="Enter Short Name"
                          variant="outlined"
                          size="small"
                          error={touched.shortName && !!errors.shortName}
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="shortName"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Sample Volume */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Sample Volume</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="sampleVolume"
                          className="mandatoryfield"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          error={touched.sampleVolume && !!errors.sampleVolume}
                        >
                          <MenuItem value="" disabled>
                            Select Sample Volume
                          </MenuItem>
                          <MenuItem value="1ml">1ml</MenuItem>
                          <MenuItem value="2ml">2ml</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="sampleVolume"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Container Color */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Container Color</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="containerColor"
                          className="mandatoryfield"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          error={
                            touched.containerColor && !!errors.containerColor
                          }
                        >
                          <MenuItem value="" disabled>
                            Select Container Color
                          </MenuItem>
                          <MenuItem value="Red">Red</MenuItem>
                          <MenuItem value="Blue">Blue</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="containerColor"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Test Remarks */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Test Remarks</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="testRemarks"
                          fullWidth
                          placeholder="Enter Test Remarks"
                          variant="outlined"
                          size="small"
                          error={touched.testRemarks && !!errors.testRemarks}
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="testRemarks"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Department */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Department</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="department"
                          className="mandatoryfield"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          error={touched.department && !!errors.department}
                        >
                          <MenuItem value="" disabled>
                            Select Department
                          </MenuItem>
                          <MenuItem value="Department1">Department1</MenuItem>
                          <MenuItem value="Department2">Department2</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="department"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Gender */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Gender</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="gender"
                          className="mandatoryfield"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          error={touched.gender && !!errors.gender}
                        >
                          <MenuItem value="" disabled>
                            Select Gender
                          </MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Report Type */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Report Type</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="reportType"
                          className="mandatoryfield"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          error={touched.reportType && !!errors.reportType}
                        >
                          <MenuItem value="" disabled>
                            Select Report Type
                          </MenuItem>
                          <MenuItem value="Type1">Type1</MenuItem>
                          <MenuItem value="Type2">Type2</MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="reportType"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Sample Type */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Sample Type</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="sampleType"
                          className="mandatoryfield"
                          multiple
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          disabled={selectedItemType === "Packages"}
                          sx={{
                            backgroundColor:
                              selectedItemType === "Packages"
                                ? "#f0f0f0"
                                : "white",
                          }}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <span>Select Sample Type</span>;
                            }
                            return selected.join(", "); // Display selected values
                          }}
                          value={values.sampleType}
                          onChange={(event) => {
                            setFieldValue("sampleType", event.target.value);
                          }}
                          error={touched.sampleType && !!errors.sampleType}
                        >
                          <MenuItem disabled value="">
                            <span>Select Sample Type</span>
                          </MenuItem>
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox
                                checked={values.sampleType.indexOf(name) > -1}
                              />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="sampleType"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Document */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Document</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="document"
                          multiple
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <span>Select Document</span>;
                            }
                            return selected.join(", "); // Display selected values
                          }}
                          value={values.document}
                          onChange={(event) => {
                            setFieldValue("document", event.target.value);
                          }}
                          error={touched.document && !!errors.document}
                        >
                          <MenuItem disabled value="">
                            <em>Select Document</em>
                          </MenuItem>
                          {documents.map((doc) => (
                            <MenuItem key={doc} value={doc}>
                              <Checkbox
                                checked={values.document.indexOf(doc) > -1}
                              />
                              <ListItemText primary={doc} />
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="document"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Age Group (In Days) */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Age Group</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="ageGroupInDays"
                          fullWidth
                          placeholder="Enter Age Group (In Days)"
                          variant="outlined"
                          size="small"
                          error={
                            touched.ageGroupInDays && !!errors.ageGroupInDays
                          }
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="ageGroupInDays"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Sample Logistics Temp */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Sample Log Te</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="sampleLogisticsTemp"
                          fullWidth
                          placeholder="Enter Sample Logistics Temp"
                          variant="outlined"
                          size="small"
                          error={
                            touched.sampleLogisticsTemp &&
                            !!errors.sampleLogisticsTemp
                          }
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="sampleLogisticsTemp"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>

                {/* Allergy Test */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Allergy Test</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControlLabel
                          control={
                            <Field
                              as={Checkbox}
                              name="allergyTest"
                              color="primary"
                              size="small"
                              checked={values.allergyTest}
                            />
                          }
                          label="Allergy Test"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Consent Form */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Consent Form</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <input
                          id="consentForm"
                          name="consentForm"
                          type="file"
                          onChange={(event) => {
                            setFieldValue(
                              "consentForm",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </Grid>
                    </Grid>
                    <ErrorMessage
                      name="consentForm"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Divider className="divider" />
              <div className="bg-gray-200 ">
                <Typography className="titleheadingtext ">
                  Access Type
                </Typography>
              </div>
              <Divider className="divider" />
              {/* Access Type Checkbox Group */}
              <Grid container spacing={1} className="pl-1">
                <Grid item xs={12} sx={{ ml: "7px" }}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Field
                              type="checkbox"
                              name="active"
                              className="m-1"
                            />
                          }
                          label="Active"
                        />
                        <FormControlLabel
                          control={
                            <Field
                              type="checkbox"
                              name="showPatientReport"
                              className="m-2"
                            />
                          }
                          label="Show In Patient Report"
                        />
                        <FormControlLabel
                          control={
                            <Field
                              type="checkbox"
                              name="printSeparate"
                              className="m-2"
                            />
                          }
                          label="Print Separate"
                        />
                        <FormControlLabel
                          control={
                            <Field
                              type="checkbox"
                              name="colletionRequired"
                              className="m-2 "
                            />
                          }
                          label="Colletion Required"
                        />
                        <FormControlLabel
                          control={
                            <Field
                              type="checkbox"
                              name="departmentPatientReport"
                              className="m-2 "
                            />
                          }
                          label="Show Department on Patient Report"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>
              <Box className="mt-4 pl-2">
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
      </Box>
    </div>
  );
};

export default LabTestMaster;

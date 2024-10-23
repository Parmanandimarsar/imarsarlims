import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
  Box,
  Divider,
  Checkbox,
  Typography,
} from "@mui/material";
import CustomDropdowSearchPopover from "../../ConstantComponents/PopoverSearchSelectSingalDropComp";
import ImageView from "../../TableField/ImageView";
import image from "../../../../src/assets/images/E-Midas Logo.png";
import DataGridTable from "../../ConstantComponents/DataGridTable";
import { NABLMasterColumns } from "../../TableField/TablefieldsColumns";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  bookingCenter: Yup.string().required("Booking Center is required"),
  department: Yup.string().required("Department is required"),
  investigation: Yup.string().when("department", {
    is: (value) => value !== "",
    then: (schema) => schema.required("Investigation is required"),
    otherwise: (schema) => schema,
  }),
  useDefaultLogo: Yup.boolean(),
  logo: Yup.mixed().when("useDefaultLogo", {
    is: false,
    then: (schema) => schema.required("Logo is required"),
    otherwise: (schema) => schema,
  }),
});

const NABLMaster = () => {
  const [bookingCenters] = useState([
    { id: "1", name: "Center 1" },
    { id: "2", name: "Center 2" },
    { id: "3", name: "Center 3" },
  ]);

  const [departments] = useState([
    { id: "1", name: "Cardiology" },
    { id: "2", name: "Neurology" },
    { id: "3", name: "Orthopedics" },
  ]);

  const [investigations] = useState([
    { id: "1", name: "MRI" },
    { id: "2", name: "CT Scan" },
    { id: "3", name: "X-Ray" },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentType, setCurrentType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [rows, setRows] = useState([]);

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    const newRow = {
      ...values, // Spread the form values
      id: new Date().getTime(), // Generate a unique string identifier using the current date and time
    };
    setRows((prevRows) => [...prevRows, newRow]);

    resetForm();
  };

  const handlePopoverOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setCurrentType(type);
    setSearchQuery(""); // Clear search query on open
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSearchQuery(""); // Clear search query on close
  };

  const filteredOptions = (options) => {
    return options.filter((option) =>
      option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getOptions = () => {
    switch (currentType) {
      case "bookingCenter":
        return filteredOptions(bookingCenters);
      case "department":
        return filteredOptions(departments);
      case "investigation":
        return filteredOptions(investigations);
      default:
        return [];
    }
  };

  const handleDelete = (row) => {
    const deleteitem = rows.filter((item) => item.id !== row.id);

    setRows(deleteitem);
  };
  console.log("Rows", rows);

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">NABL Master</Typography>
        </Box>
        <Divider className="divider" />

        <Formik
          enableReinitialize
          initialValues={{
            bookingCenter: "",
            department: "",
            investigation: "",
            useDefaultLogo: true,
            logo: image,
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, setFieldValue, values }) => (
            console.log("errors", errors),
            (
              <Form>
                <Grid container spacing={1} className="pl-1">
                  {/* Booking Center Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={3} className="formlableborder">
                          <FormLabel>Booking Center</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Select Booking Center"
                            value={values.bookingCenter}
                            onClick={(e) =>
                              handlePopoverOpen(e, "bookingCenter")
                            }
                            readOnly
                          />
                          <CustomDropdowSearchPopover
                            anchorEl={anchorEl}
                            onClose={handlePopoverClose}
                            options={getOptions()}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onSelect={(name) => {
                              setFieldValue(currentType, name); // Update the current field based on the popover type
                              handlePopoverClose(); // Close the popover after selection
                            }}
                          />
                          {touched.bookingCenter && errors.bookingCenter && (
                            <Typography color="error">
                              {errors.bookingCenter}
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Department Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={3} className="formlableborder">
                          <FormLabel>Department</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Select Department"
                            value={values.department}
                            onClick={(e) => handlePopoverOpen(e, "department")}
                            readOnly
                          />
                          <CustomDropdowSearchPopover
                            anchorEl={anchorEl}
                            onClose={handlePopoverClose}
                            options={getOptions()}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onSelect={(name) => {
                              setFieldValue(currentType, name); // Update the current field based on the popover type
                              handlePopoverClose(); // Close the popover after selection
                            }}
                          />
                          {touched.department && errors.department && (
                            <Typography color="error">
                              {errors.department}
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Investigation Dropdown (Conditional) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={3} className="formlableborder">
                          <FormLabel>Investigation</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Select Investigation"
                            value={values.investigation}
                            onClick={(e) => {
                              if (values.department)
                                handlePopoverOpen(e, "investigation");
                            }}
                            readOnly
                            disabled={!values.department} // Disable if no department is selected
                          />
                          <CustomDropdowSearchPopover
                            anchorEl={anchorEl}
                            onClose={handlePopoverClose}
                            options={getOptions()}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onSelect={(name) => {
                              setFieldValue(currentType, name); // Update the current field based on the popover type
                              handlePopoverClose(); // Close the popover after selection
                            }}
                          />
                          {touched.investigation && errors.investigation && (
                            <Typography color="error">
                              {errors.investigation}
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Use Default Logo Checkbox */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4} className="formlableborder">
                          <FormLabel>Use Default Logo</FormLabel>
                        </Grid>
                        <Grid item xs={7}>
                          <div className="flex">
                            <Checkbox
                              size="small"
                              checked={values.useDefaultLogo}
                              onChange={(e) => {
                                setFieldValue(
                                  "useDefaultLogo",
                                  e.target.checked
                                );
                              }}
                            />
                            <ImageView imageUrl={values.logo} />
                          </div>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Logo Upload (Conditional) */}
                  {!values.useDefaultLogo && (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={3} className="formlableborder">
                            <FormLabel>Logo</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                setFieldValue("logo", file);
                              }}
                            />
                            {touched.logo && errors.logo && (
                              <Typography color="error">
                                {errors.logo}
                              </Typography>
                            )}
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  )}
                </Grid>

                {/* Submit Button */}
                <Grid container justifyContent="flex-end" className="mt-3">
                  <button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="project-thim border-none text-white mr-3 rounded-md"
                  >
                    Submit
                  </button>
                </Grid>
              </Form>
            )
          )}
        </Formik>

        <DataGridTable rows={rows} columns={NABLMasterColumns(handleDelete)} />
      </Box>
    </div>
  );
};

export default NABLMaster;

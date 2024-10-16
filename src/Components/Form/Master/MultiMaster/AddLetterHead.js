import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { MasterAddLetterHead } from "../../../TableField/TablefieldsColumns";
import * as Yup from "yup";
import { Grid, TextField } from "@mui/material";
import { Update } from "@mui/icons-material";

const AddLetterHead = () => {
  const [editRow, setEditRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [rows, setRows] = useState([
    {
      id: 1,
      panelName: "Panel 1",
      reportHeaderHeightY: 100,
      patientYHeader: "John Doe",
      barcodeXPosition: 50,
      qrCodeYPosition: 60,
      qrHeader: "QR Info",
      barcodeHeader: "Barcode Info",
      footerHeight: 30,
      letterHead:
        "https://unsplash.com/photos/young-asian-travel-woman-is-enjoying-with-beautiful-place-in-bangkok-thailand-_Fqoswmdmoo",
    },
    // ... other rows
  ]);
  const initialValues = {
    panelName: "",
    reportHeaderHeightY: "",
    patientYHeader: "",
    barcodeXPosition: "",
    qrCodeYPosition: "",
    qrHeader: "",
    barcodeHeader: "",
    footerHeight: "",
    letterHead: null,
  };

  const handleFilter = () => {
    if (activeFilter === "active") {
      return rows.filter((row) => row.active === true);
    } else if (activeFilter === "inactive") {
      return rows.filter((row) => row.active === false);
    }
    return rows;
  };

  const validationSchema = Yup.object().shape({
    panelName: Yup.string().required("Panel Name is required"),
    reportHeaderHeightY: Yup.number()
      .required("Report Header Height Y is required")
      .positive("Must be a positive number"),
    patientYHeader: Yup.string().required("Patient Y Header is required"),
    barcodeXPosition: Yup.number()
      .required("Barcode X Position is required")
      .positive("Must be a positive number"),
    qrCodeYPosition: Yup.number()
      .required("QR Code Y Position is required")
      .positive("Must be a positive number"),
    qrHeader: Yup.string().required("QR Header is required"),
    barcodeHeader: Yup.string().required("Barcode Header is required"),
    footerHeight: Yup.number()
      .required("Footer Height is required")
      .positive("Must be a positive number"),
    letterHead: Yup.mixed().required("Letter Head is required"),
  });

  const handleToggleActive = (row) => {
    const updatedRows = rows.map((r) =>
      r.id === row.id ? { ...r, active: !r.active } : r
    );
    setRows(updatedRows);
  };

  const handleEdit = (row) => {
    setEditRow(row);
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("valuse",values);
    
    const formData = {
      ...values,
      letterHead: URL.createObjectURL(values.letterHead), // Create a URL for the image
    };

    if (editRow) {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === editRow.id ? { ...row, ...formData } : row
        )
      );
    } else {
      // Add new row
      setRows([
        ...rows,
        {
          id: rows.length + 1,
          ...formData,
        },
      ]);
    }
    setEditRow(null);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography className="titleheadingtext">Add Letter Head</Typography>
        </Box>
        <Divider className="divider" />
        <div className="flex">
          <FormControl sx={{ width: 150 }}>
            <Select
              className="p-0 text-white"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <MenuItem value="all">Client</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <div className="flex items-end ml-auto gap-2 justify-end">
          <p className="divider text-red-500 font-bold">
            0:No(In footer), 1: Yes(in Header) , PatientYHeader (Y axis)
            :(Patient info),ReporrtHeaderHeightY: (Report)
          </p>
        </div>
        </div>

        <Formik
          initialValues={editRow || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ isSubmitting, touched, errors, setFieldValue, values }) => (
            console.log(errors),
            
            <Form className="p-1">
              <Divider className="divider" />
              <Grid container spacing={2}>
                {/* Panel Name */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Panel Name</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="panelName"
                          placeholder="Enter Panel Name"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={touched.panelName && !!errors.panelName}
                        />
                        <ErrorMessage
                          name="panelName"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Report Header Height Y */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Report Hdr H.Y</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="reportHeaderHeightY"
                          placeholder="Enter Report Header Height Y"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={
                            touched.reportHeaderHeightY &&
                            !!errors.reportHeaderHeightY
                          }
                        />
                        <ErrorMessage
                          name="reportHeaderHeightY"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Patient Y Header */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Patient Y Hdr.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="patientYHeader"
                          placeholder="Enter Patient Y Header"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={
                            touched.patientYHeader && !!errors.patientYHeader
                          }
                        />
                        <ErrorMessage
                          name="patientYHeader"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Barcode X Position */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Barcode X Po.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="barcodeXPosition"
                          placeholder="Enter Barcode X Position"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={
                            touched.barcodeXPosition &&
                            !!errors.barcodeXPosition
                          }
                        />
                        <ErrorMessage
                          name="barcodeXPosition"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* QR Code Y Position */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>QR Code Y Po.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="qrCodeYPosition"
                          placeholder="Enter QR Code Y Position"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={
                            touched.qrCodeYPosition && !!errors.qrCodeYPosition
                          }
                        />
                        <ErrorMessage
                          name="qrCodeYPosition"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* QR Header */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>QR Header</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="qrHeader"
                          placeholder="Enter QR Header"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={touched.qrHeader && !!errors.qrHeader}
                        />
                        <ErrorMessage
                          name="qrHeader"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Barcode Header */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Barcode Header</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="barcodeHeader"
                          placeholder="Enter Barcode Header"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={
                            touched.barcodeHeader && !!errors.barcodeHeader
                          }
                        />
                        <ErrorMessage
                          name="barcodeHeader"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Footer Height */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Footer Height</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="footerHeight"
                          placeholder="Enter Footer Height"
                          fullWidth
                          variant="outlined"
                          size="small"
                          className="mandatoryfield"
                          error={touched.footerHeight && !!errors.footerHeight}
                        />
                        <ErrorMessage
                          name="footerHeight"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Letter Head Image Upload */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Letter Head</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <input
                            id="file"
                            name="letterHead"
                            type="file"
                            onChange={(event) => {
                              setFieldValue(
                                "letterHead",
                                event.currentTarget.files[0]
                              );
                            }}
                            className="mandatoryfield"
                          />
                          <ErrorMessage
                            name="file"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Submit Button */}
                <div className="flex items-end gap-2 justify-end ml-4">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    // disabled={isSubmitting}
                  >
                   {editRow?"Update":"Save"} 
                  </Button>
                </div>
              </Grid>

              <Divider className="divider" />
              <div className="h-[150px] w-full">
                <DataGrid
                  className="datagridtable"
                  rows={handleFilter()}
                  columns={MasterAddLetterHead(
                    handleToggleActive,
                    handleEdit,
                    handleDelete 
                  )}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  columnHeaderHeight={20}
                  rowHeight={25}
                  headerHeight={20}
                  hideFooterSelectedRowCount
                />
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default AddLetterHead;

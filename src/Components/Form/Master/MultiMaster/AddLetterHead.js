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
  TextField,
} from "@mui/material";
import { MasterAddLetterHead } from "../../../TableField/TablefieldsColumns";
import * as Yup from "yup";
import { Grid } from "@mui/material";

const AddLetterHead = () => {
  const [editRow, setEditRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [rows, setRows] = useState([
    {
      id: "1",
      center: "1",
      reportHeaderHeightY: "280",
      patientYHeader: "110",
      barcodeXPosition: "110",
      barcodeYPosition: "-590",
      qrCodeXPosition: "350",
      qrCodeYPosition: "10",
      qrHeader: "0",
      barcodeHeader: "1",
      footerHeight: "120",
      letterHead: null,
      receiptHeader: null,
      receiptFooter: null,
      rWaterMark: null,
    },
  ]);

  const initialValues = {
    center: "1",
    reportHeaderHeightY: "280",
    patientYHeader: "110",
    barcodeXPosition: "110",
    barcodeYPosition: "-590",
    qrCodeXPosition: "350",
    qrCodeYPosition: "10",
    qrHeader: "0",
    barcodeHeader: "1",
    footerHeight: "120",
    letterHead: null,
    receiptHeader: null,
    receiptFooter: null,
    rWaterMark: null,
  };

  const handleFilter = () => {
    if (activeFilter === "1") {
      return rows.filter((row) => row.center === "1");
    } else if (activeFilter === "2") {
      return rows.filter((row) => row.center === "2");
    }
    return rows; 
  };
  

  const validationSchema = Yup.object().shape({
    center: Yup.string().required("Center Name is required"),
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

  const handleEdit = (row) => {
    console.log("row", row);

    setEditRow(row);
  };

  const handleDelete = (Id) => {
    console.log(Id, "id");

    const updatedRows = rows.filter((row) => row.id !== Id.id);
    console.log("updatedRows", updatedRows);

    setRows(updatedRows);
  };

  const onSubmit = (values, { setSubmitting, resetForm, setFieldValue }) => {
    const formData = {
      ...values,
    };

    if (editRow) {
      // Update the existing row
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === editRow.id ? { ...row, ...formData } : row
        )
      );
      setEditRow(null); // Clear editRow after update
    } else {
      // Add new row
      setRows((prevRows) => [
        ...prevRows,
        {
          id: prevRows.length + 1,
          ...formData,
        },
      ]);
    }

    setFieldValue("letterHead", null);
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
              <MenuItem value="all">Center</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Formik
          initialValues={editRow || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ isSubmitting, touched, errors, setFieldValue, values }) => (
            <Form className="p-1">
              <Divider className="divider" />
              <Grid container spacing={1}>
                {/* Center Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Center</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          className="mandatoryfield"
                          name="center"
                          fullWidth
                          variant="outlined"
                          displayEmpty
                          size="small"
                          error={touched.center && !!errors.center}
                        >
                          <MenuItem value="" disabled>
                            -Select-
                          </MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="center"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Report Header Height Y Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Report HdrH.Y</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          className="mandatoryfield"
                          name="reportHeaderHeightY"
                          fullWidth
                          variant="outlined"
                          size="small"
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

                {/* Patient Y Header Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Patient Y H</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          className="mandatoryfield"
                          name="patientYHeader"
                          fullWidth
                          variant="outlined"
                          size="small"
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

                {/* Barcode X Position Field */}
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
                          className="mandatoryfield"
                          name="barcodeXPosition"
                          fullWidth
                          variant="outlined"
                          size="small"
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
                {/* Barcode y Position Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Barcode Y Po.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          className="mandatoryfield"
                          name="barcodeYPosition"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.barcodeYPosition &&
                            !!errors.barcodeYPosition
                          }
                        />
                        <ErrorMessage
                          name="barcodeYPosition"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                {/* QR Code X Position Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>QR Code X Po.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          className="mandatoryfield"
                          as={TextField}
                          name="qrCodeXPosition"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.qrCodeXPosition && !!errors.qrCodeXPosition
                          }
                        />
                        <ErrorMessage
                          name="qrCodeXPosition"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* QR Code Y Position Field */}
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
                          className="mandatoryfield"
                          as={TextField}
                          name="qrCodeYPosition"
                          fullWidth
                          variant="outlined"
                          size="small"
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

                {/* QR Header Field */}
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
                          className="mandatoryfield"
                          name="qrHeader"
                          fullWidth
                          variant="outlined"
                          size="small"
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

                {/* Barcode Header Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Barcode Hy</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          className="mandatoryfield"
                          as={TextField}
                          name="barcodeHeader"
                          fullWidth
                          variant="outlined"
                          size="small"
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

                {/* Footer Height Field */}
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
                          className="mandatoryfield"
                          name="footerHeight"
                          fullWidth
                          variant="outlined"
                          size="small"
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

                {/* Letter Head Field */}
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
                        <input
                          className="mandatoryfield"
                          type="file"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("letterHead", file);
                          }}
                          accept="image/*"
                        />
                        <ErrorMessage
                          name="letterHead"
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
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Receipt Header</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <input
                          className="mandatoryfield"
                          type="file"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("receiptHeader", file);
                          }}
                          accept="image/*"
                        />
                        <ErrorMessage
                          name="receiptHeader"
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
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Receipt Footer</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <input
                          className="mandatoryfield"
                          type="file"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("receiptFooter", file);
                          }}
                          accept="image/*"
                        />
                        <ErrorMessage
                          name="receiptFooter"
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
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel> R.WaterMark</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <input
                          className="mandatoryfield"
                          type="file"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("rWaterMark", file);
                          }}
                          accept="image/*"
                        />
                        <ErrorMessage
                          name="rWaterMark"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider className="divider" />
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="project-thim border text-white rounded-md"
                  size="small"
                  disabled={isSubmitting}
                  // sx={{ bgcolor: "#1e88e5", "&:hover": { bgcolor: "#1565c0" } }}
                >
                  {editRow ? "Update" : "Save"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <Divider className="divider" />
        <Box sx={{ height: 150, width: "100%" }}>
          <DataGrid
            rows={handleFilter()}
            columns={MasterAddLetterHead(handleEdit, handleDelete)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            columnHeaderHeight={20}
            rowHeight={25}
            headerHeight={20}
            hideFooterSelectedRowCount
          />
        </Box>
      </Box>
    </div>
  );
};

export default AddLetterHead;

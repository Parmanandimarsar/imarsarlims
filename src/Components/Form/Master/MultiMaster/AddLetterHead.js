import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import { Switch, Typography } from "@mui/material";
import { MasterAddLetterHead } from "../../../TableField/TablefieldsColumns";

import * as Yup from "yup";

import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import { ExportToExcel } from "../../../ConstantItems/ExcelExport";
import { DataGridPro } from "@mui/x-data-grid-pro";
const AddLetterHead = () => {
  const [editRow, setEditRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  console.log("MasterAddLetterHead", MasterAddLetterHead);

  const [rows, setRows] = useState([
    {
      id: 1,
      RoleMaster: "Emidas",
      active: true,
    },
  ]);

  const initialValues = {
    RoleMaster: "",
    active: false,
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
    RoleMaster: Yup.string().required(" Role Master is required"),
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

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (editRow) {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === editRow.id ? { ...row, ...values } : row
        )
      );
    } else {
      // Add new row
      setRows([
        ...rows,
        {
          id: rows.length + 1,
          RoleMaster: values.RoleMaster,
          ...values,
        },
      ]);
    }
    setEditRow(null);
    resetForm();
    setSubmitting(false);
  };
  const exportToExcel = () => {
    const headers = ["S.No", "Add Letter Head", "Active"];
    const data = rows.map((row) => [
      row.id,
      row.RoleMaster,
      row.active ? "Active" : "Inactive",
    ]);

    ExportToExcel(data, headers, "Add_Letter_Head.xlsx");
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography className="titleheadingtext">Add Letter Head</Typography>
        </Box>
        <Divider className="divider" />
        <div className="">
          <FormControl sx={{ width: 150 }}>
            <Select
              className="p-0  text-white"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <MenuItem value="all">Client</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
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

              <Grid container spacing={2}>
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
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="ReportHeaderHeightY"
                            placeholder="Enter Report Header Height Y"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.ReportHeaderHeightY &&
                              !!errors.ReportHeaderHeightY
                            }
                          />
                          <ErrorMessage
                            name="ReportHeaderHeightY"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
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
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="PatientYHeader"
                            placeholder="Enter Patient Y Header"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.PatientYHeader && !!errors.PatientYHeader
                            }
                          />
                          <ErrorMessage
                            name="PatientYHeader"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
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
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="BarcodeXPosition"
                            placeholder="Enter Barcode X Position"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.BarcodeXPosition &&
                              !!errors.BarcodeXPosition
                            }
                          />
                          <ErrorMessage
                            name="BarcodeXPosition"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Barcode Y Position */}
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
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="BarcodeYPosition"
                            placeholder="Enter Barcode Y Position"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.BarcodeYPosition &&
                              !!errors.BarcodeYPosition
                            }
                          />
                          <ErrorMessage
                            name="BarcodeYPosition"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* QR Code X Position */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>QR Code X Po</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="QRCodeXPosition"
                            placeholder="Enter QR Code X Position"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.QRCodeXPosition &&
                              !!errors.QRCodeXPosition
                            }
                          />
                          <ErrorMessage
                            name="QRCodeXPosition"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
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
                        <FormLabel>QR Code Y Po</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="QRCodeYPosition"
                            placeholder="Enter QR Code Y Position"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.QRCodeYPosition &&
                              !!errors.QRCodeYPosition
                            }
                          />
                          <ErrorMessage
                            name="QRCodeYPosition"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* is QR Header */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel> QR Header</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="isQRheader"
                            placeholder="Enter QR Header"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={touched.isQRheader && !!errors.isQRheader}
                          />
                          <ErrorMessage
                            name="isQRheader"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* is Barcode Header */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Barcode Hdr </FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="isBarcodeHeader"
                            placeholder="Enter Barcode Header"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.isBarcodeHeader &&
                              !!errors.isBarcodeHeader
                            }
                          />
                          <ErrorMessage
                            name="isBarcodeHeader"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
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
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            name="FooterHeight"
                            placeholder="Enter Footer Height"
                            fullWidth
                            variant="outlined"
                            size="small"
                            className="mandatoryfield"
                            error={
                              touched.FooterHeight && !!errors.FooterHeight
                            }
                          />
                          <ErrorMessage
                            name="FooterHeight"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4} className="formlableborder">
                        <FormLabel>Choose File</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <input
                            id="file"
                            name="file"
                            type="file"
                            onChange={(event) => {
                              setFieldValue(
                                "file",
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
              </Grid>

              <Divider className="divider" />
              <div className="h-[150px] w-full">
                <DataGrid
                  className="datagridtable"
                  rows={handleFilter()}
                  columns={MasterAddLetterHead(
                    handleToggleActive,
                    handleEdit,
                    Switch
                    // handleDelete
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

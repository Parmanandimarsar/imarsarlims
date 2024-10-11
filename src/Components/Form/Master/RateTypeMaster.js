import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import { Switch, Checkbox } from "@mui/material";
import { MasterRateTypeColumns } from "../../TableField/TablefieldsColumns";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Divider,
  ListItemText,
} from "@mui/material";

const names = ["Rate1", "Rate2", "Rate3", "Rate4"];

const RateTypeMaster = () => {
  const [editRow, setEditRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [rows, setRows] = useState([
    {
      id: 1,
      rateType: "Emidas",
      center: ["Emidas info system", "UAT DEMO"],
      active: true,
    },
  ]);

  const initialValues = {
    rateType: "",
    center: [],
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
  // Validation schema
  const validationSchema = Yup.object().shape({
    rateType: Yup.string().required("Rate type is required"),
    center: Yup.array().min(1, "At least one center must be selected"),
  });

  // Handle Switch Toggle (active/inactive)
  const handleToggleActive = (row) => {
    const updatedRows = rows.map((r) =>
      r.id === row.id ? { ...r, active: !r.active } : r
    );
    setRows(updatedRows);
  };

  // Handle Edit
  const handleEdit = (row) => {
    setEditRow(row);
  };

  // Form submission handler
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (editRow) {
      // Update existing row
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === editRow.id ? { ...row, ...values } : row
        )
      );
    } else {
      // Add new row
      setRows([
        ...rows,
        { id: rows.length + 1, rateType: values.rateType, ...values },
      ]);
    }
    setEditRow(null);
    resetForm();
    setSubmitting(false);
  };
  const convertToCSV = (rows) => {
    const headers = ["S.No", "Rate Type", "Center", "Active"];
    const csvRows = [
      headers.join(","), // Join headers
      ...rows.map((row) =>
        [
          row.id,
          row.rateType,
          `"${row.center.join(", ")}"`, // Convert array to comma-separated string
          row.active ? "Active" : "Inactive", // Convert boolean to string
        ].join(",")
      ),
    ];
    return csvRows.join("\n");
  };
  const exportToCSV = () => {
    const csvData = convertToCSV(rows); // Get CSV string
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "rate_type_master.csv"); // File name
    link.click();
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography>Rate Type Master</Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={editRow || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ isSubmitting, touched, errors, setFieldValue, values }) => (
            <Form className="p-1">
              <Grid container spacing={2}>
                {/* Rate Type Input */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder mr-1"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Rate Type</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            className="mandatoryfield"
                            name="rateType"
                            fullWidth
                            placeholder="Enter Rate Type"
                            size="small"
                            error={touched.rateType && !!errors.rateType}
                          ></Field>
                          <ErrorMessage
                            name="rateType"
                            component="div"
                            className="text-red-600 text-[10px]"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Center Select */}
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
                        <FormControl fullWidth>
                          <Select
                            multiple
                            className="mandatoryfield"
                            value={values.center}
                            onChange={(event) => {
                              const {
                                target: { value },
                              } = event;
                              setFieldValue(
                                "center",
                                typeof value === "string"
                                  ? value.split(",")
                                  : value
                              );
                            }}
                            renderValue={(selected) => selected.join(", ")}
                          >
                            {names.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox
                                  checked={values.center.includes(name)}
                                  size="small"
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                          <ErrorMessage
                            name="center"
                            component="div"
                            className="text-red-600 text-[10px]"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <button
                  type="submit"
                  className="border px-5 mt-3 rounded-lg project-thim text-white"
                >
                  {editRow ? "Update" : "Save"}
                </button>
                <div className="flex items-end ml-auto justify-end">
                  <div>
                    <FormControl sx={{ width: 150 }}>
                      <Select
                        className="p-1  text-white"
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                      >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <button
                    className="border p-1 px-3 rounded-lg project-thim text-white"
                    onClick={exportToCSV}
                  >
                    Export
                  </button>
                </div>
              </Grid>

              <Divider className="divider" />
              <div className="h-[300px] w-full">
                <DataGrid
                  className="datagridtable"
                  rows={handleFilter()}
                  columns={MasterRateTypeColumns(
                    handleToggleActive,
                    handleEdit,
                    Switch
                  )}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  columnHeaderHeight={20}
                  rowHeight={25}
                  headerHeight={20}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default RateTypeMaster;
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import {
  Switch,
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import * as Yup from "yup";
import {
  Grid,
  Button,
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
  const [rows, setRows] = useState([
    {
      id: 1,
      rateType: "Emidas",
      center: ["Emidas info system", "UAT DEMO"],
      active: true,
    },
    
  ]);

  const [editRow, setEditRow] = useState(null);

  const initialValues = {
    rateType: "",
    center: [],
    active: false,
  };

  const columns = [
    { field: "id", headerName: "S.No", width: 100, disableColumnMenu: true },
    {
      field: "rateType",
      headerName: "Rate Type",
      width: 200,
      disableColumnMenu: true,
    },
    {
      field: "center",
      headerName: "Center",
      width: 600,
      headerAlign: "center",
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="w-full text-center">{params.value.join(", ")}</div>
      ),
    },
    // {Array.isArray(params.value) ? params.value.join(", ") : ""}
    {
      field: "active",
      headerName: "Active",
      width: 150,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="flex justify-center items-center">
          <Switch
            size="small"
            checked={params.value}
            onChange={() => handleToggleActive(params.row)}
          />
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Edit",
      width: 100,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="flex justify-center items-center">
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon sx={{ fontSize: "15px" }} />
          </IconButton>
        </div>
      ),
    },
  ];

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
                            name="rateType"
                            fullWidth
                            placeholder="Enter Rate Type"
                            size="small"
                            error={touched.rateType && !!errors.rateType}
                          ></Field>
                          <ErrorMessage
                            name="rateType"
                            component="div"
                            className="text-red-600 text-xs"
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
                            className="text-red-600 text-xs"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                <div className="flex items-end ml-auto justify-end">
                  <button
                    type="submit"
                    className="border p-1 px-3 rounded-lg project-thim text-white"
                  >
                    {editRow ? "Update" : "Save"}
                  </button>
                </div>
              </Grid>

              <Divider className="divider" />
              <div className="h-[300px] w-full p-4">
                <DataGrid
                  className="datagridtable"
                  rows={rows}
                  columns={columns}
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

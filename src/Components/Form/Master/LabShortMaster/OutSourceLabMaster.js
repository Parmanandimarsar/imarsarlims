import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import { Switch } from "@mui/material";
import { MasterOutSourceLabMaster } from "../../../TableField/TablefieldsColumns";

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
import { ExportToExcel } from "../../../ConstantComponents/ExcelExport";
const OutSourceLabMaster = () => {
  const [editRow, setEditRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const [rows, setRows] = useState([
    {
      id: 1,
      OutSourceLabMaster: "Emidas",
      active: true,
    },
  ]);

  const initialValues = {
    OutSourceLabMaster: "",
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
    OutSourceLabMaster: Yup.string().required(" Out SourceLab Master is required"),
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
          OutSourceLabMaster: values.OutSourceLabMaster,
          ...values,
        },
      ]);
    }
    setEditRow(null);
    resetForm();
    setSubmitting(false);
  };
  const exportToExcel = () => {
    const headers = ["S.No", "Out SourceLab Master", "Active"];
    const data = rows.map((row) => [
      row.id,
      row.OutSourceLabMaster,
      row.active ? "Active" : "Inactive",
    ]);

    ExportToExcel(data, headers, "Out_SourceLab_Master.xlsx");
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
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
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={5}
                        className="formlableborder mr-1"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Out SourceLab Master</FormLabel>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <Field
                            as={TextField}
                            className="mandatoryfield"
                            name="OutSourceLabMaster"
                            fullWidth
                            placeholder="Enter Out SourceLab Master"
                            size="small"
                            error={
                              touched.OutSourceLabMaster && !!errors.OutSourceLabMaster
                            }
                          ></Field>
                          <ErrorMessage
                            name="OutSourceLabMaster"
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
                  className="border-none px-5 mt-3  rounded-lg project-thim text-white"
                >
                  {editRow ? "Update" : "Save"}
                </button>
                <div className="flex items-end ml-auto gap-2 justify-end">
                  <div>
                    <FormControl sx={{ width: 150 }}>
                      <Select
                        className="p-0  text-white"
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
                    className="border p-1 px-3 mx-5 border-none rounded-lg project-thim text-white"
                    onClick={exportToExcel}
                  >
                    Export
                  </button>
                </div>
              </Grid>

              <Divider className="divider" />
              <div className="h-[150px] w-full">
                <DataGrid
                  className="datagridtable"
                  rows={handleFilter()}
                  columns={MasterOutSourceLabMaster(
                    handleToggleActive,
                    handleEdit,
                    Switch
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

export default OutSourceLabMaster;


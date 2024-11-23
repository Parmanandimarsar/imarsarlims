

import React, { useState, useRef } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DataGridTable from "../../ConstantComponents/DataGridTable"

const microTypeOptions = [
  { id: 1, name: "Antibiotic" },
  { id: 2, name: "Organism" },
];

const statusOptions = [
  { id: 1, name: "Active" },
  { id: 2, name: "Inactive" },
];

const validationSchema = Yup.object({
  microType: Yup.string().required("Micro Type is required"),
  organismAntibiotic: Yup.string().required("Organism Antibiotic is required"),
  machineCode: Yup.string().required("Machine Code is required"),
  active: Yup.boolean(),
});

const MicroOrganismAntibioticMaster = () => {
  const [savedData, setSavedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "microType", headerName: "Micro Type", width: 200 },
    {
      field: "organismAntibiotic",
      headerName: "Organism Antibiotic",
      width: 200,
    },
    { field: "machineCode", headerName: "Machine Code", width: 200 },
    { field: "active", headerName: "Active", width: 100 },
  ];

  const filteredData = savedData.filter(
    (row) =>
      row.microType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.organismAntibiotic
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      row.machineCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Formik
      initialValues={{
        microType: "",
        organismAntibiotic: "",
        machineCode: "",
        active: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setSavedData((prev) => [...prev, { id: prev.length + 1, ...values }]);
        resetForm();
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <Box className="mb-[50px] pl-2">
            <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
              <Box
                className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
                style={{ backgroundColor: "#1976d2" }}
              >
                <Typography style={{ color: "#fff" }}>
                  Micro Organism Antibiotic Master
                </Typography>
              </Box>
              <Divider className="divider" />

              <Grid container spacing={1} p={1}>
                {/* Micro Type Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.microType && touched.microType)}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Micro Type</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          select
                          SelectProps={{
                            native: true,
                          }}
                          fullWidth
                          value={values.microType}
                          onChange={(e) =>
                            setFieldValue("microType", e.target.value)
                          }
                        >
                          <option value="">Select Micro Type</option>
                          {microTypeOptions.map((option) => (
                            <option key={option.id} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </TextField>
                        {touched.microType && errors.microType && (
                          <Typography color="error" variant="caption">
                            {errors.microType}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Organism Antibiotic Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(
                      errors.organismAntibiotic && touched.organismAntibiotic
                    )}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs={4} className="formlableborder">
                        <FormLabel>Organism Antibiotic</FormLabel>
                      </Grid>
                      <Grid item xs={7}>
                        <TextField
                          fullWidth
                          value={values.organismAntibiotic}
                          onChange={(e) =>
                            setFieldValue("organismAntibiotic", e.target.value)
                          }
                          placeholder="Enter Organism Antibiotic"
                        />
                        {touched.organismAntibiotic &&
                          errors.organismAntibiotic && (
                            <Typography color="error" variant="caption">
                              {errors.organismAntibiotic}
                            </Typography>
                          )}
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Machine Code Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.machineCode && touched.machineCode)}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Machine Code</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          value={values.machineCode}
                          onChange={(e) =>
                            setFieldValue("machineCode", e.target.value)
                          }
                          placeholder="Enter Machine Code"
                        />
                        {touched.machineCode && errors.machineCode && (
                          <Typography color="error" variant="caption">
                            {errors.machineCode}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Active Checkbox */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box sx={{display:"flex"}}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={3} className="formlableborder">
                          <FormLabel>Active</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Checkbox
                            checked={values.active}
                            onChange={(e) =>
                              setFieldValue("active", e.target.checked)
                            }
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                    <button type="submit" className="project-thim border-none text-white rounded-md" variant="contained" color="primary">
                      Save
                    </button>
                  </Box>
                </Grid>
              </Grid>

              {/* Buttons */}
              <Box textAlign="center" p={2}>
                <TextField
                  style={{ marginLeft: "20px", width: "200px" }}
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Box>

              {/* DataGrid Table */}
              <Box mt={2}>
                <DataGridTable
                  rows={filteredData}
                  columns={columns}
                  pageSize={5}
                  autoHeight
                />
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MicroOrganismAntibioticMaster;

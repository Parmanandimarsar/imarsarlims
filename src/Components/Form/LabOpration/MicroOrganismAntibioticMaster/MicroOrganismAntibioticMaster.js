import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DataGridTable from "../../../ConstantComponents/DataGridTable";
import { MicroOrganismAntibioticMastercolumns } from "../../../TableField/TablefieldsColumns";
import ModalComponent from "../../../ConstantComponents/ModalComponent";
import AntibioticTableModal from "./AntibioticTableModal";

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
  const [rows, setRows] = useState([]);
  const [filterMicroType, setFilterMicroType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [editRows, setEditRows] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const initialValues = {
    microType: "",
    organismAntibiotic: "",
    machineCode: "",
    active: true,
  };
  const filteredData = rows.filter((row) => {
    const matchesMicroType =
      !filterMicroType || row.microType === filterMicroType;
    const matchesStatus =
      !filterStatus ||
      (filterStatus === "Active" && row.active) ||
      (filterStatus === "Inactive" && !row.active);
    return matchesMicroType && matchesStatus;
  });
  const handleEdit = (row) => {
    console.log("edit", row);

    setEditRows(row);
  };
  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Submitted with values:", values);
    if (editRows) {
      setRows((prev) =>
        prev.map((item) =>
          item.id === editRows.id ? { ...item, ...values } : item
        )
      );
      setEditRows(null); // Clear the edit state
    } else {
      setRows((prev) => [...prev, { ...values, id: new Date().getTime() }]);
    }
    resetForm(); // Reset the form after submission
  };
  const handleTag = (row) => {
    console.log("handleTag",row);
    
    setSelectedTags(row);
    setCheckedItems([]); // Reset checked items
    setOpenModal(true); // Open the modal
  };
  // const handleTagChange = (tag) => {
  //   setSelectedTags((prev) =>
  //     prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
  //   );
  // };
  const handleModalSave = (modalData) => {
    console.log("modalData",modalData);
    
    // Update the row with selected tags
    setRows((prev) =>
      prev.map((row) =>
        row.id === selectedTags.id ? { ...row, tags: modalData } : row
      )
    );
    
    setOpenModal(false); // Close modal
  };
  console.log("rows",rows);
  return (
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
        <Formik
          enableReinitialize
          initialValues={editRows || initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <Grid container spacing={1} p={1}>
                {/* Form Fields */}
                {/* Micro Type */}
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
                  <Box sx={{ display: "flex" }}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={3} className="formlableborder">
                          <FormLabel>Active</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Checkbox
                            size="small"
                            checked={values.active}
                            onChange={(e) =>
                              setFieldValue("active", e.target.checked)
                            }
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                    <button
                      type="submit"
                      className="project-thim border-none text-white rounded-md"
                      variant="contained"
                      color="primary"
                    >
                      Save
                    </button>
                  </Box>
                </Grid>
              </Grid>

              <Divider className="divider" />
              <Grid container spacing={1} p={1}>
                {/* Filter Section */}

                {/* Filter by Micro Type */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.machineCode && touched.machineCode)}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Micro Type</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          select
                          SelectProps={{ native: true }}
                          value={filterMicroType}
                          onChange={(e) => setFilterMicroType(e.target.value)}
                          fullWidth
                        >
                          <option value="">All</option>
                          {microTypeOptions.map((option) => (
                            <option key={option.id} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                {/* Filter by Status */}

                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.machineCode && touched.machineCode)}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Filter by Status</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          select
                          SelectProps={{ native: true }}
                          value={filterStatus}
                          onChange={(e) => setFilterStatus(e.target.value)}
                          fullWidth
                        >
                          <option value="">All</option>
                          {statusOptions.map((option) => (
                            <option key={option.id} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>
              {/* DataGrid Table */}
              <Box mt={2}>
                <DataGridTable
                  rows={filteredData}
                  columns={MicroOrganismAntibioticMastercolumns(handleEdit,handleTag)}
                  pageSize={5}
                  autoHeight
                />
              </Box>
            </Form>
          )}
        </Formik>
        
        <ModalComponent open={openModal} onClose={()=>setOpenModal(!openModal)} title="My Modal Title">
        <AntibioticTableModal onSave={handleModalSave}/>
        </ModalComponent>
      </Box>
    </Box>
  );
};

export default MicroOrganismAntibioticMaster;

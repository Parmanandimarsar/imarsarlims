import React, { useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Grid,
  Button,
  Divider,
  FormLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DraggableDataGrid from "../../../ConstantComponents/DragableComponents/DraggableDataGrid";
import CustomMenuSearch from "../../../ConstantComponents/CustomMenuSearch";
import { LabTestMappingMasterColumns } from "../../../TableField/TablefieldsColumns";
import NewObservationModal from "./NewObservationModal";

const departmentOptions = [
  { id: 1, name: "Department A" },
  { id: 2, name: "Department B" },
];

const validationSchema = Yup.object({
  department: Yup.string().required("Department is required"),
  testType: Yup.string().required("Test Type is required"),
  profile: Yup.string().when("testType", {
    is: (val) => val === "profile",
    then: (schema) => schema.required("Profile is required"),
    otherwise: (schema) => schema,
  }),
  investigation: Yup.string().when("testType", {
    is: (val) => val === "test",
    then: (schema) => schema.required("Investigation is required"),
    otherwise: (schema) => schema,
  }),
  package: Yup.string().when("testType", {
    is: (val) => val === "package",
    then: (schema) => schema.required("Package is required"),
    otherwise: (schema) => schema,
  }),
});

const LabTestMappingMaster = () => {
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [anchorElTestType, setAnchorElTestType] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElInvestigation, setAnchorElInvestigation] = useState(null);
  const [anchorElPackage, setAnchorElPackage] = useState(null);
  const [anchorElObservation, setAnchorElObservation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [optionsByTestType, setOptionsByTestType] = useState([]);
  const [rows, setRows] = useState([]);
  const [selectedObservations, setSelectedObservations] = useState([]);

  const observationOptions = [
    { id: 1, name: "Observation 1" },
    { id: 2, name: "Observation 2" },
    { id: 3, name: "Observation 3" },
    { id: 4, name: "Observation 4" },
    { id: 5, name: "Observation 5" },
    { id: 6, name: "Observation 6" },
  ];

  const handleObservationSelect = (newSelectedOptions) => {
    console.log("newSelectedOptions", newSelectedOptions);
    setSelectedObservations(newSelectedOptions);
  };

  const OptionsSelectByTestType = {
    TestType: [
      { id: 1, name: "Investigation1" },
      { id: 2, name: "Investigation2" },
    ],
    Profile: [
      { id: 3, name: "Profile1" },
      { id: 4, name: "Profile2" },
    ],
    Package: [
      { id: 3, name: "Package1" },
      { id: 4, name: "Package2" },
    ],
  };

  const rowsDataByInvestagation = {
    Investigation1: [
      { sn: 1, name: "Profile X1", id: 1 },
      { sn: 2, name: "Profile X2", id: 2 },
    ],
    Investigation2: [
      { sn: 3, name: "Profile X3", id: 3 },
      { sn: 4, name: "Profile X4", id: 4 },
    ],
  };
  const rowsDataByProfile = {
    Profile1: [
      { sn: 1, name: "Profile X1", id: 1 },
      { sn: 2, name: "Profile X2", id: 2 },
    ],
    Profile2: [
      { sn: 3, name: "Profile X3", id: 3 },
      { sn: 4, name: "Profile X4", id: 4 },
    ],
  };
  const rowsDataByPackage = {
    Package1: [
      { sn: 1, name: "Package X1", id: 1 },
      { sn: 2, name: "Package X2", id: 2 },
    ],
    Package2: [
      { sn: 3, name: "Package X3", id: 3 },
      { sn: 4, name: "Package X4", id: 4 },
    ],
  };

  const handleRemoveRow = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };
  const handleCheckboxChange = (id, field) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: !row[field] } : row
      )
    );
  };
  const handleMappingClick = (values) => {
    let updatedRows = [];

    // Handle rows based on profile, investigation, or package
    if (values.testType === "Profile" && values.profile) {
      updatedRows = rowsDataByProfile[values.profile] || [];
    } else if (values.testType === "TestType" && values.investigation) {
      updatedRows = rowsDataByInvestagation[values.investigation] || [];
    } else if (values.testType === "Package" && values.package) {
      updatedRows = rowsDataByPackage[values.package] || [];
    }

    console.log("selectedObservations", selectedObservations);

    // Map selected observations into rows if applicable
    if (selectedObservations.length > 0) {
      const observationRows = selectedObservations.map((obs, index) => ({
        sn: updatedRows.length + index + 1, // Incrementing `sn` properly
        name: obs.name,
        id: new Date().getTime() + index, // Ensuring unique `id` for each row
      }));

      console.log("observationRows", observationRows);

      updatedRows = [...updatedRows, ...observationRows];
    }

    setRows(updatedRows);
  };
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <Box className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box
          className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg"
          style={{ backgroundColor: "#1976d2" }}
        >
          <Typography className="pl-1">Lab Test Mapping Master</Typography>
        </Box>
        <Divider />
        <Formik
          initialValues={{
            department: "",
            testType: "",
            profile: "",
            investigation: "",
            package: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form values:", values);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <Grid container spacing={1} p={1}>
                {/* Department Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ mr: "3px" }}
                      className="formlableborder"
                    >
                      <FormLabel>Department</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl
                        error={Boolean(errors.department && touched.department)}
                        fullWidth
                      >
                        <TextField
                          onClick={(e) =>
                            setAnchorElDepartment(e.currentTarget)
                          }
                          value={values.department}
                          placeholder="Select Department"
                          InputProps={{ readOnly: true }}
                        />
                        <CustomMenuSearch
                          options={departmentOptions}
                          selectedOptions={
                            values.department
                              ? [
                                  {
                                    id: values.department,
                                    name: values.department,
                                  },
                                ]
                              : []
                          }
                          setSelectedOptions={(value) => {
                            const selectedDepartment = value[0]?.name || "";
                            setFieldValue("department", selectedDepartment);
                            setFieldValue("testType", "");
                            setFieldValue("profile", "");
                          }}
                          anchorEl={anchorElDepartment}
                          onClose={() => setAnchorElDepartment(null)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                {/* TestType Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ mr: "3px" }}
                      className="formlableborder"
                    >
                      <FormLabel>Test Type</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl
                        error={Boolean(errors.testType && touched.testType)}
                        fullWidth
                      >
                        <TextField
                          onClick={(e) => setAnchorElTestType(e.currentTarget)}
                          value={values.testType}
                          placeholder="Select Test Type"
                          InputProps={{ readOnly: true }}
                        />
                        <CustomMenuSearch
                          options={[
                            { id: 1, name: "TestType" }, // Changed to match conditionals exactly
                            { id: 2, name: "Profile" },
                            { id: 3, name: "Package" },
                          ]}
                          selectedOptions={
                            values.testType
                              ? [
                                  {
                                    id: values.testType,
                                    name: values.testType,
                                  },
                                ]
                              : []
                          }
                          setSelectedOptions={(value) => {
                            const selectedTestType = value[0]?.name || "";
                            setFieldValue("testType", selectedTestType);
                            setFieldValue("profile", "");
                            setFieldValue("investigation", "");
                            setFieldValue("package", "");
                            setOptionsByTestType(
                              OptionsSelectByTestType[selectedTestType] || []
                            );
                          }}
                          anchorEl={anchorElTestType}
                          onClose={() => setAnchorElTestType(null)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Conditionally Rendered Fields based on TestType */}
                {(values.testType === "TestType" || values.testType === "") && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Investigation</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl
                          error={Boolean(
                            errors.investigation && touched.investigation
                          )}
                          fullWidth
                        >
                          <TextField
                            onClick={(e) =>
                              setAnchorElInvestigation(e.currentTarget)
                            }
                            value={values.investigation}
                            placeholder="Select Investigation"
                            InputProps={{ readOnly: true }}
                          />
                          <CustomMenuSearch
                            options={optionsByTestType}
                            selectedOptions={
                              values.investigation
                                ? [
                                    {
                                      id: values.investigation,
                                      name: values.investigation,
                                    },
                                  ]
                                : []
                            }
                            setSelectedOptions={(value) => {
                              const selectedInvestigation =
                                value[0]?.name || "";
                              const newRows =
                                rowsDataByInvestagation[
                                  selectedInvestigation
                                ] || [];

                              setFieldValue(
                                "investigation",
                                selectedInvestigation
                              );

                              setRows(newRows);
                            }}
                            anchorEl={anchorElInvestigation}
                            onClose={() => setAnchorElInvestigation(null)}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                )}

                {values.testType === "Profile" && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Profile</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl
                          error={Boolean(errors.profile && touched.profile)}
                          fullWidth
                        >
                          <TextField
                            onClick={(e) => setAnchorElProfile(e.currentTarget)}
                            value={values.profile}
                            placeholder="Select Profile"
                            InputProps={{ readOnly: true }}
                          />
                          <CustomMenuSearch
                            options={optionsByTestType}
                            selectedOptions={
                              values.profile
                                ? [
                                    {
                                      id: values.profile,
                                      name: values.profile,
                                    },
                                  ]
                                : []
                            }
                            setSelectedOptions={(value) => {
                              const selectedProfile = value[0]?.name || "";

                              setFieldValue("profile", selectedProfile);
                              const newRows =
                                rowsDataByProfile[selectedProfile] || [];

                              setRows(newRows);
                            }}
                            anchorEl={anchorElProfile}
                            onClose={() => setAnchorElProfile(null)}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                )}

                {values.testType === "Package" && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Package</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl
                          error={Boolean(errors.package && touched.package)}
                          fullWidth
                        >
                          <TextField
                            onClick={(e) => setAnchorElPackage(e.currentTarget)}
                            value={values.package}
                            placeholder="Select Package"
                            InputProps={{ readOnly: true }}
                          />
                          <CustomMenuSearch
                            options={optionsByTestType}
                            selectedOptions={
                              values.package
                                ? [
                                    {
                                      id: values.package,
                                      name: values.package,
                                    },
                                  ]
                                : []
                            }
                            setSelectedOptions={(value) => {
                              const selectedPackage = value[0]?.name || "";
                              setFieldValue("package", selectedPackage);
                              const newRows =
                                rowsDataByPackage[selectedPackage] || [];

                              setRows(newRows);
                            }}
                            anchorEl={anchorElPackage}
                            onClose={() => setAnchorElPackage(null)}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Divider />
              <Grid container spacing={1} p={1}>
                <Grid item xs={12} sm={4} md={3}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ mr: "3px" }}
                      className="formlableborder"
                    >
                      <FormLabel> Observation</FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                      <FormControl fullWidth>
                        <TextField
                          onClick={(e) =>
                            setAnchorElObservation(e.currentTarget)
                          }
                          placeholder="Select Observation"
                          value={
                            selectedObservations.length
                              ? selectedObservations
                                  .map((dept) => dept.name)
                                  .join(", ")
                              : ""
                          }
                          InputProps={{ readOnly: true }}
                        />
                        <CustomMenuSearch
                          options={observationOptions}
                          selectedOptions={selectedObservations} // Use selectedObservations from state
                          setSelectedOptions={handleObservationSelect} // Ensure this function is defined
                          anchorEl={anchorElObservation}
                          onClose={() => setAnchorElObservation(null)}
                          isCheckboxMenu
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="center">
                <button
                 
                  onClick={() => handleMappingClick(values)}
                  // disabled={!values.profile}
                >
                  Mapping Observations
                </button>
                <button
                 
                  onClick={() => handleOpen()}
                  // disabled={!values.profile}
                >
                  New Observations
                </button>
              </Box>
             
              <DraggableDataGrid
                rows={rows}
                columns={LabTestMappingMasterColumns(
                  handleCheckboxChange,
                  handleRemoveRow
                )}
                // onRemoveRow={handleRemoveRow}
                // handleCheckboxChange={handleCheckboxChange}
              />
            </Form>
          )}
        </Formik>
      </Box>
      <NewObservationModal open={isModalOpen} handleClose={handleClose} />
    </Box>
  );
};

export default LabTestMappingMaster;

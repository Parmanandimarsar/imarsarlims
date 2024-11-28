import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";
import DataGridTable from "../../ConstantComponents/DataGridTable";

const profileOptions = [
  { id: 1, name: "General" },
  { id: 2, name: "Specific" },
];

// Mock data for profiles
const rowsByProfile = {
  General: [
    { id: 1, sno: 1, testName: "17 Hydroxy Progesterone" },
    { id: 2, sno: 2, testName: "Thyroid Stimulating Hormone (TSH)" },
    { id: 3, sno: 3, testName: "Absolute Eosinophils Count" },
  ],
  Specific: [
    { id: 4, sno: 1, testName: "APTT" },
    { id: 5, sno: 2, testName: "Ciprofloxacin Test" },
    { id: 6, sno: 3, testName: "Glucose Tolerance Test" },
  ],
};

const validationSchema = Yup.object({
  profile: Yup.string().required("Profile is required"),
  observation: Yup.string().required("Observation is required"),
});

const ReportingFormulaMaster = () => {
  const [rows, setRows] = useState([]); // Initially empty rows
  const [formula, setFormula] = useState(""); // Store the formula text
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElObservation, setAnchorElObservation] = useState(null);
  const [formData, setformData] = useState([]);
  // Add selected test name to formula
  const handleAddToFormula = (testName) => {
    setFormula((prev) => `${prev}#${testName}#`);
  };

  // Handle calculator button click
  const handleCalculatorClick = (value) => {
    if (value === undefined || value === null) {
      console.error("Invalid value passed to calculator:", value);
      return; // Prevent further execution if the value is invalid
    }
    setFormula((prev) => `${prev}${value}`);
  };

  // Clear formula
  const handleClearFormula = () => setFormula("");

  // Remove last entry in formula
  const handleRemoveLastEntry = () => {
    const updatedFormula = formula.trim().split(" ");
    updatedFormula.pop();
    setFormula(updatedFormula.join(" "));
  };

  // Generate observation options from rows
  const observationOptions = rows.map((row) => ({
    id: row.id,
    name: row.testName,
  }));
  const handleFormSubmit = (values, { resetForm }) => {
    console.log("formsubmitdata", values);
    setformData((pre)=>[{...pre,...values,formula:formula}])
  };
  // resetForm();
  console.log("formData", formData);
  return (
    <Box className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">Reporting Formula Master</Typography>
        </Box>
        <Divider />

        <Formik
          initialValues={{
            profile: "",
            observation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <Grid container spacing={1} p={1}>
                {/* Profile Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.profile && touched.profile)}
                  >
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
                        <TextField
                          fullWidth
                          onClick={(e) => setAnchorElProfile(e.currentTarget)}
                          value={values.profile}
                          placeholder="Select Profile"
                          InputProps={{ readOnly: true }}
                        />
                        {touched.profile && errors.profile && (
                          <Typography color="error" variant="caption">
                            {errors.profile}
                          </Typography>
                        )}
                        <CustomMenuSearch
                          options={profileOptions ?? []}
                          selectedOptions={
                            values.profile
                              ? [{ id: values.profile, name: values.profile }]
                              : []
                          }
                          setSelectedOptions={(value) => {
                            const selectedProfile = value[0]?.name || "";
                            setFieldValue("profile", selectedProfile);
                            setRows(rowsByProfile[selectedProfile] || []); // Update rows based on profile
                          }}
                          placeholder="Search Profile"
                          anchorEl={anchorElProfile}
                          onClose={() => setAnchorElProfile(null)}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Observation Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.observation && touched.observation)}
                  >
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Observation</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          onClick={(e) =>
                            setAnchorElObservation(e.currentTarget)
                          }
                          value={values.observation}
                          placeholder="Select Observation"
                          InputProps={{ readOnly: true }}
                        />
                        {touched.observation && errors.observation && (
                          <Typography color="error" variant="caption">
                            {errors.observation}
                          </Typography>
                        )}
                        <CustomMenuSearch
                          options={observationOptions ?? []}
                          selectedOptions={
                            values.observation
                              ? [
                                  {
                                    id: values.observation,
                                    name: values.observation,
                                  },
                                ]
                              : []
                          }
                          setSelectedOptions={(value) =>
                            setFieldValue("observation", value[0]?.name || "")
                          }
                          placeholder="Search Observation"
                          anchorEl={anchorElObservation}
                          onClose={() => setAnchorElObservation(null)}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box textAlign="center" display="flex" gap={2}>
                    <button
                      className="savebutton project-thim"
                      onClick={handleClearFormula}
                    >
                      Clear
                    </button>
                    <button
                      className="savebutton project-thim"
                      onClick={handleRemoveLastEntry}
                    >
                      Remove
                    </button>
                    <button type="submit" className="savebutton project-thim">
                      Save
                    </button>
                  </Box>
                </Grid>
              </Grid>

              {/* Data Table */}
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={6}>
                  <DataGridTable
                    rows={rows}
                    columns={[
                      { field: "sno", headerName: "SNo", width: 70 },
                      {
                        field: "testName",
                        headerName: "Test Name",
                        flex: 1,
                        renderCell: (params) => (
                          <Button
                            variant="text"
                            onClick={() =>
                              handleAddToFormula(params.row.testName)
                            }
                          >
                            {params.row.testName}
                          </Button>
                        ),
                      },
                    ]}
                  />
                </Grid>

                {/* Calculator Section */}
                <Grid item xs={12} md={6}>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(9, 1fr)"
                    gap={1}
                    p={1}
                    border="1px solid #ccc"
                    borderRadius={2}
                  >
                    {[ "+","-","*", "/","(", ")", "=","%", ".","^","1","2","3","4","5", "6","7","8","9", "0",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => handleCalculatorClick(item)}
                        className="project-thim savebutton"
                      >
                        {item}
                      </button>
                    ))}
                  </Box>
                  <TextareaAutosize
                    minRows={5}
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
                    style={{
                      border: "1px solid",
                      width: "100%",
                      marginTop: "10px",
                      padding: "8px",
                      fontSize: "12px",
                    }}
                  />
                </Grid>
                {/* Buttons */}
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ReportingFormulaMaster;

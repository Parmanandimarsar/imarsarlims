import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";
import DataGridTable from "../../ConstantComponents/DataGridTable";
import { ReportingFormulaColumns } from "../../TableField/TablefieldsColumns"; // Assuming similar columns setup

const profileOptions = [{ id: 1, name: "General" }];
const observationOptions = [{ id: 1, name: "Blood Test" }];

const validationSchema = Yup.object({
  profile: Yup.string().required("Profile is required"),
  observation: Yup.string().required("Observation is required"),
});

const ReportingFormulaMaster = () => {
  const [rows, setRows] = useState([]);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElObservation, setAnchorElObservation] = useState(null);

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
    console.log("Table data:", rows);
  };

  return (

    <Box className="mb-[50px] pl-2">
    <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
      <Box
        className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
        style={{ backgroundColor: "#1976d2" }}
      >
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
            <Grid container spacing={2}>
              {/* Profile Field */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl
                  fullWidth
                  error={Boolean(errors.profile && touched.profile)}
                >
                  <FormLabel>Profile</FormLabel>
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
                    options={profileOptions}
                    selectedOptions={
                      values.profile
                        ? [{ id: values.profile, name: values.profile }]
                        : []
                    }
                    setSelectedOptions={(value) =>
                      setFieldValue("profile", value[0]?.name || "")
                    }
                    placeholder="Search Profile"
                    anchorEl={anchorElProfile}
                    onClose={() => setAnchorElProfile(null)}
                  />
                </FormControl>
              </Grid>

              {/* Observation Field */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl
                  fullWidth
                  error={Boolean(errors.observation && touched.observation)}
                >
                  <FormLabel>Observation</FormLabel>
                  <TextField
                    fullWidth
                    onClick={(e) => setAnchorElObservation(e.currentTarget)}
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
                    options={observationOptions}
                    selectedOptions={
                      values.observation
                        ? [{ id: values.observation, name: values.observation }]
                        : []
                    }
                    setSelectedOptions={(value) =>
                      setFieldValue("observation", value[0]?.name || "")
                    }
                    placeholder="Search Observation"
                    anchorEl={anchorElObservation}
                    onClose={() => setAnchorElObservation(null)}
                  />
                </FormControl>
              </Grid>
            </Grid>

            
            <Box textAlign="center" p={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
    </Box>
  );
};

export default ReportingFormulaMaster;

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import JoditEditor from "jodit-react";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";

const itemOptions = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

const observationOptions = [
  { id: 3, name: "Observation 1" },
  { id: 4, name: "Observation 2" },
];

const validationSchema = Yup.object({
  templateName: Yup.string().required("Template name is required"),
  itemOrObservation: Yup.string().required("Please select an option"),
  item: Yup.string().when("itemOrObservation", {
    is: "Item wise",
    then: (schema) => schema.required("Item is required"),
    otherwise: (schema) => schema,
  }),
  observation: Yup.string().when("itemOrObservation", {
    is: "Observation wise",
    then: (schema) => schema.required("Observation is required"),
    otherwise: (schema) => schema,
  }),
  joditText: Yup.string().required("Text is required"),
});

const CommentMaster = () => {
  const [anchorElItem, setAnchorElItem] = useState(null);
  const [anchorElObservation, setAnchorElObservation] = useState(null);
  const [editorData, setEditorData] = useState("");
  const editor = useRef(null);

  return (
    <Formik
      initialValues={{
        templateName: "",
        itemOrObservation: "",
        item: "",
        observation: "",
        joditText: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form data:", values);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <div className="mb-[50px] pl-2">
            <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
              <Box
                className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
                style={{ backgroundColor: "#1976d2" }}
              >
                <Typography style={{ color: "#fff" }}>
                  Comment Master
                </Typography>
              </Box>
              <Divider className="divider" />

              <Grid container spacing={1} p={1}>
                {/* Radio Buttons */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl component="fieldset">
                    
                    <RadioGroup
                      row
                      name="itemOrObservation"
                      value={values.itemOrObservation}
                      onChange={(e) =>
                        setFieldValue("itemOrObservation", e.target.value)
                      }
                    >
                      <FormControlLabel
                        value="Item wise"
                        control={<Radio sx={{fontSize:"10px"}}/>}
                        label="Item wise"
                      />
                      <FormControlLabel
                        value="Observation wise"
                        control={<Radio />}
                        label="Observation wise"
                      />
                    </RadioGroup>
                    {touched.itemOrObservation && errors.itemOrObservation && (
                      <Typography color="error" variant="caption">
                        {errors.itemOrObservation}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                {/* Template Name Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.templateName && touched.templateName)}
                  >
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Template Name</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          name="templateName"
                          value={values.templateName}
                          onChange={(e) =>
                            setFieldValue("templateName", e.target.value)
                          }
                          placeholder="Enter Template Name"
                        />
                        {touched.templateName && errors.templateName && (
                          <Typography color="error" variant="caption">
                            {errors.templateName}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Conditional Item Dropdown */}
                {values.itemOrObservation === "Item wise" && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl
                      fullWidth
                      error={Boolean(errors.item && touched.item)}
                    >
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          sx={{ mr: "3px" }}
                          className="formlableborder"
                        >
                          <FormLabel>Item</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            fullWidth
                            onClick={(e) => setAnchorElItem(e.currentTarget)}
                            value={values.item}
                            placeholder="Select Item"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                          {touched.item && errors.item && (
                            <Typography color="error" variant="caption">
                              {errors.item}
                            </Typography>
                          )}
                          <CustomMenuSearch
                            options={itemOptions}
                            selectedOptions={
                              values.item
                                ? [{ id: values.item, name: values.item }]
                                : []
                            }
                            setSelectedOptions={(value) =>
                              setFieldValue("item", value[0]?.name || "")
                            }
                            placeholder="Search Item"
                            anchorEl={anchorElItem}
                            onClose={() => setAnchorElItem(null)}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                )}

                {/* Conditional Observation Dropdown */}
                {values.itemOrObservation === "Observation wise" && (
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
                            InputProps={{
                              readOnly: true,
                            }}
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
                )}

                {/* Jodit Editor */}
                <Grid item xs={12}>
                  
                  <JoditEditor
                    ref={editor}
                    value={editorData}
                    config={{
                      readonly: false, // Enable editing
                      toolbar: true,
                    }}
                    onBlur={(newContent) =>
                      setFieldValue("joditText", newContent)
                    }
                  />
                  <div style={{ marginTop: "20px" }}>
                    <h3>Output Data (HTML):</h3>
                    <pre>{values.joditText}</pre>
                  </div>
                </Grid>
              </Grid>
              <Box textAlign="center" p={2}>
                <button type="submit" variant="contained" color="primary">
                  Submit
                </button>
              </Box>
            </Box>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CommentMaster;

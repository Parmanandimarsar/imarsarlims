
import React, { useState,useRef, useEffect } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import JoditEditor from "jodit-react";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";

const centreOptions = [
  { id: 1, name: "Centre 1" },
  { id: 2, name: "Centre 2" },
];

const departmentOptions = [
  { id: 1, name: "Department 1" },
  { id: 2, name: "Department 2" },
];

const itemOptionsByDepartment = {
  "Department 1": [
    { id: 1, name: "Item 1", text: "This is the text for Item 1" },
    { id: 2, name: "Item 2", text: "This is the text for Item 2" },
  ],
  "Department 2": [
    { id: 3, name: "Item 3", text: "This is the text for Item 3" },
    { id: 4, name: "Item 4", text: "This is the text for Item 4" },
  ],
};

const validationSchema = Yup.object({
  centre: Yup.string().required("Centre is required"),
  departments: Yup.array().min(1, "Select at least one department"),
  items: Yup.string().required("Select item"),
  joditText: Yup.string().required("Text is required"),
});

const InterpretationMaster = () => {
  const [itemOptions, setItemOptions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [anchorElCentre, setAnchorElCentre] = useState(null);
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [anchorElItem, setAnchorElItem] = useState(null);
  const [editorData, setEditorData] = useState("");
  const editor = useRef(null);

  useEffect(() => {
    const selectedItems = departments.flatMap(
      (dept) => itemOptionsByDepartment[dept.name] || []
    );
    setItemOptions(selectedItems);
  }, [departments]);

  const onItemChange = (selectedItem, setFieldValue) => {
    const selectedItemText = selectedItem?.text || "";
    setFieldValue("quillText", selectedItemText); // Sync with Formik
  };

  return (
    <Formik
      initialValues={{
        centre: "",
        departments: [],
        items: "",
        quillText: "",
        printonreport: true,
        printonpackages: true,
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
                <Typography
                 
                  style={{ color: "#fff" }}
                >
                  Interpretation Master
                </Typography>
              </Box>
              <Divider className="divider" />

              <Grid container spacing={2} p={2}>
                {/* Centre Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.centre && touched.centre)}
                  >
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Centre</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          onClick={(e) => setAnchorElCentre(e.currentTarget)}
                          value={values.centre}
                          placeholder="Select Centre"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        {touched.centre && errors.centre && (
                          <Typography color="error" variant="caption">
                            {errors.centre}
                          </Typography>
                        )}
                        <CustomMenuSearch
                          options={centreOptions}
                          selectedOptions={
                            values.centre
                              ? [{ id: values.centre, name: values.centre }]
                              : []
                          }
                          setSelectedOptions={(value) =>
                            setFieldValue("centre", value[0]?.name || "")
                          }
                          placeholder="Centre"
                          anchorEl={anchorElCentre}
                          onClose={() => setAnchorElCentre(null)}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Department Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.departments && touched.departments)}
                  >
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
                        <TextField
                          fullWidth
                          onClick={(e) =>
                            setAnchorElDepartment(e.currentTarget)
                          }
                          value={
                            values.departments.length
                              ? values.departments
                                  .map((dept) => dept.name)
                                  .join(", ")
                              : ""
                          }
                          placeholder="Select Department"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        {touched.departments && errors.departments && (
                          <Typography color="error" variant="caption">
                            {errors.departments}
                          </Typography>
                        )}
                        <CustomMenuSearch
                          options={departmentOptions}
                          selectedOptions={values.departments}
                          setSelectedOptions={(value) => {
                            setFieldValue("departments", value);
                            setDepartments(value);
                          }}
                          placeholder="Search Department"
                          anchorEl={anchorElDepartment}
                          isCheckboxMenu={true}
                          onClose={() => setAnchorElDepartment(null)}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Item Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.items && touched.items)}
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
                          value={values.items}
                          placeholder="Select Item"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        {touched.items && errors.items && (
                          <Typography color="error" variant="caption">
                            {errors.items}
                          </Typography>
                        )}
                        <CustomMenuSearch
                          options={itemOptions}
                          selectedOptions={
                            values.items
                              ? [{ id: values.items, name: values.items }]
                              : []
                          }
                          setSelectedOptions={(value) => {
                            const selectedItem = value[0];
                            setFieldValue("items", selectedItem?.name || "");
                            onItemChange(selectedItem, setFieldValue); // Update quill text in Formik
                          }}
                          placeholder="Search Item"
                          anchorEl={anchorElItem}
                          onClose={() => setAnchorElItem(null)}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* ReactQuill Editor */}
                <Grid item xs={12}>
               
                  <JoditEditor
                    ref={editor}
                    value={editorData}
                    config={{
                      readonly: false, // Enable editing
                      toolbar: true,
                    }}
                    onBlur={newContent => setFieldValue("joditText",newContent)}
                    // onChange={(newContent) => console.log(newContent)} 
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

export default InterpretationMaster;

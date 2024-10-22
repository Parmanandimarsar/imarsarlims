import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { MasterMenu } from "../../TableField/TablefieldsColumns";
import DataGridTable from "../../ConstantItems/DataGridTable";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  menuName: Yup.string().required("Menu Name is required"),
  displaySequence: Yup.number().required("Display Sequence is required"),
  // Add conditional validation for 'menuUrl'
  menuUrl: Yup.string().when("isParentMenu", {
    is: (value) => value === false,
    then: (schema) => schema.required("Menu URL is required"),
    otherwise: (schema) => schema,
  }),
});

const MenuMaster = () => {
  const [menuOptions, setMenuOptions] = useState([]);
  const [menuList, setMenuList] = useState([]); // State to hold the list of menus
  const [editRow, setEditRow] = useState(null); // State to hold the row being edited
  console.log("menulist", menuList);

  // Simulate API call to fetch menu items
  useEffect(() => {
    const parentMenus = menuList.filter((menu) => menu.isParentMenu);
    setMenuOptions(parentMenus);
  }, [menuList]);
  console.log("menuOptions", menuOptions);

  const initialValues = {
    menuName: "",
    displaySequence: "",
    menuUrl: "",
    isParentMenu: true,
    active: true,
    doNotDisplay: false,
    menu: "",
    activate:true,
  };

  const handleFormSubmit = (values, { resetForm, setErrors }) => {
    console.log("values", values);

    const isDuplicate = menuList.some(
      (menu) =>
        menu.menuName.toLowerCase() === values.menuName.toLowerCase() &&
        menu.id !== editRow?.id
    );

    if (isDuplicate) {
      // Set error for the duplicate menuName
      setErrors({ menuName: "Menu name already exists" });
      return; // Stop the submission
    }
    if (editRow) {
      // Update existing row
      setMenuList(
        menuList.map((menu) =>
          menu.id === editRow.id ? { ...values, id: editRow.id } : menu
        )
      );
      setEditRow(null);
    } else {
      // Add new menu item
      setMenuList([...menuList, { ...values, id: new Date().getTime() }]); // Assign a unique ID using timestamp
    }
    resetForm(); // Reset the form after submission
  };

  const handleEdit = (row) => {
    setEditRow(row); // Set the row to be edited
  };

  const handleDelete = (id) => {
    setMenuList(menuList.filter((menu) => menu.id !== id)); // Delete menu item by filtering it out
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim">
          <Typography className="pl-1">Menu Master</Typography>
        </Box>
        <Divider className="divider" />

        <Formik
          enableReinitialize
          initialValues={editRow || initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, handleChange, setFieldValue, values }) => (
            <Form>
              <Grid container spacing={1} className="pl-1">
                {/* Menu Name */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Menu/Sub N.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="menuName"
                          fullWidth
                          placeholder="Enter Menu/Sub Name"
                          variant="outlined"
                          size="small"
                          error={touched.menuName && Boolean(errors.menuName)}
                          helperText={touched.menuName && errors.menuName}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Display Sequence */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Display Seq.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="displaySequence"
                          placeholder="Display Sequence"
                          type="number"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={
                            touched.displaySequence &&
                            Boolean(errors.displaySequence)
                          }
                          helperText={
                            touched.displaySequence && errors.displaySequence
                          }
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Is Parent Menu */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Parent Menu</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="isParentMenu"
                              checked={values.isParentMenu}
                              onChange={(e) => {
                                setFieldValue("isParentMenu", e.target.checked);
                              }}
                            />
                          }
                          label="Parent Menu"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Conditionally Render Fields */}
                {!values.isParentMenu && (
                  <>
                    {/* Menu Dropdown */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid
                            item
                            xs={3}
                            className="formlableborder"
                            sx={{ mr: "3px" }}
                          >
                            <FormLabel>Menu</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={Select}
                              name="menu"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              value={values.menu} // <-- Ensure value is set
                              onChange={(e) =>
                                setFieldValue("menu", e.target.value)
                              } // <-- Handle change correctly
                            >
                              <MenuItem value="" disabled>
                                Select Parent Menu
                              </MenuItem>
                              {menuOptions?.map((option, index) => (
                                <MenuItem key={index} value={option.menuName}>
                                  {option.menuName}
                                </MenuItem>
                              ))}
                            </Field>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>

                    {/* Menu URL */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid
                            item
                            xs={3}
                            className="formlableborder"
                            sx={{ mr: "3px" }}
                          >
                            <FormLabel>Menu URL</FormLabel>
                          </Grid>
                          <Grid item xs={8}>
                            <Field
                              as={TextField}
                              name="menuUrl"
                              fullWidth
                              placeholder="Enter Menu URL"
                              variant="outlined"
                              size="small"
                              error={touched.menuUrl && Boolean(errors.menuUrl)}
                              helperText={touched.menuUrl && errors.menuUrl}
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </>
                )}

                {/* Active and Do not Display */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ disply: "block" }}
                >
                  <FormControl fullWidth>
                    <div clasName="flex">
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="active"
                            checked={values.active}
                            onChange={handleChange}
                          />
                        }
                        label="Active"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="doNotDisplay"
                            checked={values.doNotDisplay}
                            onChange={handleChange}
                          />
                        }
                        label="Hide Page"
                      />
                    </div>
                  </FormControl>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box className=" h-6 flex justify-end ">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="border px-3 mx-5 border-none rounded-lg project-thim text-white"
                    >
                      {editRow ? "Update" : "Save"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        {/* Menu List Table */}
        <Divider className="divider" />
        <div className="h-[150px] w-full">
          <DataGridTable
            rows={menuList}
            columns={MasterMenu(handleEdit, handleDelete)}
          />
        </div>
      </Box>
    </div>
  );
};

export default MenuMaster;

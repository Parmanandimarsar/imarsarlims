import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Box,
  Typography,
  Divider,
  Checkbox,
  Popover,
} from "@mui/material";


// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  role: Yup.string().required("Role is required"),
  menu: Yup.array().min(1, "At least one Menu is required"),
  employee: Yup.string().required("Employee is required"),
});

const MappingMenuMaster = () => {
  const [rows, setRows] = useState([]);
  const [filteredMenuOptions, setFilteredMenuOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  // const [editRow, setEditRow] = useState(null);
  const [roles] = useState([
    { id: "1", name: "Admin" },
    { id: "2", name: "Manager" },
    { id: "3", name: "User" },
  ]);

  const [menuOptions] = useState({
    Admin: ["Dashboard", "Settings", "Reports"],
    Manager: ["Dashboard", "Projects"],
    User: ["Tasks", "Profile"],
  });

  const [employees] = useState([
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Wilson" },
  ]);


  // Handle role selection and update the menu options
  const handleRoleChange = (roleName, setFieldValue) => {
    const selectedMenuOptions = menuOptions[roleName] || [];
    setFilteredMenuOptions(selectedMenuOptions);
    setFieldValue("menu", []); // Clear selected menu when role changes
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuSelection = (menu, values, setFieldValue) => {
    const updatedMenu = values.menu.includes(menu)
      ? values.menu.filter((item) => item !== menu)
      : [...values.menu, menu];
    setFieldValue("menu", updatedMenu);
  };

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("values",values);
    setRows((prev) => [...prev, { ...values, id: new Date().getTime() }]);
    // if (editRow) {
    //   setRows((prev) =>
    //     prev.map((item) =>
    //       item.id === editRow.id ? { ...item, ...values } : item
    //     )
    //   );
    //   setEditRow(null);
    // } else {
    //   setRows((prev) => [...prev, { ...values, id: new Date().getTime() }]);
    // }
    resetForm();
  };
console.log("rows",rows);

  return (
    <div className="mt-4">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Formik
          enableReinitialize
          initialValues={ { role: "", menu: [], employee: "" }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, setFieldValue, values }) => (
            <Form>
              <Grid container spacing={1} className="pl-1">
                {/* Role Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Role</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="role"
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.role}
                          onChange={(e) => {
                            setFieldValue("role", e.target.value);
                            handleRoleChange(e.target.value, setFieldValue);
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select Role
                          </MenuItem>
                          {roles.map((role) => (
                            <MenuItem key={role.id} value={role.name}>
                              {role.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Menu Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Menu</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        {/* Display selected menus */}
                        <TextField
                          size="small"
                          variant="outlined"
                          fullWidth
                          placeholder="Select Menu"
                          value={
                            values.menu.length > 0 ? values.menu.join(", ") : ""
                          }
                          onClick={handleClick}
                          InputProps={{
                            readOnly: true,
                          }}
                        />

                        {/* Popover with menu options */}
                        <Popover
                          open={Boolean(anchorEl)}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                        >
                          <div style={{ padding: "10px", minWidth: "100px" }}>
                            <TextField
                              placeholder="Search Menu"
                              size="small"
                              variant="outlined"
                              fullWidth
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {filteredMenuOptions
                              .filter((menu) =>
                                menu
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                              .map((menu, index) => (
                                <MenuItem
                                  key={index}
                                  value={menu}
                                  onClick={() =>
                                    handleMenuSelection(
                                      menu,
                                      values,
                                      setFieldValue
                                    )
                                  }
                                >
                                  <Checkbox
                                    checked={values.menu.includes(menu)}
                                  />
                                  {menu}
                                </MenuItem>
                              ))}
                          </div>
                        </Popover>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Employee Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Employee</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="employee"
                          variant="outlined"
                          size="small"
                          fullWidth
                          displayEmpty
                          value={values.employee}
                          onChange={(e) =>
                            setFieldValue("employee", e.target.value)
                          }
                        >
                          <MenuItem value="" disabled>
                            Select Employee
                          </MenuItem>
                          {employees.map((employee) => (
                            <MenuItem key={employee.id} value={employee.name}>
                              {employee.name}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box className="h-6 flex justify-end">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="border px-3 mx-5 border-none rounded-lg project-thim text-white"
                    >
                      Save

                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        <Divider className="divider" />
      </Box>
    </div>
  );
};

export default MappingMenuMaster;

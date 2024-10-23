// import React from 'react'

// const MappingMenuMaster = () => {
//   return (
//     <div>MappingMenuMaster</div>
//   )
// }

// export default MappingMenuMaster


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
} from "@mui/material";
import DataGridTable from "../../../ConstantItems/DataGridTable";
import { TestOutSourceLabMasterColumns } from "../../../TableField/TablefieldsColumns";
import { Autocomplete } from '@mui/material';

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  role: Yup.string().required("Role is required"),
  menu: Yup.array().min(1, "At least one Menu is required"),
  employee: Yup.string().required("Employee is required"),
});

const MappingMenuMaster = () => {
  const [rows, setRows] = useState([]);

  const [roles, setRoles] = useState([
    { id: "1", name: "Admin" },
    { id: "2", name: "Manager" },
    { id: "3", name: "User" },
  ]);

  const [menuOptions, setMenuOptions] = useState({
    Admin: ["Dashboard", "Settings", "Reports"],
    Manager: ["Dashboard", "Projects"],
    User: ["Tasks", "Profile"],
  });

  const [employees, setEmployees] = useState([
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Wilson" },
  ]);

  const [filteredMenuOptions, setFilteredMenuOptions] = useState([]);
  
  const [editRow, setEditRow] = useState(null);

  // Handle role selection and update the menu options
  const handleRoleChange = (roleName, setFieldValue) => {
    const selectedMenuOptions = menuOptions[roleName] || [];
    setFilteredMenuOptions(selectedMenuOptions);
    setFieldValue("menu", []); // Clear selected menu when role changes
  };

  const initialValues = {
    role: "",
    menu: [],
    employee: "",
  };

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Submitted with values:", values);
    if (editRow) {
      setRows((prev) =>
        prev.map((item) =>
          item.id === editRow.id ? { ...prev, ...values } : item
        )
      );
      setEditRow(null);
    } else {
      setRows((prev) => [...prev, { ...values, id: new Date().getTime() }]);
    }
    resetForm();
  };

  const handleDelete = (row) => {
    const updatedRows = rows.filter((item) => item.id !== row.id);
    setRows(updatedRows);
  };

  const handleEdit = (row) => {
    setEditRow(row);
  };

  return (
    <div className="mt-4">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
       

        <Formik
          enableReinitialize
          initialValues={editRow || initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, handleChange, setFieldValue, values }) => (
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
                        <Field
                          as={Select}
                          name="menu"
                          multiple
                          fullWidth
                          displayEmpty
                          variant="outlined"
                          size="small"
                          value={values.menu}
                          onChange={(e) => setFieldValue("menu", e.target.value)}
                          renderValue={(selected) =>
                            selected.length > 0
                              ? selected.join(", ")
                              : "Select Menu"
                          }
                        >
                          <MenuItem value="" disabled>
                            Select Menu
                          </MenuItem>
                          {filteredMenuOptions.map((menu, index) => (
                            <MenuItem key={index} value={menu}>
                              <Checkbox checked={values.menu.indexOf(menu) > -1} />
                              {menu}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Employee Dropdown with Search */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder">
                        <FormLabel>Employee</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Autocomplete
                          options={employees}
                          getOptionLabel={(option) => option.name}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              size="small"
                              placeholder="Search Employee"
                            />
                          )}
                          onChange={(e, value) =>
                            setFieldValue("employee", value ? value.name : "")
                          }
                        />
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
                      {editRow ? "Update" : "Save"}
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

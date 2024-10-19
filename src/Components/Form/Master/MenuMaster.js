import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail"; // Example icon
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs
import { MasterMenu } from "../../TableField/TablefieldsColumns"; // Import your table column definitions

const MenuMaster = () => {
  const [editRow, setEditRow] = useState(null); // For handling editing a row
  const [rows, setRows] = useState([
    {
      id: "1",
      menu: "Master",
      icon: "MailIcon", // Store as a string
      subItems: [
        {
          id: uuidv4(), // Generate unique ID for submenu
          submenu: "Client-Master",
          menuurl: "/client-master",
          icon: "MailIcon", // Store as a string
        },
        {
          id: uuidv4(), // Generate unique ID for submenu
          submenu: "Master",
          menuurl: "/client-master",
          icon: "MailIcon", // Store as a string
        },
      ],
    },
    {
      id: "2",
      menu: "Client",
      icon: "MailIcon", // Store as a string
      subItems: [
        {
          id: uuidv4(), // Generate unique ID for submenu
          submenu: "Client-Master",
          menuurl: "/client-master",
          icon: "MailIcon", // Store as a string
        },
      ],
    },
  ]);
  console.log("rows", rows);

  const iconMapper = {
    MailIcon: <MailIcon />,
    OtherIcon: <MailIcon />, // Use the appropriate icon component here
  };

  const initialValues = {
    menu: "",
    submenu: "",
    menuurl: "",
    icon: "",
  };

  const validationSchema = Yup.object().shape({
    menu: Yup.string().required("Menu Name is required"),
    submenu: Yup.string().required("Submenu Name is required"),
    menuurl: Yup.string().required("Submenu URL is required"),
    icon: Yup.string().required("Icon is required"),
  });

  const handleEdit = (row) => {
    const { menu, submenu, menuurl, icon, id } = row;
    setEditRow({ menu, submenu, menuurl, icon, id }); // Set the complete edit state including submenu ID
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = { ...values };

    if (editRow) {
      // Update existing submenu
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.menu === formData.menu
            ? {
                ...row,
                subItems: row.subItems.map((subItem) =>
                  subItem.id === editRow.id // Match by submenu ID
                    ? { ...subItem, ...formData } // Update submenu with form data
                    : subItem
                ),
              }
            : row
        )
      );
      setEditRow(null); // Reset edit state
    } else {
      // Add new submenu or menu
      const menuExists = rows.find((row) => row.menu === formData.menu);

      if (menuExists) {
        // Add new submenu to existing menu
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.menu === formData.menu
              ? {
                  ...row,
                  subItems: [
                    ...row.subItems,
                    {
                      ...formData,
                      id: uuidv4(), // Assign a new unique ID to the submenu
                    },
                  ],
                }
              : row
          )
        );
      } else {
        // Add new menu
        setRows((prevRows) => [
          ...prevRows,
          {
            id: (prevRows.length + 1).toString(),
            menu: formData.menu,
            icon: formData.icon,
            subItems: [
              {
                ...formData,
                id: uuidv4(), // Assign a new unique ID to the submenu
              },
            ],
          },
        ]);
      }
    }

    resetForm(); // Reset the form after submission
    setSubmitting(false);
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-[#fff] rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1 rounded-t-lg">
          <Typography className="titleheadingtext">
            Add Menu & Submenu
          </Typography>
        </Box>
        <Divider className="divider" />

        <Formik
          initialValues={editRow || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="p-1">
              <Divider className="divider" />
              <Grid container spacing={1}>
                {/* Menu Name Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Menu Name</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="menu"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.menu && !!errors.menu}
                        />
                        <ErrorMessage
                          name="menu"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Submenu Name Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Submenu Name</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="submenu"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.submenu && !!errors.submenu}
                        />
                        <ErrorMessage
                          name="submenu"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Submenu URL Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Submenu URL</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="menuurl"
                          fullWidth
                          variant="outlined"
                          size="small"
                          error={touched.menuurl && !!errors.menuurl}
                        />
                        <ErrorMessage
                          name="menuurl"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Icon Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        className="formlableborder"
                        sx={{ mr: "3px" }}
                      >
                        <FormLabel>Icon</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="icon"
                          fullWidth
                          variant="outlined"
                          size="small"
                        >
                          <MenuItem value="" disabled>
                            -Select Icon-
                          </MenuItem>
                          <MenuItem value="MailIcon">Mail Icon</MenuItem>
                          <MenuItem value="OtherIcon">Other Icon</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="icon"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider className="divider" />
              <button
                type="submit"
                className="border-none project-thim rounded-md text-white  "
                disabled={isSubmitting}
              >
                {editRow ? "Update" : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </Box>

      {/* Data Grid */}
      <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
        <DataGrid
         className="datagridtable"
          rows={rows
            .map((row) =>
              row.subItems.map((subItem) => ({
                ...subItem,
                menu: row.menu,
                icon: subItem.icon,
              }))
            )
            .flat()}
          columns={MasterMenu(handleEdit)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          columnHeaderHeight={20}
          rowHeight={25}
          headerHeight={20}
        />
      </div>
    </div>
  );
};

export default MenuMaster;

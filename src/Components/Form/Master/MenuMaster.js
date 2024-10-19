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
          submenu: "Client-Master",
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
          submenu: "Client-Master",
          menuurl: "/client-master",
          icon: "MailIcon", // Store as a string
        },
      ],
    },
  ]);

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
    setEditRow(row);
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const formData = { ...values }; // Data from the form

    if (editRow) {
      // Update existing row
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === editRow.id
            ? {
                ...row,
                subItems: row.subItems.map((subItem) =>
                  subItem.submenu === editRow.submenu ? formData : subItem
                ),
              }
            : row
        )
      );
      setEditRow(null); // Reset edit state
    } else {
      // Add new row or submenu
      const menuExists = rows.find((row) => row.menu === formData.menu);

      if (menuExists) {
        // Add new submenu to existing menu
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.menu === formData.menu
              ? {
                  ...row,
                  subItems: [...row.subItems, formData],
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
            subItems: [formData],
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
          <Typography className="titleheadingtext">Add Menu & Submenu</Typography>
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
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
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
                        <ErrorMessage name="menu" component="div" className="text-red-600 text-xs" />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Submenu Name Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
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
                        <ErrorMessage name="submenu" component="div" className="text-red-600 text-xs" />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Submenu URL Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
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
                        <ErrorMessage name="menuurl" component="div" className="text-red-600 text-xs" />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Icon Dropdown */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={3} className="formlableborder" sx={{ mr: "3px" }}>
                        <FormLabel>Icon</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field as={Select} name="icon" fullWidth variant="outlined" size="small">
                          <MenuItem value="" disabled>
                            -Select Icon-
                          </MenuItem>
                          <MenuItem value="MailIcon">Mail Icon</MenuItem>
                          <MenuItem value="OtherIcon">Other Icon</MenuItem>
                        </Field>
                        <ErrorMessage name="icon" component="div" className="text-red-600 text-xs" />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider className="divider" />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {editRow ? "Update" : "Save"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>

      {/* Data Grid */}
      <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={rows
            .map((row) =>
              row.subItems.map((subItem) => ({
                id: `${row.id}-${subItem.submenu}`,
                menu: row.menu,
                submenu: subItem.submenu,
                menuurl: subItem.menuurl,
                icon: subItem.icon, // Keep as string in rows
              }))
            )
            .flat()}
          columns={MasterMenu(handleEdit)} // Column definition with icon rendering
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default MenuMaster;

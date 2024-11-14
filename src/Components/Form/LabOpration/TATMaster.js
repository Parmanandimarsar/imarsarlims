// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Divider,
//   FormControl,
//   FormLabel,
//   Grid,
//   TextField,
//   Typography,
//   Button,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";
// import { DataGrid } from "@mui/x-data-grid";
// import { TimePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import DataGridTable from "../../ConstantComponents/DataGridTable";
// import { TATMasterColumns, TATMastercolumns } from "../../TableField/TablefieldsColumns";
// import dayjs from "dayjs";
// const centreOptions = [
//   { id: 1, name: "Centre 1" },
//   { id: 2, name: "Centre 2" },
// ];

// const departmentOptions = [
//   { id: 1, name: "Department 1" },
//   { id: 2, name: "Department 2" },
// ];

// const testOptionsByDepartment = {
//   "Department 1": [
//     { id: 1, name: "Test 1" },
//     { id: 2, name: "Test 2" },
//   ],
//   "Department 2": [
//     { id: 3, name: "Test 3" },
//     { id: 4, name: "Test 4" },
//   ],
// };
// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const validationSchema = Yup.object({
//   centre: Yup.string().required("Centre is required"),
//   department: Yup.string().required("Department is required"),
//   test: Yup.string().required("Test is required"),
// });

// const TATMaster = () => {
//   const [testOptions, setTestOptions] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [anchorElCentre, setAnchorElCentre] = useState(null);
//   const [anchorElDepartment, setAnchorElDepartment] = useState(null);
//   const [anchorElTest, setAnchorElTest] = useState(null);

//   // Initial rows data
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       startTime: "00:00",
//       endTime: "00:00",
//       testName: "ASCITIC FLUID CYTOLOGY",
//       regColl: 0,
//       collRecv: 0,
//       tatType: "Mins",
//       mins: 0,
//       days: 0,
//       selectedDays: [],
//     },
//     {
//       id: 2,
//       startTime: "00:00",
//       endTime: "00:00",
//       testName: "BUCCAL SMEAR CYTOLOGY",
//       regColl: 0,
//       collRecv: 0,
//       tatType: "Mins",
//       mins: 0,
//       days: 0,
//       selectedDays: [],
//     },

//   ]);

//   useEffect(() => {
//     if (selectedDepartment) {
//       setTestOptions(testOptionsByDepartment[selectedDepartment.name] || []);
//     } else {
//       setTestOptions([]);
//     }
//   }, [selectedDepartment]);

//   const handleFormSubmit = (values) => {
//     console.log("Form data:", values);
//     console.log("Table data:", rows);
//   };

//   const updateRow = (id, field, value) => {
//     setRows((prevRows) =>
//       prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
//     );
//   };

//   const toggleDaySelection = (rowId, day) => {
//     setRows((prevRows) =>
//       prevRows.map((row) => {
//         if (row.id === rowId) {
//           const isSelected = row.selectedDays.includes(day);
//           return {
//             ...row,
//             selectedDays: isSelected
//               ? row.selectedDays.filter((d) => d !== day)
//               : [...row.selectedDays, day],
//           };
//         }
//         return row;
//       })
//     );
//   };
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <div className="mb-[50px] pl-2">
//         <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
//           <Box
//             className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
//             style={{ backgroundColor: "#1976d2" }}
//           >
//             <Typography className="pl-1" style={{ color: "#fff" }}>
//               TAT Master
//             </Typography>
//           </Box>
//           <Divider className="divider" />
//           <Formik
//             initialValues={{
//               centre: "",
//               department: "",
//               test: "",
//             }}
//             validationSchema={validationSchema}
//             onSubmit={handleFormSubmit}
//           >
//             {({ values, setFieldValue, errors, touched }) => (
//               <Form>
//                 <Grid container spacing={1} p={2}>
//                   {/* Centre Field */}
//                   <Grid item xs={12} sm={6} md={4} lg={3}>
//                     <FormControl
//                       fullWidth
//                       error={Boolean(errors.centre && touched.centre)}
//                     >
//                       <Grid container alignItems="center">
//                         <Grid
//                           item
//                           xs={3}
//                           sx={{ mr: "3px" }}
//                           className="formlableborder"
//                         >
//                           <FormLabel>Centre</FormLabel>
//                         </Grid>
//                         <Grid item xs={8}>
//                           <TextField
//                             fullWidth
//                             onClick={(e) => setAnchorElCentre(e.currentTarget)}
//                             value={values.centre}
//                             placeholder="Select Centre"
//                             InputProps={{ readOnly: true }}
//                           />
//                           {touched.centre && errors.centre && (
//                             <Typography color="error" variant="caption">
//                               {errors.centre}
//                             </Typography>
//                           )}
//                           <CustomMenuSearch
//                             options={centreOptions}
//                             selectedOptions={
//                               values.centre
//                                 ? [{ id: values.centre, name: values.centre }]
//                                 : []
//                             }
//                             setSelectedOptions={(value) =>
//                               setFieldValue("centre", value[0]?.name || "")
//                             }
//                             placeholder="Centre"
//                             anchorEl={anchorElCentre}
//                             onClose={() => setAnchorElCentre(null)}
//                           />
//                         </Grid>
//                       </Grid>
//                     </FormControl>
//                   </Grid>

//                   {/* Department Field */}
//                   <Grid item xs={12} sm={6} md={4} lg={3}>
//                     <FormControl
//                       fullWidth
//                       error={Boolean(errors.department && touched.department)}
//                     >
//                       <Grid container alignItems="center">
//                         <Grid
//                           item
//                           xs={3}
//                           sx={{ mr: "3px" }}
//                           className="formlableborder"
//                         >
//                           <FormLabel>Department</FormLabel>
//                         </Grid>
//                         <Grid item xs={8}>
//                           <TextField
//                             fullWidth
//                             onClick={(e) =>
//                               setAnchorElDepartment(e.currentTarget)
//                             }
//                             value={values.department}
//                             placeholder="Select Department"
//                             InputProps={{ readOnly: true }}
//                           />
//                           {touched.department && errors.department && (
//                             <Typography color="error" variant="caption">
//                               {errors.department}
//                             </Typography>
//                           )}
//                           <CustomMenuSearch
//                             options={departmentOptions}
//                             selectedOptions={
//                               values.department
//                                 ? [
//                                     {
//                                       id: values.department,
//                                       name: values.department,
//                                     },
//                                   ]
//                                 : []
//                             }
//                             setSelectedOptions={(value) => {
//                               const selectedDept = value[0];
//                               setFieldValue(
//                                 "department",
//                                 selectedDept?.name || ""
//                               );
//                               setSelectedDepartment(selectedDept);
//                             }}
//                             placeholder="Search Department"
//                             anchorEl={anchorElDepartment}
//                             onClose={() => setAnchorElDepartment(null)}
//                           />
//                         </Grid>
//                       </Grid>
//                     </FormControl>
//                   </Grid>

//                   {/* Test Field */}
//                   <Grid item xs={12} sm={6} md={4} lg={3}>
//                     <FormControl
//                       fullWidth
//                       error={Boolean(errors.test && touched.test)}
//                     >
//                       <Grid container alignItems="center">
//                         <Grid
//                           item
//                           xs={3}
//                           sx={{ mr: "3px" }}
//                           className="formlableborder"
//                         >
//                           <FormLabel>Test</FormLabel>
//                         </Grid>
//                         <Grid item xs={8}>
//                           <TextField
//                             fullWidth
//                             onClick={(e) => setAnchorElTest(e.currentTarget)}
//                             value={values.test}
//                             placeholder="Select Test"
//                             InputProps={{ readOnly: true }}
//                           />
//                           {touched.test && errors.test && (
//                             <Typography color="error" variant="caption">
//                               {errors.test}
//                             </Typography>
//                           )}
//                           <CustomMenuSearch
//                             options={testOptions}
//                             selectedOptions={
//                               values.test
//                                 ? [{ id: values.test, name: values.test }]
//                                 : []
//                             }
//                             setSelectedOptions={(value) =>
//                               setFieldValue("test", value[0]?.name || "")
//                             }
//                             placeholder="Search Test"
//                             anchorEl={anchorElTest}
//                             onClose={() => setAnchorElTest(null)}
//                           />
//                         </Grid>
//                       </Grid>
//                     </FormControl>
//                   </Grid>
//                 </Grid>

//                 <div style={{ height: 400, width: "100%" }}>
//                   <DataGridTable
//                     rows={rows}
//                     columns={TATMasterColumns(updateRow, toggleDaySelection)}
//                     pageSize={5}
//                     rowsPerPageOptions={[5]}
//                     disableSelectionOnClick
//                   />
//                 </div>
//                 <Box textAlign="center" p={2}>
//                   <Button type="submit" variant="contained" color="primary">
//                     Submit
//                   </Button>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default TATMaster;

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
import { LocalizationProvider } from "@mui/x-date-pickers";
import DataGridTable from "../../ConstantComponents/DataGridTable";
import { TATMasterColumns } from "../../TableField/TablefieldsColumns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const centreOptions = [{ id: 1, name: "Emidas" }];
const departmentOptions = [{ id: 1, name: "CYTOLOGY" }];

// Department-wise test options
const testOptionsByDepartment = {
  CYTOLOGY: [
    { id: 1, name: "ASCITIC FLUID CYTOLOGY" },
    { id: 2, name: "BUCCAL SMEAR CYTOLOGY" },
  ],
};

const validationSchema = Yup.object({
  centre: Yup.string().required("Centre is required"),
  department: Yup.string().required("Department is required"),
  test: Yup.array().min(1, "Please select at least one test"),
});

const TATMaster = () => {
  const [testOptions, setTestOptions] = useState([]);
  const [rows, setRows] = useState([]);
  const [anchorElCentre, setAnchorElCentre] = useState(null);
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [anchorElTest, setAnchorElTest] = useState(null);

  // Update test options based on selected department
  const handleDepartmentChange = (department) => {
    const selectedTests = testOptionsByDepartment[department] || [];
    setTestOptions(selectedTests);
  };

  const updateRow = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };
  const toggleDaySelection = (rowId, day) => {
    setRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === rowId) {
          const isSelected = row.selectedDays.includes(day);
          return {
            ...row,
            selectedDays: isSelected
              ? row.selectedDays.filter((d) => d !== day)
              : [...row.selectedDays, day],
          };
        }
        return row;
      })
    );
  };
  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
    console.log("Table data:", rows);
  };

  // Function to handle test selection and update rows
  const handleTestSelection = (selectedTests) => {
    const newRows = selectedTests.map((test, index) => ({
      id: index + 1, // Unique ID for each row
      startTime: new Date("1970-01-01T00:00:00"),
      endTime: new Date("1970-01-01T00:00:00"),
      testName: test.name,
      regColl: 0,
      collRecv: 0,
      tatType: "Mins",
      mins: 0,
      days: 0,
      selectedDays: [],
    }));
    setRows(newRows);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="mb-[50px] pl-2">
        <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
          <Box
            className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
            style={{ backgroundColor: "#1976d2" }}
          >
            <Typography className="pl-1">TAT Master</Typography>
          </Box>
          <Divider />
          <Formik
            initialValues={{
              centre: "",
              department: "",
              test: [],
            }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ values, setFieldValue, errors, touched }) => (
              <Form>
                <Grid container spacing={2} p={2}>
                  {/* Centre Field */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
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
                        <FormControl
                          fullWidth
                          error={Boolean(errors.centre && touched.centre)}
                        >
                          <TextField
                            fullWidth
                            onClick={(e) => setAnchorElCentre(e.currentTarget)}
                            value={values.centre}
                            placeholder="Select Centre"
                            InputProps={{ readOnly: true }}
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
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Department Field */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
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
                          fullWidth
                          error={Boolean(
                            errors.department && touched.department
                          )}
                        >
                          <TextField
                            fullWidth
                            onClick={(e) =>
                              setAnchorElDepartment(e.currentTarget)
                            }
                            value={values.department}
                            placeholder="Select Department"
                            InputProps={{ readOnly: true }}
                          />
                          {touched.department && errors.department && (
                            <Typography color="error" variant="caption">
                              {errors.department}
                            </Typography>
                          )}
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
                              const selectedDept = value[0];
                              setFieldValue(
                                "department",
                                selectedDept?.name || ""
                              );
                              handleDepartmentChange(selectedDept?.name);
                            }}
                            placeholder="Search Department"
                            anchorEl={anchorElDepartment}
                            onClose={() => setAnchorElDepartment(null)}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Test Field - Multi-select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container alignItems="center">
                      <Grid
                        item
                        xs={3}
                        sx={{ mr: "3px" }}
                        className="formlableborder"
                      >
                        <FormLabel>Test(s)</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <FormControl
                          fullWidth
                          error={Boolean(errors.test && touched.test)}
                        >
                          <TextField
                            fullWidth
                            onClick={(e) => setAnchorElTest(e.currentTarget)}
                            value={values.test
                              .map((test) => test.name)
                              .join(", ")}
                            placeholder="Select Test(s)"
                            InputProps={{ readOnly: true }}
                          />
                          {touched.test && errors.test && (
                            <Typography color="error" variant="caption">
                              {errors.test}
                            </Typography>
                          )}
                          <CustomMenuSearch
                            options={testOptions}
                            selectedOptions={values.test}
                            setSelectedOptions={(value) => {
                              setFieldValue("test", value);
                              handleTestSelection(value); // Update rows when tests are selected
                            }}
                            placeholder="Search Test(s)"
                            anchorEl={anchorElTest}
                            onClose={() => setAnchorElTest(null)}
                            isCheckboxMenu={true} // Enable multi-select in CustomMenuSearch
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Data Grid Table */}
                <div style={{ height: 400, width: "100%" }}>
                  <DataGridTable
                    rows={rows}
                    columns={TATMasterColumns(updateRow, toggleDaySelection)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                  />
                </div>
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
    </LocalizationProvider>
  );
};

export default TATMaster;

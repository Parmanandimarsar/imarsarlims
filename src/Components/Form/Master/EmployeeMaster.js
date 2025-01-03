import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  CircularProgress,
} from "@mui/material";
import { postData } from "../../../Api/apiServices";
import { useDispatch, useSelector } from "react-redux";
import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";
import {
  fetchAreaData,
  fetchCityData,
  fetchStateData,
  fetchRoleData,
  fetchCenterData,
  fetchDistricData,
  fetchZoneData,
  fetchDepartmentAcceData,
} from "../../../redux/slices/actions/locationMasterActions";
import { convertToBase64 } from "../../ConstantComponents/FileUtils/fileUtils";

const EmployeeMaster = () => {
  const API_ENDPOINT = "empMaster/SaveEmployee";
  const [imagePreview, setImagePreview] = useState(null);
  const [anchorElCenter, setAnchorElCenter] = useState(null);
  const [anchorElRole, setAnchorElRole] = useState(null);
  const [anchorElState, setAnchorElState] = useState(null);
  const [anchorElCity, setAnchorElCity] = useState(null);
  const [anchorElArea, setAnchorElArea] = useState(null);
  const initialValues = {
    isActive: "",
    address: "",
    allowDueReport: "",
    authenticationdevice: "",
    bloodGroup: "",
    defaultcentre: "",
    defaultrole: "",
    designationId: "",
    disapproved: "",
    dob: "",
    email: "",
    empCode: "",
    employee: "",
    fName: "",
    fromIP: "",
    lName: "",
    isemailotp: "",
    mobileNo: "",
    landline: "",
    password: "",
    pinCode: "",
    fileName: "",
    qualification: "",
    isSalesTeamMember: "",
    title: "",
    toIP: "",
    zone: "",
    state: "",
    city: "",
    area: "",
    userName: "",
    deptAccess: [], // Multiple selection field
    addEmpCentreAccess: [], // Multiple selection field
    addEmpRoleAccess: [], // Multiple selection field
    // Add other fields accordingly
  };
  const dispatch = useDispatch();
  const {
    stateData,
    cityData,
    districData,
    areaData,
    roleData,
    centerData,
    zoneData,
    departmentAcceData,
    loading,
    error,
  } = useSelector((state) => state.locationMaster);

  useEffect(() => {
    dispatch(fetchStateData()); // State API call
    dispatch(fetchDistricData());
    dispatch(fetchCityData()); // City API call
    dispatch(fetchAreaData());
    dispatch(fetchRoleData());
    dispatch(fetchCenterData());
    dispatch(fetchZoneData());
    dispatch(fetchDepartmentAcceData());
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;
  const validationSchema = Yup.object().shape({
    empCode: Yup.string().required("Employee Code is required"),
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email ID is required"),
    mobileNo: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
      .required("Mobile Number is required"),
    dob: Yup.date()
      .max(new Date(), "DOB cannot be in the future")
      .required("Date of Birth is required"),
    userName: Yup.string().required("User Name is required"),
    defaultcentre: Yup.string().required("Default Centre is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    deptAccess: Yup.array()
      .of(Yup.string().required("Department is required"))
      .min(1, "At least one department must be selected"),
    addEmpCentreAccess: Yup.array()
      .of(Yup.object().required("Centre is required"))
      .min(1, "At least one centre must be selected"),
    addEmpRoleAccess: Yup.array()
      .of(Yup.object().required("Access Role is required"))
      .min(1, "At least one access role must be selected"),
    state: Yup.object().required("State is required"),
    city: Yup.object().required("City is required"),
  });

  // Form submission handler



  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log("Form Submitted!", values);

    try {
      // Convert file to Base64
      const base64File = await convertToBase64(values.fileName); // Add 'await'

      // Map additional properties for centre access
      const updatedAccess = values.addEmpCentreAccess.map((item) => ({
        id: 0,
        isActive: true,
        createdById: 0,
        createdDateTime: new Date().toISOString(),
        empId: 0,
        centreId: item.id,
      }));

      // Map additional properties for role access
      const addEmpRoleAccess = values.addEmpRoleAccess.map((item) => ({
        id: 0,
        isActive: true,
        createdById: 0,
        createdDateTime: new Date().toISOString(),
        empId: 0,
        roleId: item.id,
      }));

      // Prepare final data
      const finaleData = {
        ...values,
        state: values.state.id,
        city: values.city.id,
        area: values.area.id,
        deptAccess: values.deptAccess.join(","),
        fileName: base64File, // Assign Base64 file
        addEmpCentreAccess: updatedAccess,
        addEmpRoleAccess: addEmpRoleAccess,
      };
      // Send data to API
      const response = await postData(API_ENDPOINT, finaleData);
      console.log("API Response:", response);
      // resetForm();
    } catch (error) {
      console.error("Error during submission:", error.message);
    }
  };

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        <Box className="flex justify-between items-center mb-1 project-thim text-white p-1  rounded-t-lg">
          <Typography className="pl-1"> Employee Master</Typography>
        </Box>
        <Divider className="divider" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            isSubmitting,
            touched,
            errors,
            handleChange,
            setFieldValue,
            values,
          }) => (
            console.log("values", values),
            (
              <Form>
                <Grid container spacing={1} className="pl-1">
                  {/* Emp Code Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Emp Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="empCode"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Employee Code"
                              variant="outlined"
                              size="small"
                            />
                            <ErrorMessage
                              name="empCode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Title Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container spacing={0.2} alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Title</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="title"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.title && !!errors.title}
                            >
                              <MenuItem value="" disabled>
                                Select Title
                              </MenuItem>
                              <MenuItem value="Mr">Mr</MenuItem>
                              <MenuItem value="Ms">Ms</MenuItem>
                              <MenuItem value="Mrs">Mrs</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="title"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* First Name Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>First Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="fName"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter First Name"
                              variant="outlined"
                              size="small"
                              error={touched.fName && !!errors.fName}
                            />
                            <ErrorMessage
                              name="fName"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Last Name Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Last Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="lName"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Last Name"
                              variant="outlined"
                              size="small"
                              error={touched.lName && !!errors.lName}
                            />
                            <ErrorMessage
                              name="lName"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Address Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Address</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="address"
                              fullWidth
                              placeholder="Enter Address"
                              variant="outlined"
                              size="small"
                              error={touched.address && !!errors.address}
                            />
                            <ErrorMessage
                              name="address"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Pincode Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Pincode</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              type="number"
                              name="pinCode"
                              fullWidth
                              placeholder="Enter Pincode"
                              variant="outlined"
                              size="small"
                              error={touched.pinCode && !!errors.pinCode}
                            />
                            <ErrorMessage
                              name="pinCode"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Email ID Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Email ID</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="email"
                              fullWidth
                              placeholder="Enter Email ID"
                              variant="outlined"
                              className="mandatoryfield"
                              size="small"
                              error={touched.email && !!errors.email}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Mobile Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Mobile Number</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="mobileNo"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Mobile Number"
                              variant="outlined"
                              size="small"
                              error={touched.mobileNo && !!errors.mobileNo}
                            />
                            <ErrorMessage
                              name="mobileNo"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Mobile2 Number */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Mobile 2</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="landline"
                              fullWidth
                              placeholder="Enter Mobile 2 Number"
                              variant="outlined"
                              size="small"
                              error={touched.landline && !!errors.landline}
                            />
                            <ErrorMessage
                              name="landline"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Qualification Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Qualification</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="qualification"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.qualification && !!errors.qualification
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Qualification
                              </MenuItem>
                              <MenuItem value="Bachelors">Bachelors</MenuItem>
                              <MenuItem value="Masters">Masters</MenuItem>
                              <MenuItem value="PhD">PhD</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="qualification"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* From IP*/}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>From IP</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="fromIP"
                              fullWidth
                              placeholder="Enter From IP Range"
                              variant="outlined"
                              size="small"
                              error={touched.fromIP && !!errors.fromIP}
                            />
                            <ErrorMessage
                              name="fromIP"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* ID Type Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>To IP </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="toIP"
                              fullWidth
                              placeholder="Enter To IP Range"
                              variant="outlined"
                              size="small"
                              error={touched.toIP && !!errors.toIP}
                            />
                            <ErrorMessage
                              name="toIP"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* DOB Date */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>DOB</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              type="date"
                              name="dob"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Select DOB"
                              variant="outlined"
                              size="small"
                              error={touched.dob && !!errors.dob}
                            />
                            <ErrorMessage
                              name="dob"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Blood Group Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Blood Group</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="bloodGroup"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.bloodGroup && !!errors.bloodGroup}
                            >
                              <MenuItem value="" disabled>
                                Select Blood Group
                              </MenuItem>
                              <MenuItem value="A+">A+</MenuItem>
                              <MenuItem value="A-">A-</MenuItem>
                              <MenuItem value="B+">B+</MenuItem>
                              <MenuItem value="B-">B-</MenuItem>
                              <MenuItem value="O+">O+</MenuItem>
                              <MenuItem value="O-">O-</MenuItem>
                              <MenuItem value="AB+">AB+</MenuItem>
                              <MenuItem value="AB-">AB-</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="bloodGroup"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Username Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Username</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              name="userName"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Enter Username"
                              variant="outlined"
                              size="small"
                              error={touched.userName && !!errors.userName}
                            />
                            <ErrorMessage
                              name="userName"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Password Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Password</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              type="password"
                              name="password"
                              className="mandatoryfield"
                              fullWidth
                              placeholder="Enter Password"
                              variant="outlined"
                              size="small"
                              error={touched.password && !!errors.password}
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Confirm Password Text */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Confirm Pass.</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={TextField}
                              type="password"
                              name="confirmPassword"
                              fullWidth
                              className="mandatoryfield"
                              placeholder="Confirm Password"
                              variant="outlined"
                              size="small"
                              error={
                                touched.confirmPassword &&
                                !!errors.confirmPassword
                              }
                            />
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Department Dropdown (Checkbox Select) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Department Acc.</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="deptAccess"
                              multiple
                              displayEmpty
                              className="mandatoryfield"
                              variant="outlined"
                              size="small"
                              renderValue={(selected) =>
                                selected.join(", ") || "Select Department"
                              }
                            >
                              {departmentAcceData.map((dept) => (
                                <MenuItem key={dept} value={dept.id}>
                                  <Checkbox
                                    checked={values.deptAccess.includes(
                                      dept.id
                                    )}
                                  />
                                  {dept.subDeptName}
                                </MenuItem>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="deptAccess"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Centre Dropdown (Checkbox Select) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Centre</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <TextField
                              name="addEmpCentreAccess"
                              onClick={(e) =>
                                setAnchorElCenter(e.currentTarget)
                              }
                              className="mandatoryfield"
                              placeholder="select center"
                              displayEmpty
                              variant="outlined"
                              value={
                                values.addEmpCentreAccess.length
                                  ? values.addEmpCentreAccess
                                      .map((dept) => dept.companyName)
                                      .join(", ")
                                  : ""
                              }
                              InputProps={{
                                readOnly: true,
                              }}
                            ></TextField>
                            <ErrorMessage
                              name="addEmpCentreAccess"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>

                          <CustomMenuSearch
                            options={centerData}
                            selectedOptions={values.addEmpCentreAccess}
                            setSelectedOptions={(value) => {
                              setFieldValue("addEmpCentreAccess", value);
                            }}
                            placeholder="Search Department"
                            anchorEl={anchorElCenter}
                            isCheckboxMenu={true}
                            onClose={() => setAnchorElCenter(null)}
                            nameKey="companyName"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Access Role Dropdown (Checkbox Select) */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Access Role</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <TextField
                              name="addEmpRoleAccess"
                              onClick={(e) => setAnchorElRole(e.currentTarget)}
                              className="mandatoryfield"
                              placeholder="select center"
                              displayEmpty
                              variant="outlined"
                              value={
                                values.addEmpRoleAccess.length
                                  ? values.addEmpRoleAccess
                                      .map((dept) => dept.roleName)
                                      .join(", ")
                                  : ""
                              }
                              InputProps={{
                                readOnly: true,
                              }}
                            />

                            <ErrorMessage
                              name="addEmpRoleAccess"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                            <CustomMenuSearch
                              options={roleData}
                              selectedOptions={values.addEmpRoleAccess}
                              setSelectedOptions={(value) => {
                                setFieldValue("addEmpRoleAccess", value);
                              }}
                              placeholder="Search Department"
                              anchorEl={anchorElRole}
                              isCheckboxMenu={true}
                              onClose={() => setAnchorElRole(null)}
                              nameKey="roleName"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Zone Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Zone </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="zone"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={touched.zone && !!errors.zone}
                            >
                              <MenuItem value="" disabled>
                                Select Zone
                              </MenuItem>
                              {zoneData.map((data) => (
                                <MenuItem value={data.id}>{data.zone}</MenuItem>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="zone"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* State Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>State </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <TextField
                              name="state"
                              onClick={(e) => setAnchorElState(e.currentTarget)}
                              className="mandatoryfield"
                              placeholder="select state"
                              value={values.state.state}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                            <ErrorMessage
                              name="state"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                            <CustomMenuSearch
                              options={stateData}
                              selectedOptions={
                                values.state
                                  ? [
                                      {
                                        id: values.state.id,
                                        name: values.state.state,
                                      },
                                    ]
                                  : []
                              }
                              setSelectedOptions={(value) => {
                                const selectedItem = value[0];
                                setFieldValue("state", selectedItem || "");
                              }}
                              placeholder="Search state"
                              anchorEl={anchorElState}
                              onClose={() => setAnchorElState(null)}
                              nameKey="state"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* City Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>City </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <TextField
                              onClick={(e) => setAnchorElCity(e.currentTarget)}
                              className="mandatoryfield"
                              placeholder="select City"
                              value={values.city.cityName}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                            <ErrorMessage
                              name="city"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                            <CustomMenuSearch
                              options={cityData}
                              selectedOptions={
                                values.city
                                  ? [
                                      {
                                        id: values.city.id,
                                        name: values.city.cityName,
                                      },
                                    ]
                                  : []
                              }
                              setSelectedOptions={(value) => {
                                const selectedItem = value[0];

                                setFieldValue("city", selectedItem || "");
                              }}
                              placeholder="Search city"
                              anchorEl={anchorElCity}
                              onClose={() => setAnchorElCity(null)}
                              nameKey="cityName"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Area Select */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Area </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <TextField
                              fullWidth
                              onClick={(e) => setAnchorElArea(e.currentTarget)}
                              value={values.area.areaName}
                              placeholder="Select Item"
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                            <ErrorMessage
                              name="area"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                            <CustomMenuSearch
                              options={areaData}
                              selectedOptions={
                                values.area
                                  ? [
                                      {
                                        id: values.area.id,
                                        name: values.area.areaName,
                                      },
                                    ]
                                  : []
                              }
                              setSelectedOptions={(value) => {
                                const selectedItem = value[0];

                                setFieldValue("area", selectedItem || "");
                              }}
                              placeholder="Search area"
                              anchorEl={anchorElArea}
                              onClose={() => setAnchorElArea(null)}
                              nameKey="areaName"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Designation Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Designation</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="designationId"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.designationId && !!errors.designationId
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Designation
                              </MenuItem>
                              <MenuItem value="1">Manager</MenuItem>
                              <MenuItem value="2">Supervisor</MenuItem>
                              <MenuItem value="3">Staff</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="designationId"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Default Centre Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Default Centre</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="defaultcentre"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.defaultcentre && !!errors.defaultcentre
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Default Centre
                              </MenuItem>

                              {values?.addEmpCentreAccess.map((defcentre) => (
                                <MenuItem value={defcentre.id}>
                                  {defcentre.companyName}{" "}
                                </MenuItem>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="defaultcentre"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Default Role Dropdown */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Default Role</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <FormControl fullWidth>
                            <Field
                              as={Select}
                              name="defaultrole"
                              fullWidth
                              displayEmpty
                              variant="outlined"
                              size="small"
                              error={
                                touched.defaultrole && !!errors.defaultrole
                              }
                            >
                              <MenuItem value="" disabled>
                                Select Default Role
                              </MenuItem>
                              {values?.addEmpRoleAccess.map((defrole) => (
                                <MenuItem key={defrole.id} value={defrole.id}>
                                  {defrole.roleName}{" "}
                                  {/* Display the name or any other data */}
                                </MenuItem>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="defaultrole"
                              component="div"
                              className="text-red-600 text-xs"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid
                          item
                          xs={3}
                          className="formlableborder mr-1"
                          sx={{ mr: "3px" }}
                        >
                          <FormLabel>Profile-pic</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <input
                            type="file"
                            name="fileName"
                            accept="image/jpeg, image/png" // Restrict file types
                            style={{
                              width: "100%",
                              boxSizing: "border-box",
                              overflow: "hidden",
                            }}
                            className="mandatoryfield overflow-hidden"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];

                              if (file) {
                                const fileSizeKB = file.size / 1024; // Convert bytes to KB
                                const fileType = file.type;

                                // Validate file size and type
                                if (fileSizeKB > 400) {
                                  alert("File size must be less than 400KB.");
                                  return;
                                }
                                if (
                                  fileType !== "image/jpeg" &&
                                  fileType !== "image/png"
                                ) {
                                  alert(
                                    "Only JPG and PNG formats are allowed."
                                  );
                                  return;
                                }

                                setFieldValue("fileName", file);
                                setImagePreview(URL.createObjectURL(file));
                              }
                            }}
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider className="divider" />
                <Grid container spacing={1}>
                  <div className="w-full flex mt-2 pl-6">
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <Grid container alignItems="center">
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Field name="isActive">
                                  {({ field, form }) => (
                                    <input
                                      type="checkbox"
                                      {...field}
                                      checked={field.value === 1}
                                      onChange={() =>
                                        form.setFieldValue(
                                          "isActive",
                                          field.value === 1 ? 0 : 1
                                        )
                                      }
                                    />
                                  )}
                                </Field>
                              }
                              label="Active"
                            />
                            <FormControlLabel
                              control={
                                <Field name="isSalesTeamMember">
                                  {({ field, form }) => (
                                    <input
                                      type="checkbox"
                                      {...field}
                                      checked={field.value === 1}
                                      onChange={() =>
                                        form.setFieldValue(
                                          "isSalesTeamMember",
                                          field.value === 1 ? 0 : 1
                                        )
                                      }
                                    />
                                  )}
                                </Field>
                              }
                              label="Sales Team Member"
                            />
                            <FormControlLabel
                              control={
                                <Field name="allowDueReport">
                                  {({ field, form }) => (
                                    <input
                                      type="checkbox"
                                      {...field}
                                      checked={field.value === 1}
                                      onChange={() =>
                                        form.setFieldValue(
                                          "allowDueReport",
                                          field.value === 1 ? 0 : 1
                                        )
                                      }
                                    />
                                  )}
                                </Field>
                              }
                              label="Allow Due Report"
                            />
                            <FormControlLabel
                              control={
                                <Field name="rate">
                                  {({ field, form }) => (
                                    <input
                                      type="checkbox"
                                      {...field}
                                      checked={field.value === 1}
                                      onChange={() =>
                                        form.setFieldValue(
                                          "rate",
                                          field.value === 1 ? 0 : 1
                                        )
                                      }
                                    />
                                  )}
                                </Field>
                              }
                              label="Hide Rate"
                            />
                            <FormControlLabel
                              control={
                                <Field name="disapproved">
                                  {({ field, form }) => (
                                    <input
                                      type="checkbox"
                                      {...field}
                                      checked={field.value === 1}
                                      onChange={() =>
                                        form.setFieldValue(
                                          "disapproved",
                                          field.value === 1 ? 0 : 1
                                        )
                                      }
                                    />
                                  )}
                                </Field>
                              }
                              label="Disapproved"
                            />
                            <FormControlLabel
                              control={
                                <Field name="isemailotp">
                                  {({ field, form }) => (
                                    <input
                                      type="checkbox"
                                      {...field}
                                      checked={field.value === 1}
                                      onChange={() =>
                                        form.setFieldValue(
                                          "isemailotp",
                                          field.value === 1 ? 0 : 1
                                        )
                                      }
                                    />
                                  )}
                                </Field>
                              }
                              label="Login Email OTP"
                            />
                            <FormControlLabel
                              control={
                                <Field name="authenticationdevice">
                                  {({ field, form }) => (
                                    <input
                                      type="checkbox"
                                      {...field}
                                      checked={field.value === 1}
                                      onChange={() =>
                                        form.setFieldValue(
                                          "authenticationdevice",
                                          field.value === 1 ? 0 : 1
                                        )
                                      }
                                    />
                                  )}
                                </Field>
                              }
                              label="Authentication Device"
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </div>
                </Grid>

                <Divider className="divider" />
                <Grid>
                  <div className="flex pl-2 re">
                    <div className="w-[70%]">
                      <Grid container alignItems="center">
                        <Grid item xs={12}>
                          <FormControl>
                            <Typography className="titleheadingtext">
                              Employee Type
                            </Typography>
                            <RadioGroup
                              aria-label="employee"
                              row
                              onChange={handleChange}
                              name="employee"
                              value={values.employee}
                              className="ml-2 top-0"
                            >
                              <FormControlLabel
                                value="none"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="None"
                              />
                              <FormControlLabel
                                value="phlebotomist"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="Phlebotomist"
                              />
                              <FormControlLabel
                                value="radiologist"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="Radiologist"
                              />
                              <FormControlLabel
                                value="consultantdoctor"
                                control={
                                  <Radio sx={{ transform: "scale(0.8)" }} />
                                } // Adjust size here
                                label="Consultant Doctor"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="border w-[100px] h-[100px] rounded-full ">
                      <img
                        src={
                          imagePreview
                            ? imagePreview
                            : "http://103.230.84.132:9090/images/defaultimg.png"
                        }
                        alt="Profile Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
                <div className="mt-6  flex items-end gap-4 ml-0 justify-end   p-2 ">
                  <button
                  type="submit"
                    disabled={isSubmitting}
                    className="pr-5  pl-5 savebutton project-thim"
                  >
                    Save
                  </button>
                </div>
              </Form>
            )
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default EmployeeMaster;

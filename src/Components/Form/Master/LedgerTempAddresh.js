
import React from "react";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Box,
  FormLabel,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNave from "../../../Pages/MainLayout/SideNav";

const LedgerTempAddresh = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    specialId: Yup.string().required("Special ID is required"),
    search: Yup.string().required("Search is required"),
    ledgerName: Yup.string().required("Ledger Name is required"),
    soWoDo: Yup.string().required("S/o, W/o, D/o is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    stdCode: Yup.number().required("STD Code is required"),
    district: Yup.string().required("District is required"),
    mobileNo: Yup.number().required("Mobile No is required"),
    state: Yup.string().required("State is required"),
    whatsappNo: Yup.number().required("WhatsApp No is required"),
    aadharNo: Yup.number().required("Aadhar No is required"),
    pinCode: Yup.number().required("Pin Code is required"),
    mailId: Yup.string().email("Invalid email").required("Mail ID is required"),
    panNo: Yup.number().required("PAN No is required"),
    creditLimit: Yup.number().required("Credit Limit is required"),
    creditLimitDate: Yup.date().required("Credit Limit Date is required"),
    ledgerGroup: Yup.string().required("Ledger Group is required"),
    openingBalance: Yup.string().required("Opening Balance is required"),
    gstDealerType: Yup.string().required("GST Dealer Type is required"),
    gstNo: Yup.number().required("GST No is required"),
    staffName: Yup.string().required("Staff Name is required"),
    category: Yup.string().required("Category is required"),
    location: Yup.string().required("Location is required"),
    wefDate: Yup.string().required("WEF Date is required"),
    dueDate: Yup.date().required("Due Date is required"),
    document1: Yup.mixed().required("Document 1 is required"),
    document2: Yup.mixed().required("Document 2 is required"),
    document3: Yup.mixed().required("Document 3 is required"),
    document4: Yup.mixed().required("Document 4 is required"),
  });

  const initialValues = {
    title: "",
    specialId: "",
    search: "",
    ledgerName: "",
    soWoDo: "",
    address: "",
    city: "",
    stdCode: "",
    district: "",
    mobileNo: "",
    state: "",
    whatsappNo: "",
    aadharNo: "",
    pinCode: "",
    mailId: "",
    panNo: "",
    creditLimit: "",
    creditLimitDate: "",
    ledgerGroup: "",
    openingBalance: "",
    gstDealerType: "",
    gstNo: "",
    staffName: "",
    category: "",
    location: "",
    wefDate: "",
    dueDate: "",
    document1: null,
    document2: null,
    document3: null,
    document4: null,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "value");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    

      <div className=" mb-[50px] pl-2">
        <Box className="bg-white p-2 rounded-lg shadow-lg border" autoComplete="off">
          <Box className="flex justify-between items-center mb-1">
            <Typography
             
            >
              Ledger Temporary Master
            </Typography>
          </Box>
          <Divider
            className="divider"
          />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form autoComplete="off" className="ledger-master-form">
                <Grid container spacing={2}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Title</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="title"
                            fullWidth
                            size="small"
                            error={touched.title && !!errors.title}
                          >
                            <MenuItem value="Mr">Mr</MenuItem>
                            <MenuItem value="Mrs">Mrs</MenuItem>
                            <MenuItem value="Ms">Ms</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Special ID</FormLabel>
                        </Grid>

                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="specialId"
                            fullWidth
                            size="small"
                            error={touched.specialId && !!errors.specialId}
                          >
                            <MenuItem value="Special1">Special 1</MenuItem>
                            <MenuItem value="Special2">Special 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="specialId"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Search</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="search"
                            fullWidth
                            size="small"
                            error={touched.search && !!errors.search}
                          >
                            <MenuItem value="Search1">Search 1</MenuItem>
                            <MenuItem value="Search2">Search 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="search"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Ledger Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="ledgerName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.ledgerName && !!errors.ledgerName}
                          />
                          <ErrorMessage
                            name="ledgerName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 2 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>S/o, W/o, D/o</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="soWoDo"
                            fullWidth
                            size="small"
                            error={touched.soWoDo && !!errors.soWoDo}
                          >
                            <MenuItem value="S/o">S/o</MenuItem>
                            <MenuItem value="W/o">W/o</MenuItem>
                            <MenuItem value="D/o">D/o</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="soWoDo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Address</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="address"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.address && !!errors.address}
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>City</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="city"
                            fullWidth
                            size="small"
                            error={touched.city && !!errors.city}
                          >
                            <MenuItem value="City1">City 1</MenuItem>
                            <MenuItem value="City2">City 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="city"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 3 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>STD Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="stdCode"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.stdCode && !!errors.stdCode}
                          />
                          <ErrorMessage
                            name="stdCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>District</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="district"
                            fullWidth
                            size="small"
                            error={touched.district && !!errors.district}
                          >
                            <MenuItem value="District1">District 1</MenuItem>
                            <MenuItem value="District2">District 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="district"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Mobile No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mobileNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.mobileNo && !!errors.mobileNo}
                          />
                          <ErrorMessage
                            name="mobileNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 4 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>State</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="state"
                            fullWidth
                            size="small"
                            error={touched.state && !!errors.state}
                          >
                            <MenuItem value="State1">State 1</MenuItem>
                            <MenuItem value="State2">State 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>WhatsApp No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="whatsappNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.whatsappNo && !!errors.whatsappNo}
                          />
                          <ErrorMessage
                            name="whatsappNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Aadhar No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="aadharNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.aadharNo && !!errors.aadharNo}
                          />
                          <ErrorMessage
                            name="aadharNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 5 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Pin Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="pinCode"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.pinCode && !!errors.pinCode}
                          />
                          <ErrorMessage
                            name="pinCode"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Mail ID</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mailId"
                            type="email"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.mailId && !!errors.mailId}
                          />
                          <ErrorMessage
                            name="mailId"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>PAN No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="panNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.panNo && !!errors.panNo}
                          />
                          <ErrorMessage
                            name="panNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 6 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Credit Limit</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="creditLimit"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.creditLimit && !!errors.creditLimit}
                          />
                          <ErrorMessage
                            name="creditLimit"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Credit Limit Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="creditLimitDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.creditLimitDate &&
                              !!errors.creditLimitDate
                            }
                          />
                          <ErrorMessage
                            name="creditLimitDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Ledger Group</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="ledgerGroup"
                            fullWidth
                            size="small"
                            error={touched.ledgerGroup && !!errors.ledgerGroup}
                          >
                            <MenuItem value="Group1">Group 1</MenuItem>
                            <MenuItem value="Group2">Group 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="ledgerGroup"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 7 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Opening Balance</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="openingBalance"
                            fullWidth
                            size="small"
                            error={
                              touched.openingBalance && !!errors.openingBalance
                            }
                          >
                            <MenuItem value="Positive">Positive</MenuItem>
                            <MenuItem value="Negative">Negative</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="openingBalance"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>GST Dealer Type</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="gstDealerType"
                            fullWidth
                            size="small"
                            error={
                              touched.gstDealerType && !!errors.gstDealerType
                            }
                          >
                            <MenuItem value="Regular">Regular</MenuItem>
                            <MenuItem value="Composition">Composition</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="gstDealerType"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>GST No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="gstNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.gstNo && !!errors.gstNo}
                          />
                          <ErrorMessage
                            name="gstNo"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 8 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Staff Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="staffName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.staffName && !!errors.staffName}
                          />
                          <ErrorMessage
                            name="staffName"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Category</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="category"
                            fullWidth
                            size="small"
                            error={touched.category && !!errors.category}
                          >
                            <MenuItem value="Category1">Category 1</MenuItem>
                            <MenuItem value="Category2">Category 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="category"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Location</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="location"
                            fullWidth
                            size="small"
                            error={touched.location && !!errors.location}
                          >
                            <MenuItem value="Location1">Location 1</MenuItem>
                            <MenuItem value="Location2">Location 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="location"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {/* Row 9 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>WEF Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="wefDate"
                            fullWidth
                            size="small"
                            error={touched.wefDate && !!errors.wefDate}
                          >
                            <MenuItem value="Date1">Date 1</MenuItem>
                            <MenuItem value="Date2">Date 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="wefDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Due Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="dueDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.dueDate && !!errors.dueDate}
                          />
                          <ErrorMessage
                            name="dueDate"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}></Grid>
                        <Grid item xs={8}></Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                  {/* Row 10 */}

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel>Document 1</FormLabel>
                      <input
                        type="file"
                        name="document1"
                        onChange={(event) => {
                          setFieldValue(
                            "document1",
                            event.currentTarget.files[0]
                          );
                        }}
                        style={{
                          padding: "8px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                        }} // Custom styles
                      />
                      <ErrorMessage
                        name="document1"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel>Document 2</FormLabel>
                      <input
                        type="file"
                        name="document2"
                        onChange={(event) => {
                          setFieldValue(
                            "document2",
                            event.currentTarget.files[0]
                          );
                        }}
                        style={{
                          padding: "8px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                        }} // Custom styles
                      />
                      <ErrorMessage
                        name="document2"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel>Document 3</FormLabel>
                      <input
                        type="file"
                        name="document3"
                        onChange={(event) => {
                          setFieldValue(
                            "document3",
                            event.currentTarget.files[0]
                          );
                        }}
                        style={{
                          padding: "8px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                        }} // Custom styles
                      />
                      <ErrorMessage
                        name="document3"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel>Document 4</FormLabel>
                      <input
                        type="file"
                        name="document4"
                        onChange={(event) => {
                          setFieldValue(
                            "document4",
                            event.currentTarget.files[0]
                          );
                        }}
                        style={{
                          padding: "8px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                        }} // Custom styles
                      />
                      <ErrorMessage
                        name="document4"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Box className="mt-6 flex items-end gap-4 ml-0 justify-end">
                  <Button
                    size="small"
                    type="submit"
                    color="primary"
                    variant="contained"
                    className="p-2"
                  >
                    Save
                  </Button>

                  <Button
                    size="small"
                    type="button"
                    color="error"
                    variant="outlined"
                    className="p-2"
                  >
                    Down Loads View
                  </Button>

                  <Button
                    size="small"
                    type="reset"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    Verify Details
                  </Button>

                  <Button
                    size="small"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    Close
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    
  );
};

export default LedgerTempAddresh;

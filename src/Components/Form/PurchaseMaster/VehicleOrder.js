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
  Grid,
  Divider,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const VehicleOrder = () => {
  const validationSchema = Yup.object().shape({
    orderNo: Yup.string().required("Order No is required"),
    transactionDate: Yup.string().required("Transaction Date is required"),
    location: Yup.string().required("Location is required"),
    supplierName: Yup.string().required("Supplier Name is required"),
    orderType: Yup.string().required("Order Type is required"),
    orderGroup: Yup.string().required("Order Group is required"),
    vehicleModel: Yup.string().required("Vehicle Model is required"),
    color: Yup.string().required("Color is required"),
    qty: Yup.string().required("Qty is required"),
    price: Yup.string().required("Price is required"),
    chooseFile: Yup.mixed().required("Choose a file"),
    loadExcelFile: Yup.mixed().required("Load Excel File is required"),
  });

  const initialValues = {
    orderNo: "",
    transactionDate: "",
    location: "",
    supplierName: "",
    orderType: "",
    orderGroup: "",
    vehicleModel: "",
    color: "",
    qty: "",
    price: "",
    chooseFile: null,
    loadExcelFile: null,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values, "Submitted values");

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <div className="  mb-[50px] pl-2">
        <Box
          className="bg-white p-2 rounded-lg shadow-lg border"
          autoComplete="off"
        >
          <Box className=" flex justify-between items-center ">
            <Typography>Vehicle Order</Typography>
          </Box>
          <Divider className="divider" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="purchase-order-form">
                <Grid container spacing={1}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Order No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="orderNo"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.orderNo && !!errors.orderNo}
                          />
                          <ErrorMessage
                            name="orderNo"
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
                          <FormLabel>Transaction Date</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            type="date"
                            name="transactionDate"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.transactionDate &&
                              !!errors.transactionDate
                            }
                          />
                          <ErrorMessage
                            name="transactionDate"
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
                            variant="outlined"
                            size="small"
                            error={touched.location && !!errors.location}
                          >
                            <MenuItem value="location1">Location 1</MenuItem>
                            <MenuItem value="location2">Location 2</MenuItem>
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

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Supplier Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="supplierName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.supplierName && !!errors.supplierName
                            }
                          />
                          <ErrorMessage
                            name="supplierName"
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
                          <FormLabel>Order Type</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="orderType"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.orderType && !!errors.orderType}
                          >
                            <MenuItem value="type1">Type 1</MenuItem>
                            <MenuItem value="type2">Type 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="orderType"
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
                          <FormLabel>Order Group</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="orderGroup"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.orderGroup && !!errors.orderGroup}
                          >
                            <MenuItem value="group1">Group 1</MenuItem>
                            <MenuItem value="group2">Group 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="orderGroup"
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
                          <FormLabel>Vehicle Model</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="vehicleModel"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={
                              touched.vehicleModel && !!errors.vehicleModel
                            }
                          >
                            <MenuItem value="model1">Model 1</MenuItem>
                            <MenuItem value="model2">Model 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="vehicleModel"
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
                          <FormLabel>Color</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="color"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.color && !!errors.color}
                          >
                            <MenuItem value="red">Red</MenuItem>
                            <MenuItem value="blue">Blue</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="color"
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
                          <FormLabel>Qty</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="qty"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.qty && !!errors.qty}
                          />
                          <ErrorMessage
                            name="qty"
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
                          <FormLabel>Price</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="price"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.price && !!errors.price}
                          />
                          <ErrorMessage
                            name="price"
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
                          <FormLabel>Choose File</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            name="chooseFile"
                            type="file"
                            fullWidth
                            variant="outlined"
                            size="small"
                            onChange={(e) =>
                              setFieldValue("chooseFile", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            name="chooseFile"
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
                          <FormLabel>Load Excel File</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            name="loadExcelFile"
                            type="file"
                            fullWidth
                            variant="outlined"
                            size="small"
                            onChange={(e) =>
                              setFieldValue("loadExcelFile", e.target.files[0])
                            }
                          />
                          <ErrorMessage
                            name="loadExcelFile"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                <Box className="mt-6 flex items-end gap-4 ml-0 justify-end">
                  <Button
                    size="small"
                    type="reset"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    New Order
                  </Button>
                  <Button
                    size="small"
                    type="reset"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    Print Order
                  </Button>
                  <Button
                    size="small"
                    type="reset"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    Preview Order
                  </Button>
                  <Button
                    size="small"
                    type="reset"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    Cancel Order
                  </Button>
                  <Button
                    className="project-thim p-2"
                    size="small"
                    type="submit"
                    variant="contained"
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
                    Delete
                  </Button>

                  <Button
                    size="small"
                    type="reset"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    Refresh
                  </Button>

                  <Button
                    size="small"
                    color="default"
                    variant="outlined"
                    className="p-2"
                  >
                    Exit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </>
  );
};

export default VehicleOrder;

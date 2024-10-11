import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  InputAdornment,
  Divider,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AccessDetailsDeliveryModal = ({
  detailModalOpen,
  handeAccessDetails,
}) => {
  // Initial values
  const initialValues = {
    accessDetails: "",
    accessDas: "",
    outNumber: "",
    disc: "",
    gstPercentage: "",
    price: "",
    accessoriesType: "",
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    accessDetails: Yup.string().required("Access Details is required"),
    accessDas: Yup.string().required("Access Das is required"),
    outNumber: Yup.number().required("Out Number is required"),
    disc: Yup.string().required("Discount is required"),
    gstPercentage: Yup.number().required("GST Percentage is required"),
    price: Yup.number().required("Price is required"),
    accessoriesType: Yup.string().required("Select Accessories Type"),
  });

  // Form submission handler
  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form Submitted!", values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

  return (
    <Dialog
      open={detailModalOpen}
      onClose={() => {
        handeAccessDetails();
      }}
      maxWidth="md"
      fullWidth
      sx={{ borderRadius: "20px" }}
    >
      <Box className="project-thim text-white rounded-sm">
        <DialogTitle>Access Details Delivery</DialogTitle>
      </Box>
      <Divider className="divider" />
      <DialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <Grid container spacing={1}>
                {/* Access Details Dropdown */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Access Details</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="accessDetails"
                          fullWidth
                          variant="outlined"
                        >
                          <MenuItem value="Detail1">Detail 1</MenuItem>
                          <MenuItem value="Detail2">Detail 2</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="accessDetails"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Access Das Dropdown */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Access Das</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="accessDas"
                          fullWidth
                          variant="outlined"
                        >
                          <MenuItem value="Das1">Das 1</MenuItem>
                          <MenuItem value="Das2">Das 2</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="accessDas"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Out Number */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Out Number</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="outNumber"
                          type="number"
                          fullWidth
                          variant="outlined"
                          error={touched.outNumber && !!errors.outNumber}
                        />
                        <ErrorMessage
                          name="outNumber"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Discount */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Discount</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="disc"
                          fullWidth
                          variant="outlined"
                          error={touched.disc && !!errors.disc}
                        />
                        <ErrorMessage
                          name="disc"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* GST Percentage */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>GST %</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="gstPercentage"
                          type="number"
                          fullWidth
                          variant="outlined"
                          error={
                            touched.gstPercentage && !!errors.gstPercentage
                          }
                        />
                        <ErrorMessage
                          name="gstPercentage"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Price */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Price</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="price"
                          type="number"
                          fullWidth
                          variant="outlined"
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

                {/* Accessories Type Radio Buttons */}
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Accessories Type</FormLabel>
                    <Field as={RadioGroup} name="accessoriesType" row>
                      <FormControlLabel
                        value="accessories"
                        control={<Radio />}
                        label="Accessories"
                      />
                      <FormControlLabel
                        value="stdAccessories"
                        control={<Radio />}
                        label="Std. Accessories"
                      />
                    </Field>
                    <ErrorMessage
                      name="accessoriesType"
                      component="div"
                      className="text-red-600 text-xs"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="sapace-around"
                  className="gap-2 "
                >
                  <Typography>Tyre Bin No: 0</Typography>
                  <Typography>Stock Qty: 0</Typography>
                </Box>
              </Grid>
              {/* Tyre Bin No and Stock Qty */}

              <DialogActions>
                <Button
                  onClick={() => {}}
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
                <Button
                  onClick={() => {
                    handeAccessDetails();
                  }}
                  color="secondary"
                >
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AccessDetailsDeliveryModal;

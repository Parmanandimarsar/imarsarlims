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

const LabourMaster = () => {
  const validationSchema = Yup.object().shape({
    labourCode: Yup.string().required("Labour Code is required"),
    specialId: Yup.string().required("Special ID is required"),
    labourName: Yup.string().required("Labour Name is required"),
    labourGroup: Yup.string().required("Labour Group is required"),
    labour: Yup.string().required("Labour  is required"),
    sacCode: Yup.string().required("SAC Code is required"),
    igstNo: Yup.number().required("IGST No is required"),
    cgstNo: Yup.number().required("CGST No is required"),
    sgstNo: Yup.number().required("SGST No is required"),
    mrp: Yup.number().required("MRP is required"),
    defaultQty: Yup.number().required("Default Quantity is required"),
  });

  const initialValues = {
    labourCode: "",
    specialId: "",
    labourName: "",
    labourGroup: "",
    labour: "",
    sacCode: "",
    igstNo: "",
    cgstNo: "",
    sgstNo: "",
    mrp: "",
    defaultQty: "",
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
        <Box className="bg-white p-2 rounded-lg shadow-lg" autoComplete="off">
          <Box className="flex justify-between items-center mb-1">
            <Typography
              variant="h6"
              component="h1"
              className="text-center mb-6"
            >
              Labour Master
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
            {({ errors, touched, isSubmitting }) => (
              <Form autoComplete="off" className="staff-master-form">
                <Grid container spacing={2}>
                  {/* Row 1 */}
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth>
                      <Grid container alignItems="center">
                        <Grid item xs={4}>
                          <FormLabel>Labour Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="labourCode"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.labourCode && !!errors.labourCode}
                          />
                          <ErrorMessage
                            name="labourCode"
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
                            as={TextField}
                            name="specialId"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.specialId && !!errors.specialId}
                          />
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
                          <FormLabel>Labour Name</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="labourName"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.labourName && !!errors.labourName}
                          />
                          <ErrorMessage
                            name="labourName"
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
                          <FormLabel>Labour Group</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="labourGroup"
                            fullWidth
                            size="small"
                            error={touched.labourGroup && !!errors.labourGroup}
                          >
                            <MenuItem value="Group1">Group 1</MenuItem>
                            <MenuItem value="Group2">Group 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="labourGroup"
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
                          <FormLabel>Labour </FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={Select}
                            name="labour"
                            fullWidth
                            size="small"
                            error={
                              touched.labour && !!errors.labour
                            }
                          >
                            <MenuItem value="Labour1">Labour 1</MenuItem>
                            <MenuItem value="Labour2">Labour 2</MenuItem>
                          </Field>
                          <ErrorMessage
                            name="labourDropdown"
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
                          <FormLabel>SAC Code</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="sacCode"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.sacCode && !!errors.sacCode}
                          />
                          <ErrorMessage
                            name="sacCode"
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
                          <FormLabel>IGST No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="igstNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.igstNo && !!errors.igstNo}
                          />
                          <ErrorMessage
                            name="igstNo"
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
                          <FormLabel>CGST No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="cgstNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.cgstNo && !!errors.cgstNo}
                          />
                          <ErrorMessage
                            name="cgstNo"
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
                          <FormLabel>SGST No</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="sgstNo"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.sgstNo && !!errors.sgstNo}
                          />
                          <ErrorMessage
                            name="sgstNo"
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
                          <FormLabel>MRP</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="mrp"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.mrp && !!errors.mrp}
                          />
                          <ErrorMessage
                            name="mrp"
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
                          <FormLabel>Default Qty</FormLabel>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            as={TextField}
                            name="defaultQty"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                            error={touched.defaultQty && !!errors.defaultQty}
                          />
                          <ErrorMessage
                            name="defaultQty"
                            component="div"
                            className="text-red-600 text-xs"
                          />
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Buttons */}
                <Box className="mt-6 flex gap-4 justify-end">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="small"
                  >
                    Save
                  </Button>

                  <Button
                    type="button"
                    color="error"
                    variant="outlined"
                    size="small"
                  >
                    Deactivate
                  </Button>
                  <Button
                    type="reset"
                    color="default"
                    variant="outlined"
                    size="small"
                  >
                    Clear
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
   
  );
};

export default LabourMaster;

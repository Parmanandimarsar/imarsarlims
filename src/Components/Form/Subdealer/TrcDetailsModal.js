
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
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";

const TrcDetailsModal = ({ detailModalOpen, handelModalOpen }) => {
  // Initial values
  const initialValues = {
    trcDate: "",
    trcNo: "",
    placeOfPermanentRegi: "",
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    trcDate: Yup.date().required("TRC Date is required"),
    trcNo: Yup.string().required("TRC No is required"),
    placeOfPermanentRegi: Yup.string().required("Place of Permanent Registration is required"),
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
      onClose={handelModalOpen}
      maxWidth="md"
      fullWidth
      sx={{ borderRadius: "20px" }}
    >
      <Box className="project-thim text-white rounded-sm">
        <DialogTitle>TRC Details</DialogTitle>
        <IconButton
        aria-label="close"
        onClick={handelModalOpen}
        sx={(theme) => ({
          position: "absolute",
          right: 5,
          top: -3,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
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
                {/* TRC Date */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>TRC Date</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="trcDate"
                          type="date"
                          fullWidth
                          variant="outlined"
                          error={touched.trcDate && !!errors.trcDate}
                        />
                        <ErrorMessage
                          name="trcDate"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* TRC No */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>TRC No</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={TextField}
                          name="trcNo"
                          fullWidth
                          variant="outlined"
                          error={touched.trcNo && !!errors.trcNo}
                        />
                        <ErrorMessage
                          name="trcNo"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Place of Permanent Registration Dropdown */}
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <Grid container alignItems="center">
                      <Grid item xs={4}>
                        <FormLabel>Place of Per. Reg.</FormLabel>
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          as={Select}
                          name="placeOfPermanentRegi"
                          fullWidth
                          variant="outlined"
                        >
                          <MenuItem value="Location1">Location 1</MenuItem>
                          <MenuItem value="Location2">Location 2</MenuItem>
                          <MenuItem value="Location3">Location 3</MenuItem>
                        </Field>
                        <ErrorMessage
                          name="placeOfPermanentRegi"
                          component="div"
                          className="text-red-600 text-xs"
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
              </Grid>

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
                  onClick={handelModalOpen}
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

export default TrcDetailsModal;

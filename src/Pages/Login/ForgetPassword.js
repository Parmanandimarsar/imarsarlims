import React from "react";
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormLabel,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RxCross2 } from "react-icons/rx";

const ForgotPassword = ({ open, onClose }) => {
  const forgotPasswordValidationSchema = Yup.object().shape({
    forgotPasswordEmail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    forgotPasswordMobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
  });

  const forgotPasswordInitialValues = {
    forgotPasswordEmail: "",
    forgotPasswordMobile: "",
  };

  const handleForgotPasswordSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      // Handle submission logic
      setSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      className=" relative "
    >
      <div className=" absolute  right-5 top-4  " onClick={onClose}>
        <RxCross2 className="text-gray-500 text-2xl" />
      </div>
      <DialogTitle className="  text-center py-4">Reset Password</DialogTitle>
      <Formik
        initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={handleForgotPasswordSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form autoComplete="off">
            <DialogContent className="pl-6 pr-6">
              <Typography variant="body1" className="mb-4 text-gray-700 ">
                Enter your email and mobile number to reset your password.
              </Typography>
              <FormLabel>Email Address</FormLabel>
              <Field
                as={TextField}
                autoFocus
               
                id="forgotPasswordEmail"
                name="forgotPasswordEmail"
                type="email"
                fullWidth
                variant="outlined"
                
                error={
                  touched.forgotPasswordEmail && !!errors.forgotPasswordEmail
                }
                helperText={
                  touched.forgotPasswordEmail && errors.forgotPasswordEmail
                }
              />
              <FormLabel>Mobile Number</FormLabel>
              <Field
                as={TextField}
               
                id="forgotPasswordMobile"
                name="forgotPasswordMobile"
                type="tel"
                fullWidth
                variant="outlined"
               
                error={
                  touched.forgotPasswordMobile && !!errors.forgotPasswordMobile
                }
                helperText={
                  touched.forgotPasswordMobile && errors.forgotPasswordMobile
                }
              />
            </DialogContent>

            <DialogActions className=" p-4">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className="w-full py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ForgotPassword;

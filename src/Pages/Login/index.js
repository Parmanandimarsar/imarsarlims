import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ForgotPassword from "./ForgetPassword";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLoginSubmit = (values, { setSubmitting }) => {
    console.log(values,"value");
    
    setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      navigate("/staff-master-form");
      setSubmitting(false);
    }, 1000);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box
        className="w-full max-w-md p-8 bg-white shadow-md rounded-lg"
        sx={{
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          className="mb-6 text-center font-bold text-gray-700"
        >
          Login
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form autoComplete="off">
              <div className="mb-4">
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  className="bg-gray-50"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  autoComplete="off"
                />
              </div>

              <div className="mb-4">
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  className="bg-gray-50"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  autoComplete="new-password"
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <Link
                  onClick={handleClickOpen}
                  variant="body2"
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="py-2 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>

      {/* Forgot Password Modal */}
      <ForgotPassword open={open} onClose={handleClose} />
    </Container>
  );
};

export default Login;

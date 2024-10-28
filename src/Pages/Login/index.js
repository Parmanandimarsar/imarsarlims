import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Link,
  FormLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ForgotPassword from "./ForgetPassword";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import img from "../../../src/assets/images/imarsaricon.jpg";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // state for password visibility
  const navigate = useNavigate();

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("UserName is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLoginSubmit = (values, { setSubmitting }) => {
    console.log(values, "value");
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

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="flex items-center justify-center min-h-screen bg-[#ffff]">
      <Box
        className="w-full max-w-[20rem] p-8 bg-white shadow-md rounded-lg"
        sx={{
          boxShadow: 3,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{ fontWeight: "700" }}
              className=" text-[#0b5394]"
            >
              iMARSAR-LIMS
            </Typography>
            <Typography
              // variant="h6"
              component="h1"
              sx={{ fontWeight: "600" }}
              className="mb-6  font-bold text-gray-700"
            >
              Login to your Account
            </Typography>
          </Box>
          <img src={img} alt="logo" className="w-[90px] h-[59px]" />
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form autoComplete="off">
              <div className="mb-4">
                <FormLabel>Username</FormLabel>
                <Field
                  as={TextField}
                  name="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  autoComplete="off"
                />
              </div>

              <div className="mb-4">
                <FormLabel>Password</FormLabel>
                <Field
                  as={TextField}
                  name="password"
                  type={showPassword ? "text" : "password"} // conditional type
                  fullWidth
                  variant="outlined"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="flex justify-end items-center mb-4">
                <Link
                  onClick={handleClickOpen}
                  variant="body2"
                  className="text-[#0b5394] hover:underline cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="small"
                sx={{background:"#0b5394" }}
                className="py-1 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "SIGN IN"}
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

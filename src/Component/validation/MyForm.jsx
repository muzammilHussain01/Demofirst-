import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid, Typography } from "@mui/material";

const FormComponent = () => {
  const validationSchema = yup.object({
    name: yup.string().required("This field can't be empety !!"),
    email: yup
      .string()
      .email("Invalid email")
      .required("This field can't be empety !!"),
    password: yup
      .string()
      .min(8, "Password should be at least 8 characters")
      .required("This field can't be empety !!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords didn't match !!")
      .required("This field can't be empety !!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Submitted data:", values);
    },
  });

  return (
    <Grid container justifyContent="center">
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default FormComponent;

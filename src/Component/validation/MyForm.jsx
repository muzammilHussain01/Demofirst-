import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

const FormComponent = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormdata({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let err = {};
    if (formData.name === "") {
      err = { ...err, name: "Name is required !" };
      setFormErrors(err);
    }
    if (formData.email === "") {
      err = { ...err, email: "email is required !" };
      setFormErrors(err);
    }
    if (formData.password === "") {
      err = { ...err, password: "Password is required !" };
      setFormErrors(err);
    } else if (formData.password !== formData.confirmPassword) {
      err = { ...err, confirmPassword: "Password did not match !" };
      setFormErrors(err);
    } else {
      console.log("The data is", formData);
    }
    setFormdata({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const handleBlur = () => {
    let err = {};
    const hasUpperCase = /[A-Z]/.test(formData.password); // Check for uppercase letters
    const hasLowerCase = /[a-z]/.test(formData.password); // Check for lowercase letters
    const hasDigit = /\d+/.test(formData.password); // Check for digits
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password); // Check for special characters

    if (
      !hasUpperCase ||
      !hasLowerCase ||
      !hasDigit ||
      !hasSpecialChar ||
      formData.password < 8
    ) {
      err = { ...err, password: "Password is week !" };
      setFormErrors(err);
    }
  };
  return (
    <Grid container justifyContent="center">
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={!!formErrors.name}
          helperText={formErrors.name}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          //   onBlur={handleBlur}
          error={!!formErrors.email}
          helperText={formErrors.email}
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={!!formErrors.password}
          helperText={formErrors.password}
          fullWidth
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          //   onBlur={handleBlur}
          error={!!formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
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

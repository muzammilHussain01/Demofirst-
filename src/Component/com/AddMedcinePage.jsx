import React, { useRef, useState } from "react";
import { TextField, Button, Grid, MenuItem } from "@material-ui/core";
import { Select, FormControl, InputLabel } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

import "../../Component/com/AddMedcinePage.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SketchPicker } from "react-color";

const initialValues = {
  uniqueId: "",
  batchNo: "",
  medicineName: "",
  medicineCompany: "",
  quantity: "",
  expiryDate: "",
  purchaseDate: "",
  type: "",
  purchasePrice: "",
  salePrice: "",

  supplierNo: "",
  supplierId: "",
  strength: "",
  description: "",
  rackOption: "rackNo",
  rackNo: "",
  rackColour: "",
};
console.log(initialValues.purchasePrice);
const validationSchema = Yup.object().shape({
  uniqueId: Yup.string()
    .matches(
      /^[A-Za-z0-9]\w{0,17}/,
      "Must start with a letter (capital or small) and have maximum length of 18!"
    )
    .max(18)
    .required("This field can't be empty!"),

  batchNo: Yup.string()
    .matches(/^[A-Za-z0-9]\w{0,17}/, "Please enter valid batchNo !")
    .max(18)
    .required("This field can't be empty!"),
  medicineName: Yup.string()
    .matches(/^[A-Za-z]\w{0,17}/, "Please enter valid name !!")
    .required("This field can't be empty!"),
  medicineCompany: Yup.string()
    .matches(/^[A-Za-z]\w{0,17}/, "Please enter valid company name !!")
    .max(18)
    .required("This field can't be empty!"),
  quantity: Yup.number()
    .typeError("This field must be a number")
    .required("This field can't be empty!")
    .positive("This field must be positive"),
  expiryDate: Yup.date().required("This field can't be empty!"),
  purchaseDate: Yup.date().required("This field can't be empty!"),

  type: Yup.string().required("This field can't be empty!"),
  purchasePrice: Yup.number()
    .typeError("Purchase price must be a number")
    .required("This field can't be empty!")
    .positive("Purchase price must be positive"),
  salePrice: Yup.number()
    .typeError("Sale price must be a number")
    .required("This field can't be empty!")
    .positive("Sale price must be positive"),
  supplierNo: Yup.string()
    .matches(/[0-9]/, "Must be a number !")
    .max(8)
    .required("This field can't be empty!"),
  supplierId: Yup.string()
    .matches(/^[A-Za-z0-9]\w{0,17}/, "Please enter valid batchNo !")
    .min(5)
    .max(50)
    .required("This field can't be empty!"),
  strength: Yup.string()
    .matches(/^[0-9]\w{0,17}/, "Please enter valid strength !")
    .required("This field can't be empty!"),
  rackNo: Yup.string()
    .matches(/^[0-9]\w{0,17}/, "Please enter valid rackNo !")
    .required("This field can't be empty!"),
  rackColour: Yup.string(),
  description: Yup.string()
    .matches(/^[A-Za-z]\w{0,100}/, "Describe here !")
    .required("This field can't be empty!"),
});

const AddMedicinePage = () => {
  // localStorage.clear();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snakeBoxMSG, setSnakeBoxMSG] = useState("");
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [rackColor, setRackColor] = useState("#000000"); // Default to black for color picker
  console.log(rackColor);
  const snakeBoxStyle = useRef();
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    if (values.purchaseDate >= values.expiryDate) {
      setSnackbarOpen(true);
      setSnakeBoxMSG("Product is expired. Please check the expire date !");
    } else if (parseInt(values.purchasePrice) >= parseInt(values.salePrice)) {
      setSnackbarOpen(true);
      setSnakeBoxMSG("Sale price must be greater than purchase price!");
    } else {
      localStorage.setItem(
        `Medicine Entry => ${Date.now()}`,
        JSON.stringify(values)
      );
      setSnackbarOpen(true);
      setSnakeBoxMSG("Submitted Successfully !");
      resetForm();
    }
  };

  return (
    <>
      <Snackbar
        ref={snakeBoxStyle}
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "auto",
        }}
      >
        <SnackbarContent message={snakeBoxMSG} />
      </Snackbar>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="formContainer">
            <label className="formLabel">Add Medicine</label>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="uniqueId"
                  label="Unique Id"
                  variant="outlined"
                  fullWidth
                  error={errors.uniqueId && touched.uniqueId}
                  helperText={
                    errors.uniqueId && touched.uniqueId && errors.uniqueId
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="batchNo"
                  label="Batch no"
                  variant="outlined"
                  fullWidth
                  error={errors.batchNo && touched.batchNo}
                  helperText={
                    errors.batchNo && touched.batchNo && errors.batchNo
                  }
                />
              </Grid>
              <Grid item xs={12} className="formField">
                <Field
                  as={TextField}
                  name="medicineName"
                  label="Medicine Name"
                  variant="outlined"
                  fullWidth
                  error={errors.medicineName && touched.medicineName}
                  helperText={
                    errors.medicineName &&
                    touched.medicineName &&
                    errors.medicineName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="medicineCompany"
                  label="Medicine Company"
                  variant="outlined"
                  fullWidth
                  error={errors.medicineCompany && touched.medicineCompany}
                  helperText={
                    errors.medicineCompany &&
                    touched.medicineCompany &&
                    errors.medicineCompany
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="quantity"
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                  error={errors.quantity && touched.quantity}
                  helperText={
                    errors.quantity && touched.quantity && errors.quantity
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="expiryDate"
                  label="Expiry date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={errors.expiryDate && touched.expiryDate}
                  helperText={
                    errors.expiryDate && touched.expiryDate && errors.expiryDate
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="purchaseDate"
                  label="Purchase date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={errors.purchaseDate && touched.purchaseDate}
                  helperText={
                    errors.purchaseDate &&
                    touched.purchaseDate &&
                    errors.purchaseDate
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="type-label">Type</InputLabel>
                  <Field
                    as={Select}
                    labelId="type-label"
                    name="type"
                    error={errors.type && touched.type}
                  >
                    <MenuItem value="">Choose Type...</MenuItem>
                    <MenuItem value="Tablet">Tablet</MenuItem>
                    <MenuItem value="Syrup">Syrup</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="purchasePrice"
                  label="Purchase Price"
                  variant="outlined"
                  fullWidth
                  error={errors.purchasePrice && touched.purchasePrice}
                  helperText={
                    errors.purchasePrice &&
                    touched.purchasePrice &&
                    errors.purchasePrice
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="salePrice"
                  label="Sale Price"
                  variant="outlined"
                  fullWidth
                  error={errors.salePrice && touched.salePrice}
                  helperText={
                    errors.salePrice && touched.salePrice && errors.salePrice
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="supplierNo"
                  label="Supplier no"
                  variant="outlined"
                  fullWidth
                  error={errors.supplierNo && touched.supplierNo}
                  helperText={
                    errors.supplierNo && touched.supplierNo && errors.supplierNo
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6} className="formField">
                <Field
                  as={TextField}
                  name="supplierId"
                  label="Supplier Id"
                  variant="outlined"
                  fullWidth
                  error={errors.supplierId && touched.supplierId}
                  helperText={
                    errors.supplierId && touched.supplierId && errors.supplierId
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} className="formField">
                <Field
                  fullWidth
                  as={TextField}
                  name="strength"
                  label="Strength"
                  variant="outlined"
                  error={errors.strength && touched.strength}
                  helperText={
                    errors.strength && touched.strength && errors.strength
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6} className="formField">
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="rack-option"
                    name="rackOption"
                    value={values.rackOption}
                    onChange={(e) => {
                      setFieldValue("rackOption", e.target.value);
                      if (e.target.value === "rackColor") {
                        setIsColorPickerOpen(true); // Open color picker when selected
                      }
                    }}
                    row
                  >
                    <FormControlLabel
                      value="rackNo"
                      control={<Radio />}
                      label="Rack No"
                    />
                    <FormControlLabel
                      value="rackColor"
                      control={<Radio />}
                      label="Rack Color"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {values.rackOption === "rackNo" ? (
                <Grid item xs={12} sm={6} className="formField">
                  <Field
                    as={TextField}
                    name="rackNo"
                    label="Rack No"
                    variant="outlined"
                    error={errors.rackNo && touched.rackNo}
                    helperText={
                      errors.rackNo && touched.rackNo && errors.rackNo
                    }
                  />
                </Grid>
              ) : (
                <Grid item xs={12} sm={6} className="formField">
                  {isColorPickerOpen && (
                    <SketchPicker
                      color={rackColor}
                      onChange={(color) => setRackColor(color.hex)}
                      onChangeComplete={(color) => {
                        setRackColor(color.hex);
                        setIsColorPickerOpen(false);
                        if (values.rackOption === "rackColor") {
                          setFieldValue("rackColour", color.hex);
                        }
                      }}
                    />
                  )}
                </Grid>
              )}

              <Grid item xs={12} className="formField">
                <Field
                  as={TextField}
                  name="description"
                  label="Description"
                  variant="outlined"
                  placeholder="Describe Here"
                  fullWidth
                  multiline
                  rows={2}
                  error={errors.description && touched.description}
                  helperText={
                    errors.description &&
                    touched.description &&
                    errors.description
                  }
                />
              </Grid>
            </Grid>
            <Button
              className="submitButton"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddMedicinePage;

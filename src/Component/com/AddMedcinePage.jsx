import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, MenuItem } from "@material-ui/core";
import { Select, FormControl, InputLabel } from "@mui/material";

import "./AddMedcinePage.css";

const InputForm = () => {
  const [formData, setFormData] = useState({
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
    rackColour: "",
    supplierNo: "",
    supplierId: "",
    strength: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [userKey, setUserKey] = useState(1);
  const handleSubmitButton = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    localStorage.setItem(
      `Medicine Entery=> ${userKey}`,
      JSON.stringify(formData)
    );
    setUserKey(userKey + 1);
    setFormData({
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
      rackColour: "",
      supplierNo: "",
      supplierId: "",
      strength: "",
      description: "",
    }); // Clear the form fields after submission
  };
  //localStorage.clear();
  return (
    <>
      <fieldset>
        <form className="form">
          <label className="formLabel">Input Medicine Details</label>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Unique Id"
                variant="outlined"
                fullWidth
                required
                name="uniqueId"
                onChange={handleChange}
                value={formData.uniqueId}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Batch no"
                variant="outlined"
                fullWidth
                required
                name="batchNo"
                onChange={handleChange}
                value={formData.batchNo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Medicine Name"
                variant="outlined"
                fullWidth
                required
                name="medicineName"
                onChange={handleChange}
                value={formData.medicineName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Medicine Company"
                variant="outlined"
                fullWidth
                required
                name="medicineCompany"
                onChange={handleChange}
                value={formData.medicineCompany}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantity"
                variant="outlined"
                fullWidth
                required
                name="quantity"
                onChange={handleChange}
                value={formData.quantity}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Expiry date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                required
                name="expiryDate"
                onChange={handleChange}
                value={formData.expiryDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Purchase date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                required
                name="purchaseDate"
                onChange={handleChange}
                value={formData.purchaseDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required variant="outlined">
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  label="Type"
                  value={formData.type}
                  onChange={handleChange}
                  name="type"
                >
                  <MenuItem value="">Choose Type...</MenuItem>
                  <MenuItem value="Tablet">Tablet</MenuItem>
                  <MenuItem value="Syrup">Syrup</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Purchase Price"
                variant="outlined"
                fullWidth
                required
                name="purchasePrice"
                onChange={handleChange}
                value={formData.purchasePrice}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sale Price"
                variant="outlined"
                fullWidth
                required
                name="salePrice"
                onChange={handleChange}
                value={formData.salePrice}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Rack no/rack colour"
                variant="outlined"
                fullWidth
                required
                name="rackColour"
                onChange={handleChange}
                value={formData.rackColour}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier no"
                variant="outlined"
                fullWidth
                required
                name="supplierNo"
                onChange={handleChange}
                value={formData.supplierNo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier Id"
                variant="outlined"
                fullWidth
                required
                name="supplierId"
                onChange={handleChange}
                value={formData.supplierId}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required variant="outlined">
                <InputLabel id="strength-label">Strength</InputLabel>
                <Select
                  labelId="strength-label"
                  label="Strength"
                  value={formData.strength}
                  onChange={handleChange}
                  name="strength"
                >
                  <MenuItem value="">Strength...</MenuItem>
                  <MenuItem value="500mg">500mg</MenuItem>
                  <MenuItem value="200mg">200mg</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                required
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
            onClick={handleSubmitButton}
          >
            Submit
          </Button>
        </form>
      </fieldset>
    </>
  );
};

export default InputForm; // Exporting only InputForm component
export const info = []; // Exporting info array separately

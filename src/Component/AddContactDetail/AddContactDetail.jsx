import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Grid } from "@material-ui/core";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import "./style.css";

const AddContactDetail = () => {
  const [dataList, setDataList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const initialValues = {
    contact: "",
    contactType: "",
  };

  const validationSchema = Yup.object().shape({
    contact: Yup.string()
      .matches(/^[0-9]/, "Please enter a valid number")
      .required("Contact is required")
      .min(10, "Contact number must be 10 characters"),
    contactType: Yup.string().required("Contact Type is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setDataList([...dataList, values]);

    resetForm();
  };

  return (
    <div className="wholeContainer">
      <label className="mainLable">Add Contact/ Mobile No:</label>
      <div className="containerTodo">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <Grid container spacing={2} className="mainGrid">
                <Grid item xs={12}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <div className="selectContainer">
                        <Field
                          as="select"
                          id="contactType"
                          name="contactType"
                          variant="outlined"
                          fullWidth
                          className={`selectField ${
                            errors.contactType && touched.contactType
                              ? "error"
                              : ""
                          }`}
                          style={{
                            height: "56px",
                            borderRadius: "5px",
                            border: "1px solid gray",
                            marginBottom: "30px",
                          }}
                        >
                          <option value="">Select Contact Type</option>
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                        </Field>
                      </div>
                    </Grid>
                    <Grid item xs={9}>
                      <Field
                        as={TextField}
                        type="text"
                        id="contact"
                        name="contact"
                        variant="outlined"
                        placeholder="Contact number"
                        error={errors.contact && touched.contact}
                        helperText={
                          errors.contact && touched.contact
                            ? errors.contact
                            : " "
                        } // Ensure there's always space reserved for the helper text
                        InputProps={{
                          style: {
                            height: "48px", // Set the desired height here
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary">
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                {dataList.map((data, index) => (
                  <Grid item xs={12} key={index}>
                    <div className="todoList">
                      <input
                        type="text"
                        className="secondFeild"
                        value={data.contactType}
                      />
                      <input
                        type="text"
                        className="firestFeild"
                        value={data.contact}
                      />
                      <button
                        className="removebtn"
                        onClick={() =>
                          setDataList(dataList.filter((_, i) => i !== index))
                        }
                      >
                        <RemoveIcon />
                      </button>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddContactDetail;

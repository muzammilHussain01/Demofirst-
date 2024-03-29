import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Grid } from "@material-ui/core";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import Box from "@mui/material/Box";

import Snackbar from "@mui/material/Snackbar";

import "./style.css";

const AddContactDetail = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //hi
  const [dataList, setDataList] = useState([]);
  const [snakeBoxMSG, setSnakeBoxMSG] = useState();

  const [icon, setIcon] = useState(<EditIcon />);
  const initialValues = {
    contact: "",
    contactType: "",
    disabled: true,
    icon: <EditIcon />,
  };

  const validationSchema = Yup.object().shape({
    contact: Yup.string()
      .matches(/^[0-9]/, "Please enter a valid number")
      .required("Contact is required")
      .min(10, "Contact number must be 10 characters"),
    contactType: Yup.string().required("Contact Type is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setDataList([
      ...dataList,
      { ...values, disabled: true, icon: <EditIcon /> },
    ]);
    setOpen(true);
    setSnakeBoxMSG("Contact Added !");
    resetForm();
  };
  const handleDlete = (index) => {
    setOpen(true);
    setSnakeBoxMSG("Contact Deleted !");
    setDataList(dataList.filter((_, i) => i !== index));
  };
  const handleDisabled = (index) => {
    const newDataList = [...dataList];
    newDataList[index].disabled = !newDataList[index].disabled;
    newDataList[index].icon = !newDataList[index].disabled ? (
      <EditIcon />
    ) : (
      <DoneIcon />
    );
    setDataList(newDataList);

    // if (disabled === true) {
    //   setDisabled(false);
    //   setIcon(<DoneIcon />);
    // } else {
    //   setDisabled(true);
    //   setIcon(<EditIcon />);
    // }
  };

  return (
    <div className="wholeContainer">
      <Snackbar
        open={open}
        onClose={handleClose}
        message={snakeBoxMSG}
        anchorOrigin={{
          vertical: "top", // Change as needed
          horizontal: "center", // Change as needed
        }}
        autoHideDuration={600}
        sx={{
          width: "10px",
          backgroundColor: "green",
          color: "white", // Specify your desired background color
        }}
      />

      <label className="mainLable">Add Contact/ Mobile No:</label>
      <div className="containerTodo">
        {dataList.map((data, index) => (
          <div key={index} className="todoList">
            <Formik initialValues={data}>
              {(errors, touched) => (
                <Form className="form">
                  <Grid
                    container
                    spacing={0}
                    className="mainGrid"
                    alignItems="center"
                  >
                    <Grid item xs={2}>
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
                            height: "30px",
                            borderRadius: "5px",
                            border: "1px solid gray",
                          }}
                          disabled={data.disabled}
                        >
                          <option value="">Select Contact Type</option>
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                        </Field>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <Field
                        as={TextField}
                        type="text"
                        id="contact"
                        name="contact"
                        variant="outlined"
                        placeholder="Contact number"
                        className={`selectField ${
                          errors.contactType && touched.contactType
                            ? "error"
                            : ""
                        }`}
                        InputProps={{
                          style: {
                            height: "28px",
                            marginLeft: "-30px",
                            outline: "none",
                            boxShadow: "none",
                          },
                        }}
                        disabled={data.disabled}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          height: "30px",
                          width: "fit-content",
                          background: "transparent",
                          marginLeft: "-250px",
                          marginBottom: "7px",
                        }}
                        className="removebtn"
                        onClick={() => handleDisabled(index)}
                      >
                        {icon}
                      </Button>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{
                          height: "30px",
                          width: "fit-content",
                          background: "transparent",
                          marginLeft: "-300px",
                          marginBottom: "7px",
                        }}
                        className="removebtn"
                        onClick={() => handleDlete(index)}
                      >
                        <RemoveIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        ))}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <Grid container spacing={0} className="mainGrid">
                <Grid item xs={2}>
                  <div className="selectContainer">
                    <Field
                      as="select"
                      id="contactType"
                      name="contactType"
                      variant="outlined"
                      fullWidth
                      className={`selectField ${
                        errors.contactType && touched.contactType ? "error" : ""
                      }`}
                      style={{
                        height: "30px",
                        borderRadius: "5px",
                        border: "1px solid gray",
                        marginRight: "0.5rem",
                      }}
                    >
                      <option value="">Select Contact Type</option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                    </Field>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <Field
                    as={TextField}
                    type="text"
                    id="contact"
                    name="contact"
                    variant="outlined"
                    placeholder="Contact number"
                    error={errors.contact && touched.contact}
                    helperText={
                      errors.contact && touched.contact ? errors.contact : " "
                    }
                    InputProps={{
                      style: {
                        height: "25px",
                        marginTop: "5px",
                        // marginRight: "0.5rem",
                        marginLeft: "-30px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      height: "30px",
                      width: "fit-content",
                      background: "transparent",

                      marginLeft: "-250px",
                    }}
                  >
                    <AddIcon />
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <div></div>
    </div>
  );
};

export default AddContactDetail;

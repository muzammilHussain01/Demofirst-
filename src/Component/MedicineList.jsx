import React, { useState, useEffect } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import axios from "axios";

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          "https://my.api.mockaroo.com/users.json?key=a154d0a0"
        );
        // console.log(response.data);
        setMedicines(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMedicines();
  }, []);

  const openContainer = (medicine) => {
    const arr = [];
    arr.push(medicine);
    setSelectedMedicine(arr);
    // console.log(medicine);

    setOpen(true);
  };
  //   console.log(selectedMedicine);

  const closeContainer = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Medicine List</h2>
      {medicines.map((medicine, index) => (
        <div key={index}>
          <Button onClick={() => openContainer(medicine)}>
            {medicine.name}
          </Button>
        </div>
      ))}
      <Modal
        open={open}
        onClose={closeContainer}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>Medicine Details</strong>
          </Typography>
          {selectedMedicine.map((a) => {
            return (
              <>
                <Typography id="modal-modal-description">
                  <strong>Name:</strong> {a.name}
                </Typography>
                <Typography id="modal-modal-description">
                  <strong>Price:</strong> {a.price} $
                </Typography>
                <Typography id="modal-modal-description">
                  <strong>Quality:</strong> {a.quality}
                </Typography>
                <Typography id="modal-modal-description">
                  <strong>Strength:</strong> {a.strength}
                </Typography>
              </>
            );
          })}
          <Button onClick={closeContainer}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MedicineList;

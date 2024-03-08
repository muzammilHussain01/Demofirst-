import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Tabel = () => {
  const [medicine, setMedicines] = useState([]);
  const [wholeMed, setWholeMed] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [startSliceIndex, setStartSliceIndex] = useState(0);
  const [endSliceIndex, setEndSliceIndex] = useState(5);
  const [open, setOpen] = useState(false);
  const [singleMedName, setSingleMedName] = useState("");
  const preBtnRef = useRef();

  const handleOpen = (value) => {
    setOpen(true);
    console.log(value);
    setSingleMedName(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickInInput = () => {
    setMedicines(wholeMed);
  };

  const handleSearch = () => {
    const searchResult = medicine.filter((med) => {
      return med.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    setMedicines(searchResult);
  };

  const nextBtn = () => {
    setStartSliceIndex(startSliceIndex + 5);
    setEndSliceIndex(endSliceIndex + 5);
  };

  const previousBtn = () => {
    setStartSliceIndex(startSliceIndex - 5);
    setEndSliceIndex(endSliceIndex - 5);
  };

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          "https://my.api.mockaroo.com/users.json?key=7cbd4ab0"
        );
        const result = response.data;
        setWholeMed(result);
        setMedicines(result.slice(startSliceIndex, endSliceIndex));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMedicines();
    if (preBtnRef.current && endSliceIndex <= 5) {
      preBtnRef.current.style.display = "none";
    } else if (preBtnRef.current) {
      preBtnRef.current.style.display = "inline";
    }
  }, [startSliceIndex, endSliceIndex]);

  const getClassForQuality = (value) => {
    if (value === "Excellent") {
      return "table-success"; // Green
    } else if (value === "Average") {
      return "table-warning"; // Yellow
    } else if (value === "Good") {
      return "table-info"; // Blue
    } else {
      return "table-danger"; // Red
    }
  };

  return (
    <>
      <div style={{ margin: "5px", backgroundColor: "rgb(191, 244, 244)" }}>
        <div className="row justify-content-end">
          <div className="col-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-button"
                onChange={(event) => {
                  setSearchKey(event.target.value);
                }}
                onClick={onClickInInput}
              />
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                id="search-button"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover ">
            <thead className="thead-light">
              <tr>
                <th style={{ backgroundColor: "#f5f5f5" }}>Name</th>
                <th style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
                  Strength
                </th>
                <th style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
                  Quality
                </th>
                <th style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {medicine.map((med, index) => (
                <tr key={index}>
                  <td>
                    <Button
                      variant="text"
                      onClick={() => handleOpen(med)}
                      style={{ textAlign: "left" }}
                    >
                      {med.name}
                    </Button>
                  </td>
                  <td
                    className={getClassForQuality(med.strength)}
                    style={{ borderRadius: "100px", textAlign: "center" }}
                  >
                    {med.strength}
                  </td>
                  <td style={{ textAlign: "center", width: "fitContent" }}>
                    {med.quality} mg
                  </td>
                  <td style={{ textAlign: "center" }}>{med.price} $</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button
          ref={preBtnRef}
          variant="outlined"
          onClick={previousBtn}
          style={{
            marginRight: "10px",
            backgroundColor: "rgb(83, 129, 245)",
            color: "black",
          }}
        >
          Prev..
        </Button>
        <Button
          variant="outlined"
          onClick={nextBtn}
          style={{
            backgroundColor: "rgb(83, 129, 245)",
            color: "black",
          }}
        >
          Next
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
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
            bgcolor: "rgb(191, 244, 244)",
            border: "2px solid rgb(191, 244, 244)",
            borderRadius: 8,
            boxShadow: 10,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong> About {singleMedName.name} </strong>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            optio vel quam facere similique ad. Autem quidem dicta magni eos
            suscipit praesentium animi necessitatibus dolor libero magnam culpa
            blanditiis odit fuga iusto molestiae dolorem excepturi sed
            recusandae atque, ipsum voluptates architecto maxime optio vel? Et
            rerum natus porro placeat inventore?
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Tabel;

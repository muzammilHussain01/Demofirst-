import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import SearchBar from "./SearchBar";
import DeleteDilog from "./DeleteDilog";

function DataTable() {
  const [info, setInfo] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          "https://my.api.mockaroo.com/users.json?key=a154d0a0"
        );
        const result = response.data.map((medicine, index) => ({
          id: index + 1,
          ...medicine,
        }));
        setInfo(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMedicines();
  }, []);

  const handleSearch = () => {
    const searchResult = info.filter((med) => {
      return med.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    setMedicines(searchResult);
  };

  const handleDelete = (id) => {
    const updatedData = info.filter((medicine) => medicine.id !== id);
    setInfo(updatedData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 730 },
    { field: "strength", headerName: "Strength", width: 130 },
    { field: "quality", headerName: "Quality", type: "number", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    {
      field: "delete",
      headerName: "",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <DeleteDilog
          handleConfirm={() => handleDelete(params.row.id)}
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];

  return (
    <>
      <SearchBar
        onChange={(event) => setSearchKey(event.target.value)}
        onClick={handleSearch}
      />
      <div style={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={medicines.length > 0 ? medicines : info}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          onCellClick={(params, event) => {
            if (event.target.type === "checkbox") {
              return;
            }
            event.stopPropagation();
          }}
        />
      </div>
    </>
  );
}

export default DataTable;

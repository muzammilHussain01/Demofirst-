import React, { useEffect, useState, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import PaginationOutlined from "./PaginationOutlined";
import "./table.css";
import SelectVariants from "./SelectVariants";
import Button from "@mui/material/Button";

import rowss from "./Data";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridOnIcon from "@mui/icons-material/GridOn";

export default function BasicTable() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [perPageData, setPerPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchID, setSearchID] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [searchByPrice, setSearchByPrice] = useState("");
  const [searchByQuantity, setSearchByQuantity] = useState("");
  const [indexStart, setIndexStart] = useState();
  const [indexEnd, setIndexEnd] = useState("");
  const [allSearch, setAllSearch] = useState("");
  const [dropdownData, setDropdownData] = useState(5);
  const toggleTotalSelectedRow = useRef();

  const [selectedPages, setSelectedPages] = useState({});

  const getTotalSelectedRows = () => {
    let totalSelected = 0;
    for (const pageRows of Object.values(selectedPages)) {
      totalSelected += pageRows.length;
    }
    return totalSelected;
  };
  console.log(rowss);
  useEffect(() => {
    if (toggleTotalSelectedRow.current && getTotalSelectedRows() > 0) {
      toggleTotalSelectedRow.current.style.display = "block";
    } else if (toggleTotalSelectedRow.current && getTotalSelectedRows() === 0) {
      toggleTotalSelectedRow.current.style.display = "none";
    }
  }, [selectedPages]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * dropdownData;
    const endIndex = startIndex + dropdownData;
    setPerPageData(rowss.slice(startIndex, endIndex));
    setIndexStart(startIndex + 1);
    setIndexEnd(endIndex);
    setSelectedRows(selectedPages[currentPage] || []);
    // Check if all rows on current page are selected
    const allRowsSelected =
      selectedPages[currentPage]?.length === perPageData.length;
    setSelectAll(allRowsSelected);
  }, [currentPage, dropdownData, selectedPages]);

  const handleChange = (event) => {
    setDropdownData(event.target.value);
  };

  useEffect(() => {
    let searchResult = [...rowss];

    if (searchID !== "") {
      searchResult = searchResult.filter((data) =>
        data.id.toString().includes(searchID)
      );
    }
    if (allSearch !== "") {
      searchResult = searchResult.filter((data) =>
        data.name.toLowerCase().includes(allSearch.toLowerCase())
      );
    }
    if (searchByName !== "") {
      searchResult = searchResult.filter((data) =>
        data.name.toLowerCase().includes(searchByName.toLowerCase())
      );
    }
    if (searchByPrice !== "") {
      const numericPrice = parseFloat(searchByPrice.replace("$", ""));
      searchResult = searchResult.filter((data) =>
        data.price.includes(numericPrice)
      );
    }
    if (searchByQuantity !== "") {
      searchResult = searchResult.filter((data) =>
        data.quantity.toString().includes(searchByQuantity)
      );
    }

    if (
      searchID === "" &&
      allSearch === "" &&
      searchByName === "" &&
      searchByPrice === "" &&
      searchByQuantity === ""
    ) {
      if (dropdownData) {
        const startIndex = (currentPage - 1) * dropdownData;
        const endIndex = startIndex + dropdownData;
        searchResult = rowss.slice(startIndex, endIndex);
        setIndexStart(startIndex + 1);
        setIndexEnd(endIndex);
      } else {
        searchResult = rowss;
      }
    }

    setPerPageData(searchResult);
  }, [
    searchID,
    searchByName,
    searchByPrice,
    searchByQuantity,
    allSearch,
    dropdownData,
    currentPage,
  ]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  const handleSelectAll = (event) => {
    const selected = event.target.checked;
    setSelectAll(selected);
    const selectedRowIds = selected ? perPageData.map((row) => row.id) : [];
    setSelectedRows(selectedRowIds);
    setSelectedPages({ ...selectedPages, [currentPage]: selectedRowIds });
  };

  const handleSelectRow = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
    const allRowsSelected = newSelected.length === perPageData.length;
    setSelectAll(allRowsSelected);
    setSelectedPages({ ...selectedPages, [currentPage]: newSelected });
  };

  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "10px", paddingBottom: "10px" }}
      >
        <div className="left">
          <ul>
            <li>
              <p>Medicine List</p>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <input
                type="search"
                value={allSearch}
                onChange={(event) => {
                  setAllSearch(event.target.value);
                }}
              />
            </li>
            <li>
              <FormatListBulletedIcon />
            </li>
            <li>
              <GridOnIcon />
            </li>
          </ul>
        </div>
      </div>

      <div className="firestDiv">
        <section className="left-section">
          <section ref={toggleTotalSelectedRow}>
            <p>{`Selected Rows: ${getTotalSelectedRows()}`}</p>
          </section>
          <SelectVariants value={dropdownData} onChange={handleChange} />
        </section>
        <ul className="list">
          <li></li>
          <li>
            <strong>
              {`Showing ${indexStart} - ${indexEnd} records of ${rowss.length}`}
            </strong>
          </li>
          <li>
            <a href="http://localhost:3000/addMedcinePage">
              <Button
                variant="outlined"
                className="button"
                sx={{ color: "gray", marginBottom: "10px" }}
              >
                + Add Medicine
              </Button>
            </a>
          </li>
        </ul>
      </div>

      <TableContainer component={Paper}>
        <Table className="tableContainer" aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow>
              <TableCell>
                <Checkbox checked={selectAll} onChange={handleSelectAll} />
              </TableCell>
              <TableCell>
                ID <br />
                <input
                  className="inputBox"
                  type="search"
                  value={searchID}
                  onChange={(event) => setSearchID(event.target.value)}
                />
              </TableCell>
              <TableCell>
                Name <br />
                <input
                  className="inputBox"
                  type="search"
                  value={searchByName}
                  onChange={(event) => setSearchByName(event.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                Price <br />
                <input
                  className="inputBox"
                  type="search"
                  value={searchByPrice}
                  onChange={(event) => setSearchByPrice(event.target.value)}
                />
              </TableCell>
              <TableCell align="right">
                Quantity <br />
                <input
                  className="inputBox"
                  type="search"
                  value={searchByQuantity}
                  onChange={(event) => setSearchByQuantity(event.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {perPageData.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isSelected(row.id)}
                    onChange={(event) => handleSelectRow(event, row.id)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.medicineName}</TableCell>
                <TableCell align="right">{row.salePrice}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="containerPaginationOutlined">
        <PaginationOutlined
          totalPages={Math.ceil(rowss.length / dropdownData)}
          currentPage={currentPage}
          onChangePage={handlePageChange}
          className="PaginationOutlined"
        />
      </div>
    </div>
  );
}

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationOutlined(props) {
  const handleChange = (event, value) => {
    props.onChangePage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={props.totalPages}
        page={props.currentPage}
        variant="outlined"
        color="primary"
        onChange={handleChange}
        className={props.className}
      />
    </Stack>
  );
}

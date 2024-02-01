import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
} from "@mui/material";

const cellStyles =
  "font-sans text-xl font-medium tracking-wide text-left px-6 py-6";

const header = [
  { id: "1", label: "Student" },
  { id: "2", label: "Path" },
  { id: "3", label: "Phone-number" },
  { id: "4", label: "Gender" },
  { id: "5", label: "Class" },
  { id: "6", label: "Status" },
];

const tableData = [
  {
    id: "1",
    initial: "EK",
    name: "Eniola Kanyinsola",
    path: "Science",
    phone: "07076543466",
    gender: "Male",
    class: "SS 3",
    status: "Verified",
  },
];

const colors = [
  "red",
  "green",
  "green",
  "amber",
  "yellow",
  "blue",
  "brown",
  "purple",
];

const MaterialUITable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

  return (
    <TableContainer component={Paper}>
      <Table className={``}>
        <TableHead>
          <TableRow>
            {/* <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell> */}

            {header.map((header) => (
              <TableCell
                key={header.id}
                className="p-3 font-bold bg-gray-200 text-gray-700"
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, i) => (
              <TableRow key={data.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div
                    className={`w-12 h-12 mr-2 bg-${colors[i]}-100 rounded-full flex items-center justify-center`}
                  >
                    {data.initial}
                  </div>
                  {data.name}
                </TableCell>
                <TableCell>{data.path}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.class}</TableCell>
                <TableCell>
                  {data.status === "Verified" && (
                    <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xl font-medium text-green-900 bg-green-50">
                      <div className="h-2 w-2 mr-2 bg-green-900 rounded-full"></div>
                      {data.status}
                    </div>
                  )}
                  {data.status === "Unverified" && (
                    <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xl font-medium text-red-600 bg-red-50 p-4 font-sans">
                      <div className="h-2 w-2 mr-2 bg-red-600 rounded-full"></div>
                      {data.status}
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MaterialUITable;

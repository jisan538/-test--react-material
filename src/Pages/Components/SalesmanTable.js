import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, TablePagination, Tooltip } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import data from "../../Assets/salesman.json";

export default function SalesmanTable() {
    // eslint-disable-next-line
    const [salesman, setSalesman] = useState(data);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow
                            sx={{
                                bgcolor: "rgba(32, 101, 209, 0.1)",
                                color: "#2065d1",
                            }}
                        >
                            <TableCell sx={{ color: "#2065d1" }}>
                                Name
                            </TableCell>
                            <TableCell sx={{ color: "#2065d1" }} align="center">
                                Phone Number
                            </TableCell>
                            <TableCell sx={{ color: "#2065d1" }} align="center">
                                National ID
                            </TableCell>
                            <TableCell sx={{ color: "#2065d1" }} align="center">
                                Address
                            </TableCell>
                            <TableCell sx={{ color: "#2065d1" }} align="center">
                                Emergency Contact
                            </TableCell>
                            <TableCell sx={{ color: "#2065d1" }} align="center">
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesman
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((salesman) => (
                                <TableRow
                                    key={salesman.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {salesman.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {salesman.phone}
                                    </TableCell>
                                    <TableCell align="center">
                                        {salesman.nid}
                                    </TableCell>
                                    <TableCell align="center">
                                        {salesman.address}
                                    </TableCell>
                                    <TableCell align="center">
                                        {salesman.emergency}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Tooltip title="View">
                                            <IconButton
                                                color="default"
                                                aria-label="open drawer"
                                                edge="start"
                                                sx={{ mr: 2 }}
                                            >
                                                <SearchOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Edit">
                                            <IconButton
                                                color="default"
                                                aria-label="open drawer"
                                                edge="start"
                                                sx={{ mr: 2 }}
                                            >
                                                <CreateOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Remove">
                                            <IconButton
                                                color="default"
                                                aria-label="open drawer"
                                                edge="start"
                                                sx={{ mr: 2 }}
                                            >
                                                <DeleteOutlineOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Paper>
    );
}

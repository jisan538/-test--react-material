import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Tooltip } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

function createData(name, phone, nid, address, emergency) {
    return { name, phone, nid, address, emergency };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function SalesmanTable() {
    
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                        <TableCell align="center">National ID</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Emergency Contact</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{row.nid}</TableCell>
                            <TableCell align="center">{row.address}</TableCell>
                            <TableCell align="center">
                                {row.emergency}
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
        </TableContainer>
        </Paper>
    );
}

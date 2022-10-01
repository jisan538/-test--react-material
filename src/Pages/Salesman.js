import React, { useState } from "react";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import SalesmanTable from "../Components/SalesmanTable";
import AddSalesman from "../Components/AddSalesman";

export default function Salesman() {
    const drawerWidth = 280;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    p: 3,
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                }}
            >
                <Toolbar />
                <Container>
                    <Box
                        sx={{
                            mb: 4,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h6">Sales Man Details</Typography>
                        <Button
                            variant="outlined"
                            sx={{ mr: 2 }}
                            onClick={handleOpen}
                        >
                            Add Salesman
                        </Button>
                    </Box>
                    <Box sx={{ mb: 5 }}>
                        <SalesmanTable />
                    </Box>
                </Container>
                <AddSalesman open={open} handleClose={handleClose} />
            </Box>
        </Box>
    );
}

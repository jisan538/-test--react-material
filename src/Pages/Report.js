import { Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../Components/Sidebar";

export default function Report() {
    const drawerWidth = 280;

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
                        <Typography variant="h6">Report</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

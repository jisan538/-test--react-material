import { Box, Card, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../Components/Sidebar";
import StateCard from "./Components/StateCard";

export default function Dashboard() {
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
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back
                </Typography>
                <StateCard sx={{ mb: 5 }} />
                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Card sx={{ p: 5 }}></Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card sx={{ p: 5 }}></Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

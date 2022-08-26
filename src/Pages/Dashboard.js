import { Box, Toolbar, Typography } from "@mui/material";
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
        
      </Box>
    </Box>
  );
}

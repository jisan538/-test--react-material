import {
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";


export default function Product() {
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
        <Box>
          
        </Box>
      </Box>
    </Box>
  );
}

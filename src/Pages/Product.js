import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../Components/Sidebar";
import ProductCard from "./Components/ProductCard";
export default function Product() {
  const drawerWidth = 280;

  return (
    <Box>
      <Sidebar />
      <Box
        component="main"
        sx={{
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Typography variant="h4" sx={{ mb: 5 }}>
          Product
        </Typography>
        <ProductCard/>
      </Box>
    </Box>
  );
}

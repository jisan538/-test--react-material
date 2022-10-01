import {
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";
import productData from "../Assets/product.json";
import { CSVLink } from "react-csv";
import AddProduct from "../Components/Product/AddProduct";
import ProductCard from "../Components/Product/ProductCard";

export default function Product() {
  const drawerWidth = 280;
  // eslint-disable-next-line
  const [product, setProduct] = useState(productData);
  // eslint-disable-next-line

  const fileName = "users-detail";
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const headers = [
    { label: "Id", key: "id" },
    { label: "Name", key: "title" },
    { label: "Stock", key: "stock" },
    { label: "Price", key: "price" },
  ];
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
        <>
          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">All Products</Typography>
            <Box>
              <Button variant="outlined" sx={{ mr: 2 }} onClick={handleOpen}>
                Add Product
              </Button>
              <Button variant="contained" sx={{boxShadow: "0px 8px 16px rgba(25, 118, 210, 0.24)"}}>
                <CSVLink
                  headers={headers}
                  data={product}
                  filename={fileName}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {loading ? "Loading csv..." : "Download Data"}
                </CSVLink>
              </Button>
            </Box>
          </Box>
          <ProductCard product={product} />
        </>
        <AddProduct open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
}

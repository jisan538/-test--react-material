import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Toolbar,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ProductCard from "./Components/ProductCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import productData from "../Assets/product.json";
import { CSVLink } from "react-csv";
import AddProduct from "./Components/AddProduct";

export default function Product() {
    const drawerWidth = 280;
    // eslint-disable-next-line
    const [product, setProduct] = useState(productData);
    const [searchByName, setSearchByName] = useState("");
    const handleOnChange = (event) => {
        setSearchByName(event.target.value);
    };
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
                <Container>
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
                            <Button
                                variant="outlined"
                                sx={{ mr: 2 }}
                                onClick={handleOpen}
                            >
                                Add Product
                            </Button>
                            <Button variant="contained">
                                <CSVLink
                                    headers={headers}
                                    data={product}
                                    filename={fileName}
                                    style={{
                                        textDecoration: "none",
                                        color: "#fff",
                                    }}
                                >
                                    {loading
                                        ? "Loading csv..."
                                        : "Download Data"}
                                </CSVLink>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ mb: 5 }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                onChange={handleOnChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchOutlinedIcon />
                                    </InputAdornment>
                                }
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    "aria-label": "weight",
                                }}
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                    <ProductCard
                        product={product}
                        searchByName={searchByName}
                    />
                </Container>
                <AddProduct open={open} handleClose={handleClose}/>
            </Box>
        </Box>
    );
}

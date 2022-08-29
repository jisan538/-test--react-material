import {
    Box,
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

export default function Product() {
    const drawerWidth = 280;
    // eslint-disable-next-line
    const [product, setProduct] = useState(productData);
    const [searchByName, setSearchByName] = useState("");
    const handleOnChange=(event)=>{
      console.log(event.target.value);
      setSearchByName(event.target.value)
    }
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
                    <Typography variant="h6" sx={{ mb: 5 }}>
                        All Products
                    </Typography>
                    <Box sx={{ mb: 5 }}>
                        <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                    <ProductCard product={product} searchByName={searchByName}/>
                </Container>
            </Box>
        </Box>
    );
}

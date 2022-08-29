import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Toolbar,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Sidebar from "../Components/Sidebar";
import ProductCard from "./Components/ProductCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
                <Container>
                    <Typography variant="h6" sx={{ mb: 5 }}>
                        All Products
                    </Typography>
                    <Box sx={{ mb: 5 }}>
                        <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
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
                    <ProductCard />
                </Container>
            </Box>
        </Box>
    );
}

import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import products from "../../Assets/product.json";

export default function AddProduct({salesmanReport}) {
    // eslint-disable-next-line
    const [selectedProduct, setSelectedProduct] = useState([])
    // eslint-disable-next-line
    const [availableProducts,setAvailableProducts]=useState([])
    useEffect(()=>{
       const availableProducts = products.filter((data)=>data.stock !== 0)
       setAvailableProducts(availableProducts);
    },[])
  return (
    <>
      {salesmanReport.length !== 0 && (
        <Box
          sx={{
            p: 4,
          }}
        >
          <Typography
            sx={{
              color: "#919EAB",
              fontSize: "18px",
              fontWeight: 700,
              mb: 4,
            }}
          >
            Details:
          </Typography>
          <Grid container spacing={1}>
            <Grid item md={4}>
              <Autocomplete
                disablePortal
                options={products}
                fullWidth
                size="small"
                getOptionLabel={(option) => option.title}
                onChange={(event, value) => setSelectedProduct(value)} // prints the selected value
                renderInput={(params) => (
                  <TextField {...params} label="Product Name" />
                )}
              />
            </Grid>
            <Grid item md={2}>
              <TextField fullWidth label="Stock" size="small" />
            </Grid>
            <Grid item md={2}>
              <TextField fullWidth label="Rate" size="small" />
            </Grid>
            <Grid item md={2}>
              <TextField fullWidth label="Load" size="small" />
            </Grid>
            <Grid item md={2}>
              <TextField fullWidth label="Total Price" size="small" />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              mt: 2,
            }}
          >
            {" "}
            <Button size="size" color="error">
              <DeleteOutlinedIcon />
              &nbsp; Remove
            </Button>
          </Box>
        </Box>
      )}
      <Divider variant="middle" sx={{ borderStyle: "dashed" }} />

      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {salesmanReport.length !== 0 && (
          <Button size="size" color="success">
            + Add Product
          </Button>
        )}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>Grand Total:</Typography>
          <Typography sx={{ width: "120px", textAlign: "right" }}>
            0 bdt
          </Typography>
        </Box>
      </Box>
    </>
  );
}

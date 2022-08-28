import React, { useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import food from "../../Assets/Images/fresh-butter-cookies-biscuit-jar-900-gm.jpg";
import { Box } from "@mui/system";
import productData from "../../Assets/product.json";
export default function ProductCard() {
  //eslint-disable-next-line
  const [product, setProduct] = useState(productData);
  return (
    <Grid container spacing={3}>
      {product.map((data) => (
        <Grid item xs={12} sm={6} md={3} key={data.id}>
          <Card>
           <CardMedia
              component="img"
              alt="green iguana"
              height="280"
              src={data.image}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h6">
                Fresh Butter Cookies-Jar 900gX6PC
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="p" sx={{ color: "green" }}>
                  Stock Available(20)
                </Typography>
                <Typography variant="h6" sx={{ color: "red", fontWeight: 700 }}>
                  ৳760
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

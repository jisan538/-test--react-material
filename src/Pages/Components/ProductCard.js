import React, { useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
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
              <Typography variant="h6" sx={{height:"80px"}}>{data.title}</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                {data.stock > 19 && (
                  <Typography variant="p" sx={{ color: "green" }}>
                    Stock Available({data.stock})
                  </Typography>
                )}
                {(data.stock < 19 && data.stock > 1) &&  (
                  <Typography variant="p" sx={{ color: "orange" }}>
                    Stock Limited({data.stock})
                  </Typography>
                )}
                {data.stock === 0 &&  (
                  <Typography variant="p" sx={{ color: "red" }}>
                    Stock out
                  </Typography>
                )}
                <Typography variant="h6" sx={{ color: "red", fontWeight: 700 }}>
                  ৳{data.price}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

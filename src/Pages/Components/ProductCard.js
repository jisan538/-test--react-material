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
                        <Box sx={{ position: "relative" }}>
                            <Box
                                variant="filled"
                                sx={{
                                    zIndex: 9,
                                    top: 16,
                                    right: 16,
                                    position: "absolute",
                                }}
                            >
                                 {data.stock > 19 && (
                                    <Typography
                                        sx={{ backgroundColor: "green", p:"4px", color:"white",borderRadius:"4px",fontSize: 12}}
                                    >
                                        Stock Available ({data.stock})
                                    </Typography>
                                )}
                                {data.stock < 19 && data.stock > 1 && (
                                    <Typography
                                        sx={{ backgroundColor: "orange", p:"4px", color:"white",borderRadius:"4px",fontSize: 12}}
                                    >
                                        Stock Limited ({data.stock})
                                    </Typography>
                                )}
                                {data.stock === 0 && (
                                    <Typography
                                        sx={{ backgroundColor: "red", p:"4px", color:"white",borderRadius:"4px",fontSize: 12 }}
                                    >
                                        Stock out
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="160
                            "
                            src={data.image}
                            sx={{ objectFit: "contain" }}
                        />
                        <CardContent>
                            <Box sx={{height:"80px"}}>
                            <Typography variant="body" sx={{fontWeight: "bold"}}>
                                {data.title}
                            </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mt: .5,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ color: "red", fontWeight: 700 }}
                                >
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

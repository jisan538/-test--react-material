import {
    Autocomplete,
    Box,
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import products from "../../Assets/product.json";
export default function CreateDailyReport({ handleChoose, salesmanReport }) {
    return (
        <Box>
            <Box
                sx={{
                    mb: 4,
                    borderRadius: "16px",
                    boxShadow: "0px 4px 20px rgba(28, 118, 211, 0.1)",
                }}
            >
                <Box sx={{ p: 4 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "18px", fontWeight: "bold", mr: 2 }}
                        >
                            Salesman and Zone
                        </Typography>
                        {salesmanReport.length === 0 ? (
                            <Button
                                size="small"
                                onClick={handleChoose}
                                sx={{ fontWeight: "bold" }}
                            >
                                <AddIcon />
                                &nbsp;Add
                            </Button>
                        ) : (
                            <Button
                                size="small"
                                onClick={handleChoose}
                                sx={{ fontWeight: "bold" }}
                            >
                                <ModeOutlinedIcon />
                                &nbsp;Change
                            </Button>
                        )}
                    </Box>

                    {salesmanReport.map((data) => {
                        return (
                            <Box
                                sx={{
                                    mt: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    {data.first_name}&nbsp;{data.last_name}
                                </Typography>
                                <Typography sx={{ fontSize: "14px", mb: 1 }}>
                                    {data.address}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
                <Box sx={{ p: 4, background: "#F4F6F8" }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4}>
                            <TextField
                                disabled
                                fullWidth
                                size="small"
                                label="Load Number"
                                defaultValue="load-33020"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                disabled
                                fullWidth
                                size="small"
                                label="Date"
                                defaultValue="12/10/2022"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                disabled
                                fullWidth
                                size="small"
                                label="Bill Number"
                                defaultValue="bill-33020"
                            />
                        </Grid>
                    </Grid>
                </Box>
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
                                    getOptionLabel={(options) => options.title}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Product Name"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    fullWidth
                                    label="Stock"
                                    size="small"
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    fullWidth
                                    label="Rate"
                                    size="small"
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    fullWidth
                                    label="Load"
                                    size="small"
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    fullWidth
                                    label="Total Price"
                                    size="small"
                                />
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
                        <Typography sx={{ fontWeight: 600 }}>
                            Grand Total:
                        </Typography>
                        <Typography sx={{ width: "120px", textAlign: "right" }}>
                            0 bdt
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <Button
                    variant="contained"
                    sx={{ boxShadow: "0px 8px 16px rgba(25, 118, 210, 0.24)" }}
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
}

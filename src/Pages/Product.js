import {
    Box,
    Button,
    Grid,
    TextField,
    Toolbar,
    Typography,
    Divider,
} from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function Product() {
    const drawerWidth = 280;
    const [tagLists, setTagLists] = useState([{ name: ""}]);
    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...tagLists];
      list[index][name] = value;
      setTagLists(list);
    };
    const handleAddTag = () => {
        setTagLists([...tagLists, { name: ""}]);
    };
    const handleRemoveTag = (index) => {
        const list = [...tagLists];
        list.splice(index, 1);
        setTagLists(list);
    };
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
                <Box>
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
                        {tagLists.map((data, index) => {
                            return (
                                <>
                                    <Grid container spacing={1}>
                                        <Grid item md={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Stock"
                                                size="small"
                                                value={data.name}
                                                onChange={(e) => handleServiceChange(e, index)}
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
                                        <Button
                                            size="size"
                                            color="error"
                                            onClick={() =>
                                                handleRemoveTag(index)
                                            }
                                        >
                                            <DeleteOutlinedIcon />
                                            &nbsp; Remove
                                        </Button>
                                    </Box>
                                </>
                            );
                        })}
                    </Box>
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
                        <Button
                            size="size"
                            color="success"
                            onClick={handleAddTag}
                        >
                            + Add Product
                        </Button>

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
                            <Typography
                                sx={{ width: "120px", textAlign: "right" }}
                            >
                                0 bdt
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

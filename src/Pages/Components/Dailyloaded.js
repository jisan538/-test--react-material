import { Box, Dialog, Typography } from "@mui/material";
import React from "react";
import "./Style/Report.css"

export default function Dailyloaded({ open, handleClose, newArray, handleClick }) {
    
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {newArray.map((data) => {
                return (
                    <Box
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer",
                        }}
                        className="salesman"
                        onClick={()=>handleClick(data.id)}
                    >
                        <Typography>
                            {data.first_name}&nbsp;{data.last_name}
                        </Typography>
                        <Typography>{data.address}</Typography>
                        <Typography>{data.phone}</Typography>
                    </Box>
                );
            })}
        </Dialog>
    );
}

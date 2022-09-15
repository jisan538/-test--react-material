import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
export default function CreateDailyReport({ handleChoose, salesmanReport }) {
    return (
        <Box
            sx={{
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(28, 118, 211, 0.1)",
                p: 4,
            }}
        >
            <Box
                sx={{
                    width: "400px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="body" sx={{ fontWeight: "bold" }}>
                    Salesman and Zone
                </Typography>
                {salesmanReport.length === 0 ? (
                    <Button onClick={handleChoose} sx={{fontWeight:"bold"}}><DoneAllOutlinedIcon/>&nbsp;Choose</Button>
                ) : (
                    <Button onClick={handleChoose} sx={{fontWeight:"bold"}}><LoopOutlinedIcon/>&nbsp;Change</Button>
                    
                )}
            </Box>
            {salesmanReport.map((data) => {
                return (
                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            width: "400px",
                        }}
                    >
                        <Typography variant="body" sx={{ mb: 1 }}>
                            {data.first_name}&nbsp;{data.last_name}
                        </Typography>
                        <Typography variant="body" sx={{ mb: 1 }}>
                            {data.address}
                        </Typography>
                        <Typography variant="body" sx={{ mb: 1 }}>
                            {data.phone}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
}

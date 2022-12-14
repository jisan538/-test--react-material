import { Box, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";
import data from "../Assets/salesman.json";
import CreateDailyLoad from "../Components/DailyLoad/CreateDailyLoad";
import DailyLoad from "../Components/DailyLoad/DailyLoad";

export default function Report() {
    const drawerWidth = 280;
    // eslint-disable-next-line
    const [newArray, setNewArray] = useState(data);
    const [open, setOpen] = useState(false);
    const [salesmanReport, setSalesmanReport] = useState([]);
    const handleChoose = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const handleClick = (id) => {
        const viewedProfile = newArray.filter((data) => data.id === id);
        setOpen(false);
        setSalesmanReport(viewedProfile);
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
                <Box
                    sx={{
                        mb: 4,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
                        Create Daily Report
                    </Typography>
                </Box>
                <CreateDailyLoad
                    newArray={newArray}
                    open={open}
                    handleChoose={handleChoose}
                    handleClose={handleClose}
                    salesmanReport={salesmanReport}
                />
            </Box>
            <DailyLoad
                newArray={newArray}
                open={open}
                handleClose={handleClose}
                handleClick={handleClick}
            />
        </Box>
    );
}

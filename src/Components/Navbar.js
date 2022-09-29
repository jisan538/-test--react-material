import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import React from "react";
import AccountPopOver from "./AccountPopOver";
import TimerFunction from "./TimerFunction";

const drawerWidth = 280;
export default function Navbar({ handleDrawerToggle }) {

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { lg: `calc(100% - ${drawerWidth}px)` },
                ml: { lg: `${drawerWidth}px` },
            }}
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(8px)",
                boxShadow: "none",
            }}
        >
            <Toolbar>
                <IconButton
                    color="default"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: "none" } }}
                >
                    <MenuOpenRoundedIcon />
                </IconButton>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <TimerFunction/>
                    <AccountPopOver />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

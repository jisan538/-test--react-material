import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import Profile from "../Assets/Images/profile.jpg";
import React, { useState } from "react";

const drawerWidth = 280;
export default function Navbar({ handleDrawerToggle }) {
    const today = new Date();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var date = today.getDate();
    var day = weekday[today.getDay()];
    var month = months[today.getMonth()];
    var year = today.getFullYear();
    const [anchorUser, setAnchorUser] = useState(false);
    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };
    const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
                    <Typography
                        variant="body2"
                        sx={{ color: "#637381", mr: 2 }}
                    >
                        {date} {month} {year}, {day}
                    </Typography>
                    <IconButton
                        size="medium"
                        edge="end"
                        onClick={handleOpenUserMenu}
                        color="default"
                    >
                        <Avatar
                            alt="User"
                            src={Profile}
                        />
                    </IconButton>
                    <Menu
                        sx={{ mt: "45px"}}
                        id="menu-appbar"
                        anchorEl={anchorUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={anchorUser}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={handleCloseUserMenu}
                                sx={{width:"180px"}}
                            >
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

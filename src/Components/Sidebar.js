import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReactLogo from "../Assets/Logo.svg";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import navData from "./Navconfig.json";
import "./Style/Sidebar.css";
import Navbar from "./Navbar";
import { Avatar, Typography } from "@mui/material";
import Profile from "../Assets/Images/profile.jpg";
const drawerWidth = 280;

function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    // eslint-disable-next-line
    const [navItem, setNavItem] = useState(navData);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
                {/* <Logo /> */}
                <img src={ReactLogo} alt="React Logo" />
            </Box>

            <Box sx={{ mb: 5, mx: 2.5 }}>
                <Box className="accountStyle">
                    <Box>
                        <Avatar
                            src={Profile}
                            alt="photoURL"
                            sx={{ width: 56, height: 56 }}
                        />
                    </Box>
                    <Box sx={{ ml: 2 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: "text.primary" }}
                        >
                            Rabiul Islam Babu
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                        >
                            Admin
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <List>
                {navItem.map((item) => (
                    <ListItem
                        key={item.id}
                        disablePadding
                        className={`${item.id === 1 ? "active" : "regular"}`}
                        sx={{ ml: 1.5 }}
                    >
                        <ListItemButton>
                            <ListItemIcon
                                className={`${
                                    item.id === 1 ? "active-icon" : "icon"
                                }`}
                            >
                                {item.id === 1 && <WidgetsOutlinedIcon />}
                                {item.id === 2 && <Inventory2OutlinedIcon />}
                                {item.id === 3 && <MyLocationOutlinedIcon />}
                                {item.id === 4 && <PersonOutlineOutlinedIcon />}
                                {item.id === 5 && <HourglassEmptyOutlinedIcon />}
                                {item.id === 6 && <ContentPasteOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Sidebar;

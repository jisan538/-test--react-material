import {
    Box,
    Container,
    Toolbar,
    Typography,
    Button,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

export default function Zone() {
    const drawerWidth = 280;
    const [textField, setTextField] = useState(false);
    const handleClick = () => {
        setTextField(true);
    };
    const handleSave=() => {
        console.log("Clicked");
        setTextField(false);
    }
    const handleChange=(e)=>{
        console.log(e.target.value);
    }
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
                <Container>
                    <Box
                        sx={{
                            mb: 4,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h6">Area and Zone</Typography>
                    </Box>
                    {textField === false && (
                        <Button onClick={handleClick}>Add</Button>
                    )}

                    {textField === true && (
                       <>
                        <TextField label="Outlined" variant="outlined" onChange={()=>handleChange()}/>
                        <Button onClick={handleSave}>Save</Button>
                       </>
                    )}
                </Container>
            </Box>
        </Box>
    );
}

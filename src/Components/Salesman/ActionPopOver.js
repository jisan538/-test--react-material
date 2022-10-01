import {Menu, MenuItem, Typography } from "@mui/material";
import React from "react";

export default function ActionPopOver({actionPopOver,handleClosePopOver,anchorEl}) {

    return (
        <Menu
            sx={{ mt: "52px" }}
            anchorEl={actionPopOver}
            keepMounted
            open={actionPopOver}
            onClose={handleClosePopOver}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <MenuItem onClick={handleClosePopOver}>
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                    }}
                >
                    Edit
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleClosePopOver}>
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                    }}
                >
                    Delete
                </Typography>
            </MenuItem>
        </Menu>
    );
}

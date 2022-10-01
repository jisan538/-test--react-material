import { Box, Dialog, Typography } from "@mui/material";
import React from "react";
import "../Style/Report.css";

export default function DailyLoad({
  open,
  handleClose,
  newArray,
  handleClick,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{borderRadius:"10px"}}
    >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography sx={{fontSize:"18px",fontWeight:"bold", mb:1}}>
                Select Salesman
              </Typography>
        {newArray.map((data) => {
          return (
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                borderRadius:"10px"
              }}
              className="salesman"
              onClick={() => handleClick(data.id)}
            >
              <Typography sx={{fontSize:"14px",fontWeight:600}}>
                {data.first_name}&nbsp;{data.last_name}
              </Typography>
              <Typography sx={{fontSize:"12px", color:"#2065d1"}}>{data.address}</Typography>
              <Typography sx={{fontSize:"14px"}}>{data.phone}</Typography>
            </Box>
          );
        })}
      </Box>
    </Dialog>
  );
}

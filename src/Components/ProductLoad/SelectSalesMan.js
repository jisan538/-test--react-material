import React from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Button,
    Typography,
  } from "@mui/material";
export default function SelectSalesMan({handleChoose, salesmanReport}) {
    console.log(salesmanReport.length);
  return (
    <Box sx={{ p: 4 }}>
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "bold", mr: 2 }}>
          Salesman and Zone
        </Typography>
        {salesmanReport.length === 0 ? (
          <Button
            size="small"
            onClick={handleChoose}
            sx={{ fontWeight: "bold" }}
          >
            <AddIcon />
            &nbsp;Add
          </Button>
        ) : (
          <Button
            size="small"
            onClick={handleChoose}
            sx={{ fontWeight: "bold" }}
          >
            <ModeOutlinedIcon />
            &nbsp;Change
          </Button>
        )}
      </Box>

      {salesmanReport.map((data) => {
        return (
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                mb: 1,
              }}
            >
              {data.first_name}&nbsp;{data.last_name}
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1 }}>
              {data.address}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

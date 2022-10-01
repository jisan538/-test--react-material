import { Box, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const state = {
    series: [
        {
            name: "Sales",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
    ],
    options: {
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
        },
    }
};
export default function BarChart() {
    return (
        <Box>
            <Typography variant="h6" sx={{mb:3}}>Sales statistics  by month</Typography>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="line"
                height={280}
            />
        </Box>
    );
}

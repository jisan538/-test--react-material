import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Style/StateCardStyle.css";
import stateData from "../Assets/state.json";
export default function StateCard() {
  // eslint-disable-next-line
  const [state, setState] = useState(stateData);
  return (
    <Grid container spacing={3}>
      {state.map((data) => (
        <Grid item xs={12} sm={6} md={3} key={data.id}>
          <Card
            className={`card ${data.id === 1 && "weekly-sales"} ${
              data.id === 2 && "product"
            } ${data.id === 3 && "zone"} ${data.id === 4 && "sales-man"}`}
            sx={{borderRadius:"20px"}}
          >
            <Typography variant="h2" sx={{color: "white",fontWeight: 'medium', mb:2}}>
              {data.state}
            </Typography>
            <Typography variant="p" sx={{color: "white",fontWeight: 'light'}}>{data.title}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

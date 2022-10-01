import React from "react";
import { Grid, TextField,Box } from "@mui/material";
export default function ProductLoadInformation() {
  return (
    <Box sx={{ p: 4, background: "#F4F6F8" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <TextField
            disabled
            fullWidth
            size="small"
            label="Load Number"
            defaultValue="load-33020"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            disabled
            fullWidth
            size="small"
            label="Date"
            defaultValue="12/10/2022"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            disabled
            fullWidth
            size="small"
            label="Bill Number"
            defaultValue="bill-33020"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

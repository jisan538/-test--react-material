import { Box, Button } from "@mui/material";
import React from "react";
import ProductLoadInformation from "./ProductLoadInformation";
import SelectSalesMan from "./SelectSalesMan";
import AddProduct from "./AddProduct";
export default function CreateProductLoad({ handleChoose, salesmanReport }) {
  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(28, 118, 211, 0.1)",
        }}
      >
        <SelectSalesMan
          salesmanReport={salesmanReport}
          handleChoose={handleChoose}
        />
        <ProductLoadInformation />
      </Box>
      <AddProduct salesmanReport={salesmanReport} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{ boxShadow: "0px 8px 16px rgba(25, 118, 210, 0.24)" }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

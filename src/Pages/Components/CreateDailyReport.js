import {
  Box,
  Button,
  Divider,
  Grid,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import AddIcon from "@mui/icons-material/Add";
function createData(
  name,
  rate,
  load,
  returnProduct,
  sales,
  damageProduct,
  DamageAmount
) {
  return {
    name,
    rate,
    load,
    returnProduct,
    sales,
    damageProduct,
    DamageAmount,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 2, 3),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 3, 4),
  createData("Eclair", 262, 16.0, 24, 6.0, 8, 10),
  createData("Cupcake", 305, 3.7, 67, 4.3, 5, 7),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 2, 6),
];
export default function CreateDailyReport({ handleChoose, salesmanReport }) {
  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(28, 118, 211, 0.1)",
        }}
      >
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
                <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1 }}>
                  {data.first_name}&nbsp;{data.last_name}
                </Typography>
                <Typography sx={{ fontSize: "14px", mb: 1 }}>
                  {data.address}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ p: 4, background: "#F4F6F8" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <TextField
                disabled
                fullWidth
                label="Bill Number"
                defaultValue="bill-33020"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                disabled
                fullWidth
                label="Date"
                defaultValue="12/10/2022"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                disabled
                fullWidth
                label="Bill Number"
                defaultValue="bill-33020"
              />
            </Grid>
          </Grid>
        </Box>
        {salesmanReport.length !==0 && (
          <Box
            sx={{
              p: 4,
            }}
          >
            <Typography
              sx={{
                color: "#919EAB",
                fontSize: "18px",
                fontWeight: 700,
                mb: 4,
              }}
            >
              Details:
            </Typography>
            {/* Salesman Product Table Start */}
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: "14px", fontWeight: 600 }}>
                      Product Name
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      align="right"
                    >
                      Rate
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      align="right"
                    >
                      Load
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      align="right"
                    >
                      Return
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      align="right"
                    >
                      Sales(Taka)
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      align="right"
                    >
                      Damage Product
                    </TableCell>
                    <TableCell
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      align="right"
                    >
                      Damage(Taka)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {row.rate}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {row.load}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {row.returnProduct}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {row.sales}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {row.damageProduct}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {row.DamageAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* Salesman Product Table End */}
          </Box>
        )}
        <Divider variant="middle" sx={{ borderStyle: "dashed" }} />
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <TextField label="Cost" size="small" sx={{ mr: 2 }} />
            <TextField label="Van" size="small" />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField label="Toll" size="small" sx={{ mr: 2 }} />
            <TextField label="Others" size="small" />
          </Box>
          <Box sx={{ display: "flex", mb: 2 }}>
            <Typography>Total Sales without damage:</Typography>
            <Typography sx={{ width: "120px", textAlign: "right" }}>
              0 bdt
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", mb: 2 }}>
            <Typography>Cost:</Typography>
            <Typography sx={{ width: "120px", textAlign: "right" }}>
              -
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", mb: 2 }}>
            <Typography>Van:</Typography>
            <Typography sx={{ width: "120px", textAlign: "right" }}>
              -
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", mb: 2 }}>
            <Typography>Toll:</Typography>
            <Typography sx={{ width: "120px", textAlign: "right" }}>
              -
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", mb: 2 }}>
            <Typography>Others:</Typography>
            <Typography sx={{ width: "120px", textAlign: "right" }}>
              -
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex" }}>
            <Typography sx={{fontWeight:600}}>Grand Total:</Typography>
            <Typography sx={{ width: "120px", textAlign: "right" }}>
              0 bdt
            </Typography>
          </Box>
        </Box>
      </Box>
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

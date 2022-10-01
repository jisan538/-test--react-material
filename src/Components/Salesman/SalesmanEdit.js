import { Box, Grid, Button, Modal, TextField } from "@mui/material";
import React from "react";

export default function SalesmanEdit({ handleClose, open, viewProfile }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    bgcolor: "background.paper",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 600,
                    position: "absolute",
                    p: 4,
                    borderRadius: "10px",
                }}
            >
                {viewProfile.map((data) => {
                    return (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            key={data.id}
                        >
                            <img
                                src={data.image}
                                alt="as"
                                width="100"
                                height="100"
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "100%",
                                    border: "1px solid rgba(0, 0, 0, 0.2)",
                                }}
                            />
                            <Box sx={{ mt: 4, width: "100%" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            defaultValue={data.first_name}
                                            size="medium"
                                            sx={{ mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            defaultValue={data.last_name}
                                            size="medium"
                                            sx={{ mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            defaultValue={data.phone}
                                            size="medium"
                                            sx={{ mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            fullWidth
                                            label="National ID"
                                            defaultValue={data.nid}
                                            size="medium"
                                            sx={{ mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            fullWidth
                                            label="Address"
                                            defaultValue={data.address}
                                            size="medium"
                                            sx={{ mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Emergency Person"
                                            defaultValue={data.nid}
                                            size="medium"
                                            sx={{ mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Emergency Contact"
                                            defaultValue={data.emergency}
                                            size="medium"
                                            sx={{ mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{ mt: 4 }}
                                    >
                                        <Button
                                            onClick={handleClose}
                                            variant="contained"
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Modal>
    );
}

import { Box, Grid, Modal, TextField, Typography } from "@mui/material";
import React from "react";

export default function SalesmanView({ handleClose, open, viewProfile }) {
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
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            First Name
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled
                                            label={data.first_name}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            Last Name
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled
                                            label={data.last_name}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            phone Number
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled
                                            label={data.phone}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            National ID
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled
                                            label={data.nid}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            Address
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled
                                            label={data.address}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            Emergency Person
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled
                                            label={data.nid}
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            Emergency Contact
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            disabled
                                            label={data.emergency}
                                            size="small"
                                        />
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

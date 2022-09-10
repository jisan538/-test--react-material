import {
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function AddSalesman({ open, handleClose }) {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
        console.log(imageList, addUpdateIndex);
    };
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
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ mb: 4, textAlign: "center" }}
                >
                    Salesman Details
                </Typography>
                <Box>
                    <Box sx={{display: "flex", justifyContent: "center",alignItems: "center", mb:5}}>
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                            acceptType={["jpg"]}
                        >
                            {({ 
                                imageList,
                                onImageUpload,
                                onImageUpdate,
                                onImageRemove,
                            }) => (
                                // write your building UI
                                <Box className="upload__image-wrapper">
                                    <Button onClick={onImageUpload}>
                                        Upload Image <FileUploadOutlinedIcon />
                                    </Button>
                                    &nbsp;
                                    {imageList.map((image, index) => (
                                        <Box key={index} className="image-item" sx={{display: "flex",flexDirection: "column", justifyContent: "center",alignItems: "center"}}>
                                            <img
                                                src={image.data_url}
                                                alt=""
                                                width="150
"
                                                style={{marginTop:"24px",marginBottom:"24px"}}
                                            />
                                            <Box className="image-item__btn-wrapper" sx={{display: "flex", justifyContent: "center",alignItems: "center"}}>
                                                <IconButton
                                                    onClick={() =>
                                                        onImageUpdate(index)
                                                    }
                                                >
                                                    <ReplayOutlinedIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() =>
                                                        onImageRemove(index)
                                                    }
                                                >
                                                    <DeleteOutlinedIcon sx={{color:"red"}}/>
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </ImageUploading>
                    </Box>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 3 }}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Phone number"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 3 }}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="National ID"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 3 }}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 3 }}
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Emergency Contact"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 3 }}
                        fullWidth
                    />
                    <Button variant="contained" onClick={handleClose}>Submit</Button>
                </Box>
            </Box>
        </Modal>
    );
}

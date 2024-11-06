// src/components/ImageStepper.js
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageStepper = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handlePrev} disabled={images.length <= 1}>
                <ArrowBackIcon />
            </IconButton>
            <Box
                component="img"
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                sx={{ width: '100%', height: 'auto', maxHeight: 300, objectFit: 'cover' }}
            />
            <IconButton onClick={handleNext} disabled={images.length <= 1}>
                <ArrowForwardIcon />
            </IconButton>
            <Typography variant="caption" sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                {`${currentIndex + 1} of ${images.length}`}
            </Typography>
        </Box>
    );
};

export default ImageStepper;

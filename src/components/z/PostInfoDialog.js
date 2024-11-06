// src/components/PostInfoDialog.js

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageStepper from './ImageStepper'; // Assumes ImageStepper for navigating images in the post

/**
 * PostInfoDialog component
 * A dialog that displays detailed information about a post, including images and description.
 *
 * @param {boolean} open - Controls the visibility of the dialog.
 * @param {function} onClose - Function to handle closing of the dialog.
 * @param {object} post - The post data to be displayed, including `username`, `date`, `description`, and `images`.
 */
const PostInfoDialog = ({ open, onClose, post }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Post Information</DialogTitle>
            <DialogContent dividers>
                {/* Displaying post metadata */}
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Posted by {post?.username || "Anonymous"} on {post?.date || "Unknown Date"}
                </Typography>

                {/* Displaying post description */}
                <Box my={2}>
                    <Typography variant="body1">{post?.description || "No description available."}</Typography>
                </Box>

                {/* ImageStepper component to display images, if available */}
                {post?.images && post.images.length > 0 && (
                    <Box my={2}>
                        <ImageStepper images={post.images} />
                    </Box>
                )}

                {/* Placeholder for additional post details or comments */}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PostInfoDialog;

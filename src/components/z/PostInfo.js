// src/components/PostInfo.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageStepper from './ImageStepper';
import CommentList from './CommentList';  // Assumes a component for listing comments
import AddCommentField from './AddCommentField'; // Assumes a component for adding comments

const PostInfo = ({ post }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const commentStyles = isMobile ? { maxHeight: '400px', overflowY: 'auto' } : {};

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageStepper images={post.images} />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body2">{post.description}</Typography>
                <Box sx={{ flex: '1 1 auto', marginTop: '8px', ...commentStyles }}>
                    <CommentList comments={post.comments} />
                </Box>
                <AddCommentField postId={post.postId} />
            </Grid>
        </Grid>
    );
};

export default PostInfo;

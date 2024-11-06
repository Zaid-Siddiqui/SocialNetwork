// src/components/PostList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as postService from '../service/PostService'; // Assumes a service to handle post deletion
import PostInfoDialog from './PostInfoDialog'; // Assumes a dialog component for detailed post view

export default function PostList({ profile, editMode }) {
    const posts = useSelector((state) => selectPosts(state, profile.userId));
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    const sm_md = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const columns = xs ? 1 : sm_md ? 2 : 3;

    return (
        <ImageList cols={columns} rowHeight={494} sx={{ width: '100%' }}>
            {posts.map((post, index) => (
                <PostItem key={index} post={post} editMode={editMode} />
            ))}
        </ImageList>
    );
}

function PostItem({ post, editMode }) {
    const [openPost, setOpenPost] = React.useState(false);

    const handleOpenPost = () => setOpenPost(true);
    const handleClosePost = () => setOpenPost(false);

    const handleDeletePost = (postId) => {
        postService.deletePost(postId); // Replace with actual delete function
    };

    return (
        <>
            <ImageListItem onClick={handleOpenPost}>
                <img src={post.images[0]} alt="Post" loading="lazy" />
                {editMode && (
                    <ImageListItemBar
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeletePost(post.postId);
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    />
                )}
            </ImageListItem>
            <PostInfoDialog open={openPost} onClose={handleClosePost} post={post} />
        </>
    );
}

const selectPosts = (state, userId) => {
    return state.post.newsFeed.filter((post) => post.userId === userId);
};

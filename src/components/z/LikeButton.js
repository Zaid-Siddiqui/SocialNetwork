// src/components/LikeButton.js

import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import * as postService from '../service/PostService';

export default function LikeButton({ post }) {
    const account = useSelector(state => state.account);

    // Determine if the post is liked by the current user
    const isLiked = post.likes.some(element => element.userId === account.userId);

    const handleLikeToggle = () => {
        if (isLiked) {
            postService.removePostLike(post.postId)
                .then(() => {
                    console.log(`Removed like from post with ID: ${post.postId}`);
                })
                .catch(error => {
                    console.error("Error removing like:", error);
                });
        } else {
            postService.addPostLike(post.postId)
                .then(() => {
                    console.log(`Added like to post with ID: ${post.postId}`);
                })
                .catch(error => {
                    console.error("Error adding like:", error);
                });
        }
    };

    return (
        <IconButton
            onClick={handleLikeToggle}
            color={isLiked ? 'error' : 'default'} // Change color based on like status
        >
            <FavoriteIcon />
        </IconButton>
    );
}

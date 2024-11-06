import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

import * as postService from '../service/PostService';

export default function LikeButton(props) {
  const { post } = props;
  const account = useSelector(state => state.account.account);
  let isLiked = post.likes.find((element) => element.userId == account.userId);

  const handleToggleLike = () => {   
    if (isLiked) {
      postService.removePostLike(post.postId);
    } else {
      postService.addPostLike(post.postId);
    }
  }

  return (
    <IconButton onClick={handleToggleLike} color={isLiked ? 'error' : ''}>
      <FavoriteIcon />
    </IconButton>
  );
}
import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';
import { createSelector } from 'reselect';
import DeleteIcon from '@mui/icons-material/Delete';
import * as postService from '../service/PostService';
import PostInfoDialog from './PostInfoDialog';

export function PostList(props) {
    const { profile, editMode } = props;
    const posts = useSelector((state) =>
      selectPosts(state, profile.userId)
    );
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    const sm_md = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  
    let cl = (xs ? 1 : (sm_md ? 2 : 3)); 
  
    return (
      <ImageList cols={cl} rowHeight={494} sx={{ width: '100%' }}>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} editMode={editMode} />  
        ))}
      </ImageList>
    );
  }
  
  function PostItem(props) {
    const { post, editMode } = props;
    const [openPost, setOpenPost] = React.useState(false);
    const handleOpenPost = () => setOpenPost(true);
    const handleClosePost = () => setOpenPost(false);
  
    const handleDeletePost = (postId) => {
      postService.deletePost(postId);
    }
  
    return (
      <React.Fragment >
        <ImageListItem onClick={handleOpenPost}>
          <img
            // srcSet={`${post.images[0]}?w=445&h=494&fit=crop&auto=format&dpr=2 2x`}
            // src={`${post.images[0]}?w=445&h=494&fit=crop&auto=format`}
            srcSet={post.images[0]}
            src={post.images[0]}
            loading="lazy"
          />
          { editMode && 
          <ImageListItemBar onClick={(event) => event.stopPropagation()}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                onClick={() => handleDeletePost(post.postId)}
              >
                <DeleteIcon />
              </IconButton>
            }
          />
          }
        </ImageListItem>
        <PostInfoDialog open={openPost} onClose={handleClosePost} post={post} />
      </React.Fragment>
    );
  }
  
  const selectPosts = createSelector(
    (state) => state.post.newsFeed,
    (_, userId) => userId,
    (newsFeed, userId) => {
      return newsFeed.filter((post) => post.userId == userId);
    }
  )
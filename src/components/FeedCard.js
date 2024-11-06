import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useSelector } from 'react-redux';

import LikeButton from './LikeButton';
import ImageStepper from './ImageStepper';
import AccountAvatar from './AccountAvatar';
import { AccountName } from './AccountName';
import { AccountNameButton } from './AccountNameButton';
import PostInfoDialog from './PostInfoDialog';

export default function FeedCard(props) {
  const { post } = props;
  const account = useSelector(state => state.account.account);
  const [openPost, setOpenPost] = React.useState(false);
  const handleOpenPost = () => setOpenPost(true);
  const handleClosePost = () => setOpenPost(false);

  let isMyPost = account.userId == post.userId;

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 445 }} {...props}>
        <CardHeader
          avatar={
            <AccountAvatar username={post.username}/>
          }
          title={isMyPost ? <AccountName username={post.username} /> : <AccountNameButton userId={post.userId} username={post.username}/>}
          subheader={post.date}
        />
        <CardContent>
          <ImageStepper images={post.images} />
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <LikeButton post={post}/>
          <IconButton aria-label="comment" onClick={handleOpenPost}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="body2" sx={{ marginLeft: '5px' }}>{post.likes.length} like(s)</Typography>
        </CardActions>
      </Card>
      <PostInfoDialog open={openPost} onClose={handleClosePost} post={post} />
    </React.Fragment>
  );
}

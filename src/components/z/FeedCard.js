import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import AccountAvatar from './AccountAvatar';
import LikeButton from './LikeButton';
import AccountNameButton from './AccountNameButton';
import ImageStepper from './ImageStepper';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PostInfoDialog from './PostInfoDialog';
import CommentDialog from './CommentDialog'; // Import CommentDialog
import * as postService from '../service/PostService';
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';

export default function FeedCard(props) {
    const { post } = props;
    const account = useSelector((state) => state.account);
    const isMyPost = account.userId === post.userId;

    const [openPost, setOpenPost] = useState(false);
    const [openCommentDialog, setOpenCommentDialog] = useState(false); // State for comment dialog
    const [comment, setComment] = useState('');

    // Handlers for PostInfoDialog
    const handleOpenPost = () => setOpenPost(true);
    const handleClosePost = () => setOpenPost(false);

    // Handlers for CommentDialog
    const handleOpenCommentDialog = () => setOpenCommentDialog(true);
    const handleCloseCommentDialog = () => setOpenCommentDialog(false);

    const handleAddComment = () => {
        if (comment.trim()) {
            postService.addPostComment(post.postId, comment).then(() => {
                setComment('');
                setOpenCommentDialog(false); // Close dialog after submission
            });
        }
    };

    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', mb: 2 }}>
            <CardHeader
                avatar={<AccountAvatar username={post.username} size="small" />}
                title={
                    isMyPost ? (
                        <Typography variant="h6">{post.username}</Typography>
                    ) : (
                        <AccountNameButton username={post.username} userId={post.userId} />
                    )
                }
                subheader={post.date}
            />
            <CardContent sx={{ p: 2 }}>
                <ImageStepper images={post.images} />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
                <Box display="flex" alignItems="center">
                    <LikeButton post={post} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                        {post.likes.length} like(s)
                    </Typography>
                </Box>
                <IconButton aria-label="comment" onClick={handleOpenCommentDialog}>
                    <ChatBubbleOutlineIcon />
                </IconButton>
            </CardActions>

            {/* PostInfoDialog for viewing post details */}
            <PostInfoDialog open={openPost} onClose={handleClosePost} post={post} />

            {/* CommentDialog for adding comments */}
            <CommentDialog
                open={openCommentDialog}
                onClose={handleCloseCommentDialog}
                comment={comment}
                setComment={setComment}
                onSubmit={handleAddComment}
            />
        </Card>
    );
}

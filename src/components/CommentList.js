// src/components/CommentList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const CommentList = ({ comments }) => (
    <List>
        {comments.map((comment, index) => (
            <ListItem key={index}>
                <ListItemText primary={comment.text} secondary={comment.author} />
            </ListItem>
        ))}
    </List>
);

export default CommentList;

// src/components/AddCommentField.js
import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const AddCommentField = ({ postId }) => {
    const [comment, setComment] = useState('');

    const handleAddComment = () => {
        // Function to add comment (e.g., API call)
        setComment(''); // Clear the field after adding the comment
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                variant="outlined"
                size="small"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
                fullWidth
            />
            <IconButton onClick={handleAddComment} color="primary">
                <SendIcon />
            </IconButton>
        </div>
    );
};

export default AddCommentField;

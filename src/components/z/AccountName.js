// src/components/AccountName.js
import React from 'react';
import Typography from '@mui/material/Typography';

export default function AccountName({ username }) {
    return (
        <Typography variant="subtitle1" component="span">
            {username}
        </Typography>
    );
}

// src/components/AccountNameButton.js

import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { showProfile } from '../store/actions/application';

export default function AccountNameButton({ username, userId }) {
    const dispatch = useDispatch();

    const handleShowProfile = () => {
        dispatch(showProfile(userId));
    };

    return (
        <Button variant="text" sx={{ textTransform: 'none' }} onClick={handleShowProfile}>
            {username}
        </Button>
    );
}

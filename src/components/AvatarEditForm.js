import React from 'react';
import { Stack, Avatar } from '@mui/material'; // Import Avatar and Stack from Material UI
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import * as accountService from '../service/AccountService'; // Adjust the import according to your service location
import FileUploadButton from './FileUploadButton';
import {loadAccount} from "../store/actions/account"; // Import the FileUploadButton component

const AvatarEditForm = ({ profile }) => {
    const dispatch = useDispatch(); // Get dispatch function

    // Handler function for file upload
    const handleFileUpload = (src) => {
        accountService.updateProfileAvatar(src)
            .then(response => {
                // Dispatch the loadAccount action
                dispatch(loadAccount());
            })
            .catch(error => {
                console.error("Error updating avatar:", error);
            });
    };

    return (
        <Stack direction="column" spacing={1} sx={{ alignItems: 'center' }}>
            {/* First child: Avatar component */}
            <Avatar
                src={profile.avatar} // Set the source of the Avatar
                sx={{ width: 150, height: 150 }} // Set the styles using sx
            />
            {/* Second child: FileUploadButton component */}
            <FileUploadButton
                title="Change profile picture"
                onFileUpload={handleFileUpload} // Pass the handler to the button
            />
        </Stack>
    );
};

export default AvatarEditForm;

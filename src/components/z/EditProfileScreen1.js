import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import { Grid } from '@mui/material'; // Import Grid from Material UI
import AvatarEditForm from './AvatarEditForm'; // Import AvatarEditForm component

const EditProfileScreen = () => {
    // Get current user profile from the Redux store
    const profile = useSelector(state => state.account.account);

    return (
        <div>
            <h1>Edit Profile</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    {/* Add AvatarEditForm to the first Grid item and pass profile as a prop */}
                    {profile && <AvatarEditForm profile={profile} />}
                </Grid>
                {/* Other Grid items can be added here for different form fields */}
            </Grid>
        </div>
    );
};

export default EditProfileScreen;

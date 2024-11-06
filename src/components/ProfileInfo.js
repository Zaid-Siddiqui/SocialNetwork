import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Typography, Button } from '@mui/material';
import {setActiveScreen} from "../store/actions/application";

const MY_PROFILE = 'profile';
const EDIT_PROFILE = 'editprofile';

const ProfileInfo = ({ profile }) => {
    const dispatch = useDispatch();
    const activeScreen = useSelector(state => state.application.activeScreen);


    const isMyProfile = activeScreen === MY_PROFILE;

    const handleEditProfile = () => {
        dispatch(setActiveScreen(EDIT_PROFILE, {}));
    };

    return (
        <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h6">
                  {profile.username}
                </Typography>
                <Typography variant="h6">
                    <Button variant="contained" onClick={handleEditProfile}>
                        Edit Profile
                    </Button>
            </Typography>
            </Stack>
            <Typography variant="body1">
                {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant="body1">
                {profile.description}
            </Typography>

                {/*<Typography style={{ color: 'body1' }}>*/}
                {/*    {profile.profileinfo}*/}
                {/*</Typography>*/}



            <Typography variant="body1">
                {profile.avatar}
            </Typography>
        </Stack>
    );
};

export default ProfileInfo;

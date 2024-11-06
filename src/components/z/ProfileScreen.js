import React from "react";
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import Avatar from "@mui/material/Avatar"; // Import Avatar from Material UI
import Grid from "@mui/material/Grid"; // Import Grid for layout
import ProfileInfo from "./ProfileInfo"; // Import the ProfileInfo component
import PostList from "./PostList";

export default function ProfileScreen() {
    // Get screenOptions from the Redux store
    const screenOptions = useSelector(state => state.application.screenOptions);
    let profile = screenOptions.profile;



    return (
        <div>


            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                        <Avatar
                            src={profile.avatar} // Set the source of the Avatar
                            sx={{ width: 150, height: 150 }} // Set the styles using sx
                        />

                </Grid>
                <Grid item xs={12} md={6}>
                   <ProfileInfo profile={profile} />

                </Grid>
                <Grid item xs={12} md={6}>
                    <PostList profile={profile}/>
                </Grid>
            </Grid>
        </div>
    );
}

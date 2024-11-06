import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_PROFILE, MY_PROFILE } from "../utils/ScreenNames";
import { setActiveScreen } from "../store/actions/application";
import { PostList } from "./PostList";

export default function ProfileScreen() { 
  const screenOptions = useSelector(state => state.application.screenOptions); 
  let profile = screenOptions.profile;
  console.log('Profile', profile);
  
  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
       <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar
          src={profile.avatar}
          sx={{ width: 150, height: 150 }}
        />
      </Grid>
        <Grid item xs={12} sm={12} md={6}>
        <ProfileInfo profile={profile}/>
      </Grid>
      <Grid size={{ xs: 12, xl: 10 }} sx={{ display: 'flex'}}>
        <PostList profile={profile}/>
      </Grid>
    </Grid>
  );
}

function ProfileInfo(props) {
  const { profile } = props;
  const activeScreen = useSelector(state => state.application.activeScreen);
  let isMyProfile = activeScreen == MY_PROFILE;
  const dispatch = useDispatch();
    const newsFeed = useSelector(state => state.post.newsFeed);

  let myPosts = newsFeed.filter(x => x.userId == profile.userId);



  const handleEditProfile = () => {
    dispatch(setActiveScreen(EDIT_PROFILE, {}));
  }

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5">{profile.username}</Typography>
        { isMyProfile &&
          <Button variant="outlined" onClick={handleEditProfile}>Edit Profile</Button>
        }
      </Stack>       
      <Typography variant="body1">{profile.firstName} {profile.lastName}</Typography>
      <Typography variant="body1">{profile.description}</Typography>
        <Stack direction="row" spacing={2}>
        <Typography variant="body1"> {myPosts.length} posts</Typography>

        <Typography variant="body1">{profile.followersCount} followers</Typography>
        <Typography variant="body1">{profile.following.length} following</Typography>
        </Stack>
    </Stack>
  );
}

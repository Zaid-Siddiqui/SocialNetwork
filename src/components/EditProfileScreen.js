import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import FileUploadButton from './FileUploadButton';
import * as accountService from '../service/AccountService';
import { loadAccount } from '../store/actions/account';
import { showMyProfile } from '../store/actions/application';
import { PostList } from './PostList';


export default function EditProfileScreen() {
  const profile = useSelector(state => state.account.account);

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
        <AvatarEditForm profile={profile}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }}>
        <EditProfileForm profile={profile} />
      </Grid>
      <Grid size={{ xs: 12, xl: 10 }} sx={{ display: 'flex' }}>
        <PostList profile={profile} editMode={true} />
      </Grid>
    </Grid>
  );
}

function AvatarEditForm(props) {
  const { profile } = props;
  const dispatch = useDispatch();

  const handleFileUpload = (src) => {
    accountService.updateProfileAvatar(src).then(response => {
      dispatch(loadAccount());
    });
  }

  return (
    <Stack direction="column" spacing={1} sx={{ alignItems: 'center' }}>
      <Avatar
        src={profile.avatar}
        sx={{ width: 150, height: 150 }}
      />
      <FileUploadButton title="Change profile picture" onFileUpload={handleFileUpload}/>
    </Stack>
  );
} 

function EditProfileForm(props) {
  const { profile } = props;
  const [firstName, setFirstName] = React.useState(profile.firstName);
  const [lastName, setLastName] = React.useState(profile.lastName);
  const [description, setDescription] = React.useState(profile.description);
  const dispatch = useDispatch();

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleSave = () => {
    accountService.updateProfile({firstName, lastName, description}).then(response => {
      dispatch(loadAccount());
      dispatch(showMyProfile());
    });
  }

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        id="firstName"
        label="First Name"
        fullWidth
        value={firstName}
        error={!Boolean(firstName)}
        onChange={handleChangeFirstName}
      />
      <TextField
        id="lastName"
        label="Last Name"
        fullWidth
        value={lastName}
        error={!Boolean(lastName)}
        onChange={handleChangeLastName} 
      />
      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        fullWidth
        value={description}
        error={!Boolean(description)}
        onChange={handleChangeDescription} 
      />
      <Button onClick={handleSave} disabled={!Boolean(firstName) || !Boolean(lastName) || !Boolean(description)} >Save</Button>
    </Stack>
  );
}



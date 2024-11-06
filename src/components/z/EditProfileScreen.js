import React, { useEffect } from 'react'
import { Grid } from '@mui/material'; // Import Grid from Material UI
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import * as accountService from '../service/AccountService';
import FileUploadButton from './FileUploadButton';
import AvatarEditForm from "./AvatarEditForm";

export default function EditProfileScreen() {
    const profile = useSelector(state => state.account.account);
  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }} sx={{ display: 'flex', justifyContent: 'center'}}>
          <AvatarEditForm profile={profile} />
      </Grid>
    </Grid>  
  );
}

function EditProfileForm(props) {
  const { profile } = props;
  const [firstName, setFirstName] = React.useState(profile.firstName);
  const dispatch = useDispatch();

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleSave = () => {

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
            id="lastname"
            label="LastName"
            fullWidth
            value={lastname}
            error={!Boolean(lastname)}
            onChange={handleChangeFirstName}
        />
        <TextField
            id="description"
            label="Description"
            fullWidth
            value={description}
            error={!Boolean(description)}
            onChange={handleChangeFirstName}
        />
      <Button onClick={handleSave} disabled={!Boolean(lastname)}>Save</Button>
    </Stack>
  );
}


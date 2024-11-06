import React, { useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import * as accountService from '../service/AccountService';
import { showProfile } from '../store/actions/application';
import AccountAvatar from './AccountAvatar';

export default function AccountSearchField() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    accountService.searchAccounts(inputValue).then(response => {
      setOptions(response.data);
    });
  }, [inputValue]);

  return (
    <Autocomplete
      freeSolo
      fullWidth
      size="small"
      autoComplete
      options={options}
      filterOptions={(x) => x}
      filterSelectedOptions
      value={value}
      noOptionsText="No accounts"
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.username
      }
      renderInput={(params) => <TextField {...params} placeholder="Search" fullWidth />}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountAvatar username={option.username} size="small"/>
              <Stack direction="column">
                <Typography variant="body2"><b>{option.username}</b></Typography>
                <Typography variant="body2">{option.firstName} {option.lastName}</Typography>
              </Stack>
            </Stack>
          </li>
        );
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        if (newValue) dispatch(showProfile(newValue.userId));
      }}
    />
  );
}
import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import { getFirstCapitalLetter } from '../utils/Utils';

export default function AccountAvatar(props) {
  const { username, size } = props;
  let sx = {};
  if (size == 'small') {
    sx = { width: 32, height: 32 };
  } 

  return (
    <Avatar sx={{ bgcolor: red[500], ...sx }}>
      {getFirstCapitalLetter(username)}
    </Avatar> 
  );
}

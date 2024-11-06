import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { DialogTitle, Typography } from '@mui/material';

import PostInfo from './PostInfo';

export default function PostInfoDialog(props) {
  const { post, open, onClose } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const xl = useMediaQuery(theme.breakpoints.only('xl'));

  let maxWidth = false;
  if (md) maxWidth = 'md';
  if (lg) maxWidth = 'lg';
  if (xl) maxWidth = 'xl';

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={maxWidth}>
      <DialogTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, marginLeft: '5px' }}>           
            <Typography variant="body2">{post.username}</Typography>
          </div>
          <div>
            <IconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <PostInfo post={post} />
      </DialogContent>
    </Dialog>
  );
}
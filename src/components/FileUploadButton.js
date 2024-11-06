import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function FileUploadButton(props) {
  const { onFileUpload, title } = props;

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      let src = URL.createObjectURL(file);
      onFileUpload(src);
    }
  }

  return (
    <Button
      component="label"
      variant="contained"
      role={undefined}
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      {title}
      <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
    </Button>
  );
}
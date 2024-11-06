import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ImageStepper from './ImageStepper';
import FileUploadButton from './FileUploadButton';
import * as postService from '../service/PostService';
import { useDispatch } from 'react-redux';
import { showMyProfile } from '../store/actions/application';


export default function CreatePostScreen() {
  const [images, setImages] = React.useState([]);

  const hadleFileUpload = (src) => {
    let newImages = [...images];
    newImages.push(src);
    setImages(newImages);
  }

  return (
    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }} sx={{ display: 'flex', justifyContent: 'center'}}>
        <Stack direction="column" spacing={2}>
          { images.length > 0 && <ImageStepper images={images}/> }
          <FileUploadButton onFileUpload={hadleFileUpload} title={'Upload Image'}/>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 5 }}>
        <PostForm images={images}/>
      </Grid>
    </Grid>
  );
}

function PostForm(props) {
  const { images } = props;
  const [description, setDescription] = React.useState('');
  const dispatch = useDispatch();

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleSave = () => {
    postService.createPost({
      description: description,
      images: images
    }).then(response => {
      dispatch(showMyProfile());
    });
  }

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        fullWidth
        value={description}
        onChange={handleChangeDescription} 
      />
      <Button onClick={handleSave} disabled={!Boolean(description) || !Boolean(images) || images.length == 0}>Save</Button>  
    </Stack> 
  );
}
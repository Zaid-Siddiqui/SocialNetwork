import React, { useEffect } from 'react';
import AppLayout from './AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_POST, EDIT_PROFILE, MY_PROFILE, PROFILE } from '../utils/ScreenNames';
import ProfileScreen from './ProfileScreen';
import CreatePostScreen from './CreatePostScreen';
import HomeScreen from './HomeScreen';
import { loadAccount } from '../store/actions/account';
import { loadNewsFeed } from '../store/actions/post';
import EditProfileScreen from './EditProfileScreen';

export default function MainComponent() {
  const activeScreen = useSelector(state => state.application.activeScreen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAccount());

    let intervalId = setInterval(function () {
      dispatch(loadNewsFeed());
    }, 500);

    return () => {
      // This is the cleanup function
      // It will be called when the component is unmounted
      clearInterval(intervalId);
    };

  },[]);


  return (
    <AppLayout>
     { activeScreen == MY_PROFILE || activeScreen == PROFILE ? <ProfileScreen/>
      : activeScreen == EDIT_PROFILE ? <EditProfileScreen/>
      : activeScreen == CREATE_POST ? <CreatePostScreen/>
      : <HomeScreen/>
     }   
    </AppLayout>

  );
}

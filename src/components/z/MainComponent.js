import React, { useEffect } from 'react';
import AppLayout from './AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import {CHAT, CREATE_POST, EDIT_PROFILE, MY_PROFILE, PROFILE} from '../utils/ScreenNames';
import ProfileScreen from './ProfileScreen';
import CreatePostScreen from './CreatePostScreen';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import { loadAccount } from '../store/actions/account';
import { loadNewsFeed } from '../store/actions/post';
import EditProfileScreen1 from "./EditProfileScreen1";
import EditProfileScreen from "./EditProfileScreen";

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
      : activeScreen == CREATE_POST ? <CreatePostScreen/>
      : activeScreen == CHAT ? <ChatScreen/>
      : activeScreen == EDIT_PROFILE ? <EditProfileScreen/>
      : <HomeScreen/>
     }   
    </AppLayout>

  );
}

// src/store/actions/application/index.js

import { SET_ACTIVE_SCREEN } from "./types";
import * as accountService from '../../../service/AccountService';
import { MY_PROFILE, PROFILE } from "../../../utils/ScreenNames";

// Action creator to set the active screen
export const setActiveScreen = (activeScreen, options) => {
  return {
    type: SET_ACTIVE_SCREEN,
    activeScreen,
    options
  };
};

// Action creator to show the logged-in user's profile
export function showMyProfile() {
  return function (dispatch) {
    accountService.getAccount().then(response => {
      dispatch(setActiveScreen(MY_PROFILE, { profile: response.data }));
    });
  };
}

// Action creator to show a user's profile by user ID
export const showProfile = (userId) => {
  return function (dispatch) {
    accountService.getProfile(userId).then(response => {
      dispatch(setActiveScreen(PROFILE, { profile: response.data }));
    }).catch(error => {
      console.error('Error fetching profile:', error);
      // Optional: dispatch an error action if needed
    });
  };
};

import axios from 'axios';
import { isLocalhost } from '../utils/Utils';
import * as accountServiceMock from './mock/AccountServiceMock';

export function getAccount() {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      let account = accountServiceMock.getCurrentAccount();
      if (account) {
        resolve({ data: account });
      } else {
        reject(new Error("Failed to fetch account"));
      }
    });
  }
  return axios.get('/api/account').catch(error => {
    console.error("Error fetching account:", error);
    throw error;
  });
}

export function follow(userId) {
  if (isLocalhost()) {
    return new Promise(function (resolve) {
      accountServiceMock.follow(userId);
      resolve();
    });
  }

  let params = new URLSearchParams();
  params.append('userId', userId);

  return axios.post('/api/account/follow', params).catch(error => {
    console.error("Error following user:", error);
    throw error;
  });
}

export function unfollow(userId) {
  if (isLocalhost()) {
    return new Promise(function (resolve) {
      accountServiceMock.unfollow(userId);
      resolve();
    });
  }

  let params = new URLSearchParams();
  params.append('userId', userId);

  return axios.post('/api/account/unfollow', params).catch(error => {
    console.error("Error unfollowing user:", error);
    throw error;
  });
}

export function getProfile(userId) {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      let profile = accountServiceMock.getProfile(userId);
      if (profile) {
        resolve({ data: profile });
      } else {
        reject(new Error("Failed to fetch profile"));
      }
    });
  }

  let params = new URLSearchParams();
  params.append('userId', userId);

  return axios.post('/api/profile', params).catch(error => {
    console.error("Error fetching profile:", error);
    throw error;
  });
}

export function getSuggestedAccounts() {
  return new Promise(function (resolve) {
    let suggestedAccounts = accountServiceMock.getSuggestedAccounts();
    resolve({ data: suggestedAccounts });
  });
}

export function updateProfile(profile) {
  return new Promise(function (resolve) {
    accountServiceMock.updateProfile(profile);
    resolve();
  });
}

export function updateProfileAvatar(src) {
  return new Promise(function (resolve) {
    accountServiceMock.updateProfileAvatar(src);
    resolve();
  });
}

export function searchAccounts(username) {
  return new Promise(function (resolve) {
    let accounts = accountServiceMock.searchAccounts(username);
    resolve({ data: accounts });
  });
}

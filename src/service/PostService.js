import axios from 'axios';
import { isLocalhost } from '../utils/Utils';
import * as postServiceMock from './mock/PostServiceMock';

export function getNewsFeed() {
  if (isLocalhost()) {
    //axios.get('http://localhost:3000/msg');
    return new Promise(function (resolve, reject) {
      let newsFeed = postServiceMock.getNewsFeed();
      resolve({ data: newsFeed });
    });
  }
  return axios.get('/api/feed/list');
}

export function addPostComment(postId, comment) {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      postServiceMock.addPostComment(postId, comment);
      resolve();
    });
  }

  let params = new URLSearchParams();
  params.append('postId', postId);
  params.append('comment', comment);

  return axios.post('/api/post/comment', params);
}

export function addPostLike(postId) {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      postServiceMock.addPostLike(postId);
      resolve();
    });
  }

  let params = new URLSearchParams();
  params.append('postId', postId);

  return axios.post('/api/post/like/add', params);
}

export function removePostLike(postId) {
  if (isLocalhost()) {
    return new Promise(function (resolve, reject) {
      postServiceMock.removePostLike(postId);
      resolve();
    });
  }

  let params = new URLSearchParams();
  params.append('postId', postId);

  return axios.post('/api/post/like/remove', params);
}

export function getUserPosts(userId) {
  return new Promise(function (resolve, reject) {
    let posts = postServiceMock.getUserPosts(userId);
    resolve({ data: posts });
  });
}

export function deletePost(postId) {
  return new Promise(function (resolve, reject) {
    postServiceMock.deletePost(postId);
    resolve();
  });
}

export function createPost(post) {
  return new Promise(function (resolve, reject) {
    postServiceMock.createPost(post);
    resolve();
  });
}
import * as chatServiceMock from './mock/ChatServiceMock';

export function getChats() {
  return new Promise(function (resolve, reject) {
    let chats = chatServiceMock.getChats();
    resolve({ data: chats });
  });
}

export function getChat(chatId) {
  return new Promise(function (resolve, reject) {
    let chat = chatServiceMock.getChat(chatId);
    resolve({ data: chat });
  });
}

export function getChatByUserId(userId) {
  return new Promise(function (resolve, reject) {
    let chat = chatServiceMock.getChatByUserId(userId);
    resolve({ data: chat });
  });
}

export function createChat(chat) {
  return new Promise(function (resolve, reject) {
    let chatId = chatServiceMock.createChat(chat);
    resolve({ data: chatId });
  });
}

export function addMessageToChat(chatId, message) {
  return new Promise(function (resolve, reject) {
    chatServiceMock.addMessageToChat(chatId, message);
    resolve();
  });
}

export function markNewMessagesAsRead(chatId) {
  return new Promise(function (resolve, reject) {
    chatServiceMock.markNewMessagesAsRead(chatId);
    resolve();
  });
}

export function deleteChat(chatId) {
  return new Promise(function (resolve, reject) {
    chatServiceMock.deleteChat(chatId);
    resolve();
  });
}
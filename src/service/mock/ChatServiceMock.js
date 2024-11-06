import { getCurrentAccount } from "./AccountServiceMock";
import { getFormattedCurrentDate } from '../../utils/Utils';

let chats = [
  {
    chatId: 1,
    userId: 1678,
    username: "charlotte.morgan",
    lastMessage: "Hi! A'm fine. Thank you! How are you?",
    newMessages: 0
  },
  {
    chatId: 2,
    userId: 7689,
    username: "anna.smith",
    lastMessage: "Could you please find your last notes?",
    newMessages: 1
  }
];

let chatInfos = [
  {
    chatId: 1,
    userId: 1678,
    username: "charlotte.morgan",
    userStatus: "Active",
    messages: [
      {
        userId: 1678,
        msg: "Hi! How are you?",
        date: "September 14, 2024 14:02:00"
      },
      {
        userId: 9876,
        msg: "Hi! A'm fine. Thank you! How are you?",
        date: "September 14, 2024 14:04:45"
      }
    ]
  },
  {
    chatId: 2,
    userId: 7689,
    username: "anna.smith",
    userStatus: "Active",
    messages: [
      {
        userId: 9876,
        msg: "Hi! How are you?",
        date: "September 14, 2024 14:02:00"
      },
      {
        userId: 7689,
        msg: "Could you please find your last notes?",
        date: "September 14, 2024 18:34:45"
      }
    ]
  }
];

export function getChats() {
  return JSON.parse(JSON.stringify(chats));
}

export function getChat(chatId) {
  let chat = chatInfos.find(chat => chat.chatId == chatId);
  if (chat) {
    chat = JSON.parse(JSON.stringify(chat));
  }
  return chat;
}

export function getChatByUserId(userId) {
  let chat = chatInfos.find(chat => chat.userId == userId);
  if (chat) {
    chat = JSON.parse(JSON.stringify(chat));
  }
  return chat;
}

export function createChat(chat) {
  chat.chatId = new Date().getMilliseconds();
  chat.newMessages = 0;
  chat.lastMessage = chat.messages[chat.messages.length-1].msg;
  chat.userStatus = 'Active';
  chats.push(chat);
  chatInfos.push(chat);
  return chat.chatId;
}

export function addMessageToChat(chatId, message) {
  let chat = chatInfos.find(chat => chat.chatId == chatId);
  if (chat) {
    let currentUser = getCurrentAccount();
    chat.messages.push({
      userId: currentUser.userId,
      msg: message,
      date: getFormattedCurrentDate()
    });
  }
}

export function markNewMessagesAsRead(chatId) {
  let chat = chats.find(chat => chat.chatId == chatId);
  if (chat) {
    chat.newMessages = 0;
  }
}

export function deleteChat(chatId) {
  const index = chats.map(e => e.chatId).indexOf(chatId);
  if (index > -1) {
    chats.splice(index, 1); // 2nd parameter means remove one item only
  }

  // delete chat info
  const index2 = chatInfos.map(e => e.chatId).indexOf(chatId);
  if (index2 > -1) {
    chatInfos.splice(index2, 1); // 2nd parameter means remove one item only
  }
}
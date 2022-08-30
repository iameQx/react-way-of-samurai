import { messagesPageReducer } from "./messages-reducer";
import { profilePageReducer } from "./profile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "Hi", likesCount: 20 },
        { id: 3, message: "Do you like Cucucmbers?", likesCount: 17 },
        { id: 4, message: "We are going on a trip today", likesCount: 3 },
        { id: 5, message: "Today was a hard day...", likesCount: 35 },
      ],
      newPostText: "it-kamasutra.com",
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Lexus" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Oleg" },
        { id: 4, name: "Dima" },
        { id: 5, name: "Sasha" },
      ],
      messagesData: [
        { id: 1, text: "Hey" },
        { id: 2, text: "Hello" },
        { id: 3, text: "How are you?" },
        { id: 4, text: "Whats up!" },
      ],
      newMessageText: "dsdssd",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("tedasdasdasdasd");
  },
  dispatch(action) {
    profilePageReducer(store._state.profilePage, action);
    messagesPageReducer(store._state.messagesPage, action);
    store._callSubscriber(store._state);
  },
  subscribe(observer) {
    store._callSubscriber = observer;
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default store;

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const messagesPageReducer = (state, action) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      let newMessage = {
        id: 5,
        text: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      break;
    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }
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

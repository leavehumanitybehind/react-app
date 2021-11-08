import { combineReducers } from "redux";
import chatReducer from "./quizReducer";
import quizReducer from "./quizReducer";
import userReducer from "./quizReducer";

const rootReducer = combineReducers ({
    userState: userReducer,
    chatState: chatReducer,
    quizState: quizReducer,
  });
  export default rootReducer;
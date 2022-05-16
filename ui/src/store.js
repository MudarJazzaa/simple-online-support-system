import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import questionReducer from "slices/question";
import replyReducer from "slices/reply";
const reducer = {
  auth: authReducer,
  message: messageReducer,
  questions: questionReducer,
  replies: replyReducer,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;

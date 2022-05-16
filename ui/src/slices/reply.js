import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ReplyDataService from "services/ReplyService";
const initialState = { question: null, status: null };

export const createReply = createAsyncThunk(
  "reply/create",
  async ({ text, question_id }) => {
    const user_id = 1;
    const res = await ReplyDataService.create({
      user_id,
      text,
      question_id,
    });
    console.log(res);
    return res.data;
  }
);
export const retrieveQuestionReplies = createAsyncThunk(
  "reply/retrieveQuestionReplies",
  async (question_id) => {
    console.log(question_id);
    const res = await ReplyDataService.getQuestionReplies(question_id);
    return res.data;
  }
);
// export const updateReply = createAsyncThunk(
//   "reply/update",
//   async ({ id, data }) => {
//     const res = await ReplyDataService.update(id, data);
//     return res.data;
//   }
// );
// export const deleteReply = createAsyncThunk(
//   "reply/delete",
//   async ({ id }) => {
//     await ReplyDataService.remove(id);
//     return { id };
//   }
// );
// export const deleteAllReplys = createAsyncThunk(
//   "reply/deleteAll",
//   async () => {
//     const res = await ReplyDataService.removeAll();
//     return res.data;
//   }
// );
// export const findReplysByTitle = createAsyncThunk(
//   "reply/findByTitle",
//   async ({ title }) => {
//     const res = await ReplyDataService.findByTitle(title);
//     return res.data;
//   }
// );
const replySlice = createSlice({
  name: "reply",
  initialState,
  extraReducers: {
    [createReply.fulfilled]: (state, action) => {
      // state.push(action.payload);
    },
    [retrieveQuestionReplies.fulfilled]: (state, action) => {
      state.question = action.payload.question;
      state.status = action.payload.question.status;

      // return [state];
      // return [...action.payload];
    },
    // [updateReply.fulfilled]: (state, action) => {
    //   const index = state.findIndex((reply) => reply.id === action.payload.id);
    //   state[index] = {
    //     ...state[index],
    //     ...action.payload,
    //   };
    // },
    // [deleteReply.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },
    // [deleteAllReplys.fulfilled]: (state, action) => {
    //   return [];
    // },
    // [findReplysByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});
const { reducer } = replySlice;
export default reducer;

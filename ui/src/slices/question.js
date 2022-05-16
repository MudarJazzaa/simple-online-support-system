import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import QuestionDataService from "services/QuestionService";
const initialState = [];

export const createQuestion = createAsyncThunk(
  "question/createQuestion",
  async ({ user_id, title, description }) => {
    const res = await QuestionDataService.create({
      user_id,
      title,
      description,
    });
    console.log("createQuestion", res);
    return res.data.data;
  }
);

export const getQuestionById = createAsyncThunk(
  "question/getQuestionById",
  async ({ id }) => {
    const res = await QuestionDataService.getById(id);
    return res.data.data;
  }
);

export const retrieveQuestions = createAsyncThunk(
  "question/retrieveQuestions",
  async () => {
    const res = await QuestionDataService.getAll();
    console.log(res.data.data);
    return res.data.data;
  }
);
export const retrieveUserQuestions = createAsyncThunk(
  "question/retrieveUserQuestions",
  async ({ user_id }) => {
    console.log(user_id);
    const res = await QuestionDataService.getByUserId(user_id);
    console.log(res.data);
    return res.data.data;
  }
);
export const updateQuestion = createAsyncThunk(
  "question/update",
  async ({ id, data }) => {
    console.log("updateQuestion", id, data);
    const res = await QuestionDataService.update(id, data);
    console.log("updateQuestion", res.data);
    return res.data;
  }
);
// export const deleteQuestion = createAsyncThunk(
//   "question/delete",
//   async ({ id }) => {
//     await QuestionDataService.remove(id);
//     return { id };
//   }
// );
// export const deleteAllQuestions = createAsyncThunk(
//   "question/deleteAll",
//   async () => {
//     const res = await QuestionDataService.removeAll();
//     return res.data;
//   }
// );
// export const findQuestionsByTitle = createAsyncThunk(
//   "question/findByTitle",
//   async ({ title }) => {
//     const res = await QuestionDataService.findByTitle(title);
//     return res.data;
//   }
// );
const questionSlice = createSlice({
  name: "question",
  initialState,
  extraReducers: {
    [createQuestion.fulfilled]: (state, action) => {
      // console.log("fulfilled", action.payload);
      // state.push(action.payload);
    },
    [getQuestionById.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [retrieveQuestions.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [retrieveUserQuestions.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateQuestion.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (question) => question.id === action.payload.id
      );
      console.log(action.payload);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    // [deleteQuestion.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },
    // [deleteAllQuestions.fulfilled]: (state, action) => {
    //   return [];
    // },
    // [findQuestionsByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});
const { reducer } = questionSlice;
export default reducer;

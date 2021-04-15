import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import fetchQuestions from "./triviaAPI";
import type { RootState } from "../../store/index";

interface QuestionsFormat {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface TriviaState {
  questions: QuestionsFormat[];
  error: string | undefined;
}

const initialState: TriviaState = {
  questions: [],
  error: undefined,
};

export const loadQuestionsAsync = createAsyncThunk(
  "trivia/loadQuestions",
  async () => fetchQuestions()
);

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadQuestionsAsync.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.error = undefined;
      })
      .addCase(loadQuestionsAsync.rejected, (state, action) => {
        const { message } = action.error;
        state.error = message;
      });
  },
});

export const selectQuestions = (state: RootState) => state.trivia.questions;

export default triviaSlice.reducer;

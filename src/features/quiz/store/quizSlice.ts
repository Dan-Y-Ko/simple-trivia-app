import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import fetchQuestions from "./quizAPI";
import type { RootState } from "../../../store/index";

/* Types */

export interface QuestionsFormat {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizState {
  questions: QuestionsFormat[];
  error: string | undefined;
  loading: boolean;
}

const initialState: QuizState = {
  questions: [],
  error: undefined,
  loading: false,
};

/* -------------------------------------- */

/* Async Thunks */

export const loadQuestionsAsync = createAsyncThunk(
  "trivia/loadQuestions",
  async () => fetchQuestions()
);

/* -------------------------------------- */

/* reducers */

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadQuestionsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadQuestionsAsync.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.error = undefined;
        state.loading = false;
      })
      .addCase(loadQuestionsAsync.rejected, (state, action) => {
        const { message } = action.error;
        state.error = message;
        state.loading = false;
      });
  },
});

export default quizSlice.reducer;

/* -------------------------------------- */

/* selectors */

export const selectQuestions = (state: RootState) => state.quiz;

/* -------------------------------------- */

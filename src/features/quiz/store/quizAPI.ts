import instance from "../../../api/index";

import type { QuestionsFormat } from "./quizSlice";

const fetchQuestions = async (): Promise<QuestionsFormat[]> => {
  try {
    const result = await instance.get(
      "api.php?amount=10&difficulty=hard&type=boolean"
    );

    return result.data.results;
  } catch (error) {
    throw error.message;
  }
};

export default fetchQuestions;

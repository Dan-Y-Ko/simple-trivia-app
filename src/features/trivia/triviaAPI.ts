import instance from "../../api/index";

const fetchQuestions = async () => {
  // eslint-disable-next-line no-useless-catch
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

import axios from "axios";

/* Global Axios Config */
/* ------- */
const instance = axios.create({
  baseURL: "https://opentdb.com/",
});

export default instance;
/* ------- */

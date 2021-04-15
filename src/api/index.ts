import axios from "axios";

/* Global Axios Config */
// put any configuration as needed here
/* ------- */
const instance = axios.create({
  baseURL: "https://opentdb.com/",
});

export default instance;
/* ------- */

import axios from "axios";

const reqInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {},
});

export default reqInstance;

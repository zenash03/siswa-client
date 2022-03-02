import axios from "axios";
export default axios.create({
  baseURL: "belajar-api.test/api",
  headers: {
    "Content-type": "application/json"
  }
});
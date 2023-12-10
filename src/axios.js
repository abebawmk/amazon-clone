import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/amzon-clone-4f591/us-central1/api",
  // the API url,
});

export default instance;

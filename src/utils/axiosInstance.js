import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torri-gate-backend-project.onrender.com/api",
});

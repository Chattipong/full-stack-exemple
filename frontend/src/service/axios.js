import axios from "axios";

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL_API + "/api/",
  timeout: 5 * 1000 * 60,
});
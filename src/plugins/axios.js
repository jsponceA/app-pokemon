import axios from "axios";

const axiosInstace = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

export { axiosInstace };

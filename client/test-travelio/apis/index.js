import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export default api;

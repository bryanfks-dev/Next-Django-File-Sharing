import axios from "axios";

/**
 * Axios instance for API calls with the base URL and headers.
 */
export const apiClient = axios.create({
  baseURL: process.env.NEXT_API_URL || "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

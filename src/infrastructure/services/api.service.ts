import axios from "axios";

/**
 * Axios instance for API calls
 */
export const apiClient = axios.create({
  baseURL: process.env.NEXT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

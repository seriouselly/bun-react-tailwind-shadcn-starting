import axios, { type AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: String(
    import.meta.env && import.meta.env.BUN_PUBLIC_DRAGONBALL_API_URL
      ? import.meta.env.BUN_PUBLIC_DRAGONBALL_API_URL
      : "http://localhost:3000"
  ),
  timeout: 10000,
});

export const api2: AxiosInstance = axios.create({
  baseURL: "http://localhost:3210/api", // Pastikan ini benar
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

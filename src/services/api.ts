import axios from 'axios';
import { useAuthStore } from '@/store/authStore';

export type ApiError = {
  error: string;
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default apiClient;

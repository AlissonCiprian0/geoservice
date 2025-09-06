import apiClient from '@/services/api';

import type { User } from '@/store/authStore';

export type RegisterData = {
  email: string;
  password: string;
  name?: string;
};

export type LoginData = { email: string; password: string };

export type AuthResponse = {
  user: User;
  token: string;
};

const baseURL = import.meta.env.VITE_AUTH_BASE_URL;

const UserService = {
  register: async (userData: RegisterData): Promise<User> => {
    const { data } = await apiClient.post(`${baseURL}/register`, userData);
    return data;
  },
  login: async (loginData: LoginData): Promise<AuthResponse> => {
    const { data } = await apiClient.post(`${baseURL}/login`, loginData);
    return data;
  },
  verifyToken: async (): Promise<{ user: User }> => {
    const { data } = await apiClient.get(`${baseURL}/verify-token`);
    return data;
  },
};

export default UserService;

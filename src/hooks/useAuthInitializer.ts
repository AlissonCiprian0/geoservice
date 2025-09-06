import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';

import UserService from '@/services/UserService';

const useAuthInitializer = () => {
  const { login, logout, token } = useAuthStore();

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['verify-token', token],
    queryFn: UserService.verifyToken,
    enabled: !!token,
    retry: 1,
  });

  useEffect(() => {
    if (isSuccess && data) login(data.user, token!);
  }, [data, isSuccess, login, logout, token]);

  useEffect(() => {
    if (isError) logout();
  }, [isError, logout]);

  return null;
};

export default useAuthInitializer;

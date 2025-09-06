import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAuthStore } from '@/store/authStore';

import { toast } from 'sonner';
import { formSchema } from './constants';

import UserService from '@/services/UserService';

import type { AuthResponse, LoginData } from '@/services/UserService';
import type { AxiosError } from 'axios';
import type { ApiError } from '@/services/api';

const useLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const { mutate, isPending, error } = useMutation<
    AuthResponse,
    AxiosError<ApiError>,
    LoginData
  >({
    mutationFn: UserService.login,
    onSuccess: (data) => {
      login(data.user, data.token);
      navigate('/');
    },
    onError: (error) => {
      console.log('Erro:', error.response?.data?.error || error.message);
      toast.error(error.response?.data?.error || error.message);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;

    mutate({ email, password });
  }

  return { form, onSubmit, isPending, error };
};

export default useLoginForm;

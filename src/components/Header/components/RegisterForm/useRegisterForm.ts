import { useMutation } from '@tanstack/react-query';
import UserService, { type RegisterData } from '@/services/UserService';
import { AxiosError } from 'axios';
import type { ApiError } from '@/services/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './constants';
import type { User } from '@/store/authStore';
import { toast } from 'sonner';

const useRegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: {
        password: '',
        confirm: '',
      },
    },
  });

  const { mutate, isPending, error } = useMutation<
    User,
    AxiosError<ApiError>,
    RegisterData
  >({
    mutationFn: UserService.register,
    onError: (error) => {
      console.log('Erro:', error.response?.data?.error || error.message);
      toast.error(error.response?.data?.error || error.message);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      email,
      password: { password },
    } = values;

    mutate({ email, password });
  }

  return { form, onSubmit, isPending, error };
};

export default useRegisterForm;

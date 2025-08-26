'use client';

import { z } from 'zod';

export const formSchema = z.object({
  email: z.email({
    error: 'Email inválido.',
  }),
  password: z
    .object({
      password: z.string().min(6, {
        message: 'Mínimo 6 caracteres.',
      }),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: 'As senhas devem ser iguais ',
      path: ['confirm'],
    }),
});

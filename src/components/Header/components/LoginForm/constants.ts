'use client';

import { z } from 'zod';

export const formSchema = z.object({
  email: z.email({
    error: 'Email inválido.',
  }),
  password: z.string().min(6, {
    message: 'Mínimo 6 caracteres.',
  }),
});

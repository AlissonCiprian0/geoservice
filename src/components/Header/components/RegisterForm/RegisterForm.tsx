import FloatingLabelInput from '@/components/FloatingLabelInput';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import LoadingButton from '@/components/LoadingButton';

import useRegisterForm from './useRegisterForm';

const RegisterForm = () => {
  const { form, onSubmit, isPending } = useRegisterForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput placeholder='Digite seu email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password.password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  placeholder='Digite sua senha'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password.confirm'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  placeholder='Confirme sua senha'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          variant='default'
          size='lg'
          className='cursor-pointer w-full'
          type='submit'
          loading={isPending}
        >
          Criar conta
        </LoadingButton>
      </form>
    </Form>
  );
};

export default RegisterForm;

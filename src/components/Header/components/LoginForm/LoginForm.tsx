import FloatingLabelInput from '@/components/FloatingLabelInput';
import LoadingButton from '@/components/LoadingButton';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import useLoginForm from './useLoginForm';

const LoginForm = () => {
  const { form, onSubmit, isPending } = useLoginForm();

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
          name='password'
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

        <LoadingButton
          variant='default'
          size='lg'
          className='cursor-pointer w-full'
          type='submit'
          loading={isPending}
        >
          Entrar
        </LoadingButton>
      </form>
    </Form>
  );
};

export default LoginForm;

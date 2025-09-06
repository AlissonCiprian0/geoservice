import { Outlet } from 'react-router';

import { Toaster } from '@/components/ui/sonner';

import Header from '@/components/Header';
import SpacedLayout from './Spaced';

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <SpacedLayout className='max-sm:px-0'>
        <Header />
      </SpacedLayout>

      <main className='flex-grow'>
        <Outlet />
      </main>

      <footer className='py-4 px-4 sm:px-4 mt-auto text-center'>
        <p>© 2025 Alisson Cipriano. Todos os direitos reservados.</p>
      </footer>

      <Toaster position='top-center' />
    </div>
  );
};

export default RootLayout;

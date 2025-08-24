import { Outlet } from 'react-router';
import Header from '@/components/Header';
import SpacedLayout from './Spaced';

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <SpacedLayout>
        <div className='mt-4'>
          <Header />
        </div>

        <main className='flex-grow mt-5'>
          <Outlet />
        </main>
      </SpacedLayout>

      <footer className='py-4 px-10 sm:px-4 mt-auto text-center'>
        <p>© 2025 Alisson Cipriano. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default RootLayout;

import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router';

import RootLayout from '@/components/RootLayout';
import NotFoundPage from '@/pages/NotFoundPage';
import HomePage from '@/pages/HomePage';

import useAuthInitializer from '@/hooks/useAuthInitializer';

function App() {
  useAuthInitializer();

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout.Root />}>
            <Route path='/' element={<HomePage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

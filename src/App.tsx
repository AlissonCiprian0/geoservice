import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router';

import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import RootLayout from '@/components/RootLayout';

function App() {
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

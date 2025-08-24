import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter, Route, Routes } from 'react-router';

import Home from '@/pages/Home';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

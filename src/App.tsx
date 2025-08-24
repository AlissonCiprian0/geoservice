import { ThemeProvider } from '@/components/theme-provider';

import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ThemeToggle />
      Hello, world!
    </ThemeProvider>
  );
}

export default App;

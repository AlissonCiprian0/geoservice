import Logo from '@/assets/Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center px-4'>
        <Link to='/' className='flex items-center'>
          <Logo height={35} />
        </Link>

        <nav className='w-full flex items-center gap-2'>
          <Button asChild variant='ghost'>
            <Link to='/'>Início</Link>
          </Button>

          <div className='ml-auto'>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

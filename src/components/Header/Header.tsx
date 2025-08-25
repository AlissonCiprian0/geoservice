import Logo from '@/assets/Logo';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ThemeToggle from '@/components/ThemeToggle';

import { useTheme } from '@/components/theme-provider';

const Header = () => {
  const { theme } = useTheme();
  const logged = false;

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center px-4'>
        <Link to='/' className='flex items-center'>
          <Logo height={35} dark={theme === 'dark'} />
        </Link>

        <nav className='w-full flex items-center gap-2 max-sm:hidden'>
          {logged && (
            <Button asChild variant='ghost'>
              <Link to='/'>Início</Link>
            </Button>
          )}
          <div className='ml-auto flex items-center'>
            <div className='flex items-center gap-2 h-7 mr-2'>
              <Button variant='ghost' size='sm' className='cursor-pointer'>
                Entrar
              </Button>

              <Separator orientation='vertical' />

              <Button variant='ghost' size='sm' className='cursor-pointer'>
                Cadastrar
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

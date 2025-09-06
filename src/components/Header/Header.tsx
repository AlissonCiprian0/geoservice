import { Link, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ThemeToggle from '@/components/ThemeToggle';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import Logo from '@/assets/Logo';

import { useTheme } from '@/components/theme-provider';
import { useAuthStore } from '@/store/authStore';

const Header = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center px-4'>
        <div className='mr-0'>
          <Link to='/' className='flex items-center'>
            <Logo
              dark={theme === 'dark'}
              className='max-h-3/12 w-10/12 max-w-60'
            />
          </Link>
        </div>

        <nav className='w-full flex items-center gap-2 '>
          {isAuthenticated && (
            <>
              <Button asChild variant='ghost'>
                <Link to='/'>Início</Link>
              </Button>

              <div className='ml-auto flex items-center'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='cursor-pointer'
                  onClick={handleLogout}
                >
                  Sair
                </Button>
              </div>
            </>
          )}

          {!isAuthenticated && (
            <div className='ml-auto flex items-center'>
              <div className='flex items-center gap-2 h-7 mr-2'>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='cursor-pointer'
                    >
                      Entrar
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className='w-75'>
                    <LoginForm />
                  </PopoverContent>
                </Popover>

                <Separator orientation='vertical' />

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='cursor-pointer'
                    >
                      Cadastrar
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className='w-75'>
                    <RegisterForm />
                  </PopoverContent>
                </Popover>
              </div>
              <ThemeToggle />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

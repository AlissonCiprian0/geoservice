import NotFoundIllustration from '@/assets/NotFoundIllustration';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className='h-screen flex flex-col text-center justify-center items-center gap-8'>
      <div className='w-1/1  sm:w-1/3 flex mx-auto'>
        <NotFoundIllustration />
      </div>

      <Link to='/' className='text-white hover:underline'>
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;

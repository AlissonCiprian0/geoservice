import NotFoundIllustration from '@/assets/NotFoundIllustration';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className='mt-[20svh] sm:mt-[15svh] flex flex-col text-center justify-center items-center place-content-center gap-8'>
      <div className='w-80  sm:w-1/3 flex mx-auto'>
        <NotFoundIllustration />
      </div>

      <Link to='/' className='text-white hover:underline'>
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;

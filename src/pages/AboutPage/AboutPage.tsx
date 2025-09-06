import Autoplay from 'embla-carousel-autoplay';

import HeroBanner from '@/assets/HeroBanner';
import { PROFESSIONALS } from '@/assets/mocks/Professionals';

import ProfessionalCard from '@/components/ProfessionalCard';
import RootLayout from '@/components/RootLayout';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { useTheme } from '@/components/theme-provider';

const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className='h-20 overflow-hidden'>
        <HeroBanner dark={theme === 'dark'} />
      </div>

      <RootLayout.SpacedLayout>
        <div className='flex flex-col mt-18 w-2xl max-lg:w-1/1'>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>
            O profissional que você precisa, onde você estiver.
          </h1>

          <h2 className='text-1xl font-semibold text-muted-foreground leading-7 mt-5'>
            Encontre talentos locais e profissionais de confiança no seu bairro.
            Conectamos você aos melhores serviços da sua região para resolver
            tudo com agilidade e segurança.
          </h2>
        </div>

        <div className='mt-10 flex gap-2 w-1/2 max-lg:w-1/1 max-lg:flex-wrap'>
          <Button
            variant='default'
            size='lg'
            className='cursor-pointer max-md:flex-1'
          >
            Buscar na minha região
          </Button>

          <Button
            variant='outline'
            size='lg'
            className='cursor-pointer max-md:flex-1'
          >
            Sou um profissional local
          </Button>
        </div>
      </RootLayout.SpacedLayout>

      <div className='mt-18 px-2'>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {PROFESSIONALS.map((professional) => (
              <CarouselItem
                key={professional.name}
                className='md:basis-1/3 lg:basis-1/4'
              >
                <div className='p-1'>
                  <ProfessionalCard
                    key={professional.name}
                    professional={professional}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutPage;

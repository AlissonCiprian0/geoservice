const HeroBanner = (
  props: React.SVGProps<SVGSVGElement> & { dark?: boolean }
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1200 400'
    width='100%'
    height='100%'
    preserveAspectRatio='xMidYMid slice'
    {...props}
  >
    <defs>
      <linearGradient id='hero-bg-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor={props.dark ? '#1a1a1a' : '#F9FAFB'} />
        <stop offset='100%' stopColor={props.dark ? '#0e0e0e' : '#E5E7EB'} />
      </linearGradient>
      <linearGradient id='hero-pin-gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
        <stop offset='0%' stopColor='#60A5FA' />
        <stop offset='100%' stopColor='#3B82F6' />
      </linearGradient>
      <filter id='hero-shadow' x='-30%' y='-30%' width='160%' height='160%'>
        <feGaussianBlur in='SourceAlpha' stdDeviation='5' />
        <feOffset dx='3' dy='6' result='offsetblur' />
        <feComponentTransfer>
          <feFuncA type='linear' slope='0.2' />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>

    {/* Fundo */}
    <rect width='1200' height='400' fill='url(#hero-bg-gradient)' />

    {/* Padrão de mapa sutil */}
    <g stroke='#D1D5DB' strokeWidth='1.5' opacity='0.6'>
      <path
        d='M-100,250 C200,450 500,50 800,250 S1100,450 1400,250'
        fill='none'
      />
      <path
        d='M-100,150 C200,350 500,-50 800,150 S1100,350 1400,150'
        fill='none'
      />
      <path d='M200,-100 C350,150 50,250 200,500' fill='none' />
      <path d='M600,-100 C750,150 450,250 600,500' fill='none' />
      <path d='M1000,-100 C1150,150 850,250 1000,500' fill='none' />
    </g>

    {/* Pinos de Localização */}
    <g filter='url(#hero-shadow)'>
      {/* Pino Central (Principal) */}
      <g transform='translate(600 200) scale(1.2)'>
        <path
          d='M0,35 C-25,5 -25,-30 0,-30 C25,-30 25,5 0,35 Z'
          fill='url(#hero-pin-gradient)'
        />
        <circle cx='0' cy='-2' r='12' fill='white' />
      </g>
      {/* Pinos Secundários */}
      <g transform='translate(350 250) scale(0.8)'>
        <path
          d='M0,35 C-25,5 -25,-30 0,-30 C25,-30 25,5 0,35 Z'
          fill='#A78BFA'
        />
        <circle cx='0' cy='-2' r='12' fill='white' />
      </g>
      <g transform='translate(850 180) scale(0.9)'>
        <path
          d='M0,35 C-25,5 -25,-30 0,-30 C25,-30 25,5 0,35 Z'
          fill='#FBBF24'
        />
        <circle cx='0' cy='-2' r='12' fill='white' />
      </g>
      <g transform='translate(700 320) scale(0.7)'>
        <path
          d='M0,35 C-25,5 -25,-30 0,-30 C25,-30 25,5 0,35 Z'
          fill='#34D399'
        />
        <circle cx='0' cy='-2' r='12' fill='white' />
      </g>
    </g>

    {/* Linhas de conexão */}
    <g stroke='#9CA3AF' strokeWidth='2' strokeDasharray='5 5' opacity='0.8'>
      <path d='M350,250 Q480,210 600,200' fill='none' />
      <path d='M600,200 Q720,180 850,180' fill='none' />
      <path d='M600,200 Q650,280 700,320' fill='none' />
    </g>
  </svg>
);

export default HeroBanner;

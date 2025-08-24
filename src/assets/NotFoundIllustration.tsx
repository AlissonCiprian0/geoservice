const NotFoundIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 800 600'
    width='100%'
    height='100%'
    {...props}
  >
    <defs>
      <linearGradient
        id='background-gradient'
        x1='0%'
        y1='0%'
        x2='100%'
        y2='100%'
      >
        <stop offset='0%' stopColor='#F7FAFC' />
        <stop offset='100%' stopColor='#EDF2F7' />
      </linearGradient>
      <filter id='shadow' x='-20%' y='-20%' width='140%' height='140%'>
        <feGaussianBlur in='SourceAlpha' stdDeviation='3' />
        <feOffset dx='2' dy='4' result='offsetblur' />
        <feComponentTransfer>
          <feFuncA type='linear' slope='0.3' />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>

    {/* Mapa estilizado no fundo */}
    <g opacity='0.1' stroke='#A0AEC0' strokeWidth='2' fill='none'>
      <path d='M100,500 Q250,550 400,450 T700,520' />
      <path d='M50,50 Q150,200 50,350 T150,550' />
      <path d='M750,50 Q600,150 700,300 T600,550' />
      <path d='M300,50 Q400,150 500,50' />
    </g>

    {/* Ícone principal - Pino de Mapa Quebrado */}
    <g transform='translate(400, 280)' filter='url(#shadow)'>
      {/* Parte de baixo do pino */}
      <path
        d='M-50,-20 C-90,-20 -120,10 -120,50 C-120,110 -50,180 0,220'
        fill='#F56565'
      />
      {/* Parte de cima do pino */}
      <path
        d='M50,-20 C90,-20 120,10 120,50 C120,110 50,180 0,220'
        fill='#F56565'
      />
      {/* Círculo do pino */}
      <circle cx='0' cy='50' r='50' fill='#FFF' />
      <circle cx='0' cy='50' r='25' fill='#F56565' />
    </g>

    {/* Texto */}
    <g textAnchor='middle' fontFamily="'Inter', sans-serif">
      <text x='400' y='120' fontSize='120' fontWeight='bold' fill='#ffffff'>
        404
      </text>
      <text x='400' y='180' fontSize='32' fontWeight='500' fill='#ffffff'>
        Página Não Encontrada
      </text>
      <text x='400' y='550' fontSize='18' fill='#babdc3' fontStyle='italic'>
        Geoservice
      </text>
    </g>
  </svg>
);

export default NotFoundIllustration;

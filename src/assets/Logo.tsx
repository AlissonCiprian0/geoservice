import { Link } from 'react-router';

const Logo = (props: React.SVGProps<SVGSVGElement> & { dark?: boolean }) => {
  return (
    <Link to='/'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100' {...props}>
        <defs>
          <linearGradient id='pin-gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#F87171' />
            <stop offset='100%' stopColor='#F56565' />
          </linearGradient>
        </defs>

        {/* Ícone do Pino de Mapa */}
        <g transform='translate(50, 50)'>
          <path
            d='M0,40 C-30,5 -30,-35 0,-35 C30,-35 30,5 0,40 Z'
            fill='rgba(45, 55, 72, 0.2)'
            transform='translate(2, 4) scale(1.05)'
            filter='blur(3px)'
          />
          {/* Corpo do pino */}
          <path
            d='M0,40 C-30,5 -30,-35 0,-35 C30,-35 30,5 0,40 Z'
            fill='url(#pin-gradient)'
            stroke='#E53E3E'
            strokeWidth='2'
          />
          {/* Círculo branco interno */}
          <circle cx='0' cy='-5' r='18' fill='#FFF' />
          {/* Círculo vermelho menor */}
          <circle cx='0' cy='-5' r='9' fill='#F56565' />
        </g>

        {/* Texto */}
        <g
          transform='translate(95, 62)'
          fontFamily="'Inter', sans-serif"
          letterSpacing='-1'
        >
          <text
            fontSize='48'
            fontWeight='bold'
            fill={props?.dark ? '#FFFFFF' : '#404040'}
          >
            Geo
          </text>
          <text x='80' fontSize='48' fontWeight='300' fill='#f66868'>
            service
          </text>
        </g>
      </svg>
    </Link>
  );
};

export default Logo;

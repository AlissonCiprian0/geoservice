import { StarHalf, Star } from 'lucide-react';

const HalfStar = () => (
  <div>
    <Star size='12' fill='none' stroke='orange' className='absolute' />
    <StarHalf size='12' fill='orange' stroke='orange' />
  </div>
);

export default HalfStar;

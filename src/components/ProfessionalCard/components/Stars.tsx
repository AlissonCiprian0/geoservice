import EmptyStar from './EmptyStar';
import FilledStar from './FilledStar';
import HalfStar from './HalfStar';

type StarsProps = {
  rating: number;
};

const Stars = ({ rating }: StarsProps) => {
  const clampedRating = Math.max(0, Math.min(5, rating));

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const diff = clampedRating - i;

    const isFullStar = diff >= 0;
    const isHalfStar = diff > -1 && diff < 0;

    if (isFullStar) stars.push(<FilledStar key={i} />);
    else if (isHalfStar) stars.push(<HalfStar key={i} />);
    else stars.push(<EmptyStar key={i} />);
  }

  return <div className='flex gap-0.5 mt-2'>{stars}</div>;
};

export default Stars;

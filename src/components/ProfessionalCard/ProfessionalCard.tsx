import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { AvatarImage } from '@radix-ui/react-avatar';
import Stars from './components/Stars';

type Professional = {
  name: string;
  profession: string;
  rating: number;
  imageFallback: string;
  imageUrl?: string;
  description?: string;
};

type ProfessionalCardProps = {
  professional: Professional;
};

const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  const { name, profession, rating, imageUrl, imageFallback, description } =
    professional;

  return (
    <Card className='relative'>
      <CardHeader className='flex max-[1300px]:flex-col'>
        <div className='mr-2'>
          <CardTitle>
            <div className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage src={imageUrl} />
                <AvatarFallback>{imageFallback}</AvatarFallback>
              </Avatar>

              <span>{name}</span>
            </div>
          </CardTitle>

          <CardDescription>{profession}</CardDescription>
        </div>

        <CardAction className='ml-auto max-[1300px]:ml-0'>
          <Stars rating={rating} />
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className='line-clamp-3'>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProfessionalCard;

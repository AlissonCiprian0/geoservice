import type { ComponentProps } from 'react';

import { Button } from '@/components/ui/button';
import Spinner from '@/components/Spinner';

type LoadingButtonProps = ComponentProps<typeof Button> & {
  loading: boolean;
};

const LoadingButton = ({ loading, ...props }: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={loading}>
      {props.children}

      {loading && <Spinner />}
    </Button>
  );
};

export default LoadingButton;

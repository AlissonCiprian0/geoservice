import { useAuthStore } from '@/store/authStore';

import AboutPage from '@/pages/AboutPage';
import RootLayout from '@/components/RootLayout';

const HomePage = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return <AboutPage />;

  return (
    <div>
      <RootLayout.SpacedLayout>
        <h1>Hello, World!</h1>
      </RootLayout.SpacedLayout>
    </div>
  );
};

export default HomePage;

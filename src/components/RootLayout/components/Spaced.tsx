type SpacedLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const SpacedLayout = ({ children, className }: SpacedLayoutProps) => {
  return <div className={`px-10 sm:px-[15vw] ${className}`}>{children}</div>;
};

export default SpacedLayout;

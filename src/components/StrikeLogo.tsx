import React from 'react';

interface StrikeLogoProps {
  className?: string;
}

const StrikeLogo: React.FC<StrikeLogoProps> = ({ className = "h-8" }) => {
  return (
    <img 
      src="https://i.imgur.com/H74YCzT.png"
      alt="Strike"
      className={className}
    />
  );
};

export default StrikeLogo;
import React, { useState } from 'react';
import OrderModal from './OrderModal';

interface DeliveryLogoProps {
  onClick?: () => void;
  className?: string;
}

export const SkipTheDishesLogo: React.FC<DeliveryLogoProps> = ({ onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all duration-300 flex items-center justify-center min-h-[60px] ${className}`}
    aria-label="Commander sur Skip The Dishes"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SkipTheDishes_logo.svg/768px-SkipTheDishes_logo.svg.png?20200729184039"
      alt="Skip The Dishes"
      className="h-6 w-auto max-w-[120px] object-contain"
    />
  </button>
);

export const DoorDashLogo: React.FC<DeliveryLogoProps> = ({ onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all duration-300 flex items-center justify-center min-h-[60px] ${className}`}
    aria-label="Commander sur DoorDash"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DoorDash_Logo.svg/231px-DoorDash_Logo.svg.png?20190413221151"
      alt="DoorDash"
      className="h-6 w-auto max-w-[120px] object-contain"
    />
  </button>
);

export const UberEatsLogo: React.FC<DeliveryLogoProps> = ({ onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all duration-300 flex items-center justify-center min-h-[60px] ${className}`}
    aria-label="Commander sur Uber Eats"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uber_Eats_2020_logo.svg/219px-Uber_Eats_2020_logo.svg.png?20200529181853"
      alt="Uber Eats"
      className="h-6 w-auto max-w-[120px] object-contain"
    />
  </button>
);

export const OrderWebsiteButton: React.FC<DeliveryLogoProps> = ({ onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-3 font-semibold transition-all duration-300 flex items-center justify-center min-h-[60px] ${className}`}
    aria-label="Commander sur notre site"
  >
    <span className="text-sm font-bold">Commander sur le site</span>
  </button>
);

const DeliveryOptions: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleDeliveryClick = (service: string) => {
    if (service === 'Website') {
      setIsOrderModalOpen(true);
    } else {
      // Handle other delivery service clicks here
      console.log(`Ordering via ${service}`);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
        <SkipTheDishesLogo onClick={() => handleDeliveryClick('Skip')} />
        <DoorDashLogo onClick={() => handleDeliveryClick('DoorDash')} />
        <UberEatsLogo onClick={() => handleDeliveryClick('UberEats')} />
        <OrderWebsiteButton onClick={() => handleDeliveryClick('Website')} />
      </div>
      
      {/* Order Modal */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </>
  );
};

export default DeliveryOptions; 
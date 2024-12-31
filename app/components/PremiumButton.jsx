'use client'

import React from 'react';


const PremiumButton = ({ icon: Icon, name }) => {
    const [hovered, setHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (<>
  <div className='relative'>
    <button 
      className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-full text-gray-500 transition-colors duration-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {name}
    </button>
    {hovered && (<div className='absolute rounded whitespace-nowrap bottom-full p-3 left-3/4 border border-white bg-gray-800'><p className='text-sm'>{name} is only for pro and premium users</p></div>)}
    </div>
    </>);
};

export default PremiumButton;
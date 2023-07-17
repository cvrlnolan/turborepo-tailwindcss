import React from 'react';

export const Button: React.FC = () => {
  return (
    <button className='w-60 rounded bg-gradient-to-r from-indigo-400 to-fuchsia-600 px-3 py-2 font-bold text-white drop-shadow-2xl transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-700 focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2'>
      Let&apos;s get it !
    </button>
  );
};

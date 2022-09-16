import * as React from 'react';
export const Button: React.FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-yellow-500 h-12 px-4 rounded text-black">
      {children}
    </button>
  );
};

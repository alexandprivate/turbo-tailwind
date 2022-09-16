import React from 'react';

export const PageTitle: React.FC = ({ children }) => {
  return <h2 className="text-3xl font-medium capitalize">{children}</h2>;
};

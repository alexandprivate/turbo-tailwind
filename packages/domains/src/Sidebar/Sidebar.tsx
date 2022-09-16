import React from 'react';
import { Button } from 'ui';

export const Sidebar: React.FC = ({ children }) => {
  return <div className="bg-blue-900 w-[300px] h-screen">{children}</div>;
};

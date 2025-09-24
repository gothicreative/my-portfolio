import React from 'react';

interface AppleCardProps {
  children: React.ReactNode;
  className?: string;
}

const AppleCard: React.FC<AppleCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default AppleCard;
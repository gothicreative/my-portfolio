import React from 'react';

interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  href?: string;
  to?: string;
  download?: string;
}

const AppleButton: React.FC<AppleButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  as: Component = 'button',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-sm hover:shadow-md",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white px-6 py-3",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3"
  };

  // For link-specific props
  const linkProps = Component === 'a' ? { 
    href: props.href, 
    download: props.download 
  } : {};

  return (
    <Component 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...linkProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AppleButton;
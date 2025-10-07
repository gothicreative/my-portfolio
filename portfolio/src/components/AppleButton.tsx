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
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed font-mono";
  
  const variantClasses = {
    primary: "bg-green-700 hover:bg-green-600 text-white px-6 py-3 shadow-sm hover:shadow-md border border-green-500/30",
    secondary: "bg-gray-900 hover:bg-gray-800 text-green-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-green-300 px-6 py-3 border border-green-500/30",
    outline: "border border-green-500/50 text-green-300 hover:bg-green-900/30 px-6 py-3"
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
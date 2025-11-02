import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant, className = '' }) => {
  const variants = {
    'In Progress': 'text-[#1C6EDB] bg-transparent',
    'Complete': 'text-[#0BAB7C] bg-transparent',
    'Pending': 'text-[#3B8AFF] bg-transparent',
    'Approved': 'text-[#FFA043] bg-transparent',
    'Rejected': 'text-[#64748B] bg-transparent',
  };

  return (
    <span
      className={`
        inline-flex items-center text-xs font-normal
        ${variants[variant]}
        ${className}
      `}
    >
      <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
      {children}
    </span>
  );
};

export default Badge;


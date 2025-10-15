
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', titleClassName = '' }) => {
  return (
    <div className={`bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-emerald-500/20 hover:border-emerald-700/50 hover:scale-[1.02] ${className}`}>
      {title && <h3 className={`text-xl lg:text-2xl font-bold text-emerald-400 mb-4 ${titleClassName}`}>{title}</h3>}
      <div className="text-gray-300 space-y-3 text-base">
        {children}
      </div>
    </div>
  );
};

export default Card;

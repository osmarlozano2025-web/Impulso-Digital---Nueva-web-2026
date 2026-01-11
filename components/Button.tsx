
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  fullWidth = false,
  target,
  type = 'button'
}) => {
  // Se añadió whitespace-normal para que el texto salte de línea en móviles
  // Se añadió flex-wrap por si hay iconos o contenido extenso
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-extrabold rounded-xl text-center leading-tight shadow-sm whitespace-normal break-words cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-secondary/20",
    outline: "border-2 border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50"
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target || "_self"}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="max-w-full">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="max-w-full">{children}</span>
    </motion.button>
  );
};

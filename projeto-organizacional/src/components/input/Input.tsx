import React from "react";
import Styles from '@/components/input/Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  width,
  height,
  className = "",
  ...props
}) => {
  // Se for tailwind (começa com "w-" ou "h-") aplicamos como classe
  const widthClass = width?.startsWith("w-") ? width : "";
  const heightClass = height?.startsWith("h-") ? height : "";

  // Se não for tailwind, aplicamos no style
  const style: React.CSSProperties = {
    ...(width && !width.startsWith("w-") ? { width } : {}),
    ...(height && !height.startsWith("h-") ? { height } : {}),
  };

  return (
    <input
      className={`${Styles.input} ${widthClass} ${heightClass} ${className}`}
      style={style}
      {...props}
    />
  );
};

export default Input;
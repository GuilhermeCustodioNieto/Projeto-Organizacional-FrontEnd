import React from "react";
import styles from "@/components/button/Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
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
    <button
      className={`${styles.button} ${widthClass} ${heightClass} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
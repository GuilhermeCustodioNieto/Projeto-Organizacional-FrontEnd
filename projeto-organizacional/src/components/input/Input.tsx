import React from "react";
import Styles from '@/components/input/Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  width = "w-full",
  height = "h-12",
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        ${Styles.input}
        ${width} 
        ${height} 
        ${className}
        `}
      {...props}
    />
  );
};

export default Input;

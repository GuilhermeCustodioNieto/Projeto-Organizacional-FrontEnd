// components/Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;  // Exemplo: "w-full", "w-64"
  height?: string; // Exemplo: "h-10", "h-12"
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
        px-3 py-2
        rounded-lg
        border border-purple-500
        bg-gray-950 text-white
        placeholder-gray-500
        focus:outline-none focus:ring-1 focus:ring-purple-500
        ${width} ${height} ${className}
      `}
      {...props}
    />
  );
};

export default Input;

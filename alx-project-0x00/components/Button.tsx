import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button className={`text-white font-medium px-4 py-2 ${style}`}>
      {title}
    </button>
  );
};

export default Button;

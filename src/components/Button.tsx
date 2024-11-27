import React from "react";

type ButtonProps = {
  label: any; // anything to display on the button
  onClick?: () => void; // Callback function for click event
  disabled?: boolean; // Disable state of the button
  className?: string; // Additional custom classes
  reverseBackground?: boolean; // Disable state of the button
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
  reverseBackground = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-[42px] mt-4 px-6 py-2 ${
        reverseBackground ? "bg-gradient-to-l" : "bg-gradient-to-r"
      } from-indigo-100 via-blue-100 to-grey-100 text-black font-bold rounded-md cursor-pointer hover:opacity-80 w-full transform transition-all active:scale-90 flex justify-center items-center ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

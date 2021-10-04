import React, { FC, forwardRef, MouseEventHandler } from "react";

type ButtonProps = {
  active?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  active,
  type,
  children,
}) => {
  return (
    <button
      className={`${
        active ? "bg-cyan text-cyan-dark" : "bg-cyan-dark text-white"
      } text-base rounded py-1 font-bold hover:bg-gray-cyan-500 hover:text-cyan-dark transition-all duration-150`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

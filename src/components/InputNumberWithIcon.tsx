import { ComponentType, FC } from "react";

type InputNumberWithIconProps = {
  label: string;
  controlId: string;
  placeholder?: string;
  Icon: ComponentType;
  value?: number;
  error?: string;
  setValue: (value: number) => void;
};

export const InputNumberWithIcon: FC<InputNumberWithIconProps> = ({
  Icon,
  controlId,
  label,
  setValue,
  value,
  placeholder,
  error,
}) => {
  return (
    <div className="space-y-1">
      <div className="flex">
        <label htmlFor={controlId}>{label}</label>
        {error && (
          <span className="flex-1 text-right  text-red-400">{error}</span>
        )}
      </div>
      <div
        className={`flex bg-gray-cyan-300 p-2 focus-within:ring rounded ${
          error ? "ring-red-400" : "ring-gray-cyan-500"
        }`}
      >
        <Icon />
        <input
          type="number"
          id={controlId}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(Number(e.target.value))}
          autoComplete="off"
          className="group flex-1 font-bold text-right bg-gray-cyan-300 focus:outline-none pr-1 placeholder-gray-cyan-900"
        />
      </div>
    </div>
  );
};

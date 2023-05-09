import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  big?:boolean
}

export const TextInput = ({
  id,
  label,
  register,
  errors,
  required,
  disabled,
  type = "text",
  big
}: Props) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        className={`
      w-full 
      bg-white
      px-4 py-5 outline-none rounded-lg peer disabled:cursor-not-allowed transition duration-300
      disabled:opacity-75 border-[1px] 
      ${big ? 'h-[10rem]' : 'h-auto'}
      ${errors[id] ? "border-rose-500" : "border-neutral-300"}
      ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
      `}
        placeholder=" "
      />
      <div
        className={`absolute top-0 pr-auto   text-xl font-bold  -translate-y-0   left-2.5 scale-75
       peer-placeholder-shown:translate-y-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-3
        peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:left-2.5  
       transition-transform duration-300
       ${errors[id] ? "text-rose-400" : "text-[#C1DCDC]"}
       `}
      >
        {label}
      </div>
    </div>
  );
};

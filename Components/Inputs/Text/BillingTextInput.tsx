import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  full?:boolean,
  secondaryInputPlaceholder?:string
  secondaryInputPlaceId?:string,
  optional?:boolean
  type?:string
  disabled?:boolean
}

export const BillingTextInput = ({
  id,
  label,
  placeholder,
  type='text',
  register,
  errors,
  required,
  full,
  secondaryInputPlaceholder,
  secondaryInputPlaceId,
  disabled
}: Props) => {

  
  const validation = type === "email" ? {
    required: required,
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format"
    }
  } : { 
    required: required, };

  return (
    <div className={`flex flex-col gap-[12px] ${full ? 'w-full' : ' w-full'} `}>
      <h2 className="text-[20px] font-semibold leading-[27px]">{label}</h2>
      <input
        disabled={disabled}
        type={type}
        className={`
          w-full font-semibold
          px-[16px] py-[8px] rounded-[4px]  outline-none
          border-[1px] border-solid placeholder-[#506B5280] text-black
        border-[#343434] transition-all duration-300 disabled:cursor-not-allowed
        ${
          disabled && 'opacity-70'
        }
        ${
          errors[id] && 'border-rose-400 text-rose-400' 
        }

        `}
        {...register(id,validation)}
        placeholder={placeholder}
      />
      {
        secondaryInputPlaceId && secondaryInputPlaceholder &&
        <input
        disabled={disabled}
        type="text"
        className={`
          w-full font-semibold placeholder-[#506B5280]
          px-[16px] py-[8px] rounded-[4px]  outline-none
          border-[1px] border-solid
        border-[#343434] transition-all duration-300 disabled:cursor-not-allowed
        ${
          disabled && 'opacity-70'
        }
        ${
          errors[secondaryInputPlaceId] && 'border-rose-400 text-rose-400' 
        }

        
        `}
        {...register(secondaryInputPlaceId,{required})}
        placeholder={secondaryInputPlaceholder}
      />
      }
    </div>
  );
};

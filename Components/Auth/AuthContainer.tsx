import React from "react";
import { MainButton } from "../Buttons/MainButton";

interface Props {
  title: string;
  body: React.ReactElement;
  footer: React.ReactElement;
  isLoading?: boolean;
  onSubmit: () => void;
}

export const AuthContainer = ({
  title,
  body,
  isLoading,
  footer,
  onSubmit,
}: Props) => {
  return (
    <div>
      <div className=" w-full mt-[14rem] flex justify-center items-center ">
        <div className=" xl:w-2/6  lg:w-3/5 md:w-3/5 xs:w-4/5 xxs:w-5/6 w-full p-4 bg-[#C1DCDC]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="text-green-800 font-bold text-2xl pb-2">
                {title}
              </div>
              <hr
                color="#321a18"
                className="bg-green-600 border-none h-[0.1px]"
              />
            </div>

            <div className="flex flex-col gap-3">
              {/* Main Content */}
              {body}
            </div>
            <div>
              <MainButton
                label="Login"
                handleClick={onSubmit}
                disabled={isLoading}
              />
            </div>
            <div className="text-lg">{footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

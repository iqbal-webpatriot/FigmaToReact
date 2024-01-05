import { ReactNode } from "react";

type  ButtonGreenPrimaryProps={
    children:ReactNode
}
export default function ButtonGreenPrimary({children}:ButtonGreenPrimaryProps) {
  return (
    <button className="  w-[12.91rem] h-[4.32rem] mt-[3rem] rounded-[3.12rem]  text-black font-sora text-[0.9rem] p-[1.35rem 2.55rem] bg-active  hover:border-[0.62rem] border-borderGreen  ">
      {children}
    </button>
  );
}

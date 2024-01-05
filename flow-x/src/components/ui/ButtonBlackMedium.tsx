import { ReactNode } from "react";

type  ButtonBlackMediumProps={
    children:ReactNode
}
export default function ButtonBlackMedium({children}:ButtonBlackMediumProps) {
  return (
    <button  className="w-[11.62rem] h-[4.37rem] rounded-[3.12rem] text-[0.9rem] text-[#E7E7E7] bg-[#181818] hover:border-[0.12rem] border-borderGreen ">
      {children}
    </button>
  );
}

import { ReactElement } from "react";
import { AbstractIcon1 } from "../../../public/icons/Icons";

type CardIconProps = {
  title: string;
  content: string;
  icon: ReactElement;
};

export default function CardIcon({title,content,icon}:CardIconProps) {
  return (
    <div className="w-[20.56rem] h-[10rem] flex flex-col justify-start gap-5">
     {icon}
    <h6 className="text-[1.25rem] leading-[1.62rem] text-[#E7E7E7]">{title}</h6>
    <p className="text-[0.9rem] leading-[1.62rem] font-inter text-[#B0B0B0]">{content}</p>
    </div>
  );
}

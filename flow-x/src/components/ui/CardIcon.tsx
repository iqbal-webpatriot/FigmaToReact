import { ReactElement, ReactNode } from "react";
import {
  BehanceIcon,
  DribbleIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../public/icons/Icons";
import Link from "next/link";

type CardIconProps = {
  title: string;
  content: string;
  icon: ReactElement;
  socialLinks?: boolean;
};

export default function CardIcon({
  title,
  content,
  icon,
  socialLinks,
}: CardIconProps) {
  return (
    <div className="w-[20.56rem]  flex flex-col justify-start gap-5">
      {icon}
      <h6 className="text-[1.25rem] leading-[1.62rem] text-[#E7E7E7]">
        {title}
      </h6>
      <p className="text-[0.9rem] leading-[1.62rem] font-inter text-[#B0B0B0]">
        {content}
      </p>
      {socialLinks && (
        <div className="w-[13.68rem] flex justify-between items-start">
          <Link href={"#"}>
            <DribbleIcon />
          </Link>
          <Link href={"#"}>
            <InstagramIcon />
          </Link>
          <Link href={"#"}>
            <BehanceIcon />
          </Link>
          <Link href={"#"}>
            <TwitterIcon />
          </Link>
          <Link href={"#"}>
            <FacebookIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

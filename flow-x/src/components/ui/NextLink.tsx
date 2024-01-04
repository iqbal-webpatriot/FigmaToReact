import Link from "next/link";
import { ReactElement } from "react";

type NextLinkProps={
    title:string | ReactElement;
    href:string;
    
    
}

export default function NextLink({title,href}:NextLinkProps) {
  return (
    <Link href={href}>
      {title}
    </Link>
  )
}

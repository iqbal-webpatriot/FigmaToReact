"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ReactElement } from "react";

type NextLinkProps = {
  title: string | ReactElement;
  href: string;
};

export default function NextLink({ title, href }: NextLinkProps) {
  const currentPath = usePathname();
  const isActiveRoute = href === currentPath ? "text-active" : "";
  return (
    <Link href={href} className={isActiveRoute}>
      {title}
    </Link>
  );
}

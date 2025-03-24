import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  className?: string;
};

export const Logo = ({ title, className }: Props) => {
  return (
    <Link href={"/"}>
      <div>
        <h1 className={className}>{title || "Bloggers"}</h1>
      </div>
    </Link>
  );
};

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
        <h1 className={`font-bold text-3xl uppercase ${className}`}>
          {title || "Bloggers"}
        </h1>
      </div>
    </Link>
  );
};

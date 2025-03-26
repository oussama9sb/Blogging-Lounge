import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children: React.JSX.Element;
};

export const Provider = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

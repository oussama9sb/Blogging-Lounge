import React from "react";
import { Navbar } from "./Navbar";

export const Provider = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

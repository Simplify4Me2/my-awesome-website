import React from "react";
import { Header } from "../components/header";

export function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1>I've been expecting you.</h1>
        <span>email: <a href="mailto:saymonfreak@gmail.com">saymonfreak@gmail.com</a></span>
      </div>
    </>
  );
}

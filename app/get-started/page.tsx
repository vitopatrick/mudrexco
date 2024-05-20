"use client";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export default function GetStarted() {
  return (
    // page Wrapper
    <>
      {/* main form wrapper */}
      <main className="mx-auto md:grid grid-cols-2 place-items-center h-screen ">
        <div className="hidden lg:flex bg-purple-950 text-white h-full w-full  items-center ">
          <h4 className=" font-medium text-4xl underline ml-4">
            Register now to trade with <br /> confidence
          </h4>
        </div>
        <RegisterForm />
      </main>
      {/* End of Form Wrapper */}
      <ToastContainer className="toast" theme="colored" />
    </>
  );
}

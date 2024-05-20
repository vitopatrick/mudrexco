"use client";
import LoginForm from "@/components/login-form/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function LoginPage() {
  return (
    // Page wrapper
    <div className="h-screen flex items-center">
      <div className="hidden lg:flex items-center h-full w-full bg-purple-950 text-white">
        <h4 className="font-headerTwo text-5xl font-bold underline ml-8">
          We Believe in Simplicity is <br />
          sophistication
        </h4>
      </div>
      <div className="w-full p-4 ">
        <LoginForm />
      </div>
      <ToastContainer theme="colored" className="toast" />
    </div>
  );
}

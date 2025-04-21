import React from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "@/components/form/login-form"; // Form đăng nhập
import { RegisterForm } from "@/components/form/register-form"; // Form đăng ký

const LoginPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {isLogin && <LoginForm />}
        {isRegister && <RegisterForm />}
      </div>
    </div>
  );
};

export default LoginPage;

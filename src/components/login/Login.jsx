import React from "react";
import { Outlet } from "react-router-dom";

const LoginA = () => {
  return (
    <div>
      <div>Login</div>
      <Outlet />
    </div>
  );
};

export default LoginA;

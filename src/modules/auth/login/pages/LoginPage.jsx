import { Box } from "@mui/material";
import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const submitLogin = (formData) => {
    console.log(formData);
  };

  const onChange = (formData) => {
    console.log(formData);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm onChange={onChange} onSubmit={submitLogin} />
    </Box>
  );
}

export default LoginPage;

import { Box } from "@mui/material";
import React from "react";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
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
      <RegisterForm onChange={onChange} onSubmit={submitLogin} />
    </Box>
  );
}

export default RegisterPage;

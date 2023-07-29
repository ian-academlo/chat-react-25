import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
function LoginForm({ onSubmit, onChange }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleEmail = (value) => {
    if (email) {
      setEmailError(false);
    }
    setEmail(value);
    const data = { ...formData };
    data.email = value;
    setFormData(data);
  };

  const handlePassword = (value) => {
    if (password) {
      setPasswordError(false);
    }
    setPassword(value);
    const data = { ...formData };
    data.password = value;
    setFormData(data);
  };

  const handleSubmit = () => {
    if (!password) {
      setPasswordError(true);
    }
    if (!email) {
      setEmailError(true);
    }
  };

  useEffect(() => {
    onChange(formData);
  }, [formData]);

  return (
    <Card
      elevation={7}
      sx={{
        borderRadius: "10px",
        width: { xs: "70%", md: "500px" },
        padding: "50px 20px",
      }}
    >
      <Stack direction="column" gap="30px">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="30px"
        >
          <Box sx={{ width: "50px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              style={{ width: "100%" }}
            />
          </Box>
          <Typography variant="h4" color="primary">
            Academlo chat
          </Typography>
        </Stack>
        {/* <Typography>Nos alegra tenerte de vuelta</Typography> */}
        <TextField
          error={emailError}
          helperText={emailError ? "Ingresa un correo válido" : ""}
          fullWidth
          label="Email"
          onChange={(e) => handleEmail(e.target.value)}
        />
        <TextField
          error={passwordError}
          fullWidth
          type={show ? "text" : "password"}
          label="password"
          helperText={passwordError ? "Ingresa una contraseña" : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment
                sx={{ "&:hover": { cursor: "pointer" } }}
                position="end"
                onClick={() => setShow(!show)}
              >
                {show ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
          onClick={(e) => handlePassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          size="large"
          color="primary"
          onClick={() => handleSubmit()}
        >
          {" "}
          Login{" "}
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Aún no tienes cuenta{" "}
          <Typography
            component="span"
            color="primary"
            sx={{ fontWeight: 700, "&:hover": { cursor: "pointer" } }}
            onClick={() => {
              navigate("/auth/register");
            }}
          >
            Registrate
          </Typography>
        </Typography>
      </Stack>
    </Card>
  );
}

export default LoginForm;

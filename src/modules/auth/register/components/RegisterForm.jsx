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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm({ onSubmit, onChange }) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleUsername = (value) => {
    if (username) {
      setUsernameError(false);
    }
    setUsername(value);
    const data = { ...formData };
    data.username = value;
    setFormData(data);
  };

  const handleEmail = (value) => {
    console.log(value);
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
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (password && email) {
      onSubmit(formData);
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
          error={usernameError}
          fullWidth
          label="Username"
          onChange={(e) => handleUsername(e.target.value)}
        />
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
          Register{" "}
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Ya tienes una cuenta{" "}
          <Typography
            component="span"
            color="primary"
            sx={{ fontWeight: 700, "&:hover": { cursor: "pointer" } }}
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Ingresa
          </Typography>
        </Typography>
      </Stack>
    </Card>
  );
}

export default RegisterForm;

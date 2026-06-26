import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { loginUser } from "../../common/api/authService";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
  if (e) e.preventDefault();

  if (email.trim() === "") {
    alert("Email is required");
    return;
  }

  if (password.trim() === "") {
    alert("Password is required");
    return;
  }

  console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);

    try {

      const response = await loginUser({
        
        username: email,
        password: password,
      });

      console.log("Response:", response);

      console.log("Headers:", response.headers);

const token = response.request.getResponseHeader("x-auth-token");

console.log("Token from XHR:", token);

localStorage.setItem("token", token);

console.log("Saved Token:", localStorage.getItem("token"));

alert("Login Successful!");
navigate("/products");

    } catch (error) {

     console.log("Login Error:", error);

if (error.response) {
  console.log("Status:", error.response.status);
  console.log("Headers:", error.response.headers);
  console.log("Data:", error.response.data);
} else {
  console.log("No response from server");
}

alert("Invalid Email or Password");
    }
  };
  return (
    <>
      <Header />

      <Container maxWidth="sm">
        <Paper className="loginCard">

          <Typography
            variant="h5"
            align="center"
            gutterBottom
          >
            Sign In
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />



          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>

        </Paper>
      </Container>
    </>
  );
}
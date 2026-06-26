import Header from "../../components/Header/Header";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import "./Signup.css";

export default function Signup() {
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
            Sign Up
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="First Name"
          />

          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
          />

          <TextField
            fullWidth
            margin="normal"
            label="Contact Number"
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
    </>
  );
}
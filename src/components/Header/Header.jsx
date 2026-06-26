import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./Header.css";

export default function Header({ searchText, setSearchText }) {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const showSearch =
    isLoggedIn &&
    location.pathname === "/products";

  return (
    <AppBar position="static" className="appBar">
      <Toolbar>

        <Box className="logoBox">
          <ShoppingCartIcon />
          <Typography variant="h6">
            upGrad E-Shop
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {showSearch && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 1,
              px: 1,
              width: "350px",
              mr: 4,
            }}
          >
            <SearchIcon sx={{ color: "gray", mr: 1 }} />

            <InputBase
              placeholder="Search Products..."
              value={searchText || ""}
              onChange={(e) =>
                setSearchText && setSearchText(e.target.value)
              }
              sx={{
                width: "100%",
              }}
            />
          </Box>
        )}

        {!isLoggedIn ? (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/login"
            >
              Login
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/signup"
            >
              Signup
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/products"
            >
              Home
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/add-product"
            >
              Add Product
            </Button>

            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </>
        )}

      </Toolbar>
    </AppBar>
  );
}
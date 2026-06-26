import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Container,
  Grid,
  Typography,
  MenuItem,
  Select,
  Button,
  Box,
} from "@mui/material";

import Header from "../../components/Header/Header";

import {
  getProductById,
  deleteProduct,
} from "../../common/api/productService";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(product.id);

      alert("Product Deleted Successfully!");

      navigate("/products");
    } catch (error) {
      console.log(error);

      alert("Unable to delete product.");
    }
  };

  if (!product) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <Header />

      <Container sx={{ mt: 5 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side */}

          <Grid item xs={12} md={5}>
            <img
              src={
                product.imageUrl ||
                "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600"
              }
              alt={product.name}
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </Grid>

          {/* Right Side */}

          <Grid item xs={12} md={7}>
            <Typography variant="h4">{product.name}</Typography>

            <Typography sx={{ mt: 2 }}>
              <b>Category:</b> {product.category}
            </Typography>

            <Typography sx={{ mt: 1 }}>
              <b>Manufacturer:</b> {product.manufacturer}
            </Typography>

            <Typography sx={{ mt: 1 }}>
              <b>Available Items:</b> {product.availableItems}
            </Typography>

            <Typography variant="h6" sx={{ mt: 4 }}>
              Product Description
            </Typography>

            <Typography sx={{ mt: 1 }}>
              {product.description}
            </Typography>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography>Quantity:</Typography>

              <Select
                size="small"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(product.availableItems).keys()].map((i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <Typography variant="h5" sx={{ mt: 4 }}>
              Total Price: ₹ {product.price * quantity}
            </Typography>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={() =>
                  navigate("/create-order", {
                    state: {
                      product,
                      quantity,
                    },
                  })
                }
              >
                PLACE ORDER
              </Button>

              <Button
                variant="outlined"
                onClick={() =>
                  navigate(`/products/${product.id}/modify`)
                }
              >
                MODIFY
              </Button>

              <Button
                color="error"
                variant="contained"
                onClick={handleDelete}
              >
                DELETE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header/Header";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
} from "@mui/material";

import {
  getProductById,
  updateProduct,
} from "../../common/api/productService";

export default function ModifyProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    manufacturer: "",
    availableItems: "",
    price: "",
    imageUrl: "",
    description: "",
  });

  const categories = [
    "Apparel",
    "Electronics",
    "Footwear",
    "Personal Care",
  ];

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await updateProduct(id, product);

      console.log("Updated Product:", response.data);

      alert("Product Updated Successfully!");

      navigate("/products");
    } catch (error) {
      console.log(error);

      alert("Unable to update product.");
    }
  };

  return (
    <>
      <Header />

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper sx={{ p: 4 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            Modify Product
          </Typography>

          <TextField
            fullWidth
            label="Product Name"
            name="name"
            margin="normal"
            value={product.name}
            onChange={handleChange}
          />

          <TextField
            select
            fullWidth
            label="Category"
            name="category"
            margin="normal"
            value={product.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                value={category}
              >
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Manufacturer"
            name="manufacturer"
            margin="normal"
            value={product.manufacturer}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            type="number"
            label="Available Items"
            name="availableItems"
            margin="normal"
            value={product.availableItems}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            type="number"
            label="Price"
            name="price"
            margin="normal"
            value={product.price}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            margin="normal"
            value={product.imageUrl}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Product Description"
            name="description"
            margin="normal"
            value={product.description}
            onChange={handleChange}
          />

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={handleUpdateProduct}
            >
              MODIFY PRODUCT
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";

import { getAllProducts } from "../../common/api/productService";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = [...products]
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "highToLow") return b.price - a.price;
      if (sortBy === "lowToHigh") return a.price - b.price;
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        {[
          "All",
          "Apparel",
          "Electronics",
          "Footwear",
          "Personal Care",
        ].map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            color={
              selectedCategory === category
                ? "primary"
                : "default"
            }
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 3,
          mb: 3,
          px: 4,
        }}
      >
        <FormControl size="small" sx={{ width: 220 }}>
          <InputLabel>Sort By</InputLabel>

          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="highToLow">
              Price: High to Low
            </MenuItem>
            <MenuItem value="lowToHigh">
              Price: Low to High
            </MenuItem>
            <MenuItem value="newest">
              Newest
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
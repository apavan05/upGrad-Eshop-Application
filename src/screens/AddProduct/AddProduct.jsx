import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../common/api/productService";
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

export default function AddProduct() {
    const navigate = useNavigate();
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

   const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const handleSaveProduct = async () => {
    try {
        const response = await createProduct(product);

        console.log("Product Created:", response.data);

        alert("Product Added Successfully!");

        navigate("/products");

    } catch (error) {
        console.log(error);

        alert("Unable to add product.");
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
                        Add Product
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
                            onClick={handleSaveProduct}
                        >
                            SAVE PRODUCT
                        </Button>
                    </Box>

                </Paper>
            </Container>
        </>
    );
}
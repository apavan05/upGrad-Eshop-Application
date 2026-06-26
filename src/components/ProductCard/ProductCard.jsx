import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    return (
        <Card
            sx={{
                maxWidth: 345,
                height: 500,
                display: "flex",
                flexDirection: "column",
            }}
        >

            <CardMedia
                component="img"
                height="240"
                image={
                    product.imageUrl ||
                    "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600"
                }
                alt={product.name}
                sx={{ objectFit: "cover" }}
            />

            <CardContent sx={{ flexGrow: 1 }}>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6">
                        {product.name}
                    </Typography>

                    <Typography variant="h6">
                        ₹ {product.price}
                    </Typography>
                </Box>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                >
                    {product.description}
                </Typography>

            </CardContent>

            <CardActions>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate(`/products/${product.id}`)}
                >
                    BUY
                </Button>

            </CardActions>

        </Card>
    );
}
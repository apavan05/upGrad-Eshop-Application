import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 320,
        height: 500,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={
          product.imageUrl ||
          "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600"
        }
        alt={product.name}
        sx={{
          height: 240,
          objectFit: "contain",
          p: 2,
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
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
          sx={{
            mt: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "space-between",
          px: 2,
          pb: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={() =>
            navigate(`/products/${product.id}`)
          }
        >
          BUY
        </Button>

        <Box>
          <IconButton
            onClick={() =>
              navigate(`/products/${product.id}/modify`)
            }
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => onDelete(product.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
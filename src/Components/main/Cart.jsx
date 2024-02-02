// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../../Redux/store/cartSlice";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Close } from "@mui/icons-material";

const Cart = ({handleClose}) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };
  const getTotalPrice = () => {
    return cartProducts.reduce((total, product) => {
      const productPrice = parseFloat(product.attributes.prodSize);
      return total + productPrice * product.quantity;
    }, 0);
  };

  const handleIncreaseQuantity = (productId) => {
    const product = cartProducts.find((p) => p.id === productId);
    if (product) {
      const newQuantity = product.quantity + 1;
      dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cartProducts.find((p) => p.id === productId);
    if (product && product.quantity > 1) {
      const newQuantity = product.quantity - 1;
      dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
    }
  };
  // clear all products from cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartContent = cartProducts.map((card) => {
    console.log(card.attributes.prodImg.data[0].attributes.url);
    return (
      <Box key={card.id} sx={{ p: 2 }}>
        <Box
          display={"flex"}
          alignItems={"start"}
          justifyContent={"space-between"}
          sx={{ py: 2 }}
        >
          <Avatar
            src={`${import.meta.env.VITE_BASEURL_KEY}${
              card.attributes.prodImg.data[0].attributes.url
            }`}
            sx={{ width: 96, height: 96, mx: 2 }}
            variant="square"
          />
          <Box display={"flex"} flexDirection={"column"} sx={{ px: 2 }}>
            <Typography variant="h5">{card.attributes.prodTitle} </Typography>
            <Typography variant="subtitle2">
              {card.attributes.prodDesc}
            </Typography>
          </Box>
          <IconButton onClick={() => handleRemoveFromCart(card)}>
            <DeleteIcon />
          </IconButton>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <TextField
            size="small"
            type="number"
            value={card.quantity}
            onChange={(e) => handleUpdateQuantity(card.id, e.target.value)}
            InputProps={{
              startAdornment: (
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDecreaseQuantity(card.id)}
                >
                  -
                </IconButton>
              ),
              endAdornment: (
                <IconButton
                  aria-label="delete"
                  onClick={() => handleIncreaseQuantity(card.id)}
                >
                  +
                </IconButton>
              ),
              inputProps: {
                readOnly: true,
                style: { textAlign: "center", fontSize: "16px", width: "40px" },
              },
            }}
          />

          <Typography variant="body1">
            price: ${card.attributes.prodSize}{" "}
          </Typography>
        </Box>
        <Typography
          variant="button"
          sx={{ p: 2, display: "flex", justifyContent: "center" }}
        >
          Total : $ {card.attributes.prodSize * card.quantity}{" "}
        </Typography>
        <Divider />
      </Box>
    );
  });

  return (
    <>
      <Paper elevation={0} sx={{ width: "100%", height: "100%", mx: "auto" }}>
        <Box sx={{display:'flex', justifyContent:'end', p:1}}>
          <IconButton size="large">
            <Close onClick={handleClose} />
          </IconButton>
        </Box>
        <Typography sx={{ p: 3 }} variant="h4">
          {" "}
          Shopping Cart
        </Typography>
        {cartContent}

        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight={"600"}>
            {" "}
            Total Price: ${getTotalPrice()}{" "}
          </Typography>

          <Button variant="contained" onClick={handleClearCart}>
            clear your cart{" "}
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Cart;

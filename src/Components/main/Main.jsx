import {
  Box,
  Button,
  Card,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./main.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {addToCart} from '../../Redux/store/cartSlice'
import { useDispatch } from "react-redux";


import { useGetproductByNameQuery } from '../../Redux/prod'



const Main = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setMyData(newValue);
   
  };

  const theme = useTheme();
 


  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
   dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const AllProductsApi= "products?populate=*"
  const menCategoryApi = "products?populate=*&filters[prodCategories][$eq]=Men"
  const womenCategoryApi =
    "products?populate=*&filters[prodCategories][$eq]=Women";
  const kidsCategoryApi =
    "products?populate=*&filters[prodCategories][$eq]=Baby";

  const [myData, setMyData] = useState(AllProductsApi);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
if(data) {
  console.log(data.data);
  
}


 if(data) {
  const products1 = data.data;
   return (
     <Container sx={{ py: 5 }}>
       <Stack
         sx={{
           flexWrap: "wrap",
           gap: 3,
           [theme.breakpoints.down("990")]: {
             textAlign: "center !important",
             justifyContent: "center !important",
           },
         }}
         direction={"row"}
         alignItems={"center"}
         justifyContent={"space-between"}
       >
         <Box
           sx={{
             display: "flex",
             flexDirection: "column",
             gap: 2,
           }}
         >
           <Typography sx={{ color: theme.palette.text.primary }} variant="h6">
             Selected Products
           </Typography>
           <Typography
             sx={{ color: theme.palette.text.secondary }}
             variant="body1"
             fontWeight={300}
           >
             All Our New Arrivals in a exclusive brand selection
           </Typography>
         </Box>

         <ToggleButtonGroup
           color="error"
           value={myData}
           exclusive
           onChange={handleAlignment}
           aria-label="text alignment"

           sx={{
             ".Mui-selected": {
               border: "1px solid rgba(233, 69, 96, 0.5) !important",
               color: "#e94560 !important",
               backgroundColor: "#ff000029 !important",
             },
             gap:'5px'
           }}
         >
           <ToggleButton
             sx={{ color: theme.palette.text.primary }}
             className="main-btn"
             value={AllProductsApi}
             aria-label="left aligned"
           >
             All Products
           </ToggleButton>
           <ToggleButton
             sx={{ color: theme.palette.text.primary }}
             className="main-btn"
             value={menCategoryApi}
             aria-label="centered"
           >
             MEN's
           </ToggleButton>
           <ToggleButton
             sx={{ color: theme.palette.text.primary }}
             className="main-btn"
             value={womenCategoryApi}
             aria-label="centered"
           >
             WOMEN's
           </ToggleButton>
           <ToggleButton
             sx={{ color: theme.palette.text.primary }}
             className="main-btn"
             value={kidsCategoryApi}
             aria-label="centered"
           >
             KID's
           </ToggleButton>
         </ToggleButtonGroup>
       </Stack>

       <Stack
         sx={{ mt: 10 }}
         direction={"row"}
         alignItems={"center"}
         flexWrap={"wrap"}
         gap={10}
         justifyContent={"center"}
       >
         {products1.map((card, key) => {
           return (
             <Card
               id={card.id}
               key={key}
               sx={{
                 maxWidth: 300,
                 ":hover .MuiCardMedia-root": {
                   scale: "1.1",
                   transition: "0.3s",
                   rotate: "5deg",
                 },
               }}
             >
               <CardMedia
                 component="img"
                 alt="green iguana"
                 height="250"
                 image={`${import.meta.env.VITE_BASEURL_KEY}${
                   card.attributes.prodImg.data[0].attributes.url
                 }`}
               />
               <CardContent>
                 <Stack
                   direction={"row"}
                   alignItems={"center"}
                   justifyContent={"space-between"}
                 >
                   <Typography gutterBottom variant="h6" component="div">
                     {card.attributes.prodTitle}
                   </Typography>
                   <Typography variant="subtitel" component={"p"}>
                     {" "}
                     ${card.attributes.prodSize}
                   </Typography>
                 </Stack>
                 <Typography variant="body2" color="text.secondary">
                   {card.attributes.prodDesc}
                 </Typography>
               </CardContent>
               <CardActions sx={{ justifyContent: "space-between" }}>
                 <Button size="small" onClick={() => handleAddToCart(card)}>
                   <AddShoppingCartIcon sx={{ mr: 2 }} fontSize="small" />
                   Add To Cart
                 </Button>
                 <Rating
                   name="read-only"
                   value={2.5}
                   precision={0.5}
                   readOnly
                 />
               </CardActions>
             </Card>
           );
         })}
       </Stack>
     </Container>
   );
 }
};

export default Main;

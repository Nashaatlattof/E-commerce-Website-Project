
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import "./flash.css";

import { Avatar, Badge, Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { red } from "@mui/material/colors";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useTheme } from "@emotion/react";
import { useGetproductByNameQuery } from "../../Redux/prod";
import { addToCart } from "../../Redux/store/cartSlice";
import { useDispatch } from "react-redux";




const FlashCard = () => {
  const theme = useTheme();
   const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
 
  const { data, error, isLoading } = useGetproductByNameQuery(
    "product-flashes?populate=*"
  );
 
 const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
 const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

 
  if (data) {
    const productsFlash = data.data;
    console.log(data.data);
    
  const getSlidesPerView = () => {
    if (isSmallScreen) {
      return 1;
    } else if (isMediumScreen) {
      return 1;
    } else if (isLargeScreen) {
      return 2;
    } else if (isXLargeScreen) {
      return 3;
    } else {
      return 3;
    }
  };
 

    return (
      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{ backgroundColor: theme.palette.bgColor.main }}
      >
        {productsFlash.map((prod, key) => {
          const originalPrice = prod.attributes.prodPrice || 0;
          const discountPercentage = 30;
          const currentPrice =
            originalPrice - (originalPrice * discountPercentage) / 100;
          return (
            <SwiperSlide
              style={{
                backgroundColor: theme.palette.bgColor.main,
                padding: 15,
              }}
              key={key}
            >
              <Badge
                badgeContent={"SALE"}
                color="primary"
                sx={{
                  ".MuiBadge-badge": {
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.bgColorSales.main,
                    fontWeight: 300,
                    fontSize: "1.3rem",
                    top: "-7px",
                    right: "7px",
                    height: "40px",
                    borderRadius: "3px",
                  },
                }}
              >
                <Paper
                  sx={{
                    width: "400px",
                    height: "250px",
                    padding: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: red,
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto", flexGrow: 1 }}>
                      <Typography component="div" variant="h5">
                        {/* Live From Space */}
                        {prod.attributes.prodTitle}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        % 30 OFF
                      </Typography>
                      <Typography
                        component="div"
                        variant="caption"
                        sx={{
                          textDecoration: "line-through",
                          color: "text.secondary",
                        }}
                      >
                        $ {originalPrice}
                      </Typography>
                      <Typography component="div" variant="body1">
                        ${currentPrice}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton onClick={() => handleAddToCart(prod)}>
                        <ShoppingCartOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                      <IconButton>
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  {/*   <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image="../../../public//images/Mens NASA Space Bear Print O-Neck Casual Loose Short Sleeve T-Shirt (1).jfif"
                  alt="Live from space album cover"
                /> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "250px",
                    }}
                  >
                    <Avatar
                      variant="square"
                      sx={{ width: "70%", height: "80%", objectFit: "cover" }}
                      src={`http://localhost:1337${prod.attributes.prodImg.data[0].attributes.url}`}
                    ></Avatar>
                  </Box>
                </Paper>
              </Badge>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}


export default FlashCard;

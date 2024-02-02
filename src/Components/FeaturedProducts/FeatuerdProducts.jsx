import { Box, Container, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useGetproductByNameQuery } from '../../Redux/prod';
import GradeIcon from "@mui/icons-material/Grade";
const FeatuerdProducts = () => {

   const handleAlignment = (event, newValue) => {
   
    setMyData(newValue);
   
  };

    const AllProductsApi= "products?populate=*"
  const menCategoryApi = "products?populate=*&filters[prodCategories][$eq]=Men"
  const womenCategoryApi =
    "products?populate=*&filters[prodCategories][$eq]=Women";

  const [myData, setMyData] = useState(AllProductsApi);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const theme = useTheme();


  return (
    <Container sx={{py:10}}>
      <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:'start' }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mb: 3
            }}
          >
            <Typography sx={{ color: theme.palette.text.primary }} variant="h6">
              Featured Products
            </Typography>
            <Typography
              sx={{ color: theme.palette.text.secondary }}
              variant="body1"
              fontWeight={300}
            >
              Explore the Latest Products from Our Exclusive Brand Collection
            </Typography>
          </Box>
          <ToggleButtonGroup
            orientation="vertical"
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            
            sx={{
              gap:'10px',
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560 !important",
                backgroundColor: "#ff000029 !important",
               
              },
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
              MEN Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="main-btn"
              value={womenCategoryApi}
              aria-label="centered"
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box></Box>
      </Box>
    </Container>
  );
}

export default FeatuerdProducts

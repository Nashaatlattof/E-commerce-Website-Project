import { Box, Typography } from '@mui/material'
import FlashCard from './FlashCard.jsx'
import { BoltOutlined } from '@mui/icons-material'
import { pink } from "@mui/material/colors";
const FlashDeals = () => {
  return (
   
     <>
       <Box
         sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
       >
         <BoltOutlined sx={{ color: pink[500] , fontSize: '50px' }} />
         <Typography variant="h5">Flash Deals</Typography>
       </Box>
      
         <FlashCard />
     </>
    
  
  );
}

export default FlashDeals

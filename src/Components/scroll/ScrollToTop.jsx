import React from 'react'
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Zoom, useScrollTrigger } from '@mui/material';

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({threshold: 50})}>
      <Fab
        sx={{ position: "fixed", bottom: 10, right: 10, backgroundColor: "#2b3445" }}
        variant='expanded'
        aria-label="edit"
        onClick={() => {
          window.scrollTo(0, 0);
        }
        }
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop


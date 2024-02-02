import {
  Box,
  Container,
  IconButton,
 
  Stack,
 
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Close } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Links from "./Links";





const Header3 = () => {


 
    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container
      sx={{
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ width: "250px", bgcolor: theme.palette.catColor.primary }}
        >
          <WindowIcon sx={{ mr: 1 }} />
          <Typography>categories</Typography>
          <Box flexGrow={1}></Box>

          <KeyboardArrowRightIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiList-root": {
              width: 250,
              bgcolor: theme.palette.catColor.primary,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} alignItems={'center'} sx={{gap:'20px'}}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <SwipeableDrawer
        anchor={"top"}
        open={state["top"]}
        onOpen={toggleDrawer("top", true)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 450, mx: "auto", mt: 8, position: "relative", py: 5 }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              ":hover .close": {
                color: "red",
                rotate: "180deg",
                transition: "0.3s",
              },
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <Close className="close" />
          </IconButton>

          {[
            { mainLink: "Home", subLink: ["link1", "link2", "link3"] },
            { mainLink: "Mega menu", subLink: ["link1", "link2", "link3"] },
            {
              mainLink: "Full screen menu",
              subLink: ["link1", "link2", "link3"],
            },
            {
              mainLink: "Pages",
              subLink: ["link1", "link2", "link3"],
            },
            {
              mainLink: "User account",
              subLink: ["link1", "link2", "link3"],
            },
            {
              mainLink: "Vendor account",
              subLink: ["link1", "link2", "link3"],
            },
          ].map((item, key) => {
            return (
              <Accordion key={key} elevation={0} sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link, key) => {
                    return (
                      <ListItem key={key} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </SwipeableDrawer>
    </Container>
  );
};

export default Header3;

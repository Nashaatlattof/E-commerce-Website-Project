import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Container,
  Drawer,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Cart from "../main/Cart";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
const options = ["ALL Categories", "Cars", "Electronics"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.6,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "200px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header2 = () => {
  const [isItemAdded, setItemAdded] = useState(false);
  // استخدام `useSelector` للوصول إلى حالة Redux وجلب المنتجات
  const cartProducts = useSelector((state) => state.cart.products);

  // حساب عدد المنتجات في السلة
  const cartItemCount = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  // تعيين قيمة `isItemAdded` عندما يتغير `cartItemCount`
  useEffect(() => {
    setItemAdded(true);
    const timeout = setTimeout(() => {
      setItemAdded(false);
    }, 1000); // زمن الانتقال - 1000 مللي ثانية (1 ثانية)
    return () => clearTimeout(timeout);
  }, [cartItemCount]);

  //handle open and close shopping cart button
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseCart = () => {
    setOpen(false);
  };
  //selecter menu for search

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open1 = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const [isSticky, setSticky] = useState(false);
   

    const handleScroll = () => {
      setSticky(window.scrollY > 0); // تغيير قيمة عندما يتم التمرير لمسافة معينة (هنا 0 يعني أي انزلاق سيجعل الهيدر ثابتًا)
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  const theme = useTheme();
  return (
    <Container
      sx={{
        position: "sticky",
        top: 0,
        py: 3,
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1000,
        backgroundColor: theme.palette.background.paper,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
      }}
    >
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography>E-commerce</Typography>
      </Stack>

      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.catColor.primary,
              borderBottomRightRadius: "22px",
              borderTopRightRadius: "22px",
              p: 0,
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  width: 100,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
              />
              <ExpandMore />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open1}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "14px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>

        <IconButton aria-label="cart" onClick={handleClickOpen}>
          <Badge
            classes={{ badge: "badge-transition" }}
            badgeContent={cartItemCount}
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Stack>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleCloseCart}
        PaperProps={{
          sx: {
            width: "100%",
           
            bgcolor: theme.palette.bgColor.main,
            [theme.breakpoints.up("md")]: {
              width: "500px",
            },
          },
        }}
      >
        <Cart handleClose={handleCloseCart} />
      </Drawer>
    </Container>
  );
};

export default Header2;

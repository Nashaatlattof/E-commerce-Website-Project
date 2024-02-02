import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { KeyboardArrowRight } from '@mui/icons-material';

const Links = ({title}) => {
  return (
    <Box
      sx={{
        ":hover .list": { display: "block" },
        ":hover": { cursor: "pointer" },
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMoreIcon sx={{ ml: 2 }} />

      <Box
        className="list"
        sx={{
          display: "none",
          position: "absolute",
          minWidth: "170px",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex:'10'
        }}
      >
        <Paper sx={{ mt: "20px" }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    primary="Dashboard"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{ ":hover .sublinks": { display: "block" } }}
              >
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    primary="products"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRight
                    sx={{ position: "absolute", right: "10px" }}
                  />
                </ListItemButton>

                <Box
                  className="sublinks"
                  sx={{
                    mt: "20px",
                    position: "absolute",
                    left: "100%",
                    display: "none",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <Paper sx={{ ml: 0.5, width: 200 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              primary="Add Product"
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              primary="Edit Product"
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: "300",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    primary="Orders"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    primary="profile"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}

export default Links

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Container, Grid, Stack, Link, Typography, Paper, IconButton, Avatar, Divider, Box } from "@mui/material";
import React from 'react'
import { useTheme } from "@emotion/react";
const linkData1 = [
  ["About US", "#"],
  ["Our Services", "#"],
  ["Privacy Policy", "#"],
  ["Ivestors", "#"],
  
];
const linkData2 = [
  ["FAQ", "#"],
  ["Shipping", "#"],
  ["Returns", "#"],
  ["Orders Status", "#"],
];
const linkData3 = [
  ["About US", "#"],
  ["Our Services", "#"],
  ["Privacy Policy", "#"],
  ["Ivestors", "#"],
  ["FAQ", "#"],
  ["Shipping", "#"],
  ["Returns", "#"],
  ["Orders Status", "#"],
];
const linkData4 = [
  ["About US", "#"],
  ["Our Services", "#"],
  ["Privacy Policy", "#"],
  ["Ivestors", "#"],
  ["FAQ", "#"],
  ["Shipping", "#"],
  ["Returns", "#"],
  ["Orders Status", "#"],
];



const Footer = () => {
 const theme= useTheme()
  return (
    <Paper
      sx={{
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
      }}
    >
      <Container sx={{ py: 5 }}>
        <Typography sx={{ mb: 4 }}>
          Questions? Call 00963-991-889-924
        </Typography>
        <Grid container spacing={4} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Company
            </Typography>
            <Stack spacing={2}>
              {linkData1.map(([label, href]) => (
                <Link
                  sx={{ color: theme.palette.text.secondary }}
                  key={label}
                  variant="caption"
                  underline="none"
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item sm={6} xs={12} md={3}>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Get Help
            </Typography>
            <Stack spacing={2}>
              {linkData2.map(([label, href]) => (
                <Link
                  key={label}
                  variant="body2"
                  underline="none"
                  href={href}
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item sm={6} xs={12} md={3}>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Online Shop
            </Typography>
            <Stack spacing={2}>
              {linkData3.map(([label, href]) => (
                <Link
                  key={label}
                  variant="body2"
                  underline="none"
                  href={href}
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item sm={6} xs={12} md={3}>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Follow Us
            </Typography>
            <Stack spacing={2} direction="row" alignItems={"center"}>
              <Avatar>
                <IconButton>
                  <Facebook />
                </IconButton>
              </Avatar>
              <Avatar>
                <IconButton>
                  <Twitter />
                </IconButton>
              </Avatar>
              <Avatar>
                <IconButton>
                  <Instagram />
                </IconButton>
              </Avatar>
              <Avatar>
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </Avatar>
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt:3 }}>
          <Typography>
            Copyright &copy; Ecommerce Shop. All right reserved
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Link underline="none" component="button" variant="body2">
              Privacy Policy
            </Link>
            <Link component="button" variant="body2" underline="none">
              Terms of services
            </Link>
            <Link
              component="button"
              variant="body2"
              underline="none"
            >
             security
            </Link>
          </Stack>
        </Box>{" "}
      </Container>
    </Paper>
  );
}

export default Footer
 {
   /*   {linkChunks.map((chunk, chunkIndex) => (
          <Grid container spacing={4} key={chunkIndex}>
            {chunk.map(([label, href], index) => (
              <Grid item xs={6} md={3} key={index}>
                <Stack spacing={2}>
                  <Link variant="body2" underline="none" href={href}>
                    {label}
                  </Link>
                </Stack>
              </Grid>
            ))}
          </Grid>
        ))} */
 }
 {
   /*  <Grid container spacing={4}>
          {["Company", "Get Help", "Online Shop", "Follow Us"].map((index) => (
            <Grid item xs={6} md={3} key={index}>
              <Typography sx={{ mb: 4 }}>
               {index}
              </Typography>
              <Stack spacing={2}>
                {linkData.map(([label, href]) => (
                  <Link
                    key={label}
                    variant="body2"
                    underline="none"
                    href={href}
                  >
                    {label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid> */
 }
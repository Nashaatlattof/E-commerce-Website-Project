import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Features = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ my: 5, py: 2, backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <Mybox
          icon={<ElectricBolt fontSize="large" />}
          title={"Fast Delivery"}
          subtitle={"Start From $10"}
        />

        <Mybox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />
        <Mybox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"365 Days"}
          subtitle={"ForFree Return"}
        />
        <Mybox
          icon={<CreditScoreOutlined fontSize="large" />}
          title={"Payment"}
          subtitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default Features;

const Mybox = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        width: "250px",
        justifyContent: useMediaQuery("(min-width:600px)") ? 'center' : 'left',
        gap: 3,
        py: 1.6,
        
      }}
    >
      {icon}

      <Stack>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondry }}
        >
          {subtitle}
        </Typography>
      </Stack>
    </Box>
  );
};

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { COLOURS } from "../constants/Colours";
import defaultLogo from "../assets/logo-2027.png";

const Footer = ({ title = "RVRC Symposium 2027", logo = defaultLogo }) => {
  return (
    <>
      <Box py="28px" px="10%" sx={{ background: COLOURS.brandPurple, color: COLOURS.white }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 0 }}
          sx={{
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "none", md: "space-evenly" },
          }}
        >
          {/* Logo and Title Stack */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 3 }}
            sx={{
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: { xs: "none", md: "space-evenly" },
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                height: "120px",
                padding: "0px",
                marginTop: "0px"
              }}
            />
            <Typography
              variant="h1"
              sx={{
                mt: { xs: 0, md: 0 },
                textAlign: "left",
                color: COLOURS.white,
                fontSize: "24pt",
                fontWeight: "Bold",
                maxWidth: { xs: "none", md: "200px" },
              }}
            >
              {title}
            </Typography>
          </Stack>

          <Stack
            sx={{
              mt: { xs: 0, md: 0 },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography mb="10px" sx={{ fontWeight: "bold", fontSize: "16pt" }}>
              Address
            </Typography>
            <Typography>25 Lower Kent Ridge Road</Typography>
            <Typography>Block G, Level 3</Typography>
            <Typography>Singapore 119081</Typography>
          </Stack>
          <Stack
            sx={{
              mt: { xs: 0, md: 0 },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography mb="10px" sx={{ fontWeight: "bold", fontSize: "16pt" }}>
              Contact Us
            </Typography>
            <Stack direction="row" spacing={3}>
              <EmailOutlined sx={{ color: COLOURS.white }} />
              <Typography>askrvrc@nus.edu.sg</Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              <PhoneOutlined sx={{ color: COLOURS.white }} />
              <Typography>(+65) 6601 3886</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;

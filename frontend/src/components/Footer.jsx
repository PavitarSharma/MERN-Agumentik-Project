import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Spa } from "@mui/icons-material";
import { SocialMediaIcons } from "./";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0b0b45",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Stack sx={{
          flexDirection: {md: "row"},
          justifyContent: {md: "space-between"},
          padding: "5rem 0 8rem 0"
        }}>
          <Stack gap="22px">
            <Stack direction="row" alignItems="center" gap="10px">
              <Spa sx={{ fontSize: "34px", color: "blue" }} />
              <Typography
                variant="span"
                sx={{ color: "white", fontWeight: "bold", fontSize: "24px" }}
              >
                Company.
              </Typography>
            </Stack>

            <Typography sx={{ opacity: "0.5", width: {md: "80%", xs: "100%"}, marginBottom: "1rem"}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              quae ad laboriosam nihil exercitationem quisquam nobis.
            </Typography>

            <SocialMediaIcons />
          </Stack>

          <Stack sx={{
            flexDirection: {md: "row"},
            gap: "20px",
            justifyContent: {md: "space-between"},
           width: "100%",
            marginTop: {md: 0, xs: "5rem"}
          }}>
            <Box>
              <Typography sx={{ marginBottom: "26px"}}>Company</Typography>

              <ul>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>About Us</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Features</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Our Blogs</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Integrations</a></li>
              </ul>
            </Box>

            <Box>
              <Typography sx={{ marginBottom: "26px"}}>Marketing</Typography>

              <ul>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Terms of Service</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Privacy Policy</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Cookie Settings</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Community</a></li>
              </ul>
            </Box>

            <Box>
              <Typography sx={{ marginBottom: "26px"}}>About</Typography>

              <ul>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Integrations</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Use Case</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Customers</a></li>
                <li><a href="#" style={{ color: "white", opacity: "0.5" }}>Designer</a></li>
              </ul>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

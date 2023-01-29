import { Box, Stack, Typography, Button } from "@mui/material";
import bannerImage from "../../assets/banner.jpg";
import {  Popup, SocialMediaIcons } from "../";
import { useState } from "react";
const Banner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Stack
        sx={{
          flexDirection: { md: "row" },
          justifyContent: "space-between",
          gap: { md: "80px", xs: "20px" },
          padding: "20px 0",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <img
            src={bannerImage}
            alt="banner-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "start",
              fontSize: { md: "48px" },
              fontWeight: "520",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing. sit amet
            consectetur
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            minima veritatis ratione ducimus omnis dolorem temporibus facilis
            quidem, ab expedita.
          </Typography>

          <Box marginTop="20px">
            <Button
              variant="contained"
              sx={{
                height: "42px",
                textTransform: "capitalize",
                marginRight: "30px",
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              sx={{
                height: "42px",
                textTransform: "capitalize",
              }}
            >
              Learn More
            </Button>
          </Box>

          <Box marginTop="40px">
            <SocialMediaIcons />
          </Box>
          <Button
            variant="outlined"
            onClick={handleOpen}
            sx={{
              marginTop: "20px",
              textTransform: "capitalize",
            }}
          >
            Open Modal
          </Button>

          {open ? (
            <Popup
              handleClose={handleClose}
              handleOpen={handleOpen}
              open={open}
              setOpen={setOpen}
            />
          ) : null}
        </Box>
      </Stack>
    </>
  );
};

export default Banner;

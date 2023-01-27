import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import feature1Image from "../../assets/messenger.png";
import feature2Image from "../../assets/like.png";
import feature3Image from "../../assets/comment.png";
import feature4Image from "../../assets/user.png";
const Features = () => {
  return (
    <Stack
      sx={{
        flexDirection: { md: "row" },
        justifyContent: "space-between",
        gap: { md: "100px", xs: "50px" },
        margin: "5rem 0",
      }}
    >
      <Stack>
        <motion.p>FEATURES</motion.p>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Our Awesome Features
        </Typography>
        <Typography variant="body" sx={{ margin: "1rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          illo quisquam rem.
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              height: "40px",
              marginTop: "1rem",
            }}
          >
            {" "}
            Get Started
          </Button>
        </Box>
      </Stack>

      <Stack>
        <Stack
          sx={{
            flexDirection: { sm: " row" },
            marginBottom: "40px",
          }}
          justifyContent="space-between"
          gap="40px"
        >
          <Box>
            <motion.img
              src={feature1Image}
              alt="features-image"
              style={{ height: "60px" }}
            />
            <Typography
              variant="h5"
              marginTop="4px"
              sx={{ color: "#111", fontWeight: "600" }}
            >
              Aliquam sed magnang
            </Typography>
            <motion.p>
              Donec ornare adio justo acendy effictur enim urna ultrices
            </motion.p>
          </Box>

          <Box>
            <motion.img
              src={feature2Image}
              alt="features-image"
              style={{ height: "60px" }}
            />
            <Typography
              variant="h5"
              marginTop="4px"
              sx={{ color: "#111", fontWeight: "600" }}
            >
              Aliquam sed magnang
            </Typography>
            <motion.p>
              Donec ornare adio justo acendy effictur enim urna ultrices
            </motion.p>
          </Box>
        </Stack>

        <Stack
          sx={{
            flexDirection: { sm: " row" },
            marginTopm: "20px",
          }}
          justifyContent="space-between"
          gap="40px"
        >
          <Box>
            <motion.img
              src={feature3Image}
              alt="features-image"
              style={{ height: "60px" }}
            />
            <Typography
              variant="h5"
              marginTop="4px"
              sx={{ color: "#111", fontWeight: "600" }}
            >
              Aliquam sed magnang
            </Typography>
            <motion.p>
              Donec ornare adio justo acendy effictur enim urna ultrices
            </motion.p>
          </Box>

          <Box>
            <motion.img
              src={feature4Image}
              alt="features-image"
              style={{ height: "60px" }}
            />
            <Typography
              variant="h5"
              marginTop="4px"
              sx={{ color: "#111", fontWeight: "600" }}
            >
              Aliquam sed magnang
            </Typography>
            <motion.p>
              Donec ornare adio justo acendy effictur enim urna ultrices
            </motion.p>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Features;

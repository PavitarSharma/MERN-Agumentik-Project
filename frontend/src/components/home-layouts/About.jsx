import React from "react";
import paymentImage from "../../assets/payment.png";
import graphImage from "../../assets/graph.png";
import { Box, Stack, Typography } from "@mui/material";
import checkImage from "../../assets/check.png";
import aboutImage from "../../assets/about.png";
const About = () => {
  return (
    <Stack
      sx={{
        flexDirection: { md: "row" },
        margin: "5rem 0",
      }}
    >
      <Stack>
        <Typography variant="p" sx={{ opacity: "0.5" }}>
          ABOUT
        </Typography>
        <Typography variant="h4" sx={{ color: "#111111", fontWeight: "600" }}>
          Let's track your business very quick
        </Typography>
        <Typography
          variant="p"
          my="20px"
          sx={{ opacity: "0.7", width: { md: "60%" } }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eaque
          eos recusandae pariatur non dicta quaerat esse. Suscipit maxime
          repellat repellendus officiis aliquid aspernatur quis neque delectus
          fuga commodi. Dignissimos!
        </Typography>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={checkImage}
              alt="features-image"
              style={{ height: "30px" }}
            />
            <Typography variant="p">Lorem ipsum dolor sit</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={checkImage}
              alt="features-image"
              style={{ height: "30px" }}
            />
            <Typography variant="p">Lorem ipsum dolor sit</Typography>
          </Box>
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={checkImage}
              alt="features-image"
              style={{ height: "30px" }}
            />
            <Typography variant="p">Lorem ipsum dolor sit</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={checkImage}
              alt="features-image"
              style={{ height: "30px" }}
            />
            <Typography variant="p">Lorem ipsum dolor sit</Typography>
          </Box>
        </Stack>
      </Stack>

      <Box>
        <Box
          sx={{
            maxWidth: "800px",
            width: "100%",
            marginTop: { md: "0", xs: "50px" },
            position: "relative",
          }}
        >
          <img src={aboutImage} alt="about" style={{ width: "100%" }} />
          <Box>
            <img
              src={graphImage}
              alt="graph"
              style={{
                position: "absolute",
                height: "150px",
                zIndex: 10,
                top: "25%",
                right: "-25px",
              }}
            />
            <img
              src={paymentImage}
              alt="graph"
              style={{
                position: "absolute",
                height: "100px",
                zIndex: 10,
                bottom: 0,
                left: "-14px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default About;

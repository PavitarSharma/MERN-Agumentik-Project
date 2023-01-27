import React from "react";
import { motion } from "framer-motion";
import likeImage from "../../assets/like.png";
import crownImage from "../../assets/crown.png";
import detailImage from "../../assets/wallet-passes-app.png";
import {
  About,
  Accordian,
  Banner,
  Blog,
  Category,
  Faqs,
  Features,
  Team,
} from "../../components";
import { Box, Stack, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <section id="home">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Banner />
        </motion.div>

        <Features />
      </section>

      <section id="about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <About />
        </motion.div>
      </section>

      <section id="features">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Stack>
            <Stack alignItems="center">
              <Typography sx={{ opacity: "0.7" }}>FEATURES</Typography>
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                How it Works
              </Typography>
            </Stack>

            <Stack
              sx={{
                flexDirection: { sm: "row" },
                gap: "3rem",
                marginTop: "50px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={crownImage}
                    alt="perium"
                    style={{ height: "50px" }}
                  />
                  <Box
                    sx={{
                      width: "40px",
                      height: " 40px",
                      background: "#cff0fc",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      right: "-16px",
                      zIndex: -1,
                    }}
                  ></Box>
                </Box>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "20px", mb: "6px" }}
                >
                  Premium Product
                </Typography>
                <Typography sx={{ opacity: "0.7", textAlign: "center" }}>
                  We listen to our client and create a personalised design
                  solution that is talored
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={likeImage}
                    alt="perium"
                    style={{ height: "50px" }}
                  />
                  <Box
                    sx={{
                      width: "40px",
                      height: " 40px",
                      background: "#cff0fc",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      right: "-16px",
                      zIndex: -1,
                    }}
                  ></Box>
                </Box>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "20px", mb: "6px" }}
                >
                  We create for you
                </Typography>
                <Typography sx={{ opacity: "0.7", textAlign: "center" }}>
                  We listen to our client and create a personalised design
                  solution that is talored
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={detailImage}
                    alt="perium"
                    style={{ height: "50px" }}
                  />
                  <ArrowDownward
                    sx={{
                      position: "absolute",
                      top: "4px",
                      left: "24px",
                      fontWeight: "bold",
                      zIndex: 1,
                      color: "black",
                    }}
                  />
                  <Box
                    sx={{
                      width: "40px",
                      height: " 40px",
                      background: "#cff0fc",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      right: "-16px",
                      zIndex: -1,
                    }}
                  ></Box>
                </Box>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "20px", mb: "6px" }}
                >
                  Leave the details
                </Typography>
                <Typography sx={{ opacity: "0.7", textAlign: "center" }}>
                  We listen to our client and create a personalised design
                  solution that is talored
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </motion.div>
      </section>

      <section id="team">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Team />
        </motion.div>
      </section>

      <section id="team">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Blog />
        </motion.div>
      </section>

      <section id="category">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Category />
        </motion.div>
      </section>
      <section id="faqs">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Faqs />
        </motion.div>
      </section>

      <section id="faqs">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Accordian />
        </motion.div>
      </section>
    </>
  );
};

export default Home;

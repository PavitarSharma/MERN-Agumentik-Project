import { Box, Rating, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { faqData } from "../../assets/data";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Faqs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Stack margin="10rem 0">
      <Stack justifyContent="center" alignItems="center" marginBottom="5rem">
        <Typography sx={{ opacity: "0.5" }}>FAQ'S</Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Our Customers Says
        </Typography>
      </Stack>
      <Box
        sx={{
          maxWidth: "1100px",
          marginLeft: "auto",
          width: "100%",
          marginRight: "auto",
        }}
      >
        <Slider {...settings} className="slider">
          {faqData.map((data) => {
            return (
              <Box
                key={data.id}
                p="14px"
                sx={{
                  background: "white",
          

                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <Typography sx={{ opacity: "0.8" }}>
                  {data.description}
                </Typography>

                <Stack
                  sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "22px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={data.image}
                      alt={data.name}
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%", objectFit: "contain" }}
                    />

                    <Stack>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "black",
                          opacity: "0.5",
                          fontSize: "12px",
                        }}
                      >
                        {data.postedDate}
                      </Typography>
                    </Stack>
                  </Box>
                  <Rating name="read-only" value={data.rating} readOnly />
                </Stack>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Stack>
  );
};

export default Faqs;

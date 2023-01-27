import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { blogData } from "../../assets/data";

const Blog = () => {
  return (
    <Stack margin="8rem 0" width="100%">
      <Stack justifyContent="center" alignItems="center" marginBottom="5rem">
        <Typography sx={{ opacity: "0.5" }}>BLOG</Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Our latest news
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        {blogData.map((data) => {
          return (
            <Box
              key={data.id}
              sx={{
                width: { md: "350px", sm: "450px", width: "100%" },
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <Box >
                <img
                  src={data.image}
                  alt={data.title}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "300px",
                  }}
                />
              </Box>
              <Box sx={{ padding: "20px 16px" }}>
                <Typography sx={{ opacity: "0.5" }}>{data.title}</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  {data.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "16px",
                  }}
                >
                  <Typography>{data.date}</Typography>
                  <Typography>{data.time}</Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Blog;

import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { accordianData } from "../../assets/data";

const Accordian = () => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  useEffect(() => {});
  return (
    <Box margin="5rem 0">
      <Stack>
        <Stack justifyContent="center" alignItems="center" marginBottom="5rem">
          <Typography sx={{ opacity: "0.5" }}>FAQ'S</Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, textAlign:"center" }}>
            Frequentry Asked Questions
          </Typography>
        </Stack>
        {accordianData.map((data) => {
          return (
            <Box
              sx={{
                background: "white",

                borderBottom:
                  clicked === data.id ? "1px solid #999" : "1px solid black",
              }}
              key={data.id}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  padding: "20px 10px",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  alignItems: "center",
                }}
                onClick={() => handleToggle(data.id)}
              >
                <Stack
                  direction="row"
                  gap="10px"
                  sx={{
                    color: clicked === data.id ? "blue" : "black",
                  }}
                >
                  <Typography sx={{ fontSize: {sm: "20px", xs: "16px"}, fontWeight: 600 }}>
                    0{data.id}
                  </Typography>
                  <Typography sx={{ fontSize: {sm: "20px", xs: "16px"}, fontWeight: 600 }}>
                    {data.title}
                  </Typography>
                </Stack>
                <Typography
                  className="control"
                  sx={{
                    border: "1px solid #999",
                    width: {md: "36px", xs: "30px"},
                    height: {md: "36px", xs: "30px"},
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  {clicked === data.id ? "—" : "+"}{" "}
                </Typography>
              </Stack>
              <Box
                sx={{
                  height: clicked === data.id ? "auto" : 0,
                  overflow: "hidden",
                }}
              >
                <Typography sx={{ opacity: 0.5, px: "10px", pb: "10px" }}>
                  {data.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Accordian;

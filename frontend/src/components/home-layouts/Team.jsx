import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import team1Image from "../../assets/team1.jpg";
import team2Image from "../../assets/team2.jpg";
import team3Image from "../../assets/team3.jpg";
import team4Image from "../../assets/team4.jpeg";
import facebookImage from "../../assets/facebook.png";
import linkedinImage from "../../assets/linkedin.png";

const Team = () => {
  return (
    <Stack marginTop="8rem" marginBottom="6rem">
      <Stack justifyContent="center" alignItems="center" marginBottom="4rem">
        <Typography  sx={{ opacity: "0.5" }}>
          Team
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Creative Members
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: { md: "row" },
        }}
      >
        <Stack
          sx={{
            flexDirection: { sm: "row" },
            gap: "20px",
            padding: "20px",
          }}
        >
          <img
            src={team1Image}
            alt="team"
            height="200px"
            width="200px"
            style={{ objectFit: "contain", borderRadius: "10px" }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Viviant Lenon
            </Typography>
            <Typography sx={{ color: "blue" }}>3D Illustrator</Typography>
            <Typography sx={{ opacity: "0.5", marginTop: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum beatae sapiente consequatur ut? Explicabo error
            </Typography>

            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <a
                href={"https://www.linkedin.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="linkedin-link"
                  src={linkedinImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>

              <a
                href={"https://www.facebook.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="facebook-link"
                  src={facebookImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>
            </Box>
          </Box>
        </Stack>

        <Stack
          sx={{
            flexDirection: { sm: "row" },
            gap: "20px",
            padding: "20px",
          }}
        >
          <img
            src={team2Image}
            alt="team"
            height="200px"
            width="200px"
            style={{ objectFit: "contain", borderRadius: "10px" }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Jonathan Smith
            </Typography>
            <Typography sx={{ color: "blue" }}>Project Manager</Typography>
            <Typography sx={{ opacity: "0.5", marginTop: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum beatae sapiente consequatur ut? Explicabo error
            </Typography>

            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <a
                href={"https://www.linkedin.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="linkedin-link"
                  src={linkedinImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>

              <a
                href={"https://www.facebook.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="facebook-link"
                  src={facebookImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>
            </Box>
          </Box>
        </Stack>
      </Stack>

      <Stack
        sx={{
          flexDirection: { md: "row" },
        }}
      >
        <Stack
          sx={{
            flexDirection: { sm: "row" },
            gap: "20px",
            padding: "20px",
          }}
        >
          <img
            src={team3Image}
            alt="team"
            height="200px"
            width="200px"
            style={{ objectFit: "contain", borderRadius: "10px" }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Alisa Parker
            </Typography>
            <Typography sx={{ color: "blue" }}>UX Designer</Typography>
            <Typography sx={{ opacity: "0.5", marginTop: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum beatae sapiente consequatur ut? Explicabo error
            </Typography>

            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <a
                href={"https://www.linkedin.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="linkedin-link"
                  src={linkedinImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>

              <a
                href={"https://www.facebook.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="facebook-link"
                  src={facebookImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>
            </Box>
          </Box>
        </Stack>

        <Stack
          sx={{
            flexDirection: { sm: "row" },
            gap: "20px",
            padding: "20px",
          }}
        >
          <img
            src={team4Image}
            alt="team"
            height="200px"
            width="200px"
            style={{ objectFit: "contain", borderRadius: "10px" }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Edmund Sjorgen
            </Typography>
            <Typography sx={{ color: "blue" }}>Ui Designer</Typography>
            <Typography sx={{ opacity: "0.5", marginTop: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum beatae sapiente consequatur ut? Explicabo error
            </Typography>

            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <a
                href={"https://www.linkedin.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="linkedin-link"
                  src={linkedinImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>

              <a
                href={"https://www.facebook.com"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="facebook-link"
                  src={facebookImage}
                  style={{ width: "24px", opacity: "0.6" }}
                />
              </a>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Team;

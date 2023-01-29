import instagramImage from "../assets/instagram.png";
import facebookImage from "../assets/facebook.png";
import linkedinImage from "../assets/linkedin.png";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const SocialMediaIcons = () => {
  const { user } = useSelector((state) => state.users);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <a
        href={
          user && user.linkedinLink
            ? user.linkedinLink
            : "https://www.linkedin.com"
        }
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src={linkedinImage}
          style={{ width: "30px" }}
        />
      </a>

      <a
        href={
          user && user.facebookLink
            ? user.facebookLink
            : "https://www.facebook.com"
        }
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="facebook-link"
          src={facebookImage}
          style={{ width: "30px" }}
        />
      </a>
      <a
        href={
          user && user.instagramLink
            ? user.instagramLink
            : "https://www.instagram.com/"
        }
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="instagram-link"
          src={instagramImage}
          style={{ width: "30px" }}
        />
      </a>
    </Box>
  );
};

export default SocialMediaIcons;

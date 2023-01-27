import { Box, Button, InputBase } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSocialLinks } from "../../redux/slice/userSlice";
const Social = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const jsonData = {
      facebookLink: facebook,
      instagramLink: instagram,
      linkedinLink: linkedin,
    };
    dispatch(updateSocialLinks(jsonData))
  };
  return (
    <Box>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          maxWidth: "580px",
          width: "100%",
          backgroundColor: "white",
          padding: "20px 24px",
          borderRadius: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
        onSubmit={handleOnSubmit}
      >
        <Box>
          <InputBase
            id="facebookLink"
            type="url"
            name="facebookLink"
            onChange={(event) => setFacebook(event.target.value)}
            required
            value={facebook}
            placeholder="Facebook Url"
            sx={{
              border: "1px solid gray",
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </Box>
        <Box className="form-control">
          <InputBase
            id="instagramLink"
            type="url"
            name="instagramLink"
            onChange={(event) => setInstagram(event.target.value)}
            required
            value={instagram}
            placeholder="Instagram Url"
            sx={{
              border: "1px solid gray",
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </Box>

        <Box>
          <InputBase
            id="linkedinLink"
            type="url"
            name="linkedinLink"
            onChange={(event) => setLinkedin(event.target.value)}
            required
            value={linkedin}
            placeholder="Linkedin Url"
            sx={{
              border: "1px solid gray",
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{
            padding: "10px",
            color: "white",
            fontWeight: 600,
            textTransform: "capitalize",
            fontSize: "16px",
            background: "blue",
          }}
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default Social;

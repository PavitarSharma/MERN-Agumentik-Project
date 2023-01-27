import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const buttons = [
  {
    id: 1,
    name: "Dashboard",
    url: "",
  },
  {
    id: 2,
    name: "Social Link",
    url: "social-links",
  },

  {
    id: 3,
    name: "Images",
    url: "images",
  },

  {
    id: 4,
    name: "Users",
    url: "users",
  },
];

const Admin = () => {
  const navigate = useNavigate();
  const [clickedId, setClickedId] = useState(1);
  return (
    <>
      <Stack
        sx={{
          flexDirection: { md: "row" },
          gap: {md: "8rem", xs: "2rem"},
          marginTop: "5rem",
          height: "100vh",
        }}
      >
        <Stack
          sx={{
            flexDirection: { md: "column", xs: "row" },
            gap: "2rem",
            width: { md: "10%" },
            flexWrap: "wrap"
          }}
        >
          {buttons.map((data, index) => {
            return (
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: data.id === clickedId ? "blue" : "",
                  color: data.id === clickedId ? "white" : "",
                  textTransform: "capitalize",
                  transition: "all 0.5s",
                  "&:hover": {
                    background: "blue",
                    color: "white",
                  },
                }}
                className={` ${
                  data.id === clickedId
                    ? "bg-yellow text-white px-4 py-3 rounded cursor-pointer active"
                    : "border-2 border-black px-4 py-3 rounded cursor-pointer"
                }`}
                key={data.id}
                onClick={() => {
                  navigate(`${data.url}`);
                  setClickedId(data.id);
                }}
              >
                {data.name}
              </Button>
            );
          })}
        </Stack>

        <Box sx={{ width: { md: "80%" } }}>
          <Outlet />
        </Box>
      </Stack>
    </>
  );
};

export default Admin;

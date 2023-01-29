import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Stack, Typography, Button, Box, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { DragHandle, ExpandMore, Spa } from "@mui/icons-material";
import { Sidebar } from "./";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../redux/slice/userSlice";
export const NavbarLink = ({
  link,
  page,
  selectedPage,
  setSelectedPage,
  icon,
}) => {
  const lowerCasePage = link.toLowerCase();
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={selectedPage === lowerCasePage ? "active" : "inactive"}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
      {icon}
    </AnchorLink>
  );
};

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const logoutUser = () => {
    toast.success("User logged out");
    dispatch(logout());
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login");
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ position: "sticky", top: "0", zIndex: 100, background: "white" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py="20px"
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Spa sx={{ fontSize: "34px", color: "blue" }} />
          <Typography
            variant="span"
            sx={{ color: "#111", fontWeight: "bold", fontSize: "24px" }}
          >
            Company.
          </Typography>
        </Link>

        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <DragHandle
            sx={{ fontSize: "34px", cursor: "pointer" }}
            onClick={() => setOpenSidebar((prev) => !prev)}
          />
        </Box>

        <Box sx={{ display: { md: "flex", xs: "none" }, gap: "20px" }}>
          <NavbarLink
            page="Home"
            link="home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavbarLink
            page="About"
            link="about"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavbarLink
            page="Category"
            link="category"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavbarLink
            page="Team"
            link="team"
            icon={
              <ExpandMore
                sx={{
                  fontSize: "18px",
                  position: "absolute",
                  top: "0px",
                  marginLeft: "2px",
                }}
              />
            }
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavbarLink
            page="FAQs"
            link="faqs"
            icon={
              <ExpandMore
                sx={{
                  fontSize: "18px",
                  position: "absolute",
                  top: "0px",
                  marginLeft: "2px",
                }}
              />
            }
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </Box>

        {user ? (
          <Stack
            direction="row"
            alignItems="center"
            gap="24px"
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            {user.role === "admin" ? (
              <Button
                onClick={() => navigate("/admin")}
                sx={{ textTransform: "capitalize", fontSize: "17px" }}
              >
                Admin
              </Button>
            ) : (
              <Button
                
                sx={{ textTransform: "capitalize", fontSize: "17px" }}
              >
                {user.name}
              </Button>
            )}
            <Button
              onClick={logoutUser}
              sx={{ textTransform: "capitalize", fontSize: "17px" }}
            >
              Logout
            </Button>
          </Stack>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            gap="24px"
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <Button
              onClick={() => navigate("/login")}
              sx={{ textTransform: "capitalize", fontSize: "17px" }}
            >
              Log in
            </Button>
            <Button
              onClick={() => navigate("/signUp")}
              sx={{ textTransform: "capitalize", fontSize: "17px" }}
            >
              Sign Up
            </Button>
          </Stack>
        )}
      </Stack>

      <Box sx={{
        display: { md: "none", xs: "block" },
        
      }}>
        {openSidebar ? (
          <Sidebar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            openSidebar={openSidebar}
          />
        ) : null}
      </Box>
    </Container>
  );
};

export default Header;

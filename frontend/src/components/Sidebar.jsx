import { ExpandMore } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/slice/userSlice";

export const SidebarLink = ({
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

const Sidebar = ({ selectedPage, setSelectedPage, openSidebar }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const logoutUser = () => {
    toast.success("User logged out");
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Box
      sx={{
        position: "fixed",
        background: "white",
        height: "100vh",
        maxWidth: "350px",
        width: "100%",
        right: openSidebar ? "0" : "-100%",
        transition: "all 0.5s",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderLeft: "1px solid #dcdcdc",
        padding: "20px",
      }}
    >
      <Stack sx={{ gap: "30px" }}>
        <SidebarLink
          page="Home"
          link="home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <SidebarLink
          page="About"
          link="about"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <SidebarLink
          page="Category"
          link="category"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <SidebarLink
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
        <SidebarLink
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

        {user ? (
          <Stack
            direction="row"
            gap="24px"
            justifyContent="flex-start"
            flexWrap="wrap"
            
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
                onClick={() => navigate("/login")}
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
          <Stack gap="20px" pl="14px">
            <Link to="/login">
              <Typography
                sx={{
                  background: "blue",
                  color: "white",
                  textAlign: "center",
                  padding: "9px",
                  transition: "all 0.5s",
                  "&:hover": {
                    background: "white",
                    color: "black",
                    border: "1px solid blue",
                  },
                }}
              >
                Log in
              </Typography>
            </Link>
            <Link to="/signUp">
              <Typography
                sx={{
                  background: "white",
                  color: "black",
                  textAlign: "center",
                  padding: "9px",
                  transition: "all 0.5s",
                  border: "1px solid blue",
                  "&:hover": {
                    background: "blue",
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Typography>
            </Link>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Sidebar;

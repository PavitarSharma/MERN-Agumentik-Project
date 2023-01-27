import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Admin,
  Contents,
  Dashboard,
  Home,
  Images,
  Login,
  NotFound,
  Register,
  Social,
  Users,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Footer } from "./components";
import { Container } from "@mui/material";
import ProctedRoutes from "./utils/ProctedRoutes";
import { useSelector } from "react-redux";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  
  const { user, token } = useSelector((state) => state.users);
// console.log(JSON.parse(localStorage.getItem("token")));
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // console.log(token);

  return (
    <>
      <Header
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Container maxWidth="xl">
        <Routes>
          
            <Route index element={<Home />} />
            {user && user.role === "admin" && (
              <Route path="/admin" element={<Admin />}>
                <Route index element={<Dashboard />} />
                <Route path="social-links" element={<Social />} />
                <Route path="images" element={<Images />} />
                <Route path="users" element={<Users />} />
              </Route>
            )}
            <Route exact path="/content/:id" element={<Contents />} />
       
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;

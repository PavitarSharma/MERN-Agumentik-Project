import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, InputBase, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { signUp} from "../../redux/slice/userSlice";


const validate = Yup.object({
  name: Yup.string()
    .min(2, "Must be 2 chracters or more")
    .max(15, "Must be 15 chracters or less")
    .required("Username field is required!"),
  email: Yup.string()
    .email("Email is Invalid")
    .required("Email field is required!"),

  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "password should contain atleast one number and one special character"
    )
    .required("Passowrd field is required!"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector(state => state.users)

  const handleOnSubmit = (data) => {
    dispatch(signUp(data))
    if(success) {
      toast.success("Successfully regstered.");
      navigate("/login")
    }else {
      toast.error("Something went wrong. Try Again");
      navigate("/signUp")
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem 0",
        backgroundColor: "white",
        scrollBehavior: "smooth",
      }}
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              maxWidth: "580px",
              width: "100%",
              backgroundColor: "white",
              padding: "20px 24px",
              borderRadius: "10px",
              margin: "40px 0",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "32px",
                fontWeight: 600,
                mt: "10px",
              }}
            >
              Sign Up
            </Typography>

            <Box>
              <InputBase
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter name"
                sx={{
                  border: "1px solid gray",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#e53935", margin: "6px" }}
              >
                {errors.name && touched.name && errors.name}
              </Typography>
            </Box>
            <Box>
              <InputBase
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
                sx={{
                  border: "1px solid gray",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#e53935", margin: "6px" }}
              >
                {errors.email && touched.email && errors.email}
              </Typography>
            </Box>

            <Box>
              <InputBase
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                sx={{
                  border: "1px solid gray",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#e53935", margin: "6px" }}
              >
                {errors.password && touched.password && errors.password}
              </Typography>
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
                background: "blue"
              }}
              // disabled={isSubmitting}
            >
              Sign Up
            </Button>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              gap="4px"
              mb="1rem"
            >
              <Typography>Already have an account.</Typography>
              <Link to="/login" style={{ fontWeight: 600, color: "#d32f2f" }}>
                Login
              </Link>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;

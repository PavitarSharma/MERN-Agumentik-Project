import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Box, InputBase, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getContent, updateContent } from "../redux/slice/contentSclice";
import { toast } from "react-toastify";

const validate = Yup.object({
  image: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter image url!"
    )
    .required("Image field is required!"),
  content: Yup.string()
    .min(8, "Must be 8 chracters or more")
    .required("Content field is required!"),
});

const Contents = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {error } = useSelector(state => state.contents)
 

  const handleOnSubmit = (data) => {
    dispatch(updateContent({id, image: data.image, content: data.content}))
    if(!error) {
      toast.success("Update successfully")
      navigate("/")
    }else {
      toast.error("Try again!")
    }
  };



  return (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh"
    }}>
      <Formik
        initialValues={{
          image:  "",
          content:  "",
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
            onSubmit={handleSubmit}
          >
            <Box>
              <InputBase
                id="image"
                type="url"
                name="image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
                placeholder="Add Image"
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
                {errors.image && touched.image && errors.image}
              </Typography>
            </Box>

            <Box>
              <textarea
                id="content"
                type="string"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                rows="4"
                value={values.content}
                placeholder="Add your content"
                style={{
                  border: "1px solid gray",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#e53935", margin: "6px" }}
              >
                {errors.content && touched.content && errors.content}
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
                background: "blue",
              }}
            >
              Change
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Contents;

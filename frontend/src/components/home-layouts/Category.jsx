import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContent } from "../../redux/slice/contentSclice";
import { Link } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();
  const { loading, error, contents } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(getAllContent());
  }, [dispatch]);
 

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>Error</div>
      </>
    );
  }
  return (
    <Stack>
      <Stack justifyContent="center" alignItems="center" marginBottom="5rem">
        <Typography sx={{ opacity: "0.5" }}>Category</Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, textAlign: "center", mb: "2rem" }}
        >
          Our Categorys and Features
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {contents &&
          contents?.map((content) => {
            return (
              <Box key={content._id} sx={{ position: "relative" }}>
                <Link to={`/content/${content._id}`}>
                  <Box sx={{ width: { md: "350px", sm: "450px" } }}>
                    <img
                      src={content.image}
                      alt="image"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                </Link>

                <Typography
                  sx={{
                    position: "absolute",
                    textAlign: "start",
                    bottom: "4px",
                    padding: "0 12px 12px 10px",
                    color: "white",
                  }}
                >
                  {content.content.length > 30
                    ? content.content.substring(0, 80) + "..."
                    : content.content}
                </Typography>
              </Box>
            );
          })}
      </Stack>
    </Stack>
  );
};

export default Category;

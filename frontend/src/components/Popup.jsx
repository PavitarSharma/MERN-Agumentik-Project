import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import { Box, Button, InputBase, Modal, Stack, Typography } from "@mui/material";
import { createPopupMessage } from "../redux/slice/contentSclice";
const Popup = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s0qrjue",
        "template_45c6q1u",
        form.current,
        "VoY-CbYP3oBcG0P3K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    dispatch(createPopupMessage({ name, email, contact }));
    toast.success("Content saved successfully.");
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <form
            ref={form}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              maxWidth: "580px",
              width: "100%",
              backgroundColor: "white",
              padding: "40px 24px",
              borderRadius: "10px",
              margin: "40px 0",
              marginLeft: "auto",
              marginRight: "auto",
             position: "fixed",
             top: "20%",
             left: "50%",
             transform: "translateX(-50%)",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <InputBase
              id="name"
              type="text"
              name="name"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Name"
              sx={{
                border: "1px solid gray",
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <InputBase
              id="contact"
              type="text"
              name="contact"
              value={contact}
              required
              onChange={(event) => setContact(event.target.value)}
              placeholder="Enter Contact"
              sx={{
                border: "1px solid gray",
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />

            <InputBase
              id="email"
              type="email"
              name="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              sx={{
                border: "1px solid gray",
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                onClick={handleOnSubmit}
                variant="contained"
                sx={{
                  background: "blue",
                  "&:hover": {
                    background: "blue",
                    color: "white",
                  },
                }}
                className="bg-blue px-6 rounded cursor-pointer py-2"
              >
                Submit
              </Button>
              <Button
                sx={{
                  backgroundColor: "#e53935",
                  color: "white",
                  "&:hover": {
                    background: "blue",
                    color: "white",
                  },
                }}
                onClick={handleClose}
                variant="outlined"
              >
                Close
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Popup;

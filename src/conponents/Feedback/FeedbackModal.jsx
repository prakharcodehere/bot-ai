import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

const FeedbackModal = ({
  open,
  onClose,
  onRatingChange,
  onFeedbackChange,
  onSubmit
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
        <h2 id="modal-modal-title">Provide Feedback</h2>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Rating
            name="rating"
            onChange={(event, newValue) => {
              onRatingChange(newValue);
            }}
          />
          <TextField
            id="feedback"
            label="Feedback"
            multiline
            rows={4}
            variant="outlined"
            onChange={onFeedbackChange}
          />
          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;

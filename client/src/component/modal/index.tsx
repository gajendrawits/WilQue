import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #9155FD",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

interface ModalProps {
  title?: string;
  subtitle?: string;
  open: boolean;
  handleClose: () => void;
}

const BasicModal = ({ open, handleClose, title, subtitle }: ModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ color: "#9155FD", textAlign: "center" }}
          >
            {title}
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 4, color: "grey", textAlign: "center" }}
            variant="h6"
          >
            {subtitle}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;

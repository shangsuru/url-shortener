import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import QRCode from "react-qr-code";
import { MdQrCode2 } from "react-icons/md";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface QRCodeModalProps {
  value: string;
}

export default function QRCodeModal({ value }: QRCodeModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MdQrCode2 onClick={handleOpen} color="grey" size="1.5em" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-center">
            <QRCode value={value}></QRCode>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

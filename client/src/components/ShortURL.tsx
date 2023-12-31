"use client";

import { useState } from "react";
import { MdBarChart, MdClose } from "react-icons/md";
import QRCodeModal from "./QRCodeModal";
import Tooltip from "@mui/material/Tooltip";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

interface ShortURLProps {
  longURL: string;
  shortURL: string;
  removeURLFromLocalStorage: (longURL: string) => void;
}

function displayURL(url: string) {
  url = url.replace("https://", "").replace("http://", "");
  if (url.length > 20) {
    return url.slice(0, 20) + "...";
  }
  return url;
}

export default function ShortURL({
  longURL,
  shortURL,
  removeURLFromLocalStorage,
}: ShortURLProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative card sm:flex sm:flex-left sm:justify-around max-w-2xl">
      <Snackbar open={show} autoHideDuration={6000}>
        <MuiAlert
          elevation={10}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
        >
          Copied to clipboard!
        </MuiAlert>
      </Snackbar>
      <div className="p-2">
        <span id="longURL" className="font-bold mr-3">
          {displayURL(longURL)}
        </span>
        <a id="shortURL" className="link" href={longURL}>
          {displayURL(shortURL)}
        </a>
      </div>
      <div className="flex flex-left">
        <Tooltip title="View QR Code">
          <div className="hover p-2">
            <QRCodeModal value={shortURL} />
          </div>
        </Tooltip>
        <Tooltip title="View stats">
          <div className="hover p-2">
            <a href={`data?url=${shortURL.split("/").pop()}`}>
              <MdBarChart color="grey" size="1.5em" />
            </a>
          </div>
        </Tooltip>
        <div
          className="link hover p-2"
          onClick={() => {
            navigator.clipboard.writeText(shortURL);
            setShow(true);
          }}
        >
          Copy
        </div>
      </div>
      <div className="absolute top-0 right-0 hover:text-blue-500 cursor-pointer p-2">
        <MdClose id="close" size="1.5em" onClick={removeURLFromLocalStorage} />
      </div>
    </div>
  );
}

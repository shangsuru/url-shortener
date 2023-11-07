"use client";

import { MdQrCode2, MdBarChart, MdClose } from "react-icons/md";
import QRCodeModal from "./QRCodeModal";

interface ShortURLProps {
  longURL: string;
  shortURL: string;
}

function displayURL(url: string) {
  url = url.replace("https://", "").replace("http://", "");
  if (url.length > 20) {
    return url.slice(0, 20) + "...";
  }
  return url;
}

export default function ShortURL({ longURL, shortURL }: ShortURLProps) {
  return (
    <div className="relative card sm:flex sm:flex-left sm:justify-around max-w-2xl">
      <div className="p-2">
        <span className="font-bold mr-3">{displayURL(longURL)}</span>
        <a className="link" href={longURL}>
          {displayURL(shortURL)}
        </a>
      </div>
      <div className="flex flex-left">
        <div className="hover p-2">
          <QRCodeModal value={shortURL} />
        </div>
        <div className="hover p-2">
          <a href={`data?url=${shortURL}`}>
            <MdBarChart color="grey" size="1.5em" />
          </a>
        </div>
        <div
          className="link hover p-2"
          onClick={() => {
            navigator.clipboard.writeText(shortURL);
          }}
        >
          Copy
        </div>
      </div>
    </div>
  );
}

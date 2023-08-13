"use client";

import { MdQrCode2, MdBarChart, MdClose } from "react-icons/md";

interface ShortURLProps {
  longURL: string;
  shortURL: string;
}

export default function ShortURL({ longURL, shortURL }: ShortURLProps) {
  return (
    <div className="relative card sm:flex sm:flex-left sm:justify-around max-w-2xl">
      <div className="p-2">
        <span className="font-bold mr-3">{longURL}</span>
        <a className="link" href={shortURL}>
          {shortURL}
        </a>
      </div>
      <div className="flex flex-left">
        <div className="hover p-2">
          <MdQrCode2 color="grey" size="1.5em" />
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
      <div className="absolute top-0 right-0 hover:text-blue-500 cursor-pointer p-2">
        <MdClose size="1.5em" />
      </div>
    </div>
  );
}

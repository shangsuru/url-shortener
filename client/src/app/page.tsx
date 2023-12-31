"use client";

import React, { useEffect, useState } from "react";
import ShortURL from "@/components/ShortURL";
import axios from "axios";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

interface Url {
  long: string;
  short: string;
}

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [createdUrls, setCreatedUrls] = useState<Url[]>([]);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    restoreURLsFromLocalStorage();
  }, []);

  function restoreURLsFromLocalStorage() {
    const urls = localStorage.getItem("createdUrls");
    if (urls) {
      setCreatedUrls(JSON.parse(urls));
    }
  }

  function removeURLFromLocalStorage(longURL: string) {
    const urls = localStorage.getItem("createdUrls");
    if (urls) {
      const urlsArr: Url[] = JSON.parse(urls);
      const filteredUrls = urlsArr.filter((url) => url.long !== longURL);
      setCreatedUrls(filteredUrls);
      localStorage.setItem("createdUrls", JSON.stringify(filteredUrls));
    }
  }

  function getShortUrl(longUrl: string) {
    // if it doesnt start with http:// or https://, add it
    if (
      !longUrl.startsWith("http://") &&
      !longUrl.startsWith("https://") &&
      longUrl !== ""
    ) {
      longUrl = "https://" + longUrl;
    }
    // check if url is valid URI
    try {
      new URL(longUrl);
    } catch (err) {
      setShowError(true);
      setErrorMessage("Please enter a valid URL.");
      return;
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_API}/shorten?long=${longUrl}`)
      .then((res) => {
        if (res.data.error) {
          setShowError(true);
          setErrorMessage(res.data.error);
          return;
        }
        setCreatedUrls([...createdUrls, res.data]);
        localStorage.setItem(
          "createdUrls",
          JSON.stringify([...createdUrls, res.data])
        );
      })
      .catch((err) => {
        setShowError(true);
        setErrorMessage("Could not process request. Please try again.");
      });
  }

  function handleClose(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    setShowError(false);
  }

  return (
    <div className="mt-20 sm:mx-20">
      <Snackbar open={showError} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={10}
          variant="filled"
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>
      <div>
        <div className="card max-w-[1500px] text-md md:text-xl lg:text-2xl 2xl:text-4xl">
          <h1 className="font-bold flex justify-center items-center text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl mb-10 lg:mb-20">
            LinkShrink URL Shortener
          </h1>
          <p className="flex justify-center items-center text-center sm:text-md sm:text-xl lg:text-2xl 2xl:text-4xl mt-5 2xl:mt-10  text-gray-500">
            Create short & memorable links in seconds with this free tool.
          </p>

          <div className="sm:flex sm:justify-center sm:items-center sm:flex-left mt-10 2xl:mt-20">
            <input
              placeholder="Enter link here"
              className="px-4 py-2 block sm:w-2/3 lg:w-3/4 border border-grey-800 outline-none  focus:border-black mr-3 lg:mr-10"
              value={longUrl}
              onChange={(e) => {
                setLongUrl(e.target.value);
              }}
            />
            <button
              className="font-bold mt-5 sm:mt-0 px-4 py-2 sm:w-1/3 lg:w-1/4 bg-blue-500 hover:bg-blue-700 text-white border border-blue-700 rounded"
              onClick={(e) => {
                getShortUrl(longUrl);
              }}
            >
              Shorten URL
            </button>
          </div>

          <div className="mt-10 2xl:mt-20 flex justify-center items-center">
            <a href="/stats" className="link">
              Show URL stats
            </a>
          </div>
        </div>
      </div>
      <div className="m-5">
        {createdUrls.map((url) => {
          return (
            <ShortURL
              key={url.short}
              longURL={url.long}
              shortURL={`${process.env.NEXT_PUBLIC_BACKEND_API}/${url.short}`}
              removeURLFromLocalStorage={() =>
                removeURLFromLocalStorage(url.long)
              }
            />
          );
        })}
      </div>
    </div>
  );
}

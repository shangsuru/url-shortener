import { useState } from "react";

import ShortURL from "@/components/ShortURL";

export default function Home() {
  function getShortUrl(longUrl: string) {
    fetch(`localhost:8080/shorten?long=${longUrl}`).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }

  return (
    <div className="mt-20 sm:mx-20">
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
            />
            <button className="font-bold mt-5 sm:mt-0 px-4 py-2 sm:w-1/3 lg:w-1/4 bg-blue-500 hover:bg-blue-700 text-white border border-blue-700 rounded">
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
        <ShortURL longURL="henryhelm.com" shortURL="linkshrink.io/rgzbyax" />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import WorldMap from "react-svg-worldmap";
import BarChart from "@/components/BarChart";
import { MdOpenInNew, MdContentCopy } from "react-icons/md";
import QRCodeModal from "@/components/QRCodeModal";
import Tooltip from "@mui/material/Tooltip";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function Data() {
  const searchParams = new URLSearchParams(window.location.search);

  const [show, setShow] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const shortUrl = searchParams.get("url");
    if (shortUrl) {
      getStats(shortUrl);
    }
  }, []);

  function getStats(shortUrl: string) {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}/stats/${shortUrl}`)
      .then((res) => {
        console.log(res.data);
        setClickCount(res.data.count);
        setCountryData(res.data.country_counts);
        console.log(res.data.country_counts);
      });
  }

  const shortUrl =
    process.env.NEXT_PUBLIC_BACKEND_API + "/" + searchParams.get("url");

  return (
    <div>
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
      <div className="card">
        <div className="relative xl:flex xl:flex-left xl:justify-around">
          <div className="mb-10 text-xl">
            <div className="sm:flex sm:flex-left">
              <div className="p-2 mr-20 font-bold">{shortUrl}</div>
              <div className="flex flex-left">
                <Tooltip title="Open in new tab">
                  <div className="hover p-2">
                    <a href="shortURL" target="_blank">
                      <MdOpenInNew color="grey" size="1.5em" />
                    </a>
                  </div>
                </Tooltip>
                <Tooltip title="View QR Code">
                  <div className="hover p-2">
                    <QRCodeModal value={shortUrl} />
                  </div>
                </Tooltip>
                <Tooltip title="Copy to clipboard">
                  <div
                    className="hover p-2"
                    onClick={() => {
                      navigator.clipboard.writeText(shortUrl);
                      setShow(true);
                    }}
                  >
                    <MdContentCopy color="grey" size="1.5em" />
                  </div>
                </Tooltip>
              </div>
            </div>
            <div className="mt-5 text-xl">
              Total Clicks <span className="text-blue-500">{clickCount}</span>
            </div>
          </div>
          <div className="xl:ml-10">
            <WorldMap
              color="var(--foreground)"
              size="responsive"
              data={countryData}
              valueSuffix="%"
              backgroundColor="var(--card)"
            />
          </div>
        </div>
        <BarChart />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import WorldMap from "react-svg-worldmap";
import BarChart from "@/components/BarChart";
import { MdOpenInNew, MdContentCopy } from "react-icons/md";
import QRCodeModal from "@/components/QRCodeModal";
import Tooltip from "@mui/material/Tooltip";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function Data() {
  const [show, setShow] = useState(false);

  const mapData = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

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
              <div className="p-2 mr-20 font-bold">shortURL</div>
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
                    <QRCodeModal value="shortURL" />
                  </div>
                </Tooltip>
                <Tooltip title="Copy to clipboard">
                  <div
                    className="hover p-2"
                    onClick={() => {
                      navigator.clipboard.writeText("shortURL");
                      setShow(true);
                    }}
                  >
                    <MdContentCopy color="grey" size="1.5em" />
                  </div>
                </Tooltip>
              </div>
            </div>
            <div className="mt-5 text-xl">
              Total Clicks <span className="text-blue-500">1234</span>
            </div>
          </div>
          <div className="xl:ml-10">
            <WorldMap
              color="var(--foreground)"
              size="responsive"
              data={mapData}
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

"use client";

import WorldMap from "react-svg-worldmap";
import BarChart from "@/components/BarChart";
import { MdQrCode2, MdOpenInNew, MdContentCopy } from "react-icons/md";

export default function Data() {
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
      <div className="card">
        <div className="relative xl:flex xl:flex-left xl:justify-around">
          <div className="mb-10 text-xl">
            <div className="sm:flex sm:flex-left">
              <div className="p-2 mr-20">
                <span className="font-bold mr-3">longURL</span>
                <a className="link" href="shortURL">
                  shortURL
                </a>
              </div>
              <div className="flex flex-left">
                <div className="hover p-2">
                  <MdOpenInNew color="grey" size="1.5em" />
                </div>

                <div className="hover p-2">
                  <MdQrCode2 color="grey" size="1.5em" />
                </div>
                <div
                  className="hover p-2"
                  onClick={() => {
                    navigator.clipboard.writeText("shortURL");
                  }}
                >
                  <MdContentCopy color="grey" size="1.5em" />
                </div>
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

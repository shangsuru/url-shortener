"use client";

import WorldMap from "react-svg-worldmap";
import BarChart from "@/components/BarChart";

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
      <div className="bg-[var(--card)] p-5 sm:p-10 shadow-lg">
        <div className="xl:flex xl:flex-left xl:justify-around">
          <div className="mb-10">
            <div>LinkShrink with visit url copy and qr code button</div>
            <div>Actual URL</div>
            <div>When it was created</div>
            <div>Total Clicks 1234</div>
          </div>
          <WorldMap
            color="var(--foreground)"
            size="responsive"
            data={mapData}
            valueSuffix="%"
            backgroundColor="var(--card)"
          />
        </div>
        <BarChart />
      </div>
    </div>
  );
}

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  time: number;
  clicks: number;
}

function addEmptyTimeSlots(data: DataPoint[]): DataPoint[] {
  // there should be time key from 0 to 23, if i is not present already, add {time: i, count: 0}
  console.log(data);
  const newData: DataPoint[] = [];
  for (let i = 0; i < 24; i++) {
    const found = data.find((d) => d.time === i);
    if (found) {
      newData.push(found);
    } else {
      newData.push({ i, clicks: 0 });
    }
  }

  return newData;
}

export default function ClickChart({ data }: { data: DataPoint[] }) {
  const width = 1000;

  return (
    <ResponsiveContainer width="92%" height={width < 640 ? 150 : 300}>
      <BarChart
        width={500}
        height={300}
        data={addEmptyTimeSlots(data)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" label="Time" />
        <YAxis />
        <Bar dataKey="count" fill="var(--foreground)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

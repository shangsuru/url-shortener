import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ClickChart() {
  const { width, height } = useWindowDimensions();
  const data = [
    {
      time: "1AM",
      clicks: 4000,
    },
    {
      time: "2AM",
      clicks: 3000,
    },
    {
      time: "3AM",
      clicks: 2000,
    },
    {
      time: "4AM",
      clicks: 2780,
    },
    {
      time: "5AM",
      clicks: 1890,
    },
    {
      time: "6AM",
      clicks: 2390,
    },
    {
      time: "7AM",
      clicks: 3490,
    },
    {
      time: "8AM",
      clicks: 4000,
    },
    {
      time: "9AM",
      clicks: 3000,
    },
    {
      time: "10AM",
      clicks: 2000,
    },
    {
      time: "11AM",
      clicks: 2780,
    },
    {
      time: "12PM",
      clicks: 1890,
    },
    {
      time: "1PM",
      clicks: 2390,
    },
    {
      time: "2PM",
      clicks: 3490,
    },
    {
      time: "3PM",
      clicks: 2000,
    },
    {
      time: "4PM",
      clicks: 2780,
    },
    {
      time: "5PM",
      clicks: 1890,
    },
    {
      time: "6PM",
      clicks: 2390,
    },
    {
      time: "7PM",
      clicks: 3490,
    },
    {
      time: "8PM",
      clicks: 4000,
    },
    {
      time: "9PM",
      clicks: 3000,
    },
    {
      time: "10PM",
      clicks: 2000,
    },
    {
      time: "11PM",
      clicks: 2780,
    },
    {
      time: "12AM",
      clicks: 1890,
    },
  ];

  return (
    <ResponsiveContainer width="90%" height={width < 640 ? 150 : 300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="clicks" fill="var(--foreground)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

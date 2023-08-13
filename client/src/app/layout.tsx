import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkShrink",
  description: "Create short & memorable links",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
        <div className="absolute bottom-0 right-0 m-5">
          <a
            href="https://henryhelm.com/projects"
            className="hover:text-blue-500 transition"
          >
            Created by Henry @2023
          </a>
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter, Urbanist } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: {
    default: "Sahil Shaikh",
  },
  description: "Personal website for Sahil Shaikh",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const rubik = Urbanist({
  weight: '700',
  subsets: ['latin'],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, rubik.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

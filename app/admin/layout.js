import AdminLeftBar from "@/components/Admin/AdminLeftBar/AdminLeftBar";
import Navbar from "@/components/Navbar/Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Navbar />
      <div className="flex">
        <div className="w-[17%]">
          <AdminLeftBar />
        </div>
        <div className="w-[83%]">{children}</div>
      </div>
      </body>
    </html>
  );
}

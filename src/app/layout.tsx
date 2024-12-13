import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar";

export default function Home(){
  return(
    <html>
      <body>
        <div>
          <Navbar/>
        </div>
      </body>
    </html>
  )
};

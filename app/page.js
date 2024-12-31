import { configDotenv } from "dotenv";
configDotenv();
import Head from "next/head";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Klingai Clone</title>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <meta name="description" content="A clone of Klingai's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <div className=" flex xl:pt-12 pt-14">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

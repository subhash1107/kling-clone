"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import VideoCard from "./VideoCard";
import styles from "../styles/Masonary.module.css";
import AutoPlayCarousel from "./Carousel";

const MainContent = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideo = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "search?query=ai&per_page=20",
        { headers: { Authorization: `${process.env.NEXT_PUBLIC_API_KEY}` } }
      );
      console.log(response.data.videos);
      setVideos(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <>
      <main className="xl:w-4/5 xl:ml-[20vw] bg-[#0d1116] px-3">
        {/* Gradient Definitions for Icons */}
        <svg width="0" height="0">
          <defs>
            <linearGradient
              id="icon-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Video Section */}
        <div className="xl:relative w-full">
          <div className="xl:absolute xl:top-20 z-10 px-2">
            <h2 className="xl:block hidden text-white text-2xl tracking-tighter">
              KLING AI, SPARK YOUR IMAGINATION
            </h2>
            <h1 className="bg-gradient-to-r tracking-tighter from-white to-cyan-500 text-transparent bg-clip-text xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold xl:py-0 py-6">
              Next-Generation AI Creation Studio
            </h1>
          </div>
          <div className="w-full overflow-hidden xl:block hidden">
            <video
              src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/home-start-C6AdYhVK.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="scale-125 w-full h-full origin-center"
            />
          </div>
        </div>

        {/* Button Overlay Section */}
        <div className="w-full xl:relative lg:pr-3">
          <div className="xl:absolute w-full flex flex-col xl:flex-row xl:justify-evenly top-1/2 xl:transform xl:-translate-y-1/2 ">
            <button className="lg:mx-2 w-full xl:w-1/3 flex items-center justify-between border border-lime-800 rounded-xl px-8 py-5 bg-[#101e0cf6] transform hover:skew-x-6 transition-all mb-4 xl:mb-0">
              <div className="text-left">
                <span className="bg-gradient-to-r my-3 from-lime-500 text-2xl to-cyan-500 bg-clip-text text-transparent">
                  AI Images
                </span>
                <p className="text-white my-3 text-sm">
                  Powered by KOLORS<sup>&reg;</sup>
                </p>
              </div>
              <FiArrowRightCircle className="w-10 h-10 xl:fill-[url(#icon-gradient)] text-cyan-300 xl:text-black" />
            </button>
            <button className="lg:mx-2 w-full xl:w-1/3 flex items-center justify-between border border-lime-800 rounded-xl px-8 py-5 bg-[#101e0cf6] transform hover:skew-x-6 transition-all mb-4 xl:mb-0">
              <div className="text-left">
                <span className="bg-gradient-to-r my-3 from-lime-500 text-2xl to-cyan-500 bg-clip-text text-transparent">
                  AI Videos
                </span>
                <p className="text-white my-3 text-sm">
                  Powered by KLING<sup>&reg;</sup>
                </p>
              </div>
              <FiArrowRightCircle className="w-10 h-10 xl:fill-[url(#icon-gradient)] text-cyan-300 xl:text-black" />
            </button>
            <button className="mx-2 w-full xl:w-1/3 xl:flex hidden items-center justify-between border border-white rounded-xl px-8 py-5 bg-[#2d2e2ded] transform hover:skew-x-6 transition-all">
              <div className="text-left">
                <span className="text-white text-2xl">Video Editor</span>
                <p className="text-white my-3 text-sm">
                  This feature is coming! We will share with you soon.
                </p>
              </div>
            </button>
          </div>
        </div>


        <section className="">
          <div className="flex justify-between items-center px-4 py-2 lg:mt-16">
            <p className="text-white text-xl">Trending Shorts</p>
            <button className="rounded-full text-white bg-[#67646497] flex items-center py-1 px-3">
              more
              <FaAngleRight />
            </button>
          </div>
          <div className="flex xl:flex-nowrap flex-wrap gap-4 justify-evenly items-center">
            {videos?.slice(0, 4).map((video, index) => (
              <VideoCard
                key={index}
                username={video?.user?.name}
                duration={video?.duration}
                videoSrc={video?.video_files[0]?.link}
                likes={video?.height}
                title={video?.title}
              />
            ))}
          </div>
        </section>
        <section className="px-2">
          <div className="flex justify-between items-center px-4 py-2 mt-12">
            <p className="text-white text-xl">Trending Creatives</p>
            <button className="rounded-full text-white bg-[#67646497] flex items-center py-1 px-3">
              more
              <FaAngleRight />
            </button>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <AutoPlayCarousel />
              <div
                className={`${styles.masonryGrid} grid grid-cols-1 sm:grid-cols-2 gap-4`}
              >
                {videos
                  ?.slice(0, Math.floor(videos.length / 2))
                  .map((video, index) => (
                    <VideoCard
                      key={index}
                      username={video?.user?.name}
                      duration={video?.duration}
                      videoSrc={video?.video_files[0]?.link}
                      likes={video?.height}
                      title={video?.title}
                      height={video?.height / 10}
                      width={video?.width / 10}
                    />
                  ))}
              </div>
            </div>

            {/* Right Column */}
            <div
              className={`${styles.masonryGrid} grid grid-cols-1 sm:grid-cols-2 gap-4`}
            >
              {videos
                ?.slice(Math.floor(videos.length / 2), videos.length)
                .map((video, index) => (
                  <VideoCard
                    key={index}
                    username={video?.user?.name}
                    duration={video?.duration}
                    videoSrc={video?.video_files[0]?.link}
                    likes={video?.height}
                    title={video?.title}
                    height={video?.height / 10}
                    width={video?.width / 10}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;

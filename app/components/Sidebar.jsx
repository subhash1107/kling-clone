import { 
    FaDiscord, FaImage, FaInstagram, FaRegFolder, FaVideo, FaXTwitter, FaYoutube 
  } from "react-icons/fa6";
  import { PiLightbulbFilament } from "react-icons/pi";
  import { RiHome6Line } from "react-icons/ri";
  import { AiCustomButton, ModelButton } from "./DisabledButtons";
  
  export default function Sidebar() {
    return (
      <>
        <aside className="h-screen w-[20vw] bg-[#0d1116] text-white p-6 xl:fixed xl:block hidden">
          <svg width="0" height="0">
            <defs>
              <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <nav className="space-y-4 flex flex-col items-stretch">
            <div>
              {/* Home Button */}
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-full hover:bg-gray-600 focus:bg-gray-700 group">
                <RiHome6Line
                  className="w-6 h-6 text-white group-focus:fill-[url(#icon-gradient)]"
                />
                <span className="text-white group-focus:bg-gradient-to-r group-focus:text-transparent from-lime-400 to-cyan-500 bg-clip-text">
                  Home
                </span>
              </button>
  
              {/* Explore Button */}
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-full hover:bg-gray-600 focus:bg-gray-700 group">
                <PiLightbulbFilament
                  className="w-6 h-6 text-white group-focus:fill-[url(#icon-gradient)]"
                />
                <span className="text-white group-focus:bg-gradient-to-r group-focus:text-transparent from-lime-400 to-cyan-500 bg-clip-text">
                  Explore
                </span>
              </button>
            </div>
            <div className="py-5">
              <hr className="border-gray-600 " />
            </div>
            <div>
              <p className="w-full text-left px-4 py-2 text-sm text-gray-500">AI Assets</p>
              
              {/* AI Images Button */}
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-full hover:bg-gray-600 focus:bg-gray-700 group">
                <FaImage
                  className="w-6 h-6 text-white group-focus:fill-[url(#icon-gradient)]"
                />
                <span className="text-white group-focus:bg-gradient-to-r group-focus:text-transparent from-lime-400 to-cyan-500 bg-clip-text">
                  AI Images
                </span>
              </button>
  
              {/* AI Videos Button */}
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-full hover:bg-gray-600 focus:bg-gray-700 group">
                <FaVideo
                  className="w-6 h-6 text-white group-focus:fill-[url(#icon-gradient)]"
                />
                <span className="text-white group-focus:bg-gradient-to-r group-focus:text-transparent from-lime-400 to-cyan-500 bg-clip-text">
                  AI Videos{" "}
                  <span className="bg-[#fcfafa46] px-1 rounded">
                    <span className="bg-gradient-to-r from-lime-400 to-cyan-500 bg-clip-text text-transparent text-[0.65rem]">
                      Try KLING 1.6
                    </span>
                  </span>
                </span>
              </button>
  
              <AiCustomButton />
            </div>
            <div className="py-5">
              <hr className="border-gray-600" />
            </div>
            <div>
              <p className="w-full text-left px-4 py-2 text-sm text-gray-500">My Space</p>
              
              {/* My Creatives Button */}
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-full hover:bg-gray-600 focus:bg-gray-700 group">
                <FaRegFolder
                  className="w-6 h-6 text-white group-focus:fill-[url(#icon-gradient)]"
                />
                <span className="text-white group-focus:bg-gradient-to-r group-focus:text-transparent from-lime-400 to-cyan-500 bg-clip-text">
                  My Creatives
                </span>
              </button>
  
              <ModelButton />
  
              {/* Social Buttons */}
              <div className="flex gap-4 text-lg w-full justify-start px-4 py-2">
                <button className="bg-[#fcfafa46] p-2 rounded-full">
                  <FaDiscord className="text-white" />
                </button>
                <button className="bg-[#fcfafa46] p-2 rounded-full">
                  <FaXTwitter className="text-white" />
                </button>
                <button className="bg-[#fcfafa46] p-2 rounded-full">
                  <FaYoutube className="text-white" />
                </button>
                <button className="bg-[#fcfafa46] p-2 rounded-full">
                  <FaInstagram className="text-white" />
                </button>
              </div>
              <h5 className="hover:text-lime-500 hover:cursor-pointer w-full text-left px-4 py-2">Release Notes</h5>
            </div>
          </nav>
        </aside>
      </>
    );
  }
  
import { FaPlus } from "react-icons/fa6";

const Library = () => {
  return (
    <div className="h-[88vh] w-[40%] rounded-lg bg-[#121212] text-white">
      <div className="library-part flex flex-col h-full">
        
        {/* Top */}
        <div className="library-top flex items-center justify-between p-3">
          <h1 className="text-2xl font-bold">Your Library</h1>
          <div className="playlist-btn">
            <FaPlus />
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="library-cards h-[170px] flex flex-col items-center overflow-y-auto mt-10">
          <div className="playlist-card h-[120px] w-[420px] flex flex-col items-center justify-center p-3 rounded-xl bg-[#1F1F1F]">
            <h2 className="font-bold">Create your first playlist</h2>
            <p>It's easy, we'll help you</p>
            <button className="text-black bg-white h-7 px-4 rounded-2xl font-bold text-sm mt-3">
              Create playlist
            </button>
          </div>

          <div className="playlist-card h-[120px] w-[420px] flex flex-col items-center justify-center p-3 rounded-xl bg-[#1F1F1F] mt-4 ">
            <h2 className="font-bold">Let's find some podcasts to follow</h2>
            <p>We'll keep you updated on new episodes</p>
            <button className="text-black bg-white h-7 px-4 rounded-2xl font-bold text-sm mt-3">
              Browse podcasts
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="library-footer mt-auto flex flex-col p-3 mb-4">
          <div className="footer-links flex justify-center">
            <ul className="grid grid-cols-3 gap-2 text-[10px] w-full max-w-md">
              <li>Legal</li>
              <li>Safety & Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
              <li>Accessibility</li>
              <li className="font-bold">Cookies</li>
            </ul>
          </div>

          <div className="footer-btn mt-3">
            <button className="text-white bg-[#121212] border h-7 px-4 rounded-2xl font-bold text-sm">
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;

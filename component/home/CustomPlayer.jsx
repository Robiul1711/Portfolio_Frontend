import React, { useRef, useState } from "react";
import { Play, Pause, Download } from "lucide-react";

const CustomPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-4 bg-black border border-gray-600 p-2 px-4 rounded-full w-fit">
      <audio ref={audioRef} src="/voice.mp3" onEnded={() => setIsPlaying(false)} />
      
      {/* Custom Control Button */}
      <button 
        onClick={togglePlay} 
        className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-black hover:scale-105 transition"
      >
        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
      </button>

      <span className="text-sm text-gray-400 font-medium">Voice Introduction</span>

      {/* Optional: Your own Download button if you wanted one, or just leave it out */}
      <a href="/voice.mp3" download className="text-gray-500 hover:text-white transition">
         {/* Remove this <a> tag if you want to prevent downloading entirely */}
      </a>
    </div>
  );
};

export default CustomPlayer;
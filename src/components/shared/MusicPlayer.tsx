
"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { musicTracks } from "@/lib/music-data";
import type { MusicTrack } from "@/lib/music-data";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);

  useEffect(() => {
    // 1. Select a random track on mount
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    setCurrentTrack(randomTrack);
    
    const audio = audioRef.current;
    if (!audio) return;

    // 2. Assign the source immediately
    audio.src = randomTrack.url;
    audio.volume = 0.3;
    audio.loop = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    // 3. Logic to run once the audio is ready to play
    const attemptPlayOnLoad = () => {
      const userPreference = localStorage.getItem("musicPlayerMuted");
      if (userPreference !== 'true') {
        audio.play().catch(e => {
          console.log("Autoplay was prevented. User interaction needed.");
          setIsPlaying(false);
        });
      }
    };

    // 4. Add all event listeners
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('canplay', attemptPlayOnLoad); // <-- This is the key fix

    // 5. Cleanup function
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('canplay', attemptPlayOnLoad);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      localStorage.setItem("musicPlayerMuted", "true");
    } else {
      // Ensure src is set before playing, especially on first interaction
      if (!audio.src && currentTrack) {
        audio.src = currentTrack.url;
      }
      audio.play().catch(e => console.error("Playback failed:", e));
      localStorage.setItem("musicPlayerMuted", "false");
    }
    // State is updated via event listeners
  };

  return (
    <>
      <audio ref={audioRef} preload="auto"></audio>
      <div className="md:relative fixed bottom-28 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className="rounded-full h-12 w-12 border-2"
          disabled={!currentTrack}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          <span className="sr-only">Toggle Music</span>
        </Button>
      </div>
    </>
  );
}

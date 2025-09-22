
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
    // On mount, select a random track
    setCurrentTrack(musicTracks[Math.floor(Math.random() * musicTracks.length)]);
    
    // Set up the audio element once it's available
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.loop = true;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentTrack) {
      audio.src = currentTrack.url;
      
      const userPreference = localStorage.getItem("musicPlayerMuted");
      if (userPreference !== 'true') {
        // Attempt to play, but catch error if browser blocks it.
        // This usually requires user interaction on the page first.
        audio.play().catch(e => {
          console.log("Autoplay was prevented by the browser. User interaction is required.");
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(false);
      }
    }
  }, [currentTrack]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    try {
      if (isPlaying) {
        audio.pause();
        localStorage.setItem("musicPlayerMuted", "true");
      } else {
        await audio.play();
        localStorage.setItem("musicPlayerMuted", "false");
      }
      // The state will be updated by the 'play'/'pause' event listeners
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} preload="auto"></audio>
      <div className="fixed bottom-28 left-4 z-50 md:bottom-4 md:left-auto md:right-28">
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

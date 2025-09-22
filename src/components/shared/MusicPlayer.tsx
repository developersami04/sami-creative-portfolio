
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
    // Select a random track on the client side
    setCurrentTrack(musicTracks[Math.floor(Math.random() * musicTracks.length)]);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    
    audio.volume = 0.3; // Set a default volume
    audio.loop = true; // Loop the music

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // When the track changes, update the audio source
    audio.src = currentTrack.url;
    
    const userPreference = localStorage.getItem("musicPlayerMuted");
    if (userPreference !== 'true') {
      // Attempt to play, but catch error if browser blocks it
      audio.play().catch(e => {
        console.log("Autoplay was prevented by the browser. User interaction is required.");
        setIsPlaying(false);
      });
    } else {
        setIsPlaying(false);
    }


    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
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
      setIsPlaying(!isPlaying);
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

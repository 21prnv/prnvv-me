import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/JVKE%20-%20her%20(official%20lyric%20video).mp3";
const VIDEO_SRC = "/189813-887078786_small.mp4";
const MOVE = 14; // px of parallax drift

/* small monochrome icons */
const Play = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const Pause = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);
const Reset = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);
const Volume = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-ink/50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 5 6 9H2v6h4l5 4z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
  </svg>
);

export default function AudioWallpaper() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // keep the audio element's volume in sync with the slider
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // drive the video off the same play state: play on start, pause on stop
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) v.play().catch(() => {});
    else v.pause();
  }, [playing]);

  // flip page text to white while the video wallpaper is showing
  useEffect(() => {
    document.body.classList.toggle("playing", playing);
    return () => document.body.classList.remove("playing");
  }, [playing]);

  // subtle living-wallpaper parallax while music plays
  useEffect(() => {
    if (!playing) {
      setOffset({ x: 0, y: 0 });
      return;
    }
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x: nx * MOVE, y: ny * MOVE });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [playing]);

  const toggle = () =>
    playing ? audioRef.current?.pause() : audioRef.current?.play();
  const reset = () => {
    const a = audioRef.current;
    if (a) {
      a.pause();
      a.currentTime = 0;
    }
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const btn =
    "grid h-8 w-8 place-items-center rounded-full text-ink/70 transition-colors hover:bg-black/5 hover:text-ink";

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* background video wallpaper: fades in on play, out to white on stop */}
      <div
        className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-[1200ms] ease-in-out ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover blur-[2px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(1.12)`,
            WebkitMaskImage:
              "radial-gradient(ellipse 92% 92% at 50% 45%, black 55%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 92% 92% at 50% 45%, black 55%, transparent 100%)",
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {/* white scrim so the dark text stays readable over the video */}
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 50% 25%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.5) 100%),
              linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.5) 100%)
            `,
          }}
        />
      </div>

      {/* controls, top-right */}
      <div className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full border border-black/5 bg-white/70 py-1 pl-1 pr-3 shadow-sm backdrop-blur">
        <button
          onClick={toggle}
          aria-label={playing ? "pause music" : "play music"}
          className={btn}
        >
          {playing ? <Pause /> : <Play />}
        </button>
        <button onClick={reset} aria-label="reset music" className={btn}>
          <Reset />
        </button>
        {/* volume: speaker icon reveals a slim slider on hover */}
        <div className="group flex items-center">
          <span className={btn} aria-hidden>
            <Volume />
          </span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="volume"
            className="h-1 w-0 cursor-pointer opacity-0 accent-ink transition-all duration-300 ease-out group-hover:mr-1.5 group-hover:w-16 group-hover:opacity-100 focus-visible:mr-1.5 focus-visible:w-16 focus-visible:opacity-100"
          />
        </div>
      </div>
    </>
  );
}

"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { film } from "@/lib/images";

/**
 * The JK Gold House brand film. Loads lazily, autoplays muted while in view
 * (where the browser allows it), and falls back gracefully to its poster.
 */
export function FilmSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.preload !== "auto") video.preload = "auto";
          if (!reduce && !userPaused) video.play().catch(() => setPlaying(false));
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [userPaused]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => undefined);
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) video.play().catch(() => undefined);
  };

  return (
    <section id="film" className="grain relative overflow-hidden bg-obsidian py-24 text-ivory sm:py-32">
      <div className="container-luxe">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="The JK Gold House Film"
            title={
              <>
                Shine beyond <em className="font-normal text-gold">the ordinary</em>
              </>
            }
          />
          <Reveal delay={0.2} className="max-w-sm text-taupe">
            <p className="leading-relaxed">
              A glimpse of the jewellery, the people and the moments that have defined JK Gold House for more than three
              decades.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15} className="mt-14 sm:mt-20">
        <div ref={wrapRef} className="group relative mx-auto aspect-[16/10] w-full max-w-[110rem] overflow-hidden bg-espresso sm:aspect-[12/5]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={film.poster}
            muted
            loop
            playsInline
            preload="none"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label="JK Gold House brand film showing gold jewellery, the Negombo store and our team"
          >
            <source src={film.src} type="video/mp4" />
          </video>

          {/* Big play affordance when paused (e.g. autoplay blocked) */}
          <button
            type="button"
            onClick={togglePlay}
            className={`absolute inset-0 grid place-items-center bg-obsidian/30 transition-opacity duration-700 ${
              playing ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-label="Play the JK Gold House film"
            tabIndex={playing ? -1 : 0}
          >
            <span className="grid size-20 place-items-center rounded-full border border-gold/70 bg-obsidian/50 text-gold backdrop-blur transition-transform duration-500 ease-luxe hover:scale-105 sm:size-24">
              <Play className="ml-1 size-7" strokeWidth={1.25} />
            </span>
          </button>

          {/* Controls */}
          <div className="absolute right-4 bottom-4 flex gap-2 sm:right-6 sm:bottom-6">
            <ControlButton onClick={togglePlay} label={playing ? "Pause film" : "Play film"}>
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            </ControlButton>
            <ControlButton onClick={toggleMute} label={muted ? "Turn sound on" : "Mute film"}>
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </ControlButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ControlButton({ onClick, label, children }: { onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-ivory/25 bg-obsidian/60 text-ivory backdrop-blur transition-colors hover:border-gold hover:text-gold"
    >
      {children}
    </button>
  );
}

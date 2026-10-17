import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, type Message } from "@/config/site";

type VideoPosterProps = {
  message: Message;
  poster: string;
  className?: string;
};

/**
 * Shows a photo with a play button. With a YouTube id it plays in place;
 * without one it opens the church's YouTube channel.
 */
const VideoPoster = ({ message, poster, className }: VideoPosterProps) => {
  const [playing, setPlaying] = useState(false);

  if (playing && message.youtubeId) {
    return (
      <div className={cn("overflow-hidden bg-black", className)}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${message.youtubeId}?autoplay=1`}
          title={message.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const playButton = (
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory text-night transition-transform group-hover:scale-105 sm:h-[88px] sm:w-[88px]">
      <Play className="h-6 w-6 fill-current sm:h-8 sm:w-8" aria-hidden="true" />
    </span>
  );

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <img src={poster} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-night/35" />
      {message.youtubeId ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play: ${message.title}`}
          className="absolute inset-0 flex items-center justify-center"
        >
          {playButton}
        </button>
      ) : (
        <a
          href={site.social.youtube}
          target="_blank"
          rel="noreferrer"
          aria-label="Watch on YouTube"
          className="absolute inset-0 flex items-center justify-center"
        >
          {playButton}
        </a>
      )}
    </div>
  );
};

export default VideoPoster;

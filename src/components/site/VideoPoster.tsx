import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Message } from "@/config/site";

/** The message's cover (uploaded or YouTube's), or a plain tile when there is none. */
export const VideoThumbnail = ({ message, className }: { message: Message; className?: string }) =>
  message.thumbnail ? (
    <img src={message.thumbnail} alt="" loading="lazy" className={cn("h-full w-full object-cover", className)} />
  ) : (
    <div className={cn("flex h-full w-full items-center justify-center bg-plum", className)}>
      <span className="eyebrow text-mist">Video coming soon</span>
    </div>
  );

type VideoPosterProps = {
  message: Message;
  className?: string;
};

/** The message cover with a play button; with a YouTube link the video plays in place. */
const VideoPoster = ({ message, className }: VideoPosterProps) => {
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

  return (
    <div className={cn("group relative overflow-hidden bg-plum", className)}>
      <VideoThumbnail message={message} />
      {message.youtubeId && (
        <>
          <div className="absolute inset-0 bg-night/30" />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${message.title}`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory text-night transition-transform group-hover:scale-105 sm:h-[88px] sm:w-[88px]">
              <Play className="h-6 w-6 fill-current sm:h-8 sm:w-8" aria-hidden="true" />
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default VideoPoster;

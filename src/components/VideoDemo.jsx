import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { VideoOff } from "lucide-react";
import { IMAGES } from "../images.js";
import { VIDEO_POSTER, VIDEO_SRC } from "../config.js";

export default function VideoDemo() {
  const ref = useRef(null);
  const { state } = useLocation();
  const [missing, setMissing] = useState(false);

  // "Watch Demo" on the home page sends autoplay: true
  useEffect(() => {
    if (state?.autoplay && ref.current) {
      ref.current.play().catch(() => {}); // browser may block; user can press play
    }
  }, [state]);

  return (
    <section className="section section--tint">
      <div className="container video">
        <div className="video__player">
          {missing ? (
            <div className="video__missing" role="status">
              <VideoOff size={34} aria-hidden="true" />
              <strong>Demo video not found</strong>
              <span>
                Copy your video into <code>public/videos/</code> and name it <code>demo.mp4</code>
                (or change <code>VIDEO_SRC</code> in <code>src/config.js</code>).
              </span>
            </div>
          ) : (
            <video
              ref={ref}
              controls
              playsInline
              preload="metadata"
              poster={VIDEO_POSTER || IMAGES.seedlings}
              onError={() => setMissing(true)}
            >
              <source src={VIDEO_SRC} type={VIDEO_SRC.endsWith(".webm") ? "video/webm" : "video/mp4"} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="video__text">
          <span className="accent-bar" />
          <h2 className="section__title">Video Demonstration</h2>
          <p>
            Watch how the system works, from sensor data collection and crop recommendation to
            disease detection using the mobile app.
          </p>
        </div>
      </div>
    </section>
  );
}

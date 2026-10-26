import Link from "next/link";
import { Clapperboard, Mail } from "lucide-react";

const phones = [
  { cls: "phone-1", src: "/videos/ai-fairytale-painter-prince.mp4", poster: "/posters/ai-fairytale-painter-prince.jpg" },
  { cls: "phone-2", src: "/videos/ugc-red-carpet-perfume.mp4", poster: "/posters/ugc-red-carpet-perfume.jpg" },
  { cls: "phone-3", src: "/videos/ugc-social-media-presenter.mp4", poster: "/posters/ugc-social-media-presenter.jpg" },
];

export default function Hero() {
  return (
    <div className="hero-bg">
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-2"
    >
      <div className="hero-in">
        <p className="pill mb-6">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky" />
          tech.ai.studio &middot; Anoushey Chandio
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl">
          Turn your ideas into <span className="hl-h">scroll-stopping reels.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          I&rsquo;m <span className="hl">Anoushey Chandio</span>. I edit real{" "}
          <span className="hl">reels</span> and{" "}
          <span className="hl">UGC-style videos</span> and create{" "}
          <span className="hl">AI clips</span> that make your brand stand out
          on Instagram and other platforms.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/#projects"
            className="btn-primary"
          >
            <Clapperboard size={20} /> Watch my videos
          </Link>
          <Link
            href="/#contact"
            className="btn-secondary"
          >
            <Mail size={20} /> Contact me
          </Link>
        </div>
      </div>

      <div className="scene scene-in mx-auto h-[22rem] w-full max-w-lg sm:h-[26rem]" aria-hidden="true">
        <div className="stack">
          {phones.map((p) => (
            <div key={p.cls} className={`phone ${p.cls}`}>
              <video
                className="h-full w-full object-cover"
                src={p.src}
                poster={p.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

import Carousel from "@/components/Carousel";
import Reveal from "@/components/Reveal";
import { Sparkles, Scissors, Video } from "lucide-react";

type Project = {
  title: string;
  description: string;
  file: string;
  width: number;
  height: number;
};

const ugcAds: Project[] = [
  {
    title: "Red carpet perfume ad",
    description:
      "A cinematic perfume ad: an elegant actress steps out of a car onto the red carpet.",
    file: "ugc-red-carpet-perfume",
    width: 720,
    height: 1280,
  },
  {
    title: "Perfume ad: grand entrance",
    description:
      "A woman in a red gown makes an entrance in a luxury hall for a perfume ad.",
    file: "ugc-perfume-grand-entrance",
    width: 360,
    height: 640,
  },
  {
    title: "Video services presenter",
    description:
      "A presenter talks straight to the camera and offers business video services.",
    file: "ugc-video-services-pitch",
    width: 1280,
    height: 720,
  },
  {
    title: "Website services presenter",
    description:
      "A friendly talking ad where the presenter offers business website services.",
    file: "ugc-website-services-pitch",
    width: 360,
    height: 640,
  },
  {
    title: "Office presenter ad",
    description:
      "A presenter talks to the camera in a modern office, like a real recommendation.",
    file: "ugc-office-presenter",
    width: 360,
    height: 640,
  },
  {
    title: "Social media presenter ad",
    description:
      "A presenter walks and talks with floating app graphics, made for social media promotion.",
    file: "ugc-social-media-presenter",
    width: 360,
    height: 640,
  },
  {
    title: "Lipstick ad: dressing room",
    description:
      "A luxury lipstick ad: a woman in a black dress applies lipstick in front of a glowing mirror.",
    file: "ugc-lipstick-dressing-room",
    width: 360,
    height: 640,
  },
  {
    title: "Lipstick ad: red gown",
    description:
      "A close-up lipstick ad that opens into a grand chandelier hall scene.",
    file: "ugc-lipstick-red-gown",
    width: 360,
    height: 640,
  },
  {
    title: "Lipstick transformation",
    description:
      "A makeover-style ad where one lipstick changes how she looks and feels.",
    file: "ugc-lipstick-transformation",
    width: 360,
    height: 640,
  },
  {
    title: "Dream travel agency ad",
    description:
      "A presenter promotes dream travel packages and shows a trip on her phone.",
    file: "ugc-dream-travel-agency",
    width: 720,
    height: 1280,
  },
];

const realReels: Project[] = [
  {
    title: "Alkhidmat Disaster Management",
    description:
      "A relief-awareness video. I combined footage, photos and text overlays into one clear story.",
    file: "alkhidmat-disaster-management",
    width: 720,
    height: 1280,
  },
  {
    title: "Event highlights",
    description:
      "A reel from a live event. I edited the footage, added text and merged the clips in CapCut.",
    file: "event-highlights",
    width: 478,
    height: 850,
  },
  {
    title: "Glimpses of KBA Election at Sindh High Court",
    description:
      "A short event reel. I edited the real footage and added captions in CapCut.",
    file: "kba-election-glimpses",
    width: 720,
    height: 1280,
  },
  {
    title: "Mini Vlog: A Day in My Life",
    description:
      "A day-in-my-life vlog. I merged real clips in CapCut with title text and a soft mood.",
    file: "mini-vlog-day-in-my-life",
    width: 720,
    height: 1280,
  },
  {
    title: "Mini Vlog: Today Vibe Story",
    description:
      "A story-style vlog with bold CapCut text overlays and quick cuts between real clips.",
    file: "mini-vlog-today-vibe-story",
    width: 720,
    height: 1280,
  },
  {
    title: "A Day at NASTP",
    description:
      "A day-at-work style vlog. I edited the real footage and added the title text in CapCut.",
    file: "day-at-nastp",
    width: 720,
    height: 1280,
  },
  {
    title: "Indoor walk vlog",
    description:
      "A smooth walkthrough vlog of real footage, trimmed and polished in CapCut.",
    file: "indoor-walk-vlog",
    width: 720,
    height: 1280,
  },
];

const aiClips: Project[] = [
  {
    title: "Fairytale painter and the prince",
    description:
      "An AI-generated fairytale clip: a woman paints in a green meadow and a prince arrives with a royal carriage.",
    file: "ai-fairytale-painter-prince",
    width: 360,
    height: 640,
  },
  {
    title: "Anime kitchen morning",
    description:
      "An AI-generated anime clip of a mother and daughter cooking together in a cozy kitchen.",
    file: "ai-anime-kitchen",
    width: 720,
    height: 544,
  },
  {
    title: "Cartoon girl at her laptop",
    description:
      "An AI-generated cartoon clip of a cheerful girl waving hello from her desk.",
    file: "ai-cartoon-girl-laptop",
    width: 714,
    height: 540,
  },
  {
    title: "Blue bull on a night sea",
    description:
      "An AI-generated animated scene of a soft blue bull sailing a small boat under the stars.",
    file: "ai-blue-bull-boat",
    width: 624,
    height: 624,
  },
  {
    title: "Jungle car adventure",
    description:
      "An AI-generated illustrated clip of animals driving a red car through a colorful jungle.",
    file: "ai-jungle-car-adventure",
    width: 624,
    height: 624,
  },
  {
    title: "Animal friends in the city",
    description:
      "An AI-generated cartoon clip of a group of animal friends posing on a bright street.",
    file: "ai-animal-friends",
    width: 624,
    height: 624,
  },
  {
    title: "Girl with a rose",
    description:
      "An AI-generated clip of a smiling girl in a pink dress holding out a rose.",
    file: "ai-girl-with-rose",
    width: 512,
    height: 768,
  },
  {
    title: "Playtime in the bedroom",
    description:
      "An AI-generated clip of a happy girl playing with her teddies on a cozy bed.",
    file: "ai-girl-bedroom",
    width: 720,
    height: 544,
  },
];

function Card({ p }: { p: Project }) {
  return (
    <article className="card-white flex w-72 shrink-0 flex-col overflow-hidden border-b-8 border-b-sun p-4 transition-transform duration-300 hover:scale-[1.02] sm:w-80">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-black">
        <video
          className="h-full w-full object-contain"
          src={`/videos/${p.file}.mp4`}
          poster={`/posters/${p.file}.jpg`}
          controls
          playsInline
          preload="none"
        />
      </div>
      <h3 className="mt-5 line-clamp-2 min-h-[3.5rem] text-xl font-bold">{p.title}</h3>
      <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-ink-soft">{p.description}</p>
    </article>
  );
}

function Group({
  title,
  items,
  children,
}: {
  title: string;
  items: Project[];
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-14">
      <Reveal className="text-center">
        <h3 className="text-2xl font-extrabold sm:text-3xl">{title}</h3>
        {children}
      </Reveal>
      <div className="mt-4">
        <Carousel label={title}>
          {items.map((p) => (
            <Card key={p.file} p={p} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <h2 className="text-center text-4xl font-extrabold sm:text-5xl">Video projects</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink-soft">
          I generate <span className="hl">AI video clips</span>, including
          cartoon-style and animated scenes, and I edit{" "}
          <span className="hl">real footage</span> and{" "}
          <span className="hl">UGC-style videos</span> for events, brands and
          social media.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="pill"><Sparkles size={16} className="text-sky" /> AI clips</span>
          <span className="pill"><Scissors size={16} className="text-sky" /> Real footage editing</span>
          <span className="pill"><Video size={16} className="text-sky" /> UGC-style ads</span>
        </div>
        <p className="mt-6 text-center text-ink-soft">
          Every video is edited and merged in <span className="hl">CapCut</span> into a polished reel.
        </p>
      </Reveal>

      <Group title="UGC-Style Ads" items={ugcAds}>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-ink-soft">
          Video ads for your product, made to feel real and personal.
        </p>
        <p className="mx-auto mt-1 max-w-2xl text-ink-soft">
          I offer this service to <span className="hl">brands</span> and{" "}
          <span className="hl">sellers</span>.
        </p>
        <span className="pill mt-4">Presenters are AI-generated</span>
      </Group>
      <Group title="Real reels and vlogs" items={realReels} />
      <Group title="AI-generated clips" items={aiClips} />
    </section>
  );
}

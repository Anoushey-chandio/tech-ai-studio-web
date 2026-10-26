import { Sparkles, Scissors, Video, ExternalLink } from "lucide-react";
import { DEVELOPER_PORTFOLIO_URL as PORTFOLIO_URL } from "@/lib/contact-info";



const skills = [
  {
    icon: Sparkles,
    title: "AI clip generation",
    text: "I generate AI clips, including cartoon-style and animated scenes.",
  },
  {
    icon: Scissors,
    title: "Reels in CapCut",
    text: "I edit real event and session footage into reels for Instagram and other platforms.",
  },
  {
    icon: Video,
    title: "UGC-style videos",
    text: "I edit natural, relatable videos that suit brands and social media.",
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white pb-24 pt-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="pill mb-5">
          <span className="h-2 w-2 rounded-full bg-sky" /> tech.ai.studio
        </p>
        <h2 className="text-4xl font-extrabold sm:text-5xl">Anoushey Chandio</h2>
        <p className="mt-3 max-w-2xl text-xl font-semibold">
          Content creator, AI-native full-stack developer and agentic AI engineer.
        </p>

        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            I create content for Instagram and other platforms. I generate{" "}
            <span className="hl">AI clips</span>, including cartoon-style and
            animated scenes, edit real footage and{" "}
            <span className="hl">UGC-style videos</span>, and merge everything
            in <span className="hl">CapCut</span> into polished reels and vlogs.
          </p>
          <p>
            I run <span className="hl">tech.ai.studio</span>, where I make
            UGC-style ads, reels and AI clips. I also offer{" "}
            <span className="hl">web development</span> and{" "}
            <span className="hl">landing page</span> services.
          </p>
          <p>
            I am also an <span className="hl">AI-native full-stack developer</span>.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-white p-6">
              <span className="inline-flex rounded-xl bg-sun p-3">
                <Icon size={24} />
              </span>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-ink-soft">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-sky-soft bg-mist p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg font-semibold">
            Do you want a web app or an MVP tool? Check my developer portfolio
            and contact me.
          </p>
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            <ExternalLink size={20} /> Check here (developer)
          </a>
        </div>
      </div>
    </section>
  );
}

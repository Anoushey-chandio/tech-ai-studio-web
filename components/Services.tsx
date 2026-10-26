import Link from "next/link";
import {
  Video,
  Scissors,
  Sparkles,
  Code2,
  LayoutTemplate,
  Layers,
  Bot,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { DEVELOPER_PORTFOLIO_URL } from "@/lib/contact-info";
import Reveal from "@/components/Reveal";

type Service = { icon: LucideIcon; title: string; text: ReactNode };

const videoServices: Service[] = [
  {
    icon: Video,
    title: "UGC-Style Ads",
    text: (<>Talking <span className="hl">video ads</span> for your product, made to feel real and personal.</>),
  },
  {
    icon: Scissors,
    title: "Reels and Video Editing",
    text: (<>I edit your footage in <span className="hl">CapCut</span> into polished <span className="hl">reels</span> for Instagram and other platforms.</>),
  },
  {
    icon: Sparkles,
    title: "AI-Generated Clips",
    text: (<><span className="hl">Cartoon-style and animated clips</span> generated with AI for your brand or story.</>),
  },
];

const webServices: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    text: (<>Fast, <span className="hl">responsive websites</span> built with modern tools.</>),
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    text: (<>Clean <span className="hl">landing pages</span> that present your product or offer clearly.</>),
  },
  {
    icon: Layers,
    title: "Full-Stack Apps",
    text: (<>Complete <span className="hl">web apps</span> with frontend, backend and database, from <span className="hl">MVP</span> to launch.</>),
  },
  {
    icon: Bot,
    title: "AI Websites with LLM Integration",
    text: (<>Websites and tools with built-in <span className="hl">AI chat</span> and <span className="hl">LLM</span> features for your business.</>),
  },
];

function Card({ s, index }: { s: Service; index: number }) {
  const Icon = s.icon;
  return (
    <Reveal className="h-full" delay={index * 100}>
    <div className="card-white flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
      <span className="inline-flex w-fit rounded-xl bg-sun p-3">
        <Icon size={24} />
      </span>
      <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
      <p className="mt-2 flex-1 text-ink-soft">{s.text}</p>
      <Link
        href="/#contact"
        className="mt-6 inline-flex items-center gap-2 font-bold underline decoration-sky decoration-4 underline-offset-4"
      >
        Get a free consultation <ArrowRight size={18} />
      </Link>
    </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center text-4xl font-extrabold sm:text-5xl">Services</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-soft">
            What I can make for you.
          </p>
        </Reveal>

        <Reveal>
          <h3 className="mt-12 text-center text-2xl font-extrabold sm:text-3xl">Video services</h3>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {videoServices.map((s, i) => (
            <Card key={s.title} s={s} index={i} />
          ))}
        </div>

        <Reveal>
          <h3 className="mt-14 text-center text-2xl font-extrabold sm:text-3xl">Web and AI services</h3>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {webServices.map((s, i) => (
            <Card key={s.title} s={s} index={i} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={DEVELOPER_PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={20} /> Check here (developer)
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Anoushey Chandio",
};

export default function ProjectsPage() {
  return <Projects />;
}

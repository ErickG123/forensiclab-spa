"use client"

import { CLIExample } from "./components/CLIExample";
import { Changelog } from "./components/Changlog";
import { Documentation } from "./components/Documentation";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Modules } from "./components/Modules";
import { ProblemSolution } from "./components/ProblemSolution";
import { Roadmap } from "./components/Roadmap";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <Features />
      <Modules />
      <CLIExample />
      <Documentation />
      <Changelog />
      <Roadmap />
      <Footer />
    </div>
  );
}

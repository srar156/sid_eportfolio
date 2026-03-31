/*
 * Home Page — Swiss International Typographic Style
 * Hero: Full-bleed dark navy with circuit-board background, large Playfair Display headline
 * Below: Quick stats, brief intro, and navigation cards
 */

import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Cpu, Code, Layers, BookOpen } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497014934/nQVsZPgArw26hCw8XBzz75/hero-bg-HZQP7rnVMiMrM6fy7JMVEv.webp";

const stats = [
  { value: "4.0", label: "GPA at Georgia Tech" },
  { value: "185K+", label: "YouTube Subscribers" },
  { value: "11.9M", label: "Total Video Views" },
  { value: "50+", label: "Countries Reached" },
];

const quickLinks = [
  {
    href: "/about",
    icon: BookOpen,
    label: "About Me",
    desc: "Background, journey, and what drives me toward silicon design.",
  },
  {
    href: "/projects",
    icon: Cpu,
    label: "Projects",
    desc: "Technical work in embedded systems, robotics, and science education.",
  },
  {
    href: "/career-goals",
    icon: Layers,
    label: "Career Goals",
    desc: "My path toward GPU architecture, AI accelerators, and chip design.",
  },
  {
    href: "/skills",
    icon: Code,
    label: "Skills",
    desc: "Programming languages, hardware tools, and areas of expertise.",
  },
];

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(10,18,40,0.92) 0%, rgba(15,32,68,0.75) 60%, rgba(15,32,68,0.5) 100%)" }}
        />

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Overline label */}
            <p className="label-overline mb-6" style={{ color: "var(--color-gold)" }}>
              ePortfolio · Computer Engineering
            </p>

            {/* Main Headline */}
            <h1
              className="text-white mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Sidhaarth
              <br />
              <span style={{ color: "var(--color-gold)", fontStyle: "italic" }}>Ragavan</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/80 mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontWeight: 300,
                letterSpacing: "0.03em",
              }}
            >
              Computer Engineering @ Georgia Tech
              <span className="mx-3 opacity-40">|</span>
              Embedded Systems &amp; Hardware Design
            </p>

            {/* Welcome Statement */}
            <p
              className="text-white/70 mb-10 max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 300 }}
            >
              Welcome to my portfolio. I'm focused on the intersection of hardware and
              software — embedded systems, digital design, and intelligent robotics. I'm
              working toward designing silicon and building systems that bridge low-level
              hardware with real-world applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 hover:opacity-90 hover:translate-y-[-1px]"
                  style={{
                    backgroundColor: "var(--color-gold)",
                    color: "var(--color-navy-dark)",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.04em",
                    fontWeight: 600,
                  }}
                >
                  View Projects <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/resume">
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-white/10"
                  style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.04em",
                  }}
                >
                  View Resume
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold))" }}
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-white mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--color-gold)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.5)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="label-overline mb-3">Explore</p>
            <div className="section-divider" />
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              What's in this Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`reveal reveal-delay-${i + 1} group p-6 h-full border transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    style={{
                      borderColor: "var(--color-border)",
                      borderLeft: "3px solid var(--color-gold)",
                    }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-4 transition-colors duration-200"
                      style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "var(--color-gold)" }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      className="mb-2 font-semibold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "1.1rem" }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                    >
                      {item.desc}
                    </p>
                    <div
                      className="mt-4 flex items-center gap-1 text-xs font-medium transition-colors duration-200"
                      style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
                    >
                      EXPLORE <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brief Bio Teaser */}
      <section className="py-20" style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-overline mb-3">Background</p>
            <div className="section-divider mx-auto" />
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              From Tamil Nadu to Georgia Tech
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
            >
              At 14, I launched a YouTube channel to explain science to Tamil-speaking audiences
              worldwide — growing it to 185,000 subscribers across 50+ countries. That project
              taught me how to break down complex ideas and communicate across cultures. Now at
              Georgia Tech, I'm channeling that same drive into building systems from the ground up.
            </p>
            <Link href="/about">
              <span
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)", fontWeight: 600 }}
              >
                Read Full Biography <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

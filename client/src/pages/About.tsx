/*
 * About Me Page — Swiss International Typographic Style
 * Two-column layout: narrow left metadata column, wide right biography
 * Light watercolor background for the header area
 */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497014934/nQVsZPgArw26hCw8XBzz75/about-bg-8E8YsU6F25B2nWQcFSBgbZ.webp";

const highlights = [
  { label: "Institution", value: "Georgia Tech" },
  { label: "Major", value: "Computer Engineering" },
  { label: "GPA", value: "4.0" },
  { label: "Year", value: "First Year" },
  { label: "Location", value: "Atlanta, GA" },
  { label: "Languages", value: "English · Tamil · French" },
];

const experiences = [
  {
    role: "Deep Learning Intern",
    org: "RIF Robotics",
    period: "Current",
    desc: "Training deep learning models for medical robotics applications using PyTorch. Working with CVAT for annotation and researching hyperspectral imaging for bioburden detection on surgical instruments.",
  },
  {
    role: "Creative Branding Intern",
    org: "vDart",
    period: "1 Year",
    desc: "Co-produced company films, directed an intern team, and hosted a live CEO interview for hundreds of viewers. Built skills in communication, project management, and media production.",
  },
  {
    role: "Content Creator & Founder",
    org: "Tamil Paiyan (YouTube)",
    period: "2020 – 2024",
    desc: "Built and ran a science education channel for Tamil-speaking audiences worldwide. Grew to 185,000 subscribers and 11.9 million views across 50+ countries — all produced solo.",
  },
];

export default function About() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.7)" }} />
        <div className="container relative z-10">
          <p className="label-overline mb-3">Section 02</p>
          <div className="section-divider" />
          <h1
            className="text-4xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
          >
            About Me
          </h1>
          <p
            className="mt-4 text-lg max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
          >
            A first-year Computer Engineering student at Georgia Tech with a 4.0 GPA and a drive
            to work at the deepest levels of computing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Metadata Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Quick Facts */}
                <div className="reveal mb-8">
                  <p className="label-overline mb-4">Quick Facts</p>
                  <div className="space-y-3">
                    {highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex flex-col py-2"
                        style={{ borderBottom: "1px solid var(--color-border)" }}
                      >
                        <span
                          className="text-xs uppercase tracking-wider mb-0.5"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                        >
                          {h.label}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ fontFamily: "var(--font-body)", color: "var(--color-navy)" }}
                        >
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div
                  className="reveal reveal-delay-2 p-5"
                  style={{ backgroundColor: "var(--color-navy)", color: "white" }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
                  >
                    Get in Touch
                  </p>
                  <a
                    href="mailto:sragavan7@gatech.edu"
                    className="block text-sm hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}
                  >
                    sragavan7@gatech.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Biography */}
            <div className="lg:col-span-2 space-y-8">
              <div className="reveal">
                <p
                  className="text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                >
                  I'm Sidhaarth Ragavan, a first-year Computer Engineering student at Georgia Tech
                  with a 4.0 GPA and a drive to work at the deepest levels of computing — where
                  transistors meet algorithms.
                </p>
              </div>

              <div className="reveal reveal-delay-1">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 600 }}
                >
                  An Unconventional Beginning
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                >
                  My journey into engineering started unconventionally: at 14, I launched a YouTube
                  channel called Tamil Paiyan to explain science concepts to Tamil-speaking audiences
                  worldwide. Over four years, I built it to 185,000 subscribers and 11.9 million
                  views, reaching viewers in 50+ countries. That experience taught me how to break
                  down complex ideas, communicate across cultures, and execute consistently over
                  years — skills that now shape how I approach technical work.
                </p>
              </div>

              <div className="reveal reveal-delay-2">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 600 }}
                >
                  Engineering from the Ground Up
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                >
                  At Georgia Tech, I'm pursuing Computer Engineering because I want to understand
                  systems from the ground up. I'm not satisfied with writing software that runs on
                  abstracted hardware — I want to design the hardware itself. My coursework spans
                  digital signal processing, hardware-software systems in C and assembly, and
                  object-oriented design. Outside class, I'm building hands-on skills through
                  internships and personal projects.
                </p>
              </div>

              <div className="reveal reveal-delay-3">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 600 }}
                >
                  Current Work
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                >
                  Currently, I'm interning at RIF Robotics, where I'm learning PyTorch and computer
                  vision to train deep learning models for medical robotics applications. I work with
                  CVAT for annotation and I'm researching hyperspectral imaging for bioburden
                  detection on surgical instruments. Before this, I spent a year at vDart as a
                  creative branding intern, where I co-produced company films, directed an intern
                  team, and hosted a live CEO interview for hundreds of viewers.
                </p>
              </div>

              <div className="reveal reveal-delay-4">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 600 }}
                >
                  Identity &amp; Perspective
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                >
                  I'm Tamil, and my cultural background shapes how I think about community,
                  persistence, and long-term commitment. Growing up bilingual (Tamil and English,
                  plus conversational French) gave me an appreciation for precision in communication
                  — something that translates directly to writing clean code and clear documentation.
                  Outside engineering, I'm interested in fitness, nutrition, and daily routine
                  optimization. I believe that disciplined personal systems create the foundation
                  for sustained technical output.
                </p>
              </div>

              <div className="reveal reveal-delay-5">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 600 }}
                >
                  The Long View
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                >
                  My long-term goal is to contribute to silicon design — GPU architectures, AI
                  accelerators, and the hardware that powers the next generation of intelligent
                  systems. Georgia Tech is where I'm building the foundation to get there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20" style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="container">
          <div className="mb-12">
            <p className="label-overline mb-3">Experience</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              Work &amp; Projects
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex gap-6 p-6 bg-white`}
                style={{ borderLeft: "3px solid var(--color-gold)" }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3
                        className="font-semibold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "1.05rem" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "var(--font-body)", color: "var(--color-gold)", fontWeight: 500 }}
                      >
                        {exp.org}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 shrink-0"
                      style={{
                        fontFamily: "var(--font-mono)",
                        backgroundColor: "rgba(15,32,68,0.08)",
                        color: "var(--color-navy)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

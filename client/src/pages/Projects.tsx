/*
 * Projects Page — Swiss International Typographic Style
 * Project cards with circuit-board background header
 * Featured project + YouTube channel + future projects
 */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Clock } from "lucide-react";

const PROJECTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497014934/nQVsZPgArw26hCw8XBzz75/projects-bg-42hd7jizW9jirXR2ud4mbF.webp";
const YOUTUBE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497014934/nQVsZPgArw26hCw8XBzz75/youtube-visual-EvV5KNMprDQS7RLepHyzSJ.webp";

const futureProjects = [
  { name: "DIY Photo Booth System", tech: "Raspberry Pi · Canon R50 · Flask" },
  { name: "ESP32 Embedded Projects", tech: "C Firmware · I2C/SPI/UART" },
  { name: "OpenBot Autonomous Robot", tech: "Embedded Systems · Computer Vision" },
  { name: "Verilog CPU Design", tech: "RTL · Simulation · FPGA" },
];

export default function Projects() {
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
          backgroundImage: `url(${PROJECTS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(5,13,26,0.92) 0%, rgba(15,32,68,0.80) 100%)" }}
        />
        <div className="container relative z-10">
          <p className="label-overline mb-3" style={{ color: "var(--color-gold)" }}>Section 05</p>
          <div className="section-divider" />
          <h1
            className="text-4xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Projects
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}
          >
            Technical work in hardware, software, and embedded systems. This portfolio will grow
            throughout my time at Georgia Tech — check back for updates.
          </p>
        </div>
      </section>

      {/* Discovery Project */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-10">
            <p className="label-overline mb-3">Project 01</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              ECE Discovery Project
            </h2>
          </div>

          <div className="reveal max-w-3xl">
            <div
              className="p-8 mb-6"
              style={{
                backgroundColor: "var(--color-secondary)",
                borderLeft: "3px solid var(--color-gold)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} style={{ color: "var(--color-gold)" }} />
                <span
                  className="text-xs uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                >
                  In Progress — Details Coming Soon
                </span>
              </div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
              >
                This section will be updated with the full Discovery Project details as part of
                Georgia Tech's ECE Discovery Studio program. The project involves hands-on
                hardware and software integration, applying skills in embedded systems, digital
                design, and systems programming.
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
              >
                Expected content: project title, technical overview (~200 words), implementation
                details, contributions, results, and 1–3 images including diagrams, hardware
                photos, or software screenshots.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Technical Approach", "My Contributions", "Results & Learnings"].map((label) => (
                <div
                  key={label}
                  className="p-4 text-center"
                  style={{ border: "1px dashed var(--color-border)" }}
                >
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                  >
                    To be added
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tamil Paiyan */}
      <section className="py-20" style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="container">
          <div className="mb-10">
            <p className="label-overline mb-3">Project 02</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              Tamil Paiyan — YouTube Science Channel
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="reveal space-y-6">
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
              >
                From 2020 to 2024, I built and ran Tamil Paiyan, a YouTube channel creating science
                education content for Tamil-speaking audiences worldwide. I produced all content
                solo — scripting, filming, editing, and publishing videos explaining topics like
                light scattering, pathogen transmission, and physics concepts.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "185K+", label: "Subscribers" },
                  { value: "11.9M", label: "Total Views" },
                  { value: "50+", label: "Countries" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-4"
                    style={{ backgroundColor: "var(--color-navy)" }}
                  >
                    <p
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.5)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-wider mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
                >
                  Skills Developed
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Technical Communication",
                    "Content Strategy",
                    "Video Production",
                    "Long-form Project Management",
                    "Cross-cultural Communication",
                    "Audience Building",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1"
                      style={{
                        fontFamily: "var(--font-mono)",
                        backgroundColor: "rgba(15,32,68,0.08)",
                        color: "var(--color-navy)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
              >
                This project taught me how to communicate complex technical concepts clearly,
                manage long-term creative projects independently, and build an audience through
                consistent execution. These skills directly translate to technical documentation,
                presentations, and the communication side of engineering work.
              </p>
            </div>

            {/* Visual */}
            <div className="reveal reveal-delay-2">
              <img
                src={YOUTUBE_IMG}
                alt="Tamil Paiyan global reach visualization"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
              <p
                className="text-xs mt-2 text-center"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
              >
                Global reach visualization — viewers across 50+ countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-10">
            <p className="label-overline mb-3">Coming Soon</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              Future Projects
            </h2>
            <p
              className="mt-3 text-sm max-w-xl"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
            >
              Check back as I add more projects throughout my time at Georgia Tech.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {futureProjects.map((proj, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} p-5`}
                style={{
                  border: "1px dashed var(--color-border)",
                  borderTop: "2px solid var(--color-gold)",
                  opacity: 0.8,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} style={{ color: "var(--color-gold)" }} />
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
                  >
                    Planned
                  </span>
                </div>
                <h3
                  className="text-base mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 600 }}
                >
                  {proj.name}
                </h3>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                >
                  {proj.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*
 * Skills Page — Swiss International Typographic Style
 * Skills grid with isometric hardware visual
 * Technical skills + areas of interest
 */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SKILLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497014934/nQVsZPgArw26hCw8XBzz75/skills-visual-FG3X3XehBkje9TghwD64V4.webp";

const technicalSkills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C", "RISC-V Assembly"],
    level: "proficient",
  },
  {
    category: "Hardware Description",
    items: ["Verilog"],
    level: "learning",
  },
  {
    category: "Platforms & Tools",
    items: ["Linux", "GitHub", "SolidWorks", "CVAT", "PyTorch"],
    level: "proficient",
  },
  {
    category: "Embedded Systems",
    items: ["ESP32", "Raspberry Pi (in progress)"],
    level: "learning",
  },
  {
    category: "Communication",
    items: ["Technical Reports", "Design Proposals", "Presentations (large & small audiences)"],
    level: "proficient",
  },
  {
    category: "Languages",
    items: ["English (fluent)", "Tamil (native)", "French (conversational)"],
    level: "proficient",
  },
];

const areasOfInterest = [
  {
    area: "Hardware & Digital Design",
    topics: [
      "RTL design (Verilog/SystemVerilog)",
      "CPU architecture",
      "FPGA prototyping",
      "Chip verification",
    ],
  },
  {
    area: "Embedded Systems",
    topics: [
      "Bare-metal C firmware",
      "FreeRTOS",
      "I2C/SPI/UART protocols",
      "Autonomous robotics",
    ],
  },
  {
    area: "Mixed-Signal Design",
    topics: [
      "ADC/DAC interfaces",
      "Analog-digital integration at the IC level",
    ],
  },
  {
    area: "Machine Learning for Hardware",
    topics: [
      "PyTorch",
      "Computer vision",
      "Deep learning model training",
      "Hyperspectral imaging",
    ],
  },
];

const levelColors: Record<string, string> = {
  proficient: "var(--color-navy)",
  learning: "var(--color-gold-dark)",
};

const levelLabels: Record<string, string> = {
  proficient: "Proficient",
  learning: "Building",
};

export default function Skills() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-24" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="container">
          <p className="label-overline mb-3" style={{ color: "var(--color-gold)" }}>Section 06</p>
          <div className="section-divider" />
          <h1
            className="text-4xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Skills
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}
          >
            A snapshot of my current technical capabilities and the areas I'm actively developing
            toward a career in hardware design and embedded systems.
          </p>
        </div>
      </section>

      {/* Technical Skills Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Skills List */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <p className="label-overline mb-3">Technical Skills</p>
                <div className="section-divider" />
                <h2
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
                >
                  Current Capabilities
                </h2>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${Math.min(i + 1, 5)} p-5`}
                    style={{
                      borderLeft: "3px solid var(--color-gold)",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className="text-sm font-semibold uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-navy)" }}
                      >
                        {skill.category}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5"
                        style={{
                          fontFamily: "var(--font-mono)",
                          backgroundColor: levelColors[skill.level] + "15",
                          color: levelColors[skill.level],
                          border: `1px solid ${levelColors[skill.level]}30`,
                        }}
                      >
                        {levelLabels[skill.level]}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-3 py-1"
                          style={{
                            fontFamily: "var(--font-body)",
                            backgroundColor: "white",
                            color: "var(--color-foreground)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-1">
              <div className="reveal sticky top-24">
                <img
                  src={SKILLS_IMG}
                  alt="Computer engineering hardware components"
                  className="w-full h-auto mb-4"
                  style={{ display: "block" }}
                />
                <p
                  className="text-xs text-center"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                >
                  Hardware components: CPU die, FPGA board, microcontroller, logic gates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-20" style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="container">
          <div className="mb-12">
            <p className="label-overline mb-3">Deep Interests</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              Areas of Interest
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasOfInterest.map((area, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} bg-white p-6`}
                style={{ borderTop: "3px solid var(--color-gold)" }}
              >
                <h3
                  className="text-base mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
                >
                  {area.area}
                </h3>
                <ul className="space-y-2">
                  {area.topics.map((topic) => (
                    <li
                      key={topic}
                      className="text-sm flex items-start gap-2"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                    >
                      <span style={{ color: "var(--color-gold)", marginTop: "0.35rem" }}>▸</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

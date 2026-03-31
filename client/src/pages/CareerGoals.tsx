/*
 * Career Goals Page — Swiss International Typographic Style
 * Three domain pillars + timeline roadmap
 * Dark navy header, white content sections
 */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Cpu, Code, Layers, Target } from "lucide-react";

const domains = [
  {
    icon: Cpu,
    title: "Hardware & Digital Design",
    desc: "I'm developing skills in RTL design using Verilog and SystemVerilog, CPU architecture fundamentals, FPGA prototyping, and chip verification methodologies. My goal is to contribute to silicon design pipelines — writing synthesizable hardware, running simulations, and eventually working on tapeouts. Long-term, I'm interested in GPU compute architectures and the hardware that accelerates machine learning workloads.",
    skills: ["Verilog / SystemVerilog", "CPU Architecture", "FPGA Prototyping", "Chip Verification", "RTL Design"],
  },
  {
    icon: Layers,
    title: "Embedded Systems & Firmware",
    desc: "I have hands-on experience with ESP32 and Raspberry Pi microcontrollers. I'm building proficiency in bare-metal C firmware development, real-time operating systems like FreeRTOS, and hardware communication protocols including I2C, SPI, and UART. My near-term project goal is building an autonomous robot using the OpenBot platform to integrate embedded software with perception and control systems.",
    skills: ["Bare-metal C Firmware", "FreeRTOS", "I2C / SPI / UART", "ESP32", "Raspberry Pi", "OpenBot"],
  },
  {
    icon: Code,
    title: "Software Engineering Foundation",
    desc: "I'm strengthening my skills in Python and C/C++ with a focus on data structures, algorithms, and systems programming. This isn't about becoming a pure software engineer — it's about understanding software deeply enough to design hardware-software interfaces effectively and write the firmware that bridges both worlds.",
    skills: ["Python", "C / C++", "Data Structures & Algorithms", "Systems Programming", "Hardware-Software Interfaces"],
  },
];

const roadmap = [
  {
    period: "Now — Summer 2025",
    title: "Structured Self-Study",
    items: [
      "Complete Python fundamentals and data structures",
      "Solve daily LeetCode problems for algorithmic thinking",
      "Begin Verilog projects and digital design fundamentals",
      "Continue RIF Robotics internship in deep learning",
    ],
  },
  {
    period: "Sophomore Year",
    title: "Georgia Tech Coursework + First HW Internship",
    items: [
      "Pursue VLSI design, computer architecture, and embedded systems courses",
      "Target hardware or embedded systems internship",
      "Build personal projects: ESP32 builds, OpenBot autonomous robot",
      "Begin FPGA prototyping work",
    ],
  },
  {
    period: "Junior Year",
    title: "Industry Internship Target",
    items: [
      "Target internship at NVIDIA, AMD, Apple Silicon, or similar",
      "Contribute to silicon design pipeline or GPU architecture team",
      "Complete senior-level ECE coursework",
      "Build portfolio of hardware design projects",
    ],
  },
  {
    period: "Post-Graduation",
    title: "Full-Time Hardware Engineer",
    items: [
      "Full-time role in GPU architecture, AI accelerator design, or chip verification",
      "Contribute to silicon that powers next-generation intelligent systems",
      "Long-term: work on GPU compute architectures and ML hardware accelerators",
    ],
  },
];

export default function CareerGoals() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-24" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="container">
          <p className="label-overline mb-3" style={{ color: "var(--color-gold)" }}>Section 04</p>
          <div className="section-divider" />
          <h1
            className="text-4xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Career Goals
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}
          >
            My long-term aspiration is to work in hardware design at the frontier of computing —
            specifically in GPU architecture, AI accelerator design, or chip verification at
            companies like NVIDIA, AMD, or Apple Silicon teams.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <div className="reveal">
              <p className="label-overline mb-3">The Vision</p>
              <div className="section-divider" />
              <blockquote
                className="text-2xl md:text-3xl leading-snug mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy)",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
              >
                "I want to be an engineer who understands systems from transistors to software."
              </blockquote>
              <p
                className="leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
              >
                This means building expertise across three domains: hardware and digital design,
                embedded systems and firmware, and a strong software engineering foundation. Every
                project I take on — from my Discovery Project to personal builds with ESP32 — is
                a step toward that goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Domains */}
      <section className="py-20" style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="container">
          <div className="mb-12">
            <p className="label-overline mb-3">Three Pillars</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              Areas of Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} bg-white p-8`}
                  style={{ borderTop: "3px solid var(--color-gold)" }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(15,32,68,0.06)", color: "var(--color-navy)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
                  >
                    {domain.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                  >
                    {domain.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {domain.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          backgroundColor: "rgba(15,32,68,0.06)",
                          color: "var(--color-navy)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="label-overline mb-3">The Path From Here</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              Roadmap
            </h2>
          </div>

          <div className="relative max-w-3xl">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: "var(--color-border)" }}
            />

            <div className="space-y-10">
              {roadmap.map((step, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} flex gap-8`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div
                      className="w-10 h-10 flex items-center justify-center z-10"
                      style={{ backgroundColor: "var(--color-navy)", color: "var(--color-gold)" }}
                    >
                      <Target size={16} />
                    </div>
                  </div>

                  <div className="flex-1 pb-2">
                    <span
                      className="inline-block text-xs px-2 py-1 mb-3"
                      style={{
                        fontFamily: "var(--font-mono)",
                        backgroundColor: "rgba(201,168,76,0.12)",
                        color: "var(--color-gold-dark)",
                      }}
                    >
                      {step.period}
                    </span>
                    <h3
                      className="text-lg mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm flex items-start gap-2"
                          style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                        >
                          <span style={{ color: "var(--color-gold)", marginTop: "0.35rem" }}>▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

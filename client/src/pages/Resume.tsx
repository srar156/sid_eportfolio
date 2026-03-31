/*
 * Resume Page — Swiss International Typographic Style
 * Clean structured resume layout with inline display
 * Download button prominently placed
 */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, FileText } from "lucide-react";

const resumeData = {
  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "B.S. Computer Engineering",
      period: "2024 – Present",
      details: ["GPA: 4.0", "Focus: Embedded Systems, Digital Design, Hardware-Software Co-design"],
    },
  ],
  experience: [
    {
      role: "Deep Learning Intern",
      org: "RIF Robotics",
      period: "Current",
      bullets: [
        "Learning PyTorch and computer vision to train deep learning models for medical robotics",
        "Working with CVAT for data annotation and labeling pipelines",
        "Researching hyperspectral imaging for bioburden detection on surgical instruments",
      ],
    },
    {
      role: "Creative Branding Intern",
      org: "vDart",
      period: "1 Year",
      bullets: [
        "Co-produced company films and directed an intern team",
        "Hosted a live CEO interview broadcast to hundreds of viewers",
        "Developed skills in media production, project management, and executive communication",
      ],
    },
  ],
  projects: [
    {
      name: "Tamil Paiyan — YouTube Science Channel",
      period: "2020 – 2024",
      bullets: [
        "Built and ran a solo science education channel for Tamil-speaking audiences worldwide",
        "Grew to 185,000+ subscribers and 11.9 million total views across 50+ countries",
        "Produced all content independently: scripting, filming, editing, and publishing",
      ],
    },
    {
      name: "Georgia Tech ECE Discovery Project",
      period: "2024 – Present",
      bullets: [
        "Hands-on hardware/software project as part of the ECE Discovery Studio program",
        "Details to be added as project progresses",
      ],
    },
  ],
  skills: {
    "Programming Languages": ["Java", "Python", "C", "RISC-V Assembly"],
    "Hardware Description": ["Verilog"],
    "Platforms & Tools": ["Linux", "GitHub", "SolidWorks", "CVAT", "PyTorch"],
    "Embedded Systems": ["ESP32", "Raspberry Pi (in progress)"],
    "Languages": ["English (fluent)", "Tamil (native)", "French (conversational)"],
  },
};

export default function Resume() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <div className="container">
          <p className="label-overline mb-3" style={{ color: "var(--color-gold)" }}>Section 03</p>
          <div className="section-divider" />
          <h1
            className="text-4xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Resume
          </h1>
          <p
            className="text-lg max-w-xl mb-8"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}
          >
            Below is my current resume highlighting my education at Georgia Tech, technical skills,
            internship experience at RIF Robotics and vDart, and project work including my YouTube
            channel Tamil Paiyan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#resume-content"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-navy-dark)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              <FileText size={16} />
              View Resume
            </a>
            <button
              onClick={() => alert("To download the resume, please add your PDF file and link it here.")}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                color: "rgba(255,255,255,0.9)",
                fontFamily: "var(--font-body)",
              }}
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section id="resume-content" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Resume Header */}
            <div
              className="reveal text-center py-10 mb-12"
              style={{ borderBottom: "2px solid var(--color-navy)" }}
            >
              <h2
                className="text-4xl mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
              >
                Sidhaarth Ragavan
              </h2>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
              >
                sragavan7@gatech.edu · Atlanta, GA · Computer Engineering @ Georgia Tech
              </p>
            </div>

            {/* Education */}
            <div className="reveal mb-10">
              <h3
                className="text-xs uppercase tracking-widest mb-4 pb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-gold)",
                  borderBottom: "1px solid var(--color-border)",
                  letterSpacing: "0.15em",
                }}
              >
                Education
              </h3>
              {resumeData.education.map((edu, i) => (
                <div key={i} className="mb-4">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <p
                        className="font-semibold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "1rem" }}
                      >
                        {edu.institution}
                      </p>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                      >
                        {edu.degree}
                      </p>
                    </div>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {edu.details.map((d, j) => (
                      <li
                        key={j}
                        className="text-sm flex items-start gap-2"
                        style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                      >
                        <span style={{ color: "var(--color-gold)", marginTop: "0.35rem" }}>▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="reveal reveal-delay-1 mb-10">
              <h3
                className="text-xs uppercase tracking-widest mb-4 pb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-gold)",
                  borderBottom: "1px solid var(--color-border)",
                  letterSpacing: "0.15em",
                }}
              >
                Experience
              </h3>
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="mb-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <p
                        className="font-semibold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "1rem" }}
                      >
                        {exp.role}
                      </p>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "var(--font-body)", color: "var(--color-gold)", fontWeight: 500 }}
                      >
                        {exp.org}
                      </p>
                    </div>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm flex items-start gap-2"
                        style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                      >
                        <span style={{ color: "var(--color-gold)", marginTop: "0.35rem" }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="reveal reveal-delay-2 mb-10">
              <h3
                className="text-xs uppercase tracking-widest mb-4 pb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-gold)",
                  borderBottom: "1px solid var(--color-border)",
                  letterSpacing: "0.15em",
                }}
              >
                Projects
              </h3>
              {resumeData.projects.map((proj, i) => (
                <div key={i} className="mb-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <p
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "1rem" }}
                    >
                      {proj.name}
                    </p>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                    >
                      {proj.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {proj.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm flex items-start gap-2"
                        style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                      >
                        <span style={{ color: "var(--color-gold)", marginTop: "0.35rem" }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="reveal reveal-delay-3 mb-10">
              <h3
                className="text-xs uppercase tracking-widest mb-4 pb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-gold)",
                  borderBottom: "1px solid var(--color-border)",
                  letterSpacing: "0.15em",
                }}
              >
                Technical Skills
              </h3>
              <div className="space-y-2">
                {Object.entries(resumeData.skills).map(([category, items]) => (
                  <div key={category} className="flex flex-wrap gap-x-4 gap-y-1 items-baseline">
                    <span
                      className="text-xs font-medium shrink-0"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-navy)", minWidth: "160px" }}
                    >
                      {category}:
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                    >
                      {items.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <div
              className="reveal reveal-delay-4 text-center py-8"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <p
                className="text-sm mb-4"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
              >
                Download a PDF copy of this resume
              </p>
              <button
                onClick={() => alert("To enable PDF download, upload your resume PDF and update this button's link.")}
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-navy)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                }}
              >
                <Download size={16} />
                Download Resume (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

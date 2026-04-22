/*
 * Projects Page — Swiss International Typographic Style
 * Project cards with circuit-board background header
 * Featured ECE Discovery Project (Pulse8) + regular projects
 */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Clock } from "lucide-react";

const PROJECTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663497014934/nQVsZPgArw26hCw8XBzz75/projects-bg-42hd7jizW9jirXR2ud4mbF.webp";

const regularProjects = [
  {
    name: "SnapDunk",
    tech: "Python · YOLOv8 · OpenCV · Flask · Google Cloud",
    award: "Ramblin' Hacks GT 2026 — 2nd Place, $800",
    bullets: [
      "Built a computer vision pipeline converting landscape basketball footage to portrait video using YOLOv8 player and ball detection with adaptive importance scoring.",
      "Deployed as a scalable Flask API on Google Cloud Run with end-to-end automated video processing from raw footage to upload-ready output.",
    ],
  },
  {
    name: "64-Bit Adder",
    tech: "Verilog · SystemVerilog · Digital Design · Testbench Verification",
    award: null,
    bullets: [
      "Designed and implemented a 64-bit adder in Verilog targeting silicon-level fabrication with comprehensive testbenches verifying correctness across edge cases.",
      "Gained hands-on experience with RTL design and hardware verification methodology for real chip tapeout.",
    ],
  },
];

const discoverySections = [
  {
    id: "idea",
    label: "Discovery Project Idea",
    body: "My goal was to build a wearable assistive device called Pulse8 that helps deaf and hard-of-hearing gamers experience spatial audio through haptic feedback. Competitive gaming relies heavily on directional sound cues — footsteps, gunshots, abilities — and players who can't hear them are at a significant disadvantage. I wanted to use ESP32 microcontrollers to capture game audio in real time, classify sound events using digital signal processing, and translate them into directional vibrations that a player can physically feel. The core technical challenge was doing all of this fast enough that the haptic feedback feels instantaneous and useful during gameplay.",
  },
  {
    id: "progress",
    label: "Project Progress",
    body: "I started by researching FFT libraries compatible with the ESP32 and testing basic microphone input using a MEMS microphone module. The first few weeks were spent getting clean audio samples and understanding how different in-game sounds look in the frequency domain. From there, I built out the spectral analysis pipeline — using FFT-based frequency decomposition to identify distinct sound signatures like gunshots (sharp broadband spikes), footsteps (low-frequency periodic patterns), and voice chat (mid-range harmonic content). Once classification was working on a single board, I moved to the communication layer. I set up ESP-NOW wireless communication between two ESP32 microcontrollers — one dedicated to audio capture and DSP processing, and the other to driving the haptic output. The final stage was assembling the wearable prototype itself: I soldered 8 vibration motors onto a flexible wristband layout, each mapped to a spatial direction (front, back, left, right, and four diagonals), and wired them through motor drivers to the output ESP32.",
  },
  {
    id: "results",
    label: "Successes and Failures",
    body: "The FFT-based classification worked reliably for acoustically distinct sounds — gunshots and explosions were detected with high accuracy because of their sharp spectral signatures. Getting ESP-NOW latency low enough for real-time use was one of the biggest challenges. I had to optimize the packet payload size and increase the transmission frequency to bring end-to-end latency under 50ms from sound detection to haptic output, which was a major success. On the failure side, the system struggled with overlapping audio — when multiple sounds occurred simultaneously (like footsteps during gunfire), the classifier would sometimes misidentify the dominant source. The physical prototype also ended up bulkier than I wanted. The motor drivers and wiring took up more space than expected, and the wristband form factor needs further miniaturization to be comfortable for extended gaming sessions. Power consumption was another issue — running continuous FFT on the ESP32 drained the battery faster than anticipated.",
  },
  {
    id: "skills",
    label: "ECE Skills Gained",
    body: "Through this project I developed hands-on experience with: real-time digital signal processing and FFT-based spectral analysis, embedded C programming on the ESP32 platform, wireless communication protocols (specifically ESP-NOW for low-latency peer-to-peer data transfer), hardware prototyping including breadboarding and soldering, sensor integration with MEMS microphones for audio capture, motor driver circuit design for controlling haptic actuators, power management for battery-operated embedded systems, and debugging real-time systems where timing constraints are critical. I also gained experience with the iterative hardware design process — going from breadboard prototype to a wearable form factor required rethinking layout, wiring, and component placement multiple times.",
  },
  {
    id: "thoughts",
    label: "Final Thoughts",
    body: "This project deepened my interest in the Embedded Systems thread within ECE. Working at the intersection of DSP and hardware design showed me how tightly software and hardware need to be integrated in real-time systems — you can't just write good code, the hardware has to support it with low enough latency and clean enough signals. I plan to continue developing Pulse8 by improving the sound classification model (possibly moving to a lightweight ML approach instead of pure FFT thresholding) and designing a slimmer, more comfortable wearable form factor using a custom PCB instead of breakout boards. This project confirmed that I want to focus on embedded systems and signal processing in my upper-level coursework. It also made me more confident in going from an idea to a physical working prototype, which is something I hadn't done at this scale before.",
  },
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

      {/* ── FEATURED: ECE 1100 Discovery Project ── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(160deg, var(--color-navy) 0%, oklch(0.18 0.06 255) 100%)",
        }}
      >
        <div className="container">
          {/* Section label */}
          <div className="mb-12">
            <p className="label-overline mb-3" style={{ color: "var(--color-gold)" }}>
              ECE 1100 · Discovery Project — Featured
            </p>
            <div className="section-divider" />
            <h2
              className="text-4xl md:text-5xl text-white mb-3"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Pulse8
            </h2>
            <p
              className="text-base"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
            >
              ESP32 · FFT / DSP · ESP-NOW · Embedded C · Haptic Actuators · MEMS Microphone
            </p>
          </div>

          {/* Hero image + intro */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <img
                src="/pulse8.jpg"
                alt="Pulse8 wearable haptic device prototype"
                className="w-full h-auto"
                style={{
                  display: "block",
                  border: "2px solid var(--color-gold)",
                }}
              />
              <p
                className="text-xs mt-2 text-center"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.45)" }}
              >
                Pulse8 — wearable haptic feedback device for spatial audio
              </p>
            </div>

            <div className="space-y-5">
              <p
                className="text-sm uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
              >
                Georgia Tech · ECE Discovery Studio · Spring 2025
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.80)" }}
              >
                Pulse8 is a wearable assistive device that helps deaf and hard-of-hearing gamers
                experience spatial audio through directional haptic feedback. Eight vibration motors
                map to compass directions — front, back, left, right, and four diagonals — giving
                players physical awareness of in-game sound events.
              </p>

              {/* Key specs strip */}
              <div
                className="grid grid-cols-2 gap-3 mt-2"
              >
                {[
                  { label: "Latency", value: "< 50 ms" },
                  { label: "Motors", value: "8 directional" },
                  { label: "Protocol", value: "ESP-NOW" },
                  { label: "DSP", value: "FFT spectral" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-3"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      borderLeft: "2px solid var(--color-gold)",
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="text-base font-semibold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Five graded subsections */}
          <div className="space-y-6">
            {discoverySections.map((sec, i) => (
              <div
                key={sec.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} p-7`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderTop: "2px solid var(--color-gold)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
                >
                  {sec.label}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.78)" }}
                >
                  {sec.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regular Projects ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-10">
            <p className="label-overline mb-3">Projects</p>
            <div className="section-divider" />
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
            >
              Other Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regularProjects.map((proj, i) => (
              <div
                key={proj.name}
                className={`reveal reveal-delay-${i + 1} p-7`}
                style={{
                  backgroundColor: "var(--color-secondary)",
                  borderTop: "2px solid var(--color-gold)",
                }}
              >
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
                >
                  {proj.name}
                </h3>
                <p
                  className="text-xs mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
                >
                  {proj.tech}
                </p>
                {proj.award && (
                  <p
                    className="text-xs mb-4"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted-foreground)" }}
                  >
                    {proj.award}
                  </p>
                )}
                {!proj.award && <div className="mb-4" />}
                <ul className="space-y-2">
                  {proj.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
                    >
                      <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>—</span>
                      <span>{b}</span>
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

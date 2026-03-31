/*
 * Contact Page — Swiss International Typographic Style
 * Clean contact info with navy background, gold accents
 * Email, LinkedIn, GitHub, location
 */

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "sragavan7@gatech.edu",
    href: "mailto:sragavan7@gatech.edu",
    desc: "Best way to reach me for opportunities and collaborations",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Add your LinkedIn URL",
    href: "#",
    desc: "Professional profile and work history",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Add your GitHub URL",
    href: "#",
    desc: "Code repositories and open-source contributions",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Atlanta, GA",
    href: null,
    desc: "Georgia Institute of Technology",
  },
];

export default function Contact() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-24" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="container">
          <p className="label-overline mb-3" style={{ color: "var(--color-gold)" }}>Section 07</p>
          <div className="section-divider" />
          <h1
            className="text-4xl md:text-6xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Contact
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}
          >
            I'm always open to connecting with fellow engineers, recruiters, and anyone interested
            in hardware design, embedded systems, or robotics.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <div className="mb-12">
              <p className="label-overline mb-3">Get in Touch</p>
              <div className="section-divider" />
              <h2
                className="text-3xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
              >
                Let's Connect
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className={`reveal reveal-delay-${i + 1} p-6 h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                    style={{
                      border: "1px solid var(--color-border)",
                      borderTop: "3px solid var(--color-gold)",
                    }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(15,32,68,0.06)", color: "var(--color-navy)" }}
                    >
                      <Icon size={18} />
                    </div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-gold)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-semibold mb-2 flex items-center gap-1"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-navy)", fontSize: "0.95rem" }}
                    >
                      {item.value}
                      {item.href && item.href !== "#" && <ExternalLink size={12} />}
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                );

                return item.href && item.href !== "#" ? (
                  <a key={i} href={item.href} className="block no-underline">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* Note about LinkedIn/GitHub */}
            <div
              className="reveal reveal-delay-5 mt-8 p-5"
              style={{
                backgroundColor: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-foreground)" }}
              >
                <strong style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}>Note:</strong>{" "}
                LinkedIn and GitHub links will be updated once profiles are set up. In the meantime,
                reach out via email at{" "}
                <a
                  href="mailto:sragavan7@gatech.edu"
                  style={{ color: "var(--color-navy)", fontWeight: 600 }}
                >
                  sragavan7@gatech.edu
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Statement */}
      <section className="py-20" style={{ backgroundColor: "var(--color-secondary)" }}>
        <div className="container">
          <div className="max-w-2xl">
            <div className="reveal">
              <p className="label-overline mb-3">Availability</p>
              <div className="section-divider" />
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontWeight: 700 }}
              >
                Open to Opportunities
              </h2>
              <p
                className="leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
              >
                I'm actively seeking hardware engineering internships, embedded systems roles,
                and research opportunities starting sophomore year (Summer 2026). I'm particularly
                interested in positions involving digital design, FPGA development, chip
                verification, or embedded firmware.
              </p>
              <p
                className="leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--color-muted-foreground)" }}
              >
                If you're working on interesting hardware problems — whether at a startup or a
                major semiconductor company — I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*
 * Layout Component — Swiss International Typographic Style
 * Sticky top nav with deep navy background, gold accent on active links
 * Clean footer with contact info
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/career-goals", label: "Career Goals" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(15, 32, 68, 0.97)" : "rgba(15, 32, 68, 1)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <Link href="/">
              <span
                className="text-white font-semibold tracking-wide hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
              >
                SR
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className="px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: isActive ? "var(--color-gold)" : "rgba(255,255,255,0.75)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {link.label}
                      <span
                        className="absolute bottom-0 left-3 right-3 h-px transition-all duration-200"
                        style={{
                          backgroundColor: "var(--color-gold)",
                          transform: isActive ? "scaleX(1)" : "scaleX(0)",
                          transformOrigin: "left",
                        }}
                      />
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(15, 32, 68, 0.98)" }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className="block px-3 py-2.5 text-sm font-medium rounded transition-colors"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: isActive ? "var(--color-gold)" : "rgba(255,255,255,0.8)",
                        backgroundColor: isActive ? "rgba(201, 168, 76, 0.1)" : "transparent",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "var(--color-navy-dark)", color: "rgba(255,255,255,0.6)" }}>
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p
                className="text-white font-semibold mb-1"
                style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
              >
                Sidhaarth Ragavan
              </p>
              <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Computer Engineering @ Georgia Tech
              </p>
            </div>
            <div className="flex flex-col gap-1 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <a
                href="mailto:sragavan7@gatech.edu"
                className="hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                sragavan7@gatech.edu
              </a>
              <span>Atlanta, GA</span>
            </div>
            <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="mt-8 pt-6 text-xs text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)", fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} Sidhaarth Ragavan · ECE ePortfolio · Georgia Tech
          </div>
        </div>
      </footer>
    </div>
  );
}

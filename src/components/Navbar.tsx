





"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive((visible.target as HTMLElement).id);
        }
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          height: "60px",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <a href="#about" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span
            className="mono"
            style={{
              fontSize: "14px",
              color: "#f4f4f5",
              letterSpacing: "0.04em",
              fontWeight: 600,
            }}
          >
            emily.jao
          </span>
        </a>

        <ul
          style={{
            display: "flex",
            gap: "8px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {links.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            const isHovered = hovered === href;

            return (
              <li key={href}>
                <a
                  href={href}
                  className="mono"
                  onMouseEnter={() => setHovered(href)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    background: isActive
                      ? "rgba(255,255,255,0.14)"
                      : isHovered
                      ? "rgba(255,255,255,0.09)"
                      : "transparent",
                    color: isActive || isHovered ? "#f3a38b" : "#b8b8b8",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.28)"
                      : isHovered
                      ? "1px solid rgba(255,255,255,0.16)"
                      : "1px solid transparent",
                    transition: "all 0.18s ease",
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const els = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
      for (const el of [...els].reverse()) {
        if (window.scrollY >= el.offsetTop - 140) {
          setActive(el.id);
          break;
        }
      }

      if (window.scrollY < 120) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
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
        </button>

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
            const id = href.slice(1);
            const isActive = active === id;
            const isHovered = hovered === href;

            return (
              <li key={href}>
                <a
                  href={href}
                  className="mono"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
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

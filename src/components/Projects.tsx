"use client";

import { projects } from "@/data";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

export default function Projects() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-section)" }}>
      <div
        className="section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <SectionHeader title="Selected Work" bottomSpace={56}/>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "18px",
            width: "100%",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              onMouseEnter={() => !p.placeholder && setHov(p.title)}
              onMouseLeave={() => setHov(null)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "28px",
                minHeight: "320px",
                background: p.placeholder ? "rgba(255,255,255,0.03)" : "var(--surface)",
                border: `1px ${p.placeholder ? "dashed" : "solid"} ${
                  hov === p.title ? "rgba(255,255,255,0.25)" : "var(--border)"
                }`,
                borderRadius: "var(--radius)",
                opacity: p.placeholder ? 0.55 : 1,
                transform: hov === p.title ? "translateY(-2px)" : "none",
                transition: "all 0.2s",
                position: "relative",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {!p.placeholder && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg,#e2e2e2,#f3a38b)",
                    opacity: hov === p.title ? 1 : 0,
                    transition: "opacity 0.25s",
                  }}
                />
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "24px" }}>{p.icon}</span>

                {p.githubUrl && !p.placeholder && (
                  <a
                    href={p.githubUrl}
                    className="mono"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                  >
                    ↗ GitHub
                  </a>
                )}
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  flexGrow: 1,
                  margin: 0,
                }}
              >
                {p.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className={`pill ${p.placeholder ? "pill-white" : "pill-silver"}`}
                    style={{ fontSize: "11px", padding: "4px 10px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
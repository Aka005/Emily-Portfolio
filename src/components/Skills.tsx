"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data";

const SkillShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="12" height="12">
    <path
      d="M12 3l7 3v5c0 4.7-2.9 8.7-7 10-4.1-1.3-7-5.3-7-10V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12.3l1.7 1.7 3.5-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SkillSearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="12" height="12">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M16 16l4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const SkillCogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="12" height="12">
    <path
      d="M10.5 4.5h3l.6 2.1a6.8 6.8 0 0 1 1.7.9l2.1-.8 1.5 2.6-1.7 1.4c.1.3.1.6.1.9s0 .6-.1.9l1.7 1.4-1.5 2.6-2.1-.8c-.5.3-1 .6-1.7.9l-.6 2.1h-3l-.6-2.1c-.6-.2-1.2-.5-1.7-.9l-2.1.8-1.5-2.6 1.7-1.4A5.6 5.6 0 0 1 6.3 12c0-.3 0-.6.1-.9L4.7 9.7 6.2 7.1l2.1.8c.5-.3 1-.6 1.7-.9l.6-2.1z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const SkillCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="12" height="12">
    <path
      d="M8 9l-4 3 4 3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 9l4 3-4 3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 7l-2 10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const SkillScanIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="12" height="12">
    <path
      d="M4 9V7a3 3 0 0 1 3-3h2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M20 9V7a3 3 0 0 0-3-3h-2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M4 15v2a3 3 0 0 0 3 3h2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M20 15v2a3 3 0 0 1-3 3h-2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M8.5 12h7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M13.5 9.5L16 12l-2.5 2.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const categoryIcons: Record<string, React.ReactNode> = {
  "Security Operations": <SkillShieldIcon />,
  "Compliance & Governance": <SkillSearchIcon />,
  "Web Security": <SkillCogIcon />,
  Programming: <SkillCodeIcon />,
  "Digital Forensics": <SkillScanIcon />,
};

const skillLevels: Record<string, number> = {
  Wireshark: 90,
  "CVSS Scoring": 90,
  "MITRE ATT&CK": 90,
  "Diamond Model": 90,
  "Cyber Kill Chain": 90,
  SIEM: 30,
  "SOC 2": 100,
  "IEC 62443": 100,
  "ISO 27001": 100,
  "NIST CSF": 90,
  HIPAA: 90,
  "NIST 800-53": 90,
  SQLi: 100,
  XSS: 100,
  IDOR: 100,
  "Broken Access Control": 100,
  "Burp Suite": 90,
  "Dev Tools": 70,
  Java: 75,
  SQL: 60,
  Python: 50,
  TypeScript: 30,
  Autopsy: 85,
  Ghidra: 80,
  FTK: 75,
};

export default function Skills() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section id="skills" className="section section-alt">
      <div
        className="section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <SectionHeader title="Technical Skills" bottomSpace={56} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "18px",
            width: "100%",
          }}
        >
          {skillCategories.map(({ title, skills }) => (
            <div
              key={title}
              onMouseEnter={() => setHov(title)}
              onMouseLeave={() => setHov(null)}
              className="card"
              style={{
                padding: "26px",
                borderColor: hov === title ? "#f3a38b" : "var(--border)",
                boxShadow:
                  hov === title
                    ? "0 0 0 1px rgba(243,163,139,0.35), 0 0 24px rgba(243,163,139,0.12)"
                    : "none",
                transform: hov === title ? "translateY(-2px)" : "none",
                transition: "all 0.25s ease",
                width: "100%",
                minHeight: "190px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "22px",
                    height: "22px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    border: "1px solid rgba(243,163,139,0.22)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#f3a38b",
                    boxShadow:
                      "0 0 0 1px rgba(243,163,139,0.05), 0 0 8px rgba(243,163,139,0.08)",
                    flexShrink: 0,
                  }}
                >
                  {categoryIcons[title] ?? null}
                </span>

                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {title}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {skills.map((s) => {
                  const level = skillLevels[s] ?? 75;

                  return (
                    <div key={s}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "6px",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "13px",
                            color: "var(--text-secondary)",
                            fontWeight: 500,
                          }}
                        >
                          {s}
                        </span>

                        <span
                          style={{
                            fontSize: "12px",
                            color: "#f3a38b",
                            fontFamily: "monospace",
                          }}
                        >
                          {level}%
                        </span>
                      </div>

                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.06)",
                          overflow: "hidden",
                          border: "1px solid rgba(243,163,139,0.12)",
                        }}
                      >
                        <div
                          style={{
                            width: `${level}%`,
                            height: "100%",
                            borderRadius: "999px",
                            background:
                              "linear-gradient(90deg, rgba(243,163,139,0.25) 0%, #f3a38b 50%, rgba(243,163,139,0.95) 100%)",
                            boxShadow:
                              "0 0 10px rgba(243,163,139,0.45), 0 0 18px rgba(243,163,139,0.2)",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(120deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.1) 100%)",
                              mixBlendMode: "screen",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
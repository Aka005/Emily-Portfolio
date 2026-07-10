"use client";

import { certifications } from "@/data";
import type { Certification } from "@/types";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import Image from "next/image";

function pillClass(s: Certification["status"]) {
  if (s === "active") return "pill-silver";
  if (s === "pending") return "pill-purple";
  return "pill-white";
}

function pillText(s: Certification["status"]) {
  if (s === "active") return "✓ Active";
  if (s === "pending") return "In Progress";
  return "Planned";
}

export default function Certifications() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section id="certifications" className="section" style={{ background: "var(--bg-section)" }}>
      <div
        className="section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <SectionHeader title="Certifications" bottomSpace={56} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "18px",
            width: "100%",
          }}
        >
          {certifications.map((cert) => {
            const clickable = !!cert.url;

            const Card = (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  padding: "26px",
                  background: cert.status === "planned" ? "rgba(255,255,255,0.03)" : "var(--surface)",
                  border: `1px ${cert.status === "planned" ? "dashed" : "solid"} ${
                    hov === cert.name ? "rgba(255,255,255,0.28)" : "var(--border)"
                  }`,
                  borderRadius: "var(--radius)",
                  opacity: cert.status === "planned" ? 0.65 : 1,
                  transform: hov === cert.name ? "translateY(-2px)" : "none",
                  transition: "all 0.2s",
                  width: "100%",
                  cursor: clickable ? "pointer" : "default",
                  minHeight: "210px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {typeof cert.icon === "string" && cert.icon.startsWith("/") ? (
                    <Image
                      src={cert.icon}
                      alt={cert.name}
                      width={34}
                      height={34}
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <span style={{ fontSize: "24px" }}>{cert.icon}</span>
                  )}
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "5px",
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                <p className="mono" style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>
                  {cert.year}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                  <span className={`pill ${pillClass(cert.status)}`} style={{ fontSize: "11px", width: "fit-content" }}>
                    {pillText(cert.status)}
                  </span>

                  {clickable && (
                    <span className="mono" style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                      View →
                    </span>
                  )}
                </div>
              </div>
            );

            return clickable ? (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cert.status !== "planned" && setHov(cert.name)}
                onMouseLeave={() => setHov(null)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {Card}
              </a>
            ) : (
              <div
                key={cert.name}
                onMouseEnter={() => cert.status !== "planned" && setHov(cert.name)}
                onMouseLeave={() => setHov(null)}
              >
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

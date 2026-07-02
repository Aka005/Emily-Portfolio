"use client";

import { contactLinks } from "@/data";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

export default function Contact() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section id="contact" className="section section-alt" style={{ textAlign: "center" }}>
      <div
        className="section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <SectionHeader title="Let's Connect" center bottomSpace={44} />

        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto 34px",
            lineHeight: 1.85,
          }}
        >
          Open to cybersecurity roles!
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}>
          {contactLinks.map(({icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              onMouseEnter={() => setHov(label)}
              onMouseLeave={() => setHov(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: hov === label ? "rgba(243,163,139,0.10)" : "var(--surface)",
                border: `1px solid ${hov === label ? "rgba(243,163,139,0.45)" : "var(--border)"}`,
                borderRadius: "999px",
                padding: "12px 18px",
                minWidth: "180px",
                textDecoration: "none",
                transform: hov === label ? "translateY(-2px)" : "none",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: "18px", width: "20px", textAlign: "center" }}>{icon}</span>
              <span style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>
                {label}
              </span>
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          Based in the US · Open to relocation ·{" "}
          <a
            href="mailto:emily@example.com"
            style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 700 }}
          >
            Say hello →
          </a>
        </p>
      </div>
    </section>
  );
}
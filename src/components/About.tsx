"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";

const quickItems = [
  { label: "Education", value: "B.S. Cybersecurity, Penn State University" },
  { label: "Location", value: "VA, United States" },
  { label: "Current Role", value: "Cyber Risk Intern" },
  { label: "Languages", value: "English, Japanese, Mandarin, Korean" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-section)" }}>
      <div
        className="section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <SectionHeader title="Who I Am" bottomSpace={56} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px minmax(0, 1fr)",
            gap: "56px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                overflow: "hidden",
              }}
            >
              <Image
                src="/official_headshot.jpg"
                alt="Emily Jao"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "760px" }}>
             {[
                <>
                  Hi there! Thanks for stopping by.
                </>,
                <>
                  I&apos;m a{" "}
                  <strong style={{ color: "#f3a38b", fontWeight: 700 }}>
                    fourth-year Cybersecurity student
                  </strong>{" "}
                  at Penn State, currently interning in cybersecurity risk management. I focus on{" "}
                  <strong style={{ color: "#f3a38b", fontWeight: 700 }}>
                    vendor risk
                  </strong>
                  ,{" "}
                  <strong style={{ color: "#f3a38b", fontWeight: 700 }}>
                    security compliance
                  </strong>
                  , and reducing cyber risk.
                </>,
                <>
                  I&apos;m passionate about{" "}
                  <strong style={{ color: "#f3a38b", fontWeight: 700 }}>
                    global cybersecurity
                  </strong>{" "}
                  — including international security standards and emerging threats. My goal is to build a career in the{" "}
                  <strong style={{ color: "#f3a38b", fontWeight: 700 }}>
                    APAC region
                  </strong>{" "}
                  by combining cybersecurity with international business and collaboration.
                </>,
              ].map((txt, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "17px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.95,
                    margin: 0,
                  }}
                >
                  {txt}
                </p>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "14px",
                marginTop: "8px",
              }}
            >
              {quickItems.map(({ label, value }) => (
                <div
                  key={label}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "20px 20px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
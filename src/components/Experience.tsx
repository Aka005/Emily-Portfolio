"use client";

import { experiences } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div
        className="section-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <SectionHeader title="Work History"  />

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.title} className="tl-row">
              <div className={`tl-dot${exp.current ? " active" : ""}`} />

              <div
                className="card"
                style={{
                  padding: "26px 28px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.25,
                        marginBottom: "6px",
                      }}
                    >
                      {exp.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--accent)",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <span
                    className="pill pill-white mono"
                    style={{
                      fontSize: "12px",
                      color: "var(--text-secondary)",
                      padding: "6px 12px",
                      border: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.06)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    margin: 0,
                  }}
                >
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: "15px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.8,
                        paddingLeft: "18px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--text-muted)",
                        }}
                      >
                        —
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
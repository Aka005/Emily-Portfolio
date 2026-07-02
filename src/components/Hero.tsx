"use client";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 40px",
        position: "relative",
        overflow: "hidden",
        background: "rgba(8,8,8,0.45)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(8,8,8,0.7) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "60px",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <p
          className="mono animate-fade-up delay-1"
          style={{
            fontSize: "11px",
            color: "#aaaaaa",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          &gt; whoami
        </p>

        <h1
          className="animate-fade-up delay-2"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(48px, 7vw, 86px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
            color: "#ffffff",
            textShadow: "0 2px 40px rgba(0,0,0,0.8)",
          }}
        >
          Emily Jao
          <span
            className="animate-blink"
            style={{
              display: "inline-block",
              width: "4px",
              height: "0.75em",
              background: "#e2e2e2",
              verticalAlign: "middle",
              marginLeft: "8px",
            }}
          />
        </h1>

        <p
          className="animate-fade-up delay-3"
          style={{
            fontSize: "17px",
            color: "#c0c0c0",
            lineHeight: 1.75,
            maxWidth: "500px",
            margin: "0 auto 28px",
            textShadow: "0 1px 12px rgba(0,0,0,0.9)",
          }}
        >
          Fourth-year Cybersecurity student
        </p>

        <div
          className="animate-fade-up delay-4"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "56px",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              color: "#0a0a0a",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              padding: "12px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#e2e2e2";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#ffffff";
              el.style.transform = "none";
            }}
          >
            View Work ↓
          </a>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid #ffffff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              padding: "12px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#ffffff";
              el.style.color = "#0a0a0a";
              el.style.borderColor = "#ffffff";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#ffffff";
              el.style.borderColor = "#ffffff";
              el.style.transform = "none";
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
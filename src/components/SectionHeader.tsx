type SectionHeaderProps = {
  label?: string;
  title: string;
  center?: boolean;
  bottomSpace?: number;
};

export default function SectionHeader({
  label,
  title,
  center,
  bottomSpace = 32,
}: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: `${bottomSpace}px`, textAlign: center ? "center" : "left" }}>
      {label && (
        <p
          className="mono"
          style={{
            fontSize: "10px",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "10px",
          }}
        >
          {label}
        </p>
      )}

      <h2
        style={{
          fontSize: "clamp(30px, 3vw, 44px)",
          lineHeight: 1.1,
          color: "var(--text-primary)",
          margin: 0,
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
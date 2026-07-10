export default function Footer() {
  return (
    <footer style={{
      background:"var(--bg)",
      borderTop:"1px solid rgba(255,255,255,0.06)",
      textAlign:"center", padding:"26px",
    }}>
      <p className="mono" style={{ fontSize:"11px", color:"#444" }}>
        <span style={{ color:"#888" }}>emilyj</span>
        <span style={{ color:"#888" }}>2025</span>
      </p>
    </footer>
  );
}

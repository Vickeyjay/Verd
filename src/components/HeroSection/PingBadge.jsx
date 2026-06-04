import "./PingBadge.css";

export default function PingBadge({ label = "Launching Soon", color = "green", speed = 1.4 }) {
  return (
    <div className={`ping-badge ping-badge--${color}`}>
      <div className="ping-wrapper">
        <span className="ping-ring" style={{ '--ping-duration': `${speed}s` }} />
        <span className="ping-core" />
      </div>
      {label}
    </div>
  );
}
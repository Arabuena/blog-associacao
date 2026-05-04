type ParticleSpec = {
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
};

const particles: ParticleSpec[] = [
  { left: "6%", top: "14%", size: "0.7rem", delay: "0s", duration: "18s" },
  { left: "14%", top: "68%", size: "1.1rem", delay: "2s", duration: "24s" },
  { left: "22%", top: "24%", size: "0.9rem", delay: "4s", duration: "20s" },
  { left: "28%", top: "82%", size: "0.6rem", delay: "1s", duration: "22s" },
  { left: "36%", top: "12%", size: "1.4rem", delay: "3s", duration: "26s" },
  { left: "42%", top: "54%", size: "0.8rem", delay: "5s", duration: "16s" },
  { left: "48%", top: "30%", size: "1rem", delay: "6s", duration: "19s" },
  { left: "54%", top: "76%", size: "1.3rem", delay: "2.5s", duration: "25s" },
  { left: "62%", top: "16%", size: "0.7rem", delay: "7s", duration: "21s" },
  { left: "68%", top: "46%", size: "1.2rem", delay: "4.5s", duration: "23s" },
  { left: "74%", top: "72%", size: "0.9rem", delay: "1.5s", duration: "18s" },
  { left: "82%", top: "22%", size: "1.1rem", delay: "8s", duration: "24s" },
  { left: "88%", top: "60%", size: "0.75rem", delay: "5.5s", duration: "20s" },
  { left: "92%", top: "36%", size: "1.35rem", delay: "3.5s", duration: "27s" },
];

export function ParticleField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.22),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.16),_transparent_32%),radial-gradient(circle_at_80%_10%,_rgba(96,165,250,0.18),_transparent_28%)]" />
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />
      <div className="grid-overlay" />
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${particle.top}-${index}`}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
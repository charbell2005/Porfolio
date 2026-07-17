export function Particles() {
  const particles = [
    { size: 4, x: '10%', y: '20%', delay: 0, duration: 18 },
    { size: 3, x: '25%', y: '60%', delay: 2, duration: 22 },
    { size: 5, x: '40%', y: '15%', delay: 4, duration: 20 },
    { size: 3, x: '55%', y: '75%', delay: 1, duration: 24 },
    { size: 4, x: '70%', y: '30%', delay: 3, duration: 19 },
    { size: 3, x: '85%', y: '55%', delay: 5, duration: 21 },
    { size: 5, x: '15%', y: '80%', delay: 2, duration: 23 },
    { size: 4, x: '60%', y: '45%', delay: 0, duration: 17 },
    { size: 3, x: '90%', y: '10%', delay: 4, duration: 25 },
    { size: 4, x: '35%', y: '90%', delay: 1, duration: 20 },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-400/10"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}

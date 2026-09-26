function initialsOf(name) {
  return name
    .split(" ")
    .filter((w) => w[0] && w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function InitialsAvatar({ name, className = "" }) {
  return (
    <div
      role="img"
      aria-label={name}
      className={`flex items-center justify-center bg-gradient-to-br from-ieee-500 to-ieee-800 ${className}`}
    >
      <span className="text-4xl font-black tracking-wide text-white/90">
        {initialsOf(name)}
      </span>
    </div>
  );
}

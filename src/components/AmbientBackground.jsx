const BLOBS = [
  {
    className: "-left-[15%] -top-[20%] h-[48rem] w-[48rem]",
    rgb: "0, 98, 155",
    opacity: 0.34,
    depth: 0,
  },
  {
    className: "right-[-18%] -top-[10%] h-[44rem] w-[44rem]",
    rgb: "243, 183, 62",
    opacity: 0.3,
    depth: 1,
  },
  {
    className: "left-[10%] top-[25%] h-[42rem] w-[42rem]",
    rgb: "244, 150, 130",
    opacity: 0.32,
    depth: 2,
  },
  {
    className: "right-[4%] top-[28%] h-[48rem] w-[48rem]",
    rgb: "47, 143, 196",
    opacity: 0.3,
    depth: 1,
  },
  {
    className: "left-[32%] bottom-[-22%] h-[46rem] w-[46rem]",
    rgb: "232, 160, 32",
    opacity: 0.26,
    depth: 2,
  },
  {
    className: "-left-[10%] bottom-[-24%] h-[40rem] w-[40rem]",
    rgb: "96, 180, 220",
    opacity: 0.25,
    depth: 1,
  },
];

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
        bg-[#f3f0eb]
      "
    >
      <div
        className="
          absolute
          -inset-[8%]
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[length:250%_250%]
            bg-gradient-to-br
            from-[#d9edf7]
            via-[#f2ebe6]
            to-[#f9dfbb]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[length:220%_220%]
            bg-gradient-to-tr
            from-[#c6e3f3]/60
            via-transparent
            to-[#ffd8ca]/60
          "
        />
      </div>

      <div
        className="
          absolute
          inset-0
        "
      >
        {BLOBS.filter((blob) => blob.depth !== 2).map((blob, index) => (
          <FogBlob
            key={`far-${index}`}
            {...blob}
          />
        ))}
      </div>

      <div
        className="
          absolute
          inset-0
        "
      >
        {BLOBS.filter((blob) => blob.depth === 2).map((blob, index) => (
          <FogBlob
            key={`near-${index}`}
            {...blob}
          />
        ))}
      </div>

      <div
        className="
          absolute
          left-[-15%]
          top-[18%]
          h-[34rem]
          w-[75%]
          rounded-[50%]
          bg-white/20
          blur-[110px]
        "
      />

      <div
        className="
          absolute
          bottom-[5%]
          right-[-10%]
          h-[30rem]
          w-[65%]
          rounded-[50%]
          bg-white/20
          blur-[120px]
        "
      />

      {/* =========================================================
          VERY SOFT OVERLAY
      ========================================================= */}

      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Subtle center haze */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]
        "
      />
    </div>
  );
}


function FogBlob({ className, rgb, opacity }) {
  return (
    <div
      className={`
        absolute
        ${className}
      `}
    >
      <div
        className="
          h-full
          w-full
          rounded-[45%]
          blur-[95px]
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 35% 35%,
              rgba(${rgb}, ${opacity}) 0%,
              rgba(${rgb}, ${opacity * 0.9}) 18%,
              rgba(${rgb}, ${opacity * 0.55}) 42%,
              rgba(${rgb}, ${opacity * 0.2}) 62%,
              rgba(${rgb}, 0) 78%
            )
          `,

        }}
      />
    </div>
  );
}
import { useEffect, useRef } from "react";

const BLOBS = [
  {
    className: "-left-[15%] -top-[20%] h-[48rem] w-[48rem]",
    rgb: "0, 98, 155",
    opacity: 0.34,
    animation: "fog-drift-a",
    duration: "7s",
    morph: "9s",
    depth: 0,
  },
  {
    className: "right-[-18%] -top-[10%] h-[44rem] w-[44rem]",
    rgb: "243, 183, 62",
    opacity: 0.3,
    animation: "fog-drift-b",
    duration: "8s",
    morph: "10s",
    depth: 1,
  },
  {
    className: "left-[10%] top-[25%] h-[42rem] w-[42rem]",
    rgb: "244, 150, 130",
    opacity: 0.32,
    animation: "fog-drift-c",
    duration: "6.5s",
    morph: "8s",
    depth: 2,
  },
  {
    className: "right-[4%] top-[28%] h-[48rem] w-[48rem]",
    rgb: "47, 143, 196",
    opacity: 0.3,
    animation: "fog-drift-a",
    duration: "7.5s",
    morph: "11s",
    depth: 1,
  },
  {
    className: "left-[32%] bottom-[-22%] h-[46rem] w-[46rem]",
    rgb: "232, 160, 32",
    opacity: 0.26,
    animation: "fog-drift-b",
    duration: "8.5s",
    morph: "9s",
    depth: 2,
  },
  {
    className: "-left-[10%] bottom-[-24%] h-[40rem] w-[40rem]",
    rgb: "96, 180, 220",
    opacity: 0.25,
    animation: "fog-drift-c",
    duration: "6s",
    morph: "10s",
    depth: 1,
  },
];

export default function AmbientBackground() {
  const backgroundRef = useRef(null);
  const layerOneRef = useRef(null);
  const layerTwoRef = useRef(null);
  const cursorFogRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let cursorTargetX = window.innerWidth / 2;
    let cursorTargetY = window.innerHeight / 2;

    let cursorX = cursorTargetX;
    let cursorY = cursorTargetY;

    let animationFrame;

    const handlePointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      /*
       * Normalize mouse position between approximately -1 and +1.
       */
      targetX = (x / window.innerWidth - 0.5) * 2;
      targetY = (y / window.innerHeight - 0.5) * 2;

      cursorTargetX = x;
      cursorTargetY = y;
    };

    const animate = () => {
      /*
       * Smooth mouse movement.
       * Smaller value = softer / slower reaction.
       */
      currentX += (targetX - currentX) * 0.045;
      currentY += (targetY - currentY) * 0.045;

      cursorX += (cursorTargetX - cursorX) * 0.075;
      cursorY += (cursorTargetY - cursorY) * 0.075;

      /*
       * Different depths create parallax.
       */
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `
          translate3d(
            ${currentX * -8}px,
            ${currentY * -8}px,
            0
          )
          scale(1.04)
        `;
      }

      if (layerOneRef.current) {
        layerOneRef.current.style.transform = `
          translate3d(
            ${currentX * 18}px,
            ${currentY * 14}px,
            0
          )
        `;
      }

      if (layerTwoRef.current) {
        layerTwoRef.current.style.transform = `
          translate3d(
            ${currentX * -30}px,
            ${currentY * -24}px,
            0
          )
        `;
      }

      /*
       * Cursor-following fog.
       */
      if (cursorFogRef.current) {
        cursorFogRef.current.style.transform = `
          translate3d(
            ${cursorX - 300}px,
            ${cursorY - 300}px,
            0
          )
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
      {/* =========================================================
          MOVING BASE GRADIENT
      ========================================================= */}

      <div
        ref={backgroundRef}
        className="
          absolute
          -inset-[8%]
          will-change-transform
          transition-none
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
            motion-safe:animate-[gradient-pan_7s_ease-in-out_infinite]
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
            motion-safe:animate-[gradient-pan-reverse_9s_ease-in-out_infinite]
          "
        />
      </div>

      {/* =========================================================
          FAR FOG LAYER
      ========================================================= */}

      <div
        ref={layerOneRef}
        className="
          absolute
          inset-0
          will-change-transform
        "
      >
        {BLOBS.filter((blob) => blob.depth !== 2).map((blob, index) => (
          <FogBlob
            key={`far-${index}`}
            {...blob}
          />
        ))}
      </div>

      {/* =========================================================
          NEAR FOG LAYER
      ========================================================= */}

      <div
        ref={layerTwoRef}
        className="
          absolute
          inset-0
          will-change-transform
        "
      >
        {BLOBS.filter((blob) => blob.depth === 2).map((blob, index) => (
          <FogBlob
            key={`near-${index}`}
            {...blob}
          />
        ))}
      </div>

      {/* =========================================================
          CURSOR FOG
      ========================================================= */}

      <div
        ref={cursorFogRef}
        className="
          absolute
          left-0
          top-0
          h-[600px]
          w-[600px]
          rounded-full
          opacity-50
          blur-[80px]
          will-change-transform
        "
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(255,255,255,0.55) 0%,
              rgba(180,225,245,0.22) 28%,
              rgba(245,190,155,0.12) 48%,
              rgba(255,255,255,0) 72%
            )
          `,
        }}
      />

      {/* =========================================================
          WHITE MIST / HAZE
      ========================================================= */}

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
          motion-safe:animate-[mist-slide_8s_ease-in-out_infinite]
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
          motion-safe:animate-[mist-slide-reverse_10s_ease-in-out_infinite]
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


/*
 * Individual fog/cloud.
 *
 * There are two nested elements because:
 * - outer element controls position
 * - inner element controls animation
 *
 * This prevents cursor parallax from fighting against
 * the animation's transform property.
 */
function FogBlob({
  className,
  rgb,
  opacity,
  animation,
  duration,
  morph,
}) {
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
          will-change-transform
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

          animation: `
            ${animation} ${duration} ease-in-out infinite,
            fog-morph ${morph} ease-in-out infinite alternate
          `,
        }}
      />
    </div>
  );
}
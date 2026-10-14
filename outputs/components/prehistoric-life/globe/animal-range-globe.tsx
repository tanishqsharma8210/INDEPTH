"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import type * as THREE from "three";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";

import type { RangeRegion } from "@/lib/prehistoric-life/types";

function coordinatesToVector(
  latitude: number,
  longitude: number,
  radius = 1.02,
): [number, number, number] {
  const latitudeRadians = (latitude * Math.PI) / 180;
  const longitudeRadians = (longitude * Math.PI) / 180;
  return [
    radius * Math.cos(latitudeRadians) * Math.sin(longitudeRadians),
    radius * Math.sin(latitudeRadians),
    radius * Math.cos(latitudeRadians) * Math.cos(longitudeRadians),
  ];
}

const LATITUDE_RINGS = [
  { lat: 0, isEquator: true },
  { lat: 30, isEquator: false },
  { lat: 60, isEquator: false },
  { lat: -30, isEquator: false },
  { lat: -60, isEquator: false },
];

const MERIDIAN_ANGLES = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4];

function GlobeScene({
  regions,
  reducedMotion,
  isPlaying,
  targetRotation,
  activeRegion,
  onManualInteraction,
  onTargetReached,
}: {
  regions: RangeRegion[];
  reducedMotion: boolean;
  isPlaying: boolean;
  targetRotation: { x: number; y: number } | null;
  activeRegion: RangeRegion | null;
  onManualInteraction: () => void;
  onTargetReached: () => void;
}) {
  const globe = useRef<THREE.Group>(null);
  const dragOriginRef = useRef<{ x: number; y: number } | null>(null);

  useFrame((_, delta) => {
    if (!globe.current) return;

    if (targetRotation) {
      // Smoothly interpolate towards target rotation
      const diffY = targetRotation.y - globe.current.rotation.y;
      const diffX = targetRotation.x - globe.current.rotation.x;
      globe.current.rotation.y += diffY * 0.09;
      globe.current.rotation.x += diffX * 0.09;

      if (Math.abs(diffY) < 0.003 && Math.abs(diffX) < 0.003) {
        globe.current.rotation.y = targetRotation.y;
        globe.current.rotation.x = targetRotation.x;
        onTargetReached();
      }
    } else if (isPlaying && !dragOriginRef.current && !reducedMotion) {
      globe.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group
      ref={globe}
      onPointerDown={(event) => {
        onManualInteraction();
        dragOriginRef.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerMove={(event) => {
        if (dragOriginRef.current && globe.current) {
          const deltaX = event.clientX - dragOriginRef.current.x;
          const deltaY = event.clientY - dragOriginRef.current.y;
          globe.current.rotation.y += deltaX * 0.006;
          // Clamp X tilt between -0.65 and 0.65 radians
          const newX = globe.current.rotation.x + deltaY * 0.005;
          globe.current.rotation.x = Math.max(-0.65, Math.min(0.65, newX));
          dragOriginRef.current = { x: event.clientX, y: event.clientY };
        }
      }}
      onPointerUp={() => {
        dragOriginRef.current = null;
      }}
      onPointerOut={() => {
        dragOriginRef.current = null;
      }}
    >
      {/* Base planetary sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#111c34" metalness={0.25} roughness={0.78} />
      </mesh>

      {/* Atmospheric rim shell */}
      <mesh>
        <sphereGeometry args={[1.012, 64, 64]} />
        <meshStandardMaterial color="#4DA8DA" opacity={0.09} transparent />
      </mesh>

      {/* Cartographic graticule - Latitude rings */}
      {LATITUDE_RINGS.map(({ lat, isEquator }) => {
        const rad = (lat * Math.PI) / 180;
        const radius = 1.002 * Math.cos(rad);
        const y = 1.002 * Math.sin(rad);
        return (
          <mesh key={`lat-${lat}`} position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius - 0.0015, radius + 0.0015, 64]} />
            <meshBasicMaterial
              color={isEquator ? "#C8A45D" : "#4DA8DA"}
              opacity={isEquator ? 0.32 : 0.12}
              side={2}
              transparent
            />
          </mesh>
        );
      })}

      {/* Cartographic graticule - Meridian rings */}
      {MERIDIAN_ANGLES.map((angle, idx) => (
        <mesh key={`meridian-${idx}`} rotation={[0, angle, 0]}>
          <ringGeometry args={[1.0005, 1.0035, 64]} />
          <meshBasicMaterial color="#4DA8DA" opacity={0.08} side={2} transparent />
        </mesh>
      ))}

      {/* Evidence-backed fossil regions */}
      {regions.map((region) => {
        const position = coordinatesToVector(region.latitude, region.longitude);
        const isActive = activeRegion?.label === region.label;
        return (
          <group
            key={region.label}
            onUpdate={(grp) => grp.lookAt(0, 0, 0)}
            position={position}
          >
            {/* Broad region boundary disc */}
            <mesh>
              <circleGeometry args={[region.radius, 40]} />
              <meshBasicMaterial
                color={isActive ? "#F5F5F5" : "#C8A45D"}
                opacity={isActive ? 0.8 : 0.52}
                side={2}
                transparent
              />
            </mesh>
            {/* Inner locality pin */}
            <mesh position={[0, 0, 0.004]}>
              <circleGeometry args={[Math.min(region.radius * 0.28, 0.045), 24]} />
              <meshBasicMaterial color={isActive ? "#C8A45D" : "#F5F5F5"} side={2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function AnimalRangeGlobe({
  regions,
  reducedMotion,
}: {
  regions: RangeRegion[];
  reducedMotion: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(!reducedMotion);
  const [activeRegion, setActiveRegion] = useState<RangeRegion | null>(null);
  const [targetRotation, setTargetRotation] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [statusMessage, setStatusMessage] = useState<string>(
    "Interactive 3D globe loaded. Drag or use arrow keys to rotate.",
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Manual nudge rotation helpers
  const rotateDelta = useCallback((deltaX: number, deltaY: number) => {
    setIsPlaying(false);
    setTargetRotation((prev) => {
      const currentY = prev ? prev.y : 0;
      const currentX = prev ? prev.x : 0;
      return {
        y: currentY + deltaX,
        x: Math.max(-0.65, Math.min(0.65, currentX + deltaY)),
      };
    });
  }, []);

  const handleSelectRegion = useCallback(
    (region: RangeRegion) => {
      if (activeRegion?.label === region.label) {
        // Toggle off
        setActiveRegion(null);
        setTargetRotation(null);
        setIsPlaying(!reducedMotion);
        setStatusMessage("Deselected region. Resumed rotation.");
      } else {
        // Fly to region:
        // Point at longitude faces +Z when globe.rotation.y = - (longitude in rad)
        // Point at latitude faces camera when globe.rotation.x = (latitude in rad)
        const targetY = -(region.longitude * Math.PI) / 180;
        const targetX = Math.max(
          -0.65,
          Math.min(0.65, (region.latitude * Math.PI) / 180),
        );
        setActiveRegion(region);
        setIsPlaying(false);
        setTargetRotation({ x: targetX, y: targetY });
        setStatusMessage(`Focusing on ${region.label}: ${region.description}`);
      }
    },
    [activeRegion, reducedMotion],
  );

  const resetView = useCallback(() => {
    setActiveRegion(null);
    setTargetRotation({ x: 0, y: 0 });
    setIsPlaying(!reducedMotion);
    setStatusMessage("Orientation reset to prime view.");
  }, [reducedMotion]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (next) {
        setTargetRotation(null);
        setActiveRegion(null);
      }
      setStatusMessage(next ? "Resumed auto-rotation." : "Paused auto-rotation.");
      return next;
    });
  }, []);

  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          rotateDelta(-0.25, 0);
          setStatusMessage("Rotated west.");
          break;
        case "ArrowRight":
          event.preventDefault();
          rotateDelta(0.25, 0);
          setStatusMessage("Rotated east.");
          break;
        case "ArrowUp":
          event.preventDefault();
          rotateDelta(0, -0.15);
          setStatusMessage("Tilted downward.");
          break;
        case "ArrowDown":
          event.preventDefault();
          rotateDelta(0, 0.15);
          setStatusMessage("Tilted upward.");
          break;
        case " ":
        case "Enter":
          // If focus is directly on the container, toggle pause
          if (event.target === containerRef.current) {
            event.preventDefault();
            togglePlay();
          }
          break;
        case "Home":
          event.preventDefault();
          resetView();
          break;
      }
    },
    [rotateDelta, togglePlay, resetView],
  );

  const effectiveIsPlaying = isPlaying && !reducedMotion;

  return (
    <div
      aria-label="Interactive 3D globe displaying prehistoric fossil range markers. Use arrow keys to rotate, space to pause."
      className="group relative h-[25rem] overflow-hidden rounded-3xl border border-border bg-[#08101f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-[30rem]"
      onKeyDown={handleKeyDown}
      ref={containerRef}
      role="region"
      tabIndex={0}
    >
      {/* Screen reader live announcements */}
      <div aria-live="polite" className="sr-only">
        {statusMessage}
      </div>

      {/* Floating control bar */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-2xl border border-white/10 bg-ink/80 p-1.5 backdrop-blur-md">
        <button
          aria-label="Rotate west"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-muted transition hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          onClick={() => rotateDelta(-0.3, 0)}
          title="Rotate west (Arrow left)"
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          aria-label={effectiveIsPlaying ? "Pause auto-rotation" : "Resume auto-rotation"}
          className="flex h-8 w-8 items-center justify-center rounded-xl text-muted transition hover:bg-white/10 hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          onClick={togglePlay}
          title={effectiveIsPlaying ? "Pause (Space)" : "Resume (Space)"}
          type="button"
        >
          {effectiveIsPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
        <button
          aria-label="Rotate east"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-muted transition hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          onClick={() => rotateDelta(0.3, 0)}
          title="Rotate east (Arrow right)"
          type="button"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          aria-label="Reset orientation"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-muted transition hover:bg-white/10 hover:text-sky focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          onClick={resetView}
          title="Reset orientation (Home)"
          type="button"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Left instructional hint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-4 z-10 hidden rounded-xl border border-white/10 bg-ink/75 px-3 py-1.5 text-xs text-muted/80 backdrop-blur-md sm:block"
      >
        Drag or use arrow keys to explore
      </div>

      {/* Active region callout pill */}
      {activeRegion && (
        <div className="animate-in fade-in slide-in-from-top-2 absolute inset-x-4 top-16 z-10 mx-auto max-w-md rounded-2xl border border-gold/40 bg-ink/90 p-3.5 shadow-glow backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                Fossil Locality Focus
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {activeRegion.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted">
                {activeRegion.description}
              </p>
            </div>
            <button
              aria-label="Dismiss active focus"
              className="rounded-lg p-1 text-muted transition hover:text-foreground"
              onClick={() => setActiveRegion(null)}
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Three.js Canvas */}
      <Canvas
        aria-label="Interactive 3D globe with estimated prehistoric range highlights"
        camera={{ position: [0, 0, 3], fov: 43 }}
        className="cursor-grab active:cursor-grabbing"
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.85} />
        <directionalLight intensity={1.6} position={[3, 2, 4]} />
        <GlobeScene
          activeRegion={activeRegion}
          isPlaying={effectiveIsPlaying}
          onManualInteraction={() => {
            setIsPlaying(false);
            setTargetRotation(null);
          }}
          onTargetReached={() => {
            setTargetRotation(null);
          }}
          reducedMotion={reducedMotion}
          regions={regions}
          targetRotation={targetRotation}
        />
      </Canvas>

      {/* Interactive region selectors at bottom */}
      <div
        aria-label="Fossil regions"
        className="absolute inset-x-4 bottom-4 z-10 flex flex-wrap gap-2"
        role="group"
      >
        {regions.map((region) => {
          const isSelected = activeRegion?.label === region.label;
          return (
            <button
              aria-pressed={isSelected}
              className={`rounded-full border px-3 py-1.5 text-xs backdrop-blur-sm transition duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
                isSelected
                  ? "border-gold bg-gold/25 font-semibold text-paper shadow-sm"
                  : "border-white/10 bg-ink/85 text-paper/85 hover:border-gold/45 hover:text-foreground"
              }`}
              key={region.label}
              onClick={() => handleSelectRegion(region)}
              type="button"
            >
              <span
                aria-hidden="true"
                className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                  isSelected ? "bg-gold" : "bg-sky/70"
                }`}
              />
              {region.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import { useRef, useEffect } from "react";

/**
 * Returns a ref to attach to a card element.
 * Applies a subtle 3D tilt on mouse move, resets on leave.
 */
export default function useTilt(intensity = 8) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `
        perspective(800px)
        rotateY(${x * intensity}deg)
        rotateX(${-y * intensity}deg)
        scale3d(1.01,1.01,1.01)
      `;
    };

    const onLeave = () => {
      el.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [intensity]);

  return ref;
}

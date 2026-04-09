import { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h  = String(now.getHours()).padStart(2, "0");
      const m  = String(now.getMinutes()).padStart(2, "0");
      const s  = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "1.2rem",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "var(--ff-mono)",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        color: "var(--muted)",
        zIndex: 1001,
        pointerEvents: "none",
      }}
    >
      {time}
    </div>
  );
}

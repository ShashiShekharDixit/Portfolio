import { useState, useEffect } from "react";
import { TERMINAL_LINES } from "../data/index.js";

export default function TerminalBlock() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= TERMINAL_LINES.length) return;
    const delay = TERMINAL_LINES[visible]?.prompt ? 600 : 300;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <span className="terminal-title">ssd@portfolio ~ bash</span>
      </div>
      <div className="terminal-body">
        {TERMINAL_LINES.slice(0, visible).map((line, i) => {
          if (line.prompt) {
            return (
              <div className="terminal-line" key={i}>
                <span className="terminal-prompt">{line.prompt}</span>
                <span className="terminal-cmd">
                  {line.blink ? <span className="blink" /> : line.cmd}
                </span>
              </div>
            );
          }
          return (
            <div className="terminal-out" key={i}>
              {line.out.split(/([\w.\/]+(?:\/[\w.]+)+|v[\d.]+|Python[\d. ]+)/g).map((part, j) =>
                /v\d|Python|\//.test(part) ? (
                  <span className="hl" key={j}>{part}</span>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useState, useRef, useEffect, useCallback } from "react";
import { CHATBOT_SYSTEM, CHAT_SUGGESTIONS } from "../data/index.js";

const FALLBACK =
  "> Shashi has worked on exciting projects: a 3D Portfolio with Three.js and a Sorting Visualizer in Next.js. Ask me about either.";

export default function Chatbot() {
  const [open, setOpen]       = useState(false);
  const [input, setInput]     = useState("");
  const [typing, setTyping]   = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "> Hi! I'm Shashi's terminal assistant. Ask me anything about his projects, skills, or experience." },
  ]);
  const msgsRef = useRef(null);

  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendChat = useCallback(
    async (overrideMsg) => {
      const text = (overrideMsg ?? input).trim();
      if (!text) return;
      setInput("");
      setMessages((prev) => [...prev, { type: "user", text }]);
      setTyping(true);

      try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model:      "claude-sonnet-4-20250514",
            max_tokens: 300,
            system:     CHATBOT_SYSTEM,
            messages:   [{ role: "user", content: text }],
          }),
        });
        const data = await res.json();
        const reply = data.content?.[0]?.text || FALLBACK;
        setTyping(false);
        setMessages((prev) => [...prev, { type: "bot", text: `> ${reply}` }]);
      } catch {
        setTyping(false);
        setMessages((prev) => [...prev, { type: "bot", text: FALLBACK }]);
      }
    },
    [input]
  );

  return (
    <>
      <button
        id="chat-btn-v2"
        onClick={() => setOpen((o) => !o)}
        title="Open AI assistant"
      >
        ⌘
      </button>

      <div id="chat-panel-v2" className={open ? "open" : ""}>
        {/* Header */}
        <div className="chat-head-v2">
          <div>
            <div className="chat-head-title">SSD_ASSISTANT</div>
            <div className="chat-head-status">● online — ask me anything</div>
          </div>
          <button className="chat-head-close" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="chat-msgs-v2" ref={msgsRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg-v2 ${m.type}`}>
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="chat-typing-v2">
              <span /><span /><span />
            </div>
          )}
        </div>

        {/* Quick suggestions */}
        <div className="chat-suggs-v2">
          {CHAT_SUGGESTIONS.map((s) => (
            <span
              key={s}
              className="chat-sugg-v2"
              onClick={() => sendChat(s)}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Input row */}
        <div className="chat-input-row">
          <input
            className="chat-in-v2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendChat()}
            placeholder="> type your question..."
          />
          <button className="chat-send-v2" onClick={() => sendChat()}>
            ↑
          </button>
        </div>
      </div>
    </>
  );
}

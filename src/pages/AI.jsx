import React, { useState } from "react";

function AI() {
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = () => {
    if (!q.trim()) return;

    setAnswer(
      "This is the development AI shell. Connect a secure server-side AI service and the Makran Blue knowledge base here. The production assistant should cite verified data and clearly separate current live information from general knowledge."
    );
  };

  return (
    <div className="page ai-page">
      <div className="page-hero">
        <span className="eyebrow">AI COASTAL GUIDE</span>

        <h1>A smarter way to understand Makran.</h1>

        <p>
          The interface is ready for a secure RAG-based assistant
          grounded in verified coastal data.
        </p>
      </div>

      <div className="chat">
        <div className="chat-intro">
          🤖

          <div>
            <strong>Makran Blue AI</strong>
            <span>Knowledge layer • Development mode</span>
          </div>
        </div>

        {answer && (
          <div className="message bot">
            {answer}
          </div>
        )}

        <div className="suggestions">
          {[
            "What can I explore in Pasni?",
            "Tell me about Makran marine life",
            "Explain coastal safety",
            "What should a fisherman check before departure?",
          ].map((s) => (
            <button
              key={s}
              onClick={() => setQ(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="chat-input">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder="Ask about the coast..."
          />

          <button onClick={ask}>
            Ask →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AI;

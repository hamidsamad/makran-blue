import React, { useState } from "react";

import { useApp } from "../context/AppContext";

function AI() {
  const { t } = useApp();
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = () => {
    if (!q.trim()) return;
    setAnswer("aiShellAnswer");
  };

  const suggestions = ["aiSug1", "aiSug2", "aiSug3", "aiSug4"];

  return (
    <div className="page ai-page">
      <div className="page-hero">
        <span className="eyebrow">{t("aiEyebrow")}</span>

        <h1>{t("aiH1")}</h1>

        <p>{t("aiShellP")}</p>
      </div>

      <div className="chat">
        <div className="chat-intro">
          🤖

          <div>
            <strong>{t("aiBotName")}</strong>
            <span>{t("aiBotSub")}</span>
          </div>
        </div>

        {answer && <div className="message bot">{t(answer)}</div>}

        <div className="suggestions">
          {suggestions.map((key) => (
            <button key={key} onClick={() => setQ(t(key))}>
              {t(key)}
            </button>
          ))}
        </div>

        <div className="chat-input">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder={t("aiPlaceholder")}
          />

          <button onClick={ask}>{t("aiAsk")} →</button>
        </div>
      </div>
    </div>
  );
}

export default AI;

import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import ToolPage from "./ToolPage";

import { useApp } from "../context/AppContext";

function FishIdentifier() {
  const { t } = useApp();

  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const [predictions, setPredictions] = useState([]);
  /* statusText holds a translation KEY */
  const [statusText, setStatusText] = useState("fiInit");
  const [dragActive, setDragActive] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const initAI = async () => {
      try {
        await tf.ready();
        const loaded = await mobilenet.load({ version: 2, alpha: 1 });
        setModel(loaded);
        setLoading(false);
        setStatusText("fiReady");
      } catch (error) {
        console.error(error);
        setLoading(false);
        setStatusText("fiFail");
      }
    };
    initAI();
  }, []);

  const processFile = (file) => {
    if (!file?.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
      setPredictions([]);
      setStatusText("fiLoaded");
    };
    reader.readAsDataURL(file);
  };

  const identifyFish = async () => {
    if (!model || !imageRef.current) return;
    setLoading(true);
    setPredictions([]);
    setStatusText("fiScanning");

    try {
      const results = await model.classify(imageRef.current);
      setPredictions(results);
      setStatusText("fiDone");
    } catch (error) {
      console.error(error);
      setStatusText("fiError");
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    processFile(e.dataTransfer.files[0]);
  };

  return (
    <ToolPage
      eyebrow={t("fiEyebrow")}
      title={t("toolFishIdentifier")}
      text={t("fiText")}
    >
      <div className="marine-ai">
        <div className="ocean-orb ocean-orb-one" />
        <div className="ocean-orb ocean-orb-two" />

        <div className="ai-system-header">
          <div className="system-title">
            <div className="system-icon">◈</div>
            <div>
              <span>{t("fiSystem")}</span>
              <h2>{t("fiLab")}</h2>
            </div>
          </div>
          <div className="model-status">
            <span className="model-status-dot" /> {t("fiModelOnline")}
          </div>
        </div>

        <div className="ai-status-bar">
          <div className="status-wave">
            <span /><span /><span /><span />
          </div>
          <div>
            <small>{t("fiSysStatus")}</small>
            <strong>{t(statusText)}</strong>
          </div>
        </div>

        {!imageSrc ? (
          <div
            className={`specimen-dropzone ${dragActive ? "drag-active" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >
            <div className="drop-grid" />
            <div className="scanner-circle">
              <div className="scanner-inner">🐟</div>
              <div className="scanner-ring ring-a" />
              <div className="scanner-ring ring-b" />
              <div className="scanner-ring ring-c" />
            </div>
            <div className="drop-content">
              <span className="drop-eyebrow">{t("fiInput")}</span>
              <h3>{t("fiDropT")}</h3>
              <p>{t("fiDropP")}</p>
              <label className="upload-button">
                <span>{t("fiUpload")}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => processFile(e.target.files[0])}
                  disabled={!model || loading}
                />
              </label>
              <div className="file-info">JPG <i>•</i> PNG <i>•</i> WEBP</div>
            </div>
          </div>
        ) : (
          <div className="specimen-analysis">
            <div className="specimen-preview">
              <div className="preview-header">
                <div>
                  <span>{t("fiCapture")}</span>
                  <h3>{t("fiVisual")}</h3>
                </div>
                <div className="capture-status">{t("fiCaptured")}</div>
              </div>

              <div className="image-scanner">
                <img ref={imageRef} src={imageSrc} alt="Fish specimen" />
                <div className="scan-grid" />
                <div className="scan-beam" />
                <div className="corner corner-tl" />
                <div className="corner corner-tr" />
                <div className="corner corner-bl" />
                <div className="corner corner-br" />
              </div>

              <button
                className="analyze-button"
                onClick={identifyFish}
                disabled={loading || !model}
              >
                {loading ? t("fiAnalyzing") : t("fiRun")}
              </button>
            </div>

            <div className="analysis-info">
              <div className="analysis-info-header">
                <span>{t("fiNeural")}</span>
                <strong>v2.0</strong>
              </div>
              <div className="ai-metrics">
                <div>
                  <span>{t("fiModel")}</span>
                  <strong>MobileNet</strong>
                </div>
                <div>
                  <span>{t("fiEngine")}</span>
                  <strong>TensorFlow.js</strong>
                </div>
                <div>
                  <span>{t("fiProcessing")}</span>
                  <strong>{t("fiLocal")}</strong>
                </div>
              </div>
              <div className="radar-display">
                <div className="radar-circle">
                  <div className="radar-sweep" />
                </div>
                <span className="radar-label">{t("fiScan")}</span>
              </div>
              <div className="analysis-note">
                <span>◎</span>
                <p>{t("fiPrivacy")}</p>
              </div>
            </div>
          </div>
        )}

        {predictions.length > 0 && (
          <section className="ai-results">
            <div className="results-header">
              <div>
                <span>{t("fiResults")}</span>
                <h2>{t("fiClassH")}</h2>
              </div>
              <div className="result-badge">
                {predictions.length} {t("fiMatches")}
              </div>
            </div>

            <div className="prediction-list">
              {predictions.map((pred, i) => {
                const score = pred.probability * 100;
                return (
                  <article className="prediction-card" key={i}>
                    <div className="prediction-top">
                      <div className="prediction-rank">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="prediction-name">
                        <small>{t("fiCandidate")}</small>
                        <h3>
                          {pred.className.split(",")[0].trim().toUpperCase()}
                        </h3>
                      </div>
                      <strong className="prediction-percent">
                        {score.toFixed(1)}%
                      </strong>
                    </div>
                    <div className="confidence-track">
                      <div
                        className="confidence-fill"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <div className="confidence-label">
                      <span>{t("fiConfidence")}</span>
                      <span>
                        {score >= 70
                          ? t("confHigh")
                          : score >= 40
                            ? t("confMedium")
                            : t("confLow")}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="ai-warning">
              <div className="warning-icon">!</div>
              <div>
                <strong>{t("fiAdvisoryT")}</strong>
                <p>{t("fiAdvisoryP")}</p>
              </div>
            </div>
          </section>
        )}

        <div className="ai-footer">
          <span>{t("brand")}</span>
          <div className="footer-line" />
          <span>{t("fiFooter")}</span>
        </div>
      </div>
    </ToolPage>
  );
}

export default FishIdentifier;

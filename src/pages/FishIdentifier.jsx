import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import ToolPage from "./ToolPage";


function FishIdentifier() {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [statusText, setStatusText] = useState(
    "Initializing marine vision system..."
  );
  const [dragActive, setDragActive] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    async function initAI() {
      try {
        await tf.ready();

        const loadedModel = await mobilenet.load({
          version: 2,
          alpha: 1.0,
        });

        setModel(loadedModel);
        setLoading(false);
        setStatusText("Marine vision system ready.");
      } catch (error) {
        console.error("AI Model failed to load:", error);

        setLoading(false);
        setStatusText(
          "Unable to initialize the AI model."
        );
      }
    }

    initAI();
  }, []);

  const processFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
      setPredictions([]);
      setStatusText("Specimen loaded. Ready for analysis.");
    };

    reader.readAsDataURL(file);
  };

  const handleImageChange = (event) => {
    processFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);

    const file = event.dataTransfer.files[0];

    processFile(file);
  };

  const identifyFish = async () => {
    if (!model || !imageRef.current) return;

    setLoading(true);
    setPredictions([]);
    setStatusText("Scanning specimen visual patterns...");

    try {
      const results = await model.classify(
        imageRef.current
      );

      setPredictions(results);

      setStatusText(
        "Analysis complete. Review AI predictions below."
      );
    } catch (error) {
      console.error("Classification error:", error);

      setStatusText(
        "Analysis failed. Please try another image."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolPage
      eyebrow="MAKRAN BLUE • AI LAB"
      title="Fish Identifier"
      text="Analyze a fish photograph using browser-based computer vision. Results are AI-assisted and should always be verified."
    >
      <div className="marine-ai">

        {/* BACKGROUND DECORATION */}

        <div className="ocean-orb ocean-orb-one"></div>
        <div className="ocean-orb ocean-orb-two"></div>

        {/* AI HEADER */}

        <div className="ai-system-header">

          <div className="system-title">
            <div className="system-icon">
              ◈
            </div>

            <div>
              <span>MARINE VISION SYSTEM</span>
              <h2>AI Specimen Laboratory</h2>
            </div>
          </div>

          <div className="model-status">
            <span className="model-status-dot"></span>
            MODEL ONLINE
          </div>

        </div>

        {/* STATUS */}

        <div className="ai-status-bar">

          <div className="status-wave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <small>SYSTEM STATUS</small>
            <strong>{statusText}</strong>
          </div>

        </div>

        {/* UPLOAD / SPECIMEN */}

        {!imageSrc ? (
          <div
            className={`specimen-dropzone ${
              dragActive ? "drag-active" : ""
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >

            <div className="drop-grid"></div>

            <div className="scanner-circle">
              <div className="scanner-inner">
                🐟
              </div>

              <div className="scanner-ring ring-a"></div>
              <div className="scanner-ring ring-b"></div>
              <div className="scanner-ring ring-c"></div>
            </div>

            <div className="drop-content">

              <span className="drop-eyebrow">
                SPECIMEN INPUT
              </span>

              <h3>
                Drop your fish image
              </h3>

              <p>
                Upload a clear photograph for
                AI-assisted marine identification.
              </p>

              <label className="upload-button">

                <span>＋ Upload Specimen</span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={!model || loading}
                />

              </label>

              <div className="file-info">
                JPG <i>•</i> PNG <i>•</i> WEBP
              </div>

            </div>

          </div>
        ) : (
          <div className="specimen-analysis">

            {/* PREVIEW */}

            <div className="specimen-preview">

              <div className="preview-header">

                <div>
                  <span>SPECIMEN CAPTURE</span>
                  <h3>Visual Input</h3>
                </div>

                <div className="capture-status">
                  ● CAPTURED
                </div>

              </div>

              <div className="image-scanner">

                <img
                  ref={imageRef}
                  src={imageSrc}
                  alt="Fish specimen"
                />

                <div className="scan-grid"></div>
                <div className="scan-beam"></div>

                <div className="corner corner-tl"></div>
                <div className="corner corner-tr"></div>
                <div className="corner corner-bl"></div>
                <div className="corner corner-br"></div>

              </div>

              <button
                className="analyze-button"
                onClick={identifyFish}
                disabled={loading || !model}
              >

                {loading ? (
                  <>
                    <span className="button-loader"></span>
                    ANALYZING SPECIMEN
                  </>
                ) : (
                  <>
                    ✦ RUN AI ANALYSIS
                  </>
                )}

              </button>

            </div>

            {/* AI INFORMATION */}

            <div className="analysis-info">

              <div className="analysis-info-header">
                <span>NEURAL ANALYSIS</span>
                <strong>v2.0</strong>
              </div>

              <div className="ai-metrics">

                <div>
                  <span>MODEL</span>
                  <strong>MobileNet</strong>
                </div>

                <div>
                  <span>ENGINE</span>
                  <strong>TensorFlow.js</strong>
                </div>

                <div>
                  <span>PROCESSING</span>
                  <strong>LOCAL</strong>
                </div>

              </div>

              <div className="radar-display">

                <div className="radar-circle">
                  <div className="radar-sweep"></div>

                  <div className="radar-point point-one"></div>
                  <div className="radar-point point-two"></div>
                  <div className="radar-point point-three"></div>
                </div>

                <span className="radar-label">
                  VISUAL SCAN
                </span>

              </div>

              <div className="analysis-note">
                <span>◎</span>

                <p>
                  Image processing happens directly
                  inside your browser.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* RESULTS */}

        {predictions.length > 0 && (
          <section className="ai-results">

            <div className="results-header">

              <div>
                <span>IDENTIFICATION RESULTS</span>
                <h2>Marine Classification</h2>
              </div>

              <div className="result-badge">
                {predictions.length} MATCHES
              </div>

            </div>

            <div className="prediction-list">

              {predictions.map((pred, index) => {

                const score =
                  pred.probability * 100;

                const displayScore =
                  score.toFixed(1);

                return (
                  <article
                    className="prediction-card"
                    key={index}
                  >

                    <div className="prediction-top">

                      <div className="prediction-rank">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="prediction-name">
                        <small>
                          AI CANDIDATE
                        </small>

                        <h3>
                          {pred.className
                            .split(",")[0]
                            .trim()
                            .toUpperCase()}
                        </h3>
                      </div>

                      <strong className="prediction-percent">
                        {displayScore}%
                      </strong>

                    </div>

                    <div className="confidence-track">

                      <div
                        className="confidence-fill"
                        style={{
                          width: `${score}%`,
                        }}
                      ></div>

                    </div>

                    <div className="confidence-label">
                      <span>
                        CONFIDENCE LEVEL
                      </span>

                      <span>
                        {score >= 70
                          ? "HIGH"
                          : score >= 40
                          ? "MEDIUM"
                          : "LOW"}
                      </span>
                    </div>

                  </article>
                );
              })}

            </div>

            <div className="ai-warning">

              <div className="warning-icon">
                !
              </div>

              <div>
                <strong>
                  Identification advisory
                </strong>

                <p>
                  These predictions come from a
                  general-purpose computer vision model.
                  They are not a guaranteed fish-species
                  identification. Verify the result using
                  local knowledge, field guides and
                  relevant fisheries information.
                </p>
              </div>

            </div>

          </section>
        )}

        {/* FOOTER */}

        <div className="ai-footer">

          <span>MAKRAN BLUE</span>

          <div className="footer-line"></div>

          <span>
            MARINE INTELLIGENCE SYSTEM
          </span>

        </div>

      </div>
    </ToolPage>
  );
}

export default FishIdentifier;

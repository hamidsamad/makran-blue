import React from "react";

import Info from "../components/Info";
import { useApp } from "../context/AppContext";

function About() {
  const { t } = useApp();

  return (
    <div className="page">
      {/* HERO */}
      <div className="page-hero">
        <span className="eyebrow">{t("abEyebrow")}</span>

        <h1>{t("abH1")}</h1>

        <p>{t("abLead")}</p>
      </div>

      {/* PRODUCT PRINCIPLES */}
      <div className="two-col">
        <div>
          <h2>{t("abPrinciples")}</h2>

          <div className="info-grid">
            <Info icon="🎯" title={t("abUseful")} text={t("abUsefulT")} />
            <Info icon="🛡️" title={t("abSafe")} text={t("abSafeT")} />
            <Info icon="📡" title={t("abConnected")} text={t("abConnectedT")} />
            <Info icon="🌱" title={t("abResponsible")} text={t("abResponsibleT")} />
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abStoryEyebrow")}</span>

          <h2>{t("abStoryH")}</h2>

          <p>{t("abStoryP1")}</p>
          <p>{t("abStoryP2")}</p>
        </div>
      </div>

      {/* COASTAL COMMUNITY */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abCommunityEyebrow")}</span>

          <h2>{t("abCommunityH")}</h2>

          <div className="info-grid">
            <Info icon="🎣" title={t("abFishermen")} text={t("abFishermenT")} />
            <Info icon="🚤" title={t("abBoats")} text={t("abBoatsT")} />
            <Info icon="🤝" title={t("abCommunities")} text={t("abCommunitiesT")} />
            <Info icon="🌍" title={t("abVisitors")} text={t("abVisitorsT")} />
          </div>
        </div>
      </div>

      {/* MARINE KNOWLEDGE */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abKnowledgeEyebrow")}</span>

          <h2>{t("abKnowledgeH")}</h2>

          <p>{t("abKnowledgeP1")}</p>
          <p>{t("abKnowledgeP2")}</p>

          <div className="info-grid">
            <Info icon="🌊" title={t("abCondT")} text={t("abCondTx")} />
            <Info icon="💨" title={t("abWeatherT")} text={t("abWeatherTx")} />
            <Info icon="🧭" title={t("abNavT")} text={t("abNavTx")} />
            <Info icon="🐟" title={t("abLifeT")} text={t("abLifeTx")} />
          </div>
        </div>
      </div>

      {/* COASTAL CULTURE */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abCultureEyebrow")}</span>

          <h2>{t("abCultureH")}</h2>

          <p>{t("abCultureP")}</p>

          <div className="info-grid">
            <Info icon="🏝️" title={t("abHeritage")} text={t("abHeritageT")} />
            <Info icon="🧭" title={t("abLocal")} text={t("abLocalT")} />
            <Info icon="📖" title={t("abLearning")} text={t("abLearningT")} />
            <Info icon="🤝" title={t("abVoice")} text={t("abVoiceT")} />
          </div>
        </div>
      </div>

      {/* RESPONSIBLE COAST */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abRespEyebrow")}</span>

          <h2>{t("abRespH")}</h2>

          <p>{t("abRespP1")}</p>
          <p>{t("abRespP2")}</p>
        </div>
      </div>

      {/* DATA & SERVICES */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abDataEyebrow")}</span>

          <h2>{t("abDataH")}</h2>

          <p>{t("abDataP")}</p>

          <div className="info-grid">
            <Info icon="🌤️" title={t("abWxData")} text={t("abWxDataT")} />
            <Info icon="🌊" title={t("abMarineData")} text={t("abMarineDataT")} />
            <Info icon="🗺️" title={t("abMaps")} text={t("abMapsT")} />
            <Info icon="📊" title={t("abCData")} text={t("abCDataT")} />
          </div>
        </div>
      </div>

      {/* SAFETY */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abTrustEyebrow")}</span>

          <h2>{t("abTrustH")}</h2>

          <p>{t("abTrustP")}</p>

          <div className="info-grid">
            <Info icon="🚫" title={t("abNoFake")} text={t("abNoFakeT")} />
            <Info icon="⚠️" title={t("abUncertain")} text={t("abUncertainT")} />
            <Info icon="✅" title={t("abReliable")} text={t("abReliableT")} />
            <Info icon="🔎" title={t("abTransparency")} text={t("abTransparencyT")} />
          </div>
        </div>
      </div>

      {/* LONG TERM VISION */}
      <div className="two-col">
        <div>
          <span className="eyebrow">{t("abVisionEyebrow")}</span>

          <h2>{t("abVisionH")}</h2>

          <p>{t("abVisionP1")}</p>
          <p>{t("abVisionP2")}</p>

          <div className="info-grid">
            <Info icon="🌦️" title={t("abLiveWx")} text={t("abLiveWxT")} />
            <Info icon="🌊" title={t("abMarineCond")} text={t("abMarineCondT")} />
            <Info icon="🧭" title={t("abNavTools")} text={t("abNavToolsT")} />
            <Info icon="📚" title={t("abEdu")} text={t("abEduT")} />
          </div>
        </div>
      </div>

      {/* FINAL */}
      <div className="page-hero">
        <span className="eyebrow">{t("brand")}</span>

        <h1>{t("abFinalH")}</h1>

        <p>{t("abFinalP")}</p>
      </div>
    </div>
  );
}

export default About;

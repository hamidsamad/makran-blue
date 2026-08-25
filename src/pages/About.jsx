import React from "react";

import Info from "../components/Info";

function About() {
  return (
    <div className="page">

      {/* HERO */}

      <div className="page-hero">
        <span className="eyebrow">ABOUT</span>

        <h1>
          Built as a long-term coastal product.
        </h1>

        <p>
          Makran Blue is a personal project foundation designed to grow
          into a real platform connecting people, marine knowledge,
          coastal culture, data and practical tools across the Makran
          coast.
        </p>
      </div>


      {/* PRODUCT PRINCIPLES */}

      <div className="two-col">

        <div>

          <h2>Product principles</h2>

          <div className="info-grid">

            <Info
              icon="🎯"
              title="Useful"
              text="Build features around real user needs, especially fishermen and coastal communities."
            />

            <Info
              icon="🛡️"
              title="Safe"
              text="Never manufacture official warnings or present uncertain predictions as facts."
            />

            <Info
              icon="📡"
              title="Connected"
              text="Use clean service layers so live providers can be added without rebuilding the UI."
            />

            <Info
              icon="🌱"
              title="Responsible"
              text="Promote sustainable fisheries and respect community knowledge."
            />

          </div>

        </div>

      </div>


      {/* OUR STORY */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            OUR STORY
          </span>

          <h2>
            Connecting people with the coast.
          </h2>

          <p>
            The Makran coast is home to fishing communities, marine
            ecosystems, coastal traditions and generations of knowledge.
            Makran Blue is built around the idea of bringing these
            different parts of coastal life together through useful
            digital tools.
          </p>

          <p>
            The project is designed as a foundation that can grow over
            time. New data sources, services and community-focused
            features can be added without changing the core experience.
          </p>

        </div>

      </div>


      {/* COASTAL COMMUNITY */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            COASTAL COMMUNITY
          </span>

          <h2>
            Built around real coastal life.
          </h2>

          <div className="info-grid">

            <Info
              icon="🎣"
              title="Fishermen"
              text="Provide practical information and tools that can support people whose daily lives and work depend on the sea."
            />

            <Info
              icon="🚤"
              title="Boat Operators"
              text="Create useful coastal tools that can help people understand conditions and plan their activities responsibly."
            />

            <Info
              icon="🤝"
              title="Local Communities"
              text="Respect local experience, traditions and knowledge while creating a digital space for coastal communities."
            />

            <Info
              icon="🌍"
              title="Coastal Visitors"
              text="Help visitors discover the natural environment, marine life and unique culture of the Makran coast."
            />

          </div>

        </div>

      </div>


      {/* MARINE KNOWLEDGE */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            MARINE KNOWLEDGE
          </span>

          <h2>
            Making marine information easier to understand.
          </h2>

          <p>
            The sea is constantly changing. Weather, wind, waves,
            tides and other conditions can influence people working
            and travelling along the coast.
          </p>

          <p>
            Makran Blue provides a foundation where different types
            of marine and coastal information can eventually be
            presented together in a simple and understandable way.
          </p>

          <div className="info-grid">

            <Info
              icon="🌊"
              title="Coastal Conditions"
              text="Present useful information about changing coastal conditions when reliable data is available."
            />

            <Info
              icon="💨"
              title="Weather & Wind"
              text="Connect suitable weather services to provide useful environmental information."
            />

            <Info
              icon="🧭"
              title="Navigation"
              text="Provide practical navigation-oriented tools while making it clear that they do not replace professional navigation systems."
            />

            <Info
              icon="🐟"
              title="Marine Life"
              text="Help people learn more about marine environments, species and the ecosystems connected to the coast."
            />

          </div>

        </div>

      </div>


      {/* COASTAL CULTURE */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            COASTAL CULTURE
          </span>

          <h2>
            More than data. It is a culture.
          </h2>

          <p>
            The Makran coast has a rich connection between people,
            the sea and local traditions. Technology should not replace
            this knowledge. It should help preserve, organize and share it.
          </p>

          <div className="info-grid">

            <Info
              icon="🏝️"
              title="Coastal Heritage"
              text="Respect the history, traditions and identity that have developed along the Makran coast."
            />

            <Info
              icon="🧭"
              title="Local Knowledge"
              text="Value the experience and observations of people who understand the coast through generations of experience."
            />

            <Info
              icon="📖"
              title="Shared Learning"
              text="Create opportunities for useful coastal knowledge and experiences to be documented and shared."
            />

            <Info
              icon="🤝"
              title="Community Voice"
              text="Keep coastal communities at the center of the platform and its future development."
            />

          </div>

        </div>

      </div>


      {/* RESPONSIBLE COAST */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            RESPONSIBLE COAST
          </span>

          <h2>
            Supporting a healthier marine future.
          </h2>

          <p>
            A strong coastal platform should not only help people use
            marine resources. It should also encourage awareness of the
            ecosystems and communities that depend on them.
          </p>

          <p>
            Makran Blue supports responsible fishing, respect for
            marine ecosystems and sustainable use of coastal resources.
          </p>

        </div>

      </div>


      {/* DATA & SERVICES */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            DATA & SERVICES
          </span>

          <h2>
            Ready to connect with reliable services.
          </h2>

          <p>
            Makran Blue is designed with clean service layers so that
            external data providers can be connected as the project grows.
          </p>

          <div className="info-grid">

            <Info
              icon="🌤️"
              title="Weather Data"
              text="Connect reliable weather information from suitable providers when available."
            />

            <Info
              icon="🌊"
              title="Marine Data"
              text="Make useful marine and coastal information accessible through trusted sources."
            />

            <Info
              icon="🗺️"
              title="Maps"
              text="Use maps and location-based tools to help users explore the Makran coast."
            />

            <Info
              icon="📊"
              title="Coastal Data"
              text="Organize different types of coastal information into a clear and useful experience."
            />

          </div>

        </div>

      </div>


      {/* SAFETY */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            SAFETY & TRUST
          </span>

          <h2>
            Information should be clear and honest.
          </h2>

          <p>
            Marine information can affect real decisions. Makran Blue
            should clearly distinguish between verified information,
            live provider data, estimates and general educational content.
          </p>

          <div className="info-grid">

            <Info
              icon="🚫"
              title="No Fabricated Warnings"
              text="Official warnings should only come from appropriate authoritative sources."
            />

            <Info
              icon="⚠️"
              title="Clear Uncertainty"
              text="Predictions and estimates should never be presented as guaranteed facts."
            />

            <Info
              icon="✅"
              title="Reliable Sources"
              text="Live information should be connected through suitable and trustworthy providers."
            />

            <Info
              icon="🔎"
              title="Transparency"
              text="Users should be able to understand where important information comes from."
            />

          </div>

        </div>

      </div>


      {/* LONG TERM VISION */}

      <div className="two-col">

        <div>

          <span className="eyebrow">
            LONG-TERM VISION
          </span>

          <h2>
            Start small. Build for the coast.
          </h2>

          <p>
            Makran Blue does not need to become everything at once.
            The foundation can start with a focused set of useful
            features and gradually grow as better data, services and
            community needs become available.
          </p>

          <p>
            The long-term goal is to create a platform that connects
            coastal people with information, tools, knowledge and
            services while keeping the experience simple, responsible
            and useful.
          </p>

          <div className="info-grid">

            <Info
              icon="🌦️"
              title="Live Weather"
              text="Add reliable live weather information through external providers."
            />

            <Info
              icon="🌊"
              title="Marine Conditions"
              text="Expand the platform with useful marine condition data."
            />

            <Info
              icon="🧭"
              title="Navigation Tools"
              text="Develop practical tools that can support coastal navigation and awareness."
            />

            <Info
              icon="📚"
              title="Marine Education"
              text="Create educational resources about the sea, marine life and coastal environments."
            />

          </div>

        </div>

      </div>


      {/* FINAL */}

      <div className="page-hero">

        <span className="eyebrow">
          MAKRAN BLUE
        </span>

        <h1>
          Built for the coast.
        </h1>

        <p>
          Makran Blue is a foundation for exploring what technology can
          do for coastal communities while respecting the sea, local
          knowledge, marine ecosystems and the people who depend on them.
        </p>

      </div>

    </div>
  );
}

export default About;

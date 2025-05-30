import React from "react";

const TickerSection = () => {
  const tickerItems = [
    "💡 现在就开始！用 Time Boxing 告别拖延，迎接高效人生 💡",
    "🕒 时间掌握在你手中，一次专注，一步达成目标 🕒",
    "🌱 安排你的时间，也安排你的生活，从容应对每一天 🌱"
  ];

  return (
    <div className="home-3_ticker-section" style={{ backgroundColor: '#0F1221' }}>
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {tickerItems.map((item, index) => (
            <div className="ticker-item" key={`item-${index}`}>
              <span className="text-white">{item}</span>
            </div>
          ))}
          {tickerItems.map((item, index) => (
            <div className="ticker-item" key={`item-repeat-${index}`}>
              <span className="text-white">{item}</span>
            </div>
          ))}
          {tickerItems.map((item, index) => (
            <div className="ticker-item" key={`item-repeat2-${index}`}>
              <span className="text-white">{item}</span>
            </div>
          ))}
          {tickerItems.map((item, index) => (
            <div className="ticker-item" key={`item-repeat3-${index}`}>
              <span className="text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerSection; 
import { useEffect, useState } from "react";
import { MainCard } from "./component/MainCard";
import { OverviewCard } from "./component/OverviewCard";
import { ToggleSwitch } from "./component/ToggleSwitch";
import { cardData } from "./data/cardData";
import { overviewData } from "./data/overviewData";
import "/src/App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  }, [isDarkMode]);

  return (
    <main className="main_dashboard">
      <header className="head_title">
        <div className="header_subtitle">
          <div className="header_top">
            <h1 className="board_title">Social Media Dashboard</h1>
            <p className="total_followers">Total Followers: 23,004</p>
          </div>
          <div className="theme_switcher">
            <p className="title">Dark Mode</p>
            <ToggleSwitch
              isChecked={isDarkMode}
              onToggle={() => setIsDarkMode(!isDarkMode)}
            />
          </div>
        </div>
      </header>
      <section className="main_board">
        <aside className="card_container">
          {cardData.map((card, index) => (
            <MainCard
              key={index}
              platform={card.platform}
              username={card.username}
              followers={card.followers}
              change={card.change}
              changeColor={card.changeColor}
              borderTopColor={card.borderTopColor}
              borderTopGradient={card.borderTopGradient}
              optionUpwardsShapeColor={card.optionUpwardsShapeColor}
              optionDownwardsShapeColor={card.optionDownwardsShapeColor}
            />
          ))}
        </aside>
        <aside className="overview_section">
          <h3 className="overview_title">Overview - Today</h3>
          <div className="overview_maincard_board">
            {overviewData.map((card, index) => (
              <OverviewCard
                key={index}
                platform={card.platform}
                overviewLabel={card.overviewLabel}
                changeColor={card.changeColor}
                optionUpwardsShapeColor={card.optionUpwardsShapeColor}
                optionDownwardsShapeColor={card.optionDownwardsShapeColor}
                resultPercentage={card.resultPercentage}
                result={card.result}
              />
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default App;

import { MainCard } from "./component/MainCard";
import { OverviewCard } from "./component/OverviewCard";
import { ToggleSwitch } from "./component/ToggleSwitch";
import { cardData } from "./data/cardData";
import { overviewData } from "./data/overviewData";
import "/src/App.css";

const App = () => {
  return (
    <main className="main_dashboard">
      <header className="header_title">
        <h1 className="board_title">Social Media Dashboard</h1>
        <p className="total_followers">Total Followers: 23,004</p>
      </header>
      <section className="main_board">
        <div className="theme_switcher">
          <p className="title">Dark Mode</p>
          <ToggleSwitch />
        </div>
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
            />
          ))}
        </aside>
        <aside className="overview_section">
          <h3 className="overview_title">Overview - Today</h3>
          {overviewData.map((card, index) => (
            <OverviewCard
              key={index}
              platform={card.platform}
              overviewLabel={card.overviewLabel}
              changeColor={card.changeColor}
              optionUpwardsShapeColor={card.optionUpwardsShapeColor}
              optionDownwardsShapeColor={card.optionDownwardsShapeColor}
              resultPercentage={card.resultPercentage}
            />
          ))}
        </aside>
      </section>
    </main>
  );
};

export default App;

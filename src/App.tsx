import { MainCard } from "./component/MainCard";
import { ToggleSwitch } from "./component/ToggleSwitch";
import facebook from "/assets/images/icon-facebook.svg";
import twitter from "/assets/images/icon-twitter.svg";
import instagram from "/assets/images/icon-instagram.svg";
import youtube from "/assets/images/icon-youtube.svg";

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
          <MainCard
            platform={facebook}
            username="@nathanf"
            followers="1987"
            change={12}
            changeColor="var(--White-Text)"
            borderTopColor="hsl(208, 92%, 53%)"
            borderTopGradient=""
          />
          <MainCard
            platform={twitter}
            username="@nathanf"
            followers="1044"
            change={99}
            changeColor="var(--Lime-Green)"
            borderTopColor="hsl(203, 89%, 53%)"
            borderTopGradient=""
          />
          <MainCard
            platform={instagram}
            username="@realnathanf"
            followers="11k"
            change={1099}
            changeColor="var(--Lime-Green)"
            borderTopGradient="linear-gradient(to right, hsl(37, 97%, 70%),hsl(329, 70%, 58%))"
            borderTopColor=""
          />
          <MainCard
            platform={youtube}
            username="Nathan F."
            followers="8239"
            change={144}
            changeColor="var(--YouTube)"
            borderTopColor="hsl(348, 97%, 39%)"
            borderTopGradient=""
          />
        </aside>
      </section>
    </main>
  );
};

export default App;

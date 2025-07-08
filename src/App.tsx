import { ToggleSwitch } from "./component/ToggleSwitch";
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
      </section>
    </main>
  );
};

export default App;

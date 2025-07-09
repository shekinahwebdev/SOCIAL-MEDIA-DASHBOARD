import "/src/component/OverviewCard.css";
import facebook from "/assets/images/icon-facebook.svg";

export const OverviewCard = () => {
  return (
    <main className="overview_card">
      <div className="overview_top">
        <p className="social_involvement">Page Views</p>
        <img src={facebook} alt="facebook-icon" className="icons" />
      </div>

      <div className="results">
        <p className="results_number">87</p>
        <div className="current_number">
          <div className="option_shape"></div>
          <p className="result_percentage">2%s</p>
        </div>
      </div>
    </main>
  );
};

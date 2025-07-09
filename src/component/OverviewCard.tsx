import "/src/component/OverviewCard.css";


const upwardsShape = {
  width: 0,
  height: 0,
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderBottom: "8px solid var(--Lime-Green)",
};

const downwardsShape = {
  width: 0,
  height: 0,
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "8px solid var(--Bright-Red)",
};

interface OverviewCardProps {
  platform: string
  overviewLabel: string
  changeColor: string
  optionUpwardsShapeColor: string
  optionDownwardsShapeColor: string
  resultPercentage: number
}

export const OverviewCard: React.FC.<OverviewCardProps> = (
  {platform, overviewLabel, changeColor,optionDownwardsShapeColor, optionUpwardsShapeColor, resultPercentage}
) => {
  return (
    <main className="overview_card">
      <div className="overview_top">
        <p className="overview_label">{overviewLabel}</p>
        <img src={platform} alt="facebook-icon" className="icons" />
      </div>
      <div className="results">
        <p className="result_number">{}</p>
        <div className="current_number">
          <div className="option_shape" style={{
           optionUpwardsShapeColor ? {upwardsShape} : {downwardsShape} 
          }}></div>
          <p className="result_percentage" style={{color: `${changeColor}`}}>{resultPercentage}%</p>
        </div>
      </div>
    </main>
  );
};

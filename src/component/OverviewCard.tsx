import "/src/component/OverviewCard.css";

const upwardsShape = {
  width: 0,
  height: 0,
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderBottom: "5px solid",
};

const downwardsShape = {
  width: 0,
  height: 0,
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "5px solid",
};

interface OverviewCardProps {
  platform: string;
  overviewLabel: string;
  changeColor: string;
  optionUpwardsShapeColor?: string;
  optionDownwardsShapeColor?: string;
  resultPercentage: number;
  result: string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  platform,
  overviewLabel,
  changeColor,
  optionDownwardsShapeColor,
  optionUpwardsShapeColor,
  resultPercentage,
  result,
}) => {
  return (
    <main className="overview_card">
      <div className="overview_top">
        <p className="overview_label">{overviewLabel}</p>
        <img src={platform} alt="facebook-icon" className="icons" />
      </div>
      <div className="results">
        <p className="result_number">{result}</p>
        <div className="current_number">
          <div
            className="shape"
            style={{
              ...(optionUpwardsShapeColor
                ? {
                    ...upwardsShape,
                    borderBottom: `5px solid ${optionUpwardsShapeColor}`,
                  }
                : {
                    ...downwardsShape,
                    borderTop: `5px solid ${optionDownwardsShapeColor}`,
                  }),
            }}
          ></div>
          <p className="result_percentage" style={{ color: `${changeColor}` }}>
            {resultPercentage}%
          </p>
        </div>
      </div>
    </main>
  );
};

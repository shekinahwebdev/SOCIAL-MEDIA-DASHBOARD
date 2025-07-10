import "/src/component/MainCard.css";

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

interface MainCardProps {
  platform: string;
  username: string;
  followers: string;
  change: number;
  changeColor: string;
  borderTopColor: string;
  borderTopGradient: string;
  optionUpwardsShapeColor?: string;
  optionDownwardsShapeColor?: string;
}

export const MainCard: React.FC<MainCardProps> = ({
  platform,
  username,
  followers,
  change,
  changeColor,
  borderTopColor,
  borderTopGradient,
  optionUpwardsShapeColor,
  optionDownwardsShapeColor,
}) => {
  return (
    <main
      className="main_card"
      style={
        borderTopGradient ? {} : { borderTop: `4px solid ${borderTopColor}` }
      }
    >
      {borderTopGradient && (
        <div
          className="card_border"
          style={{ background: borderTopGradient }}
        ></div>
      )}
      <div className="user_details">
        <img src={platform} alt="facebook-icon" className="facebook" />
        <p className="user_name">{username}</p>
      </div>
      <div className="followers">
        <p className="social_followers">{followers}</p>
        <p className="followers_title">Followers</p>
      </div>
      <div className="current_day">
        <div
          className="option_shape"
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
        <p
          className="current_followers"
          style={{
            color: `${changeColor}`,
          }}
        >
          {change} Today
        </p>
      </div>
    </main>
  );
};

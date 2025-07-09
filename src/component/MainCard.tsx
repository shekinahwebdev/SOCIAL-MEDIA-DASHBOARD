import "/src/component/MainCard.css";

interface MainCardProps {
  platform: string;
  username: string;
  followers: string;
  change: number;
  changeColor: string;
  borderTopColor: string;
  borderTopGradient: string;
}

export const MainCard: React.FC<MainCardProps> = ({
  platform,
  username,
  followers,
  change,
  changeColor,
  borderTopColor,
  borderTopGradient,
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
        <div className="option_shape"></div>
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

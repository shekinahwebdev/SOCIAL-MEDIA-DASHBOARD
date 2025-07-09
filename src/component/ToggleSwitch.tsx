import "/src/component/ToggleSwitch.css";

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onToggle,
}) => {
  return (
    <section className="toggle_switch">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isChecked}
        onChange={onToggle}
      />
      <label htmlFor="theme-toggle" className="toggle-label" />
    </section>
  );
};

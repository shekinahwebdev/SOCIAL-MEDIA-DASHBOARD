import "/src/component/ToggleSwitch.css";

export const ToggleSwitch = () => {
  return (
    <section className="toggle_switch">
      <input type="checkbox" />
      <label className="toggle-label on" />
    </section>
  );
};

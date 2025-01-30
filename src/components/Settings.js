const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            checked={theme === "dark"}
            type="radio"
            value="dark"
            name="dark"
            onChange={handleChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            checked={theme === "light"}
            type="radio"
            value="light"
            name="light"
            onChange={handleChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;

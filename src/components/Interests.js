const Interests = ({ data, setData, err }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => e.target.name !== i),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            checked={interests.includes("coding")}
            type="checkbox"
            value="coding"
            name="coding"
            onChange={handleChange}
          />{" "}
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            checked={interests.includes("sports")}
            type="checkbox"
            value="sports"
            name="sports"
            onChange={handleChange}
          />{" "}
          Sports
        </label>
      </div>
      <div>
        <label>
          <input
            checked={interests.includes("singing")}
            type="checkbox"
            value="singing"
            name="singing"
            onChange={handleChange}
          />{" "}
          Singing
        </label>
      </div>
      {err.interests && <div className="error">{err.interests}</div>}
    </div>
  );
};

export default Interests;

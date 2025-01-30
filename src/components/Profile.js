const Profile = ({ data, setData, err }) => {
  const { name, age, email } = data;

  const handleChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {err.name && <div className="error">{err.name}</div>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
        {err.age && <div className="error">{err.age}</div>}
      </div>
      <div>
        <label>email : </label>
        <input
          type="emails"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {err.email && <div className="error">{err.email}</div>}
      </div>
    </div>
  );
};

export default Profile;

import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const Tabs = () => {
  const [data, setData] = useState({
    name: "Harshit",
    age: 18,
    email: "harshit@gmail.com",
    interests: ["coding", "sports", "singing"],
    theme: "dark",
  });
  const [active, setActive] = useState(0);
  const [err, setErr] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is invalid";
        }
        if (data.age < 18) {
          err.age = "Age is invalid";
        }
        if (!data.email || !data.email.includes("@")) {
          err.email = "Email is invalid";
        }

        setErr(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select Atleast One.";
        }

        setErr(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => true,
    },
  ];

  const nextHandler = () => {
    if (tabs[active].validate()) {
      setActive((prev) => prev + 1);
    }
  };
  const prevHandler = () => {
    if (tabs[active].validate()) {
      setActive((prev) => prev - 1);
    }
  };

  const submitHandler = () => {
    console.log(data);
  };

  const ActiveTab = tabs[active].component;
  return (
    <div>
      <div className="tabs">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className="tabs-item"
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="body">
        <ActiveTab data={data} setData={setData} err={err} />
      </div>
      {active > -1 && active < tabs.length - 1 && (
        <button onClick={nextHandler}>Next</button>
      )}
      {active > 0 && <button onClick={prevHandler}>Prev</button>}
      {active === tabs.length - 1 && (
        <button onClick={submitHandler}>Submit</button>
      )}
    </div>
  );
};

export default Tabs;

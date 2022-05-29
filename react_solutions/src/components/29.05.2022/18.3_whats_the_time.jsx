import React, { useState } from "react";
import "./style.css";

const Exercise18_3 = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  const handleChangeSecound = ({ target: { value } }) => {
    setSecond(value);
    setMinutes(value / 60);
    setHour(value / 60 / 60);
  };

  const handleChangeMinutes = ({ target: { value } }) => {
    setSecond(value * 60);
    setMinutes(value);
    setHour(value / 60);
  };

  const handleChangeHour = ({ target: { value } }) => {
    setSecond(value * 60 ** 2);
    setMinutes(value * 60);
    setHour(value);
  };

  return (
    <div className="times">
      <div>
        <label htmlFor="">Second</label>
        <input onChange={handleChangeSecound} value={second} type="number" />
      </div>
      <div>
        <label htmlFor="">Minutes</label>
        <input onChange={handleChangeMinutes} value={minutes} type="number" />
      </div>
      <div>
        <label htmlFor="">hour</label>
        <input onChange={handleChangeHour} value={hour} type="number" />
      </div>
    </div>
  );
};

export default Exercise18_3;

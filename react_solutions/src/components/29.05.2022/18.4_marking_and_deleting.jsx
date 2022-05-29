import React, { useState } from "react";

const Exercise18_4 = () => {
  const arr = ["one", "two", "three", "four", "five"];
  const [numbers, setNumbers] = useState(arr);
  const [checkeds, setCheckeds] = useState(arr);
  const handleCheck = ({ target: { checked, value } }) => {
    const newNumbers = [...checkeds];

    if (!checked) {
      newNumbers.push(value);
    } else {
      newNumbers.splice(checkeds.indexOf(value), 1);
    }

    setCheckeds(newNumbers);
  };

  const handleDeleteChecked = () => {
    setNumbers(checkeds);
  };
  const handleReset = () => {
    setNumbers(arr);
    setCheckeds(arr);
  };

  return (
    <>
      <div>
        <button onClick={handleDeleteChecked}>Delete</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <ul>
        {numbers.map((num, index) => (
          <li key={num + index}>
            <input value={num} type="checkbox" onChange={handleCheck} />
            {num}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Exercise18_4;

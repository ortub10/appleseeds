import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  const handleShow = async () => {
    const response = await fetch(`http://localhost:3050/${city}`);
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="App">
      <input
        value={city}
        type="text"
        onChange={(evt) => setCity(evt.target.value)}
      />
      <button onClick={handleShow}>Show temperature</button>
      <p>The temperature is: {data.temperature}</p>
    </div>
  );
}

export default App;

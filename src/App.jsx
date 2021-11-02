import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div id="app">
      <h1>Hola Joel</h1>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;

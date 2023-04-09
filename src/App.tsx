import React from "react";
import Autocomplete from "./Autocomplete";

const App: React.FC = () => {
  const suggestions = ["apple", "banana", "cherry", "date", "elderberry"];

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <Autocomplete suggestions={suggestions} />
    </div>
  );
};

export default App;

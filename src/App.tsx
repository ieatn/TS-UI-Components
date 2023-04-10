import React from "react";
import Autocomplete from "./Autocomplete";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

const App: React.FC = () => {
  const suggestions = ["apple", "banana", "cherry", "date", "elderberry"];

  return (
    <div>
      {/* <h1>Autocomplete Example</h1>
      <Autocomplete suggestions={suggestions} /> */}
      <Modal />
    </div>
  );
};

export default App;

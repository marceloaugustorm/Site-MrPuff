import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

import "./index.css";
import Jumb from "./components/Jumb";

function App() {
  return (
    <div className="site-container">
      <Header />
      <Jumb />
      <Section />

      {/* outros componentes */}
    </div>
  );
}

export default App;

import React from "react";
import Carrossel from "./Carrosel";
import Informacao from "./informacoes";

import "./Section.css";

const Section = () => {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <Carrossel />
        </div>
        <div className="col-md-6">
          <Informacao />
        </div>
      </div>
    </section>
  );
};

export default Section;

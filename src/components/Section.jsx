import React from "react";
import Carrossel from "./Carrosel";
import Video from "./video"
import Review from "./Review"


import "./Section.css";

const Section = () => {
  return (
    <section >              
          <Carrossel />
          <Video/>
          <Review/>
    </section>
  );
};

export default Section;

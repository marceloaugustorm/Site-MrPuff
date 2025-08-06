import React from "react";
import Carrossel from "./Carrosel";
import Video from "./video"
import Reviews from "./Reviews"



import "./Section.css";

const Section = () => {
  return (
    <section >              
          <Carrossel />
          <Reviews/>
          <Video/>
          
    </section>
  );
};

export default Section;

import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Jumb = () => {
  return (
    <div className="container">
      <div
        className="text-center rounded-3 mx-auto shadow"
        style={{
          maxWidth: "1200px",
          padding: "3rem",
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <h1
          style={{
            color: "#000",
            fontWeight: "700",
            fontSize: "2.5rem",
          }}
        >
          Drinks || Hookah || Culture
        </h1>
        <p
          className="col-lg-8 mx-auto fs-5"
          style={{
            color: "#333",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginTop: "1rem",
          }}
        >
          Descubra a experiência única da nossa Adega & Tabacaria! Venha
          conferir nossos produtos exclusivos e aproveitar momentos especiais
          com qualidade e variedade. Entre em contato para saber mais!
        </p>

        <div className="d-flex justify-content-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/mrpuffabc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={36}
              color="#000"
              style={{ cursor: "pointer" }}
              title="Instagram"
            />
          </a>
          <a href="#Whats" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              size={36}
              color="#000"
              style={{ cursor: "pointer" }}
              title="WhatsApp"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumb;

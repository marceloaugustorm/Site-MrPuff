// Logo
import Logo from "../assets/Logo.jpeg";
import { Link } from 'react-router-dom';
import React from "react";

// CSS
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img
              src={Logo}
              alt="Logotipo Mr-Puff"
              className="img-fluid w-50 rounded-circle"
            />
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a
              href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/menu"
              className="nav-link px-2 text-decoration-none hover-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cardápio
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0"
              className="nav-link px-2 text-decoration-none hover-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedidos
            </a>
          </li>
          <li>
            <Link to="/conheca" className="nav-link px-2 text-decoration-none hover-link">
              Nos Conheça
            </Link>
          </li>
        </ul>

        {/* <div className="col-md-3 text-end">
          <a
            href="https://www.instagram.com/mrpuffabc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={40}
              color="#fff"
              style={{ cursor: "pointer" }}
              title="Instagram"
            />
          </a>

          <a href="#Whats" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              size={40}
              color="#fff"
              style={{ cursor: "pointer" }}
              itle="WhatsApp"
            />
          </a>
        </div> */}
      </header>
    </div>
  );
}

export default Header;
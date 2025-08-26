// Logo
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones

// CSS
import "./Header.css";

function Header() {
  return (
    <div className="containerh">
      <header className="d-flex flex-wrap align-items-center justify-content-start py-2 mb-2">
        {/* Logo */}
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
           
          >
            <img
              src={Logo}
              alt="Logotipo Mr-Puff"
              className="img-fluid w-50 rounded-circle"
            />
          </Link>
        </div>

        {/* Navegação + Ícones */}
        <ul className="nav col-12 col-md-auto mb-4 justify-content-center mb-md-0">
          <li>
            <a
              href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/menu"
              className="nav-link px-3 text-decoration-none hover-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cardápio
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0"
              className="nav-link px-3 text-decoration-none hover-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedidos
            </a>
          </li>
          <li>
            <Link
              to="/conheca"
              className="nav-link px-3 text-decoration-none hover-link"
            >
              Nos Conheça
            </Link>
          </li>
          <li>
            <Link
              to="/informacoes"
              className="nav-link px-2 text-decoration-none hover-link"
            >
              Horários e Localização
            </Link>
          </li>

          {/* Ícones dentro do UL */}
          <li>
            <a
              href="https://www.instagram.com/mrpuffabc/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link px-4 text-decoration-none hover-link"
            >
              <FaInstagram size={26} />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link px-2 text-decoration-none hover-link"
            >
              <FaWhatsapp size={26} />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;

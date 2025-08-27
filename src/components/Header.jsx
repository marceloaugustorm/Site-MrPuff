// Logo
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

// CSS
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="containerh">
      {/* Desktop Header */}
      <header className="d-none d-lg-flex flex-wrap align-items-center justify-content-between py-2 mb-2">
        {/* Logo */}
        <div className="col-auto">
          <Link to="/">
            <img
              src={Logo}
              alt="Logotipo Mr-Puff"
              className="img-fluid logo-desktop"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </Link>
        </div>

        {/* Navegação Central */}
        <nav className="col-auto">
          <ul className="nav d-flex align-items-center mb-0">
            <li className="nav-item">
              <a
                href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/menu"
                className="nav-link px-3 text-decoration-none hover-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cardápio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0"
                className="nav-link px-3 text-decoration-none hover-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedidos
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/conheca"
                className="nav-link px-3 text-decoration-none hover-link"
              >
                Nos Conheça
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/informacoes"
                className="nav-link px-3 text-decoration-none hover-link"
              >
                Horários e Localização
              </Link>
            </li>
          </ul>
        </nav>

        {/* Ícones Sociais */}
        <div className="col-auto">
          <div className="d-flex align-items-center">
            <a
              href="https://www.instagram.com/mrpuffabc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none hover-link me-3"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none hover-link"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="d-block d-lg-none">
        <div className="d-flex align-items-center justify-content-between py-2 mb-2">
          {/* Logo Mobile */}
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="Logotipo Mr-Puff"
                className="img-fluid logo-mobile"
              />
            </Link>
          </div>

          {/* Social Icons Mobile */}
          <div className="d-flex align-items-center">
            <a
              href="https://www.instagram.com/mrpuffabc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none hover-link me-3"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none hover-link me-3"
            >
              <FaWhatsapp size={24} />
            </a>
            
            {/* Hamburger Menu Button */}
            <button
              className="btn btn-link p-0 text-decoration-none hover-link"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
              style={{color: "#65BAE1"}}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <nav>
            <ul className="nav flex-column text-center py-3">
              <li className="nav-item mb-2">
                <a
                  href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/menu"
                  className="nav-link hover-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  Cardápio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0"
                  className="nav-link hover-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  Pedidos
                </a>
              </li>
              <li className="nav-item mb-2">
                <Link 
                  to="/conheca" 
                  className="nav-link hover-link"
                  onClick={closeMobileMenu}
                >
                  Nos Conheça
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link 
                  to="/informacoes" 
                  className="nav-link hover-link"
                  onClick={closeMobileMenu}
                >
                  Horários e Localização
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
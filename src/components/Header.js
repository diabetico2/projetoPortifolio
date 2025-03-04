import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // 🚀 Novo pacote para animação

function Header({ lang, t, onChangeLanguage }) {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="social-icons">
        <a href="https://instagram.com/seuCliente" target="_blank" rel="noreferrer">
          <i className="bi bi-instagram" style={{ color: "#fff" }}></i>
        </a>
        <a href="https://wa.me/5599999999" target="_blank" rel="noreferrer">
          <i className="bi bi-whatsapp" style={{ color: "#25D366" }}></i>
        </a>
        <a href="mailto:seuCliente@gmail.com" target="_blank" rel="noreferrer">
          <i className="bi bi-envelope-fill" style={{ color: "#EA4335" }}></i>
        </a>
        <a href="https://www.behance.net/izzustudio" target="_blank" rel="noreferrer">
          <i className="bi bi-behance" style={{ color: "#00A4E4" }}></i>  {/* 🔵 Cor azul do Behance */}
        </a>
      </div>

      <div className="logo">
        <img src="https://via.placeholder.com/100x50?text=Logo" alt="Logo" />
      </div>

      <div className="header-text">
        <h1>
          <TypeAnimation
            sequence={[t.headerTitle, 1500]} // Apenas exibe o título sem piscar
            speed={50}
            wrapper="span"
            repeat={0}
          />
        </h1>
        <h2>{t.headerSubtitle}</h2>
        <p>{t.description}</p>

        <div className="language-container">
          <span>{t.language}:</span>
          <button className="language-select" onClick={() => onChangeLanguage("pt")}>PT</button>
          <button className="language-select" onClick={() => onChangeLanguage("en")}>EN</button>
          <button className="language-select" onClick={() => onChangeLanguage("es")}>ES</button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;

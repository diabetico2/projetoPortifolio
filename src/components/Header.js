import React from "react";
import { motion } from "framer-motion";

function Header({ lang, t, onChangeLanguage }) {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* 🔥 Ícones das redes sociais restaurados */}
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
      </div>

      <div className="logo">
        <img src="https://via.placeholder.com/100x50?text=Logo" alt="Logo" />
      </div>

      <div className="header-content">
        <div className="profile-section">
          <div className="profile-pic">
            <img src="https://via.placeholder.com/200?text=Foto+do+Cliente" alt="Foto do Cliente" />
          </div>

          {/* 🔥 Texto agora fixo abaixo da foto */}
          <motion.div
            className="header-text"
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{t.headerTitle}</h1>
            <h2>{t.headerSubtitle}</h2>
            <p>{t.description}</p>

            <div className="language-container">
              <span>{t.language}:</span>
              <button className="language-select" onClick={() => onChangeLanguage("pt")}>PT</button>
              <button className="language-select" onClick={() => onChangeLanguage("en")}>EN</button>
              <button className="language-select" onClick={() => onChangeLanguage("es")}>ES</button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;

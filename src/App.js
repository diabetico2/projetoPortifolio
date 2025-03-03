import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import translations from "./i18n/translations";
import Header from "./components/Header";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("pt"); // Estado do idioma

  const handleChangeLanguage = (newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
    }
  };

  return (
    <motion.div className="App">
      {/* 🔥 Garante que o header não desapareça ao trocar idioma */}
      <Header lang={lang} t={translations[lang]} onChangeLanguage={handleChangeLanguage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={lang} // 🔥 Faz a animação acontecer ao trocar idioma
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectsGrid lang={lang} t={translations[lang]} />
          <Footer lang={lang} t={translations[lang]} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;

import React from "react";
import { motion } from "framer-motion";

function Footer({ lang, t }) {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>
        {t.footerText}{" "}
        <a href="https://linktr.ee/allanjosepereira" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>
          Allan José
        </a>
      </p>
    </motion.footer>
  );
}

export default Footer;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex} // Garante que a animação acontece toda troca
            src={images[currentIndex]}
            alt={`Imagem ${title}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
      <p>{title}</p>
    </motion.div>
  );
}

export default ProjectCard;

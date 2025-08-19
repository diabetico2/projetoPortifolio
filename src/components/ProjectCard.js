import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    if (!images || images.length <= 1) return;
    
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
        {images && images.length > 0 ? (
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
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            backgroundColor: '#444', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#fff',
            fontSize: '14px'
          }}>
            Imagem Projeto {title}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import telaImg from "../images/Projects/tela.jpg";
import posts2Img from "../images/Projects/posts-2.png";
import mmBbNycImg from "../images/Projects/MM-BB-NYC-02.jpg";
import macbookImg from "../images/Projects/macbook-16-pro-mockup-on-black-background-front-view.jpg";
import ipadImg from "../images/Projects/Ipad.jpg";
import gridTypoImg from "../images/Projects/Grid-Typo-2-intagram.jpg";
import gifImg from "../images/Projects/GIF.gif";
import familiaTipograficaImg from "../images/Projects/familia-tipografica.png";
import digitalScreenMockupImg from "../images/Projects/Digital-Screen-Advertising-Mockup-02.jpg";
import digitalScreenImg from "../images/Projects/Digital-Screen.jpg";
import coresInstagramImg from "../images/Projects/cores-instagram.png";
import cartao3Img from "../images/Projects/cartao-3.jpg";
import toteBagImg from "../images/Projects/01-SGNL-Tote-Bag-Mockup.jpg";
import macbookRawImg from "../images/Projects/01-MacBook-Mockup-Raw-Series.jpg";

function ProjectsGrid({ lang, t }) {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Atualiza os títulos dos projetos sempre que o idioma mudar
    const newProjectsData = [
      { id: 1, title: t.projects[0], images: [telaImg] },
      { id: 2, title: t.projects[1], images: [posts2Img] },
      { id: 3, title: t.projects[2], images: [mmBbNycImg] },
      { id: 4, title: t.projects[3], images: [macbookImg] },
      { id: 5, title: t.projects[4], images: [ipadImg] },
      { id: 6, title: "Projeto 6", images: [gridTypoImg] },
      { id: 7, title: "Projeto 7", images: [gifImg] },
      { id: 8, title: "Projeto 8", images: [familiaTipograficaImg] },
      { id: 9, title: "Projeto 9", images: [digitalScreenMockupImg] },
      { id: 10, title: "Projeto 10", images: [digitalScreenImg] },
      { id: 11, title: "Projeto 11", images: [coresInstagramImg] },
      { id: 12, title: "Projeto 12", images: [cartao3Img] },
      { id: 13, title: "Projeto 13", images: [toteBagImg] },
      { id: 14, title: "Projeto 14", images: [macbookRawImg] },
    ];
    

    setProjectsData(newProjectsData);
  }, [t.projects]); // Apenas t.projects como dependência

  return (
    <div className="grid-container">
      {projectsData.map((proj) => (
        <ProjectCard key={proj.id} title={proj.title} images={proj.images} />
      ))}
    </div>
  );
}

export default ProjectsGrid;

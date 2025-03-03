import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectsGrid({ lang, t }) {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Atualiza os títulos dos projetos sempre que o idioma mudar
    setProjectsData([
      { id: 1, title: t.projects[0], images: ["/images/projects/projeto1-img1.jpg", "/images/projects/projeto1-img2.jpg", "/images/projects/projeto1-img3.jpg", "/images/projects/projeto1-img4.jpg"] },
      { id: 2, title: t.projects[1], images: ["/images/projects/projeto2-img1.jpg", "/images/projects/projeto2-img2.jpg", "/images/projects/projeto2-img3.jpg", "/images/projects/projeto2-img4.jpg"] },
      { id: 3, title: t.projects[2], images: ["/images/projects/projeto3-img1.jpg", "/images/projects/projeto3-img2.jpg", "/images/projects/projeto3-img3.jpg", "/images/projects/projeto3-img4.jpg"] },
      { id: 4, title: t.projects[3], images: ["/images/projects/projeto4-img1.jpg", "/images/projects/projeto4-img2.jpg", "/images/projects/projeto4-img3.jpg", "/images/projects/projeto4-img4.jpg"] },
      { id: 5, title: t.projects[4], images: ["/images/projects/projeto5-img1.jpg", "/images/projects/projeto5-img2.jpg", "/images/projects/projeto5-img3.jpg", "/images/projects/projeto5-img4.jpg"] },
    ]);
  }, [t.projects]); // 🔥 Agora incluímos 't.projects' na lista de dependências

  return (
    <div className="grid-container">
      {projectsData.map((proj) => (
        <ProjectCard key={proj.id} title={proj.title} images={proj.images} />
      ))}
    </div>
  );
}

export default ProjectsGrid;

import { proyectos } from "../data/portfolioData";

function ProjectCard({ nombre, descripcion, tecnologias, url }) {
  return (
    <div className="project-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p><strong>Tecnologías:</strong> {tecnologias.join(", ")}</p>
      {url && <a href={url} target="_blank" rel="noreferrer">Ver repositorio</a>}
    </div>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-list">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            url={proyecto.url}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
import { habilidades } from "../data/portfolioData";

function Skills() {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
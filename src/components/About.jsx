import { useState } from "react";

const About = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <div className="about">
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante de programación y me apasiona aprender nuevas tecnologías y mejorar mis habilidades en el desarrollo de software. 
        Me considero una persona proactiva, creativa y con ganas de enfrentar nuevos desafíos.
      </p>

      {mostrarMas && (
        <p>
          Además de programar, me gusta seguir aprendiendo sobre nuevas
          tecnologías y participar en proyectos personales para practicar
          lo que voy viendo en la facultad.
        </p>
      )}

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
}

export default About;
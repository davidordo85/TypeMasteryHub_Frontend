//import React from 'react'
import {
  FaGraduationCap,
  FaChartLine,
  FaDumbbell,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from 'react-icons/fa';

const MoreExplanationSection = () => {
  //TODO: Cambiar textos por textos mas descriptivos y menos ramdom
  return (
    <section className="more-explanation-container">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FaGraduationCap size={50} />
        <h1>Lecciones interactivas</h1>
        <p>
          Explora lecciones interactivas diseñadas para mejorar tu velocidad y
          precisión en mecanografía.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FaChartLine className="icon-explanation" size={50} />
        <h1>Seguimiento de progreso</h1>
        <p>
          Registra tu progreso a lo largo del curso y sigue tus mejoras en
          tiempo real.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FaDumbbell className="icon-explanation" size={50} />
        <h1>Ejercicios personalizados</h1>
        <p>
          Crea ejercicios personalizados para abordar áreas específicas que
          necesitas mejorar.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FaLightbulb className="icon-explanation" size={50} />
        <h1>Consejos de expertos</h1>
        <p>
          Recibe consejos y trucos útiles de expertos en mecanografía para
          perfeccionar tus habilidades.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FaRocket className="icon-explanation" size={50} />
        <h1>Pruebas de velocidad</h1>
        <p>
          Participa en pruebas de velocidad para medir tu destreza y competir
          con otros estudiantes.
        </p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FaUsers className="icon-explanation" size={50} />
        <h1>Comunidad activa</h1>
        <p>
          Únete a nuestra comunidad activa y comparte experiencias con otros
          entusiastas de la mecanografía.
        </p>
      </div>
    </section>
  );
};

export default MoreExplanationSection;

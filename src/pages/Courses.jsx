import React from "react";
import { Link } from "react-router-dom";
import "../styles/Courses.css";

const courses = [
  {
    id: 1,
    title: "Guitarra desde cero",
    description: "Acordes básicos, rasgueos y tus primeras canciones.",
    image: "/images/curhome0back.jpg",
    plan: "/courses/basico",
    details: [
      "12 lecciones en video",
      "Material descargable",
      "Acceso de por vida"
    ]
  },
  {
    id: 2,
    title: "Ritmos y técnicas de Rock",
    description: "Potencia tu técnica con riffs, escalas y solos de rock.",
    image: "/images/curhome2back.jpg",
    plan: "/courses/intermedio",
    details: [
      "Riff building",
      "Técnicas de mano derecha",
      "Ejercicios por semana"
    ]
  },
  {
    id: 3,
    title: "Improvisación y solos avanzados",
    description: "Modos, bending, tapping y shred para llevar tu técnica al límite.",
    image: "/images/curhome3back.jpg",
    plan: "/courses/avanzado",
    details: [
      "Teoría aplicada al solo",
      "Patrones y licks",
      "Ejercicios de velocidad"
    ]
  }
];

export default function Courses() {
  return (
    <main className="courses-container">
      <div className="courses-header">
        <h1 className="courses-title">Aprendé con nosotros</h1>
        <p className="courses-subtitle">
          Cursos online de guitarra, desde lo básico hasta técnicas avanzadas.
        </p>
      </div>

      <div className="courses-list">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </main>
  );
}

function CourseCard({ course, index }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="course-card"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="course-media">
        <img src={course.image} alt={course.title} className="course-img" />
      </div>

      <div className="course-details">
        <h2>{course.title}</h2>
        <p className="course-desc">{course.description}</p>

        <ul className="course-points">
          {course.details.map((d, i) => (
            <li key={i}>• {d}</li>
          ))}
        </ul>

        <div className="course-actions">
          <Link to={course.plan} className="btn btn-primary">
            Ver plan
          </Link>
        </div>
      </div>
    </article>
  );
}

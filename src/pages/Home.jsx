import { Link } from 'react-router-dom'
import heroImage from '../assets/foto-inicio.jpg'

function Home() {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Estudiante · Ingeniería Civil Informática</p>
          <h1>
            Hola, soy Roberto
            <span>González López</span>
          </h1>
          <p className="lead">
            Estudiante de la Universidad Católica de Temuco, interesado en la
            tecnología y en crear soluciones digitales. Explora mis intereses,
            habilidades y proyectos.
          </p>
          <Link className="button" to="/proyectos">Explorar proyectos</Link>
        </div>
        <div className="hero-art">
          <img src={heroImage} alt="Roberto González López" />
        </div>
      </section>

      <section className="feature-grid" aria-label="Lo que me inspira">
        <article className="surface-card feature-card">
          <div className="feature-mark" aria-hidden="true">&lt;/&gt;</div>
          <h3>Desarrollo</h3>
          <p className="muted">Aprendiendo y construyendo soluciones con código.</p>
        </article>
        <article className="surface-card feature-card">
          <div className="feature-mark" aria-hidden="true">⌘</div>
          <h3>Ciberseguridad</h3>
          <p className="muted">Un área en la que quiero profundizar profesionalmente.</p>
        </article>
        <article className="surface-card feature-card">
          <div className="feature-mark" aria-hidden="true">✦</div>
          <h3>Inteligencia artificial</h3>
          <p className="muted">Me interesa explorar sus aplicaciones y posibilidades.</p>
        </article>
      </section>
    </>
  )
}

export default Home

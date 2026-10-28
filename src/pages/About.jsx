import profilePhoto from '../assets/foto-perfil.jpg'

function About() {
  return (
    <>
      <header className="page-heading">
        <p className="eyebrow">Un poco sobre mí</p>
        <h1>Sobre mí</h1>
        <p className="lead">
          Soy Roberto Leandro González López, estudiante de Ingeniería Civil
          Informática en la Universidad Católica de Temuco.
        </p>
      </header>

      <section className="profile-card surface-card" aria-label="Foto personal">
        <img
          className="profile-photo"
          src={profilePhoto}
          alt="Roberto González López"
        />
        <div>
          <p className="eyebrow">Mi foto</p>
          <h2>Roberto González López</h2>
          <p className="muted">
            Estudiante de Ingeniería Civil Informática en la Universidad
            Católica de Temuco.
          </p>
        </div>
      </section>

      <div className="content-grid">
        <section className="surface-card">
          <h2>¿Qué estudio?</h2>
          <p className="muted">
            Actualmente estudio Ingeniería Civil Informática en la Universidad
            Católica de Temuco, donde sigo desarrollando mis conocimientos en
            tecnología y programación.
          </p>
        </section>
        <section className="surface-card">
          <h2>¿Qué me interesa?</h2>
          <div className="interest-list">
            <div className="interest-item">
              <span className="bullet" aria-hidden="true">01</span>
              <span><strong>Ciberseguridad</strong>Quiero orientar mi desarrollo profesional hacia esta área.</span>
            </div>
            <div className="interest-item">
              <span className="bullet" aria-hidden="true">02</span>
              <span><strong>Inteligencia artificial</strong>Me interesa aprender más sobre sus herramientas y aplicaciones.</span>
            </div>
            <div className="interest-item">
              <span className="bullet" aria-hidden="true">03</span>
              <span><strong>Desarrollo de software</strong>Disfruto conocer cómo se diseñan y construyen soluciones digitales.</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About

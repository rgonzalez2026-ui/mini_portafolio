import ContactForm from '../components/ContactForm.jsx'

function Contact() {
  return (
    <>
      <header className="page-heading">
        <p className="eyebrow">Hablemos</p>
        <h1>Contacto</h1>
        <p className="lead">
          ¿Tienes alguna pregunta o propuesta? Completa el formulario y verás
          una confirmación cuando tus datos sean válidos.
        </p>
      </header>
      <div className="contact-layout">
        <aside className="surface-card">
          <h2>Envíame un mensaje</h2>
          <p className="muted">
            El formulario es una demostración de validación en el navegador.
            No se envían ni almacenan datos.
          </p>
          <p className="muted">
            También puedes escribirme a{' '}
            <a className="contact-email" href="mailto:rgonzalez2026@alu.uct.cl">
              rgonzalez2026@alu.uct.cl
            </a>
            .
          </p>
        </aside>
        <ContactForm />
      </div>
    </>
  )
}

export default Contact

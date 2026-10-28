import { useState } from 'react'

const initialForm = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.name.trim()) errors.name = 'Ingresa tu nombre.'
  if (!values.email.trim()) {
    errors.email = 'Ingresa tu correo electrónico.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }
  if (!values.message.trim()) errors.message = 'Escribe un mensaje.'

  return errors
}

function ContactForm() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setSubmitted(true)
    setValues(initialForm)
  }

  return (
    <form className="surface-card contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="contact-name">Nombre *</label>
        <input
          autoComplete="name"
          id="contact-name"
          name="name"
          onChange={handleChange}
          placeholder="Tu nombre"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        {errors.name && <span className="field-error" id="contact-name-error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="contact-email">Correo electrónico *</label>
        <input
          autoComplete="email"
          id="contact-email"
          name="email"
          onChange={handleChange}
          placeholder="tu@correo.com"
          type="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        {errors.email && <span className="field-error" id="contact-email-error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="contact-message">Mensaje *</label>
        <textarea
          id="contact-message"
          name="message"
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && <span className="field-error" id="contact-message-error">{errors.message}</span>}
      </div>

      <button className="button" type="submit">Enviar mensaje</button>
      {submitted && (
        <p className="form-notice" role="status">
          ¡Gracias! El formulario se validó correctamente. Esta demostración no envía mensajes a un servidor.
        </p>
      )}
    </form>
  )
}

export default ContactForm

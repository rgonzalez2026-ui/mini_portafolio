const skills = [
  { name: 'Python', symbol: 'Py', level: 'Intermedio', className: 'intermedio' },
  { name: 'JavaScript', symbol: 'JS', level: 'Básico', className: 'basico' },
  { name: 'React', symbol: '⚛', level: 'Básico', className: 'basico' },
]

const tools = [
  {
    name: 'Figma',
    symbol: 'F',
    description: 'Lo uso para crear diseños y prototipos de interfaces.',
  },
  {
    name: 'Visual Studio Code',
    symbol: '</>',
    description: 'Mi editor para escribir, organizar y revisar código.',
  },
  {
    name: 'Node.js',
    symbol: 'N',
    description: 'Lo utilizo para ejecutar JavaScript y trabajar con herramientas de desarrollo.',
  },
]

function Skills() {
  return (
    <>
      <header className="page-heading">
        <p className="eyebrow">Lo que estoy aprendiendo</p>
        <h1>Habilidades y tecnologías</h1>
        <p className="lead">
          Estos niveles reflejan mi experiencia actual y seguirán creciendo con
          la práctica y el aprendizaje.
        </p>
      </header>

      <section aria-labelledby="tech-title">
        <h2 id="tech-title">Tecnologías</h2>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="surface-card skill-card" key={skill.name}>
              <div className="skill-top">
                <span className="skill-symbol" aria-hidden="true">{skill.symbol}</span>
                <span className="level">{skill.level}</span>
              </div>
              <div>
                <h3>{skill.name}</h3>
                <div
                  className="level-track"
                  role="img"
                  aria-label={`Nivel ${skill.level} en ${skill.name}`}
                >
                  <div className={`level-fill ${skill.className}`} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tools-section" aria-labelledby="tools-title">
        <h2 id="tools-title">Herramientas</h2>
        <div className="tool-grid">
          {tools.map((tool) => (
            <article className="surface-card tool-card" key={tool.name}>
              <span className="skill-symbol" aria-hidden="true">{tool.symbol}</span>
              <div>
                <h3>{tool.name}</h3>
                <p className="muted">{tool.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills

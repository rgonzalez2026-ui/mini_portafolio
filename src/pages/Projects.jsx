import ProjectCard from '../components/ProjectCard.jsx'
import legalPrestigeImage from '../assets/legal-prestige.svg'
import promarImage from '../assets/promar.jpg'

const projects = [
  {
    title: 'Legal Prestigue',
    description:
      'Boceto de un sitio web para un abogado, donde se pueden agendar citas, consultar horarios de atención y conocer información profesional.',
    variant: 'legal',
    image: legalPrestigeImage,
  },
  {
    title: 'Promar',
    description:
      'Sitio web de productos de Promar con un carrito de compras para que los clientes puedan reunir lo que buscan sin tener que encontrar cada artículo en la tienda física.',
    variant: 'promar',
    image: promarImage,
  },
]

function Projects() {
  return (
    <>
      <header className="page-heading">
        <p className="eyebrow">Trabajo y aprendizaje</p>
        <h1>Mis proyectos</h1>
        <p className="lead">
          Algunos proyectos en los que he trabajado y que representan ideas
          aplicadas a necesidades reales.
        </p>
      </header>
      <section className="project-list" aria-label="Lista de proyectos">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </>
  )
}

export default Projects

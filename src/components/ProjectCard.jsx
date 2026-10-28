function ProjectCard({ title, description, variant, image }) {
  return (
    <article className="surface-card project-card">
      <div className={`project-art project-art-${variant}`} aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="project-copy">
        <p className="eyebrow">Proyecto</p>
        <h2>{title}</h2>
        <p className="muted">{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard

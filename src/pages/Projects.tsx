const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: '/project1.jpg',
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'TypeScript'],
      image: '/project2.jpg',
      link: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies',
      technologies: ['React', 'Vite', 'CSS'],
      image: '/project3.jpg',
      link: 'https://github.com/yourusername/project3'
    }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 
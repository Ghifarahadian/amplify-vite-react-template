const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'AWS', 'Docker', 'Git'
  ];

  return (
    <div className="about">
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate Full Stack Developer with a strong focus on creating
          efficient and scalable web applications. With several years of experience
          in the industry, I've worked on various projects ranging from small
          business websites to large-scale enterprise applications.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <h3>Senior Developer</h3>
            <p className="company">Tech Company</p>
            <p className="duration">2020 - Present</p>
            <ul>
              <li>Led development of multiple web applications</li>
              <li>Implemented CI/CD pipelines</li>
              <li>Mentored junior developers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
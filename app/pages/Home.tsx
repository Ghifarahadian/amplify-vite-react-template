import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Your Name</span>
        </h1>
        <h2 className="hero-subtitle">
          Full Stack Developer
        </h2>
        <p className="hero-description">
          I build exceptional digital experiences that make an impact.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home; 
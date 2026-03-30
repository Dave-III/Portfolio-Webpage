import "./App.css";
import heroImage from "./assets/hero.png";
const projects = [
  {
    title: "Hangman Neural Network",
    description:
      "A Hangman-solving neural network built from scratch using my own data structures and manual training logic. The model predicts strong next-letter guesses from the current game state using custom encoding, feedforward layers, ReLU activations, softmax output, and backpropagation.",
    stack: ["Python", "Neural Networks", "Data Structures", "Algorithms"],
    github: "https://github.com/Dave-III/Hangman",
    demo: "",
    status: "Core system built, still refining and improving.",
  },
  {
    title: "Discord Bot 'Borg'",
    description:
      "A Discord chatbot connected to the OpenAI API that can listen to conversations and respond contextually. Built to create a more interactive bot experience beyond simple commands, with real-time conversational behaviour inside Discord.",
    stack: ["Python", "Discord API", "OpenAI API", "Automation"],
    github: "https://github.com/Dave-III/Discord-Bot",
    demo: "#",
    status: "Working concept with room for expansion and polish.",
  },
  {
    title: "Cine2Nerdle AI",
    description:
      "An AI player for Cine2Nerdle that uses a search algorithm to find strong movie-actor-movie connections and automatically play the game. The project focuses on graph-style reasoning, pathfinding, and strategic decision-making.",
    stack: ["Python", "Search Algorithms", "Graph Logic", "Automation"],
    github: "https://github.com/Dave-III/Cine2Nerdle-Bot",
    demo: "#",
    status: "Prototype built and logic tested.",
  },
];

const skills = [
  "Python",
  "Java",
  "APIs",
  "Algorithms",
  "Data Structures",
  "Machine Learning",
  "Neural Networks",
  "Git/GitHub",
  "Automation",
  "Problem Solving",
  "Server Development",
];

export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Connor's Portfolio</p>
            <h1>
              Hi, I’m Connor - AI and Programming Enthusiast
            </h1>
            <p className="hero-text">
              I’m a University of Auckland student studying Computer Science and Chemistry,
              with a strong interest in algorithms, automation, and machine learning.
              This portfolio showcases projects that reflect how I build, solve problems,
              and think through technical challenges.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Hero visual" />
            <h2>Quick Snapshot</h2>
            <div className="snapshot-grid">
              <div className="snapshot-item">
                <strong>3 Featured</strong>
                <span>Strong portfolio projects</span>
              </div>
              <div className="snapshot-item">
                <strong>CS + Chem</strong>
                <span>Tertiary background and knowledge.</span>
              </div>
              <div className="snapshot-item">
                <strong>AI + Logic</strong>
                <span>Algorithms and intelligent systems</span>
              </div>
              <div className="snapshot-item">
                <strong>Build-First</strong>
                <span>Hands-on project approach</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container card">
            <h2>About Me</h2>
            <p>
              I enjoy building projects that go beyond tutorials and show real
              problem-solving. A lot of my favourite work sits at the
              intersection of algorithms, AI-style logic, automation, and
              interactive systems — especially thriving in unconventional projects.
            </p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading">
              <h2>Featured Projects</h2>
              <p>A few projects that best represent how I think and build.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="status">
                    <strong>Status:</strong> {project.status}
                  </p>

                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="button button-primary"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="button button-secondary"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container card">
            <h2>Skills</h2>
            <div className="tag-list">
              {skills.map((skill) => (
                <span className="tag large" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-card">
            <h2>Let’s Connect</h2>
            <p>
              I’m building this portfolio to show companies what I can do. If you’re interested in working together, have feedback, or just want to chat about projects and ideas, feel free to reach out!
            </p>
            <div className="hero-buttons">
              <a href="mailto:you@example.com" className="button button-primary">
                Email Me
              </a>
              <a 
                href="https://github.com/Dave-III" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button button-secondary"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/YOUR_LINK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button button-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
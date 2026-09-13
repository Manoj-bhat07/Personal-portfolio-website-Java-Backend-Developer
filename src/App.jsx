import Hero3D from "./components/Hero3D";
import Reveal from "./components/Reveal";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">

      {/* NAVBAR */}
<Reveal>
  <nav>
    <h2>MANOJ BHAT</h2>

    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#journey">Journey</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <button
      className="menu-button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      ☰
    </button>

    {menuOpen && (
  <div className="mobile-menu">
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
)}

  </nav>
</Reveal>


      <main>

        {/* HERO */}
        <section className="hero">

        <Reveal>
            <div className="hero-content">
            <div className="status">
              <span></span>
              AVAILABLE FOR OPPORTUNITIES
             </div>

            <p className="intro">
              HELLO, I'M MANOJ
            </p>

            <h1>
              JAVA BACKEND
              <br />
              <span>DEVELOPER</span>
            </h1>

            <p className="description">
              I build scalable and reliable backend applications
              using Java, Spring Boot and modern technologies.
            </p>

            <div className="buttons">

              <a href="#projects">
                <button>
                  View Projects
                </button>
              </a>

              <a
              href="https://github.com/Manoj-bhat07"
              target="_blank"
              rel="noreferrer"
>
              <button className="secondary">
               <svg
  viewBox="0 0 24 24"
  width="16"
  height="16"
  aria-hidden="true"
>
  <path
    fill="currentColor"
    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.03c.85 0 1.7.11 2.49.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
  />
</svg>

              GitHub
  </button>
</a>

            </div>

          </div>
           </Reveal>

        <Reveal delay={0.3}>
  <div className="hero-3d">
    <Hero3D />
  </div>
</Reveal>

        </section>


        {/* ABOUT */}
        <section
          id="about"
          className="about-section"
        >

          <Reveal>

            <div className="about-header">

              <p className="section-label">
                ABOUT ME
              </p>

              <h2>
                Building my path into backend engineering.
              </h2>

            </div>

          </Reveal>


          <div className="about-content">

            <Reveal>

              <div className="about-text">

                <p>
                   I'm a Computer Science and Technology student with a strong interest
                   in backend development and software engineering, focused on building
                   a solid foundation for a career in backend engineering.
                </p>

                <p>
                  My current focus is Java, Data Structures and Algorithms, SQL, DBMS,
                  and Spring Boot. I enjoy understanding how applications work behind
                  the scenes and building reliable, scalable backend systems.
                </p>

                <p>
                  My long-term goal is to become a professional
                  Java Backend Developer and contribute to real-world,
                  high-scale systems.
                </p>

              </div>

            </Reveal>


            <Reveal delay={0.2}>

              <div className="about-stats">

                <div>
                  <strong>02</strong>
                  <span>Year of B.Tech</span>
                </div>

                <div>
                  <strong>Java</strong>
                  <span>Primary Language</span>
                </div>

                <div>
                  <strong>Backend</strong>
                  <span>Career Focus</span>
                </div>

                <div>
                  <strong>DSA</strong>
                  <span>Problem Solving</span>
                </div>

              </div>

            </Reveal>

          </div>

        </section>


        {/* JOURNEY */}
        <section
          id="journey"
          className="journey-section"
        >

          <Reveal>

            <div className="journey-header">

              <p className="section-label">
                MY JOURNEY
              </p>

              <h2>
                Education & Growth
              </h2>

              <p>
                A timeline of my education and the technologies
                I'm learning along the way.
              </p>

            </div>

          </Reveal>


          <div className="timeline">


            <Reveal>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-date">
                 2025 - Present
                </div>

                <div className="timeline-content">

                  <h3>
                    B.Tech — Computer Science & Technology
                  </h3>

                  <h4>
                    Dayananda Sagar University
                  </h4>

                  <p>
                     Currently pursuing my B.Tech while building a strong foundation
                     in programming, data structures, databases, and software development.
                  </p>

                  <div className="timeline-tags">
                    <span>Computer Science</span>
                    <span>Java</span>
                    <span>DSA</span>
                  </div>

                </div>

              </div>

            </Reveal>


            <Reveal delay={0.15}>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-date">
                  2026
                </div>

                <div className="timeline-content">

                  <h3>
                    Backend Development
                  </h3>

                  <h4>
                    Current Focus
                  </h4>

                 <p>
                    Currently focused on Java backend development, strengthening my
                    knowledge of SQL, DBMS, REST APIs, and Spring Boot while building
                    practical projects.
                  </p>

                  <div className="timeline-tags">
                    <span>Java</span>
                    <span>SQL</span>
                    <span>DBMS</span>
                    <span>Spring Boot</span>
                  </div>

                </div>

              </div>

            </Reveal>


            <Reveal delay={0.3}>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-date">
                  Future
                </div>

                <div className="timeline-content">

                  <h3>
                    Java Backend Engineer
                  </h3>

                  <h4>
                    Long-Term Goal
                  </h4>

                 <p>
                   My long-term goal is to become a professional Java Backend Developer
                   and contribute to scalable, reliable, and high-performance systems.
                  </p>

                  <div className="timeline-tags">
                    <span>Backend Engineering</span>
                    <span>System Design</span>
                    <span>Scalability</span>
                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>


        {/* SKILLS */}
        <section
          id="skills"
          className="skills-section"
        >

          <Reveal>

            <p className="section-label">
              MY TOOLKIT
            </p>

            <h2>
              Skills & Technologies
            </h2>

          </Reveal>


          <div className="skills-grid">


            <Reveal>

              <div className="skill-card">

                <span>01</span>

                <h3>
                  Java
                </h3>

                <p>
                  Core Java, OOP, Collections,
                  Exception Handling
                </p>

              </div>

            </Reveal>


            <Reveal delay={0.1}>

              <div className="skill-card">

                <span>02</span>

                <h3>
                  Spring Boot
                </h3>

                <p>
                  Building REST APIs and
                  backend applications
                </p>

              </div>

            </Reveal>


            <Reveal delay={0.2}>

              <div className="skill-card">

                <span>03</span>

                <h3>
                  SQL & DBMS
                </h3>

                <p>
                  Database design, queries,
                  joins and normalization
                </p>

              </div>

            </Reveal>


            <Reveal delay={0.3}>

              <div className="skill-card">

                <span>04</span>

                <h3>
                  DSA
                </h3>

                <p>Arrays, Strings, Binary Search and algorithmic problem solving</p>

              </div>

            </Reveal>


            <Reveal delay={0.4}>

              <div className="skill-card">

                <span>05</span>

                <h3>
                  Git & GitHub
                </h3>

               <p>Version control, repository management, and collaborative development</p>

              </div>

            </Reveal>


            <Reveal delay={0.5}>

              <div className="skill-card">

                <span>06</span>

                <h3>
                  REST APIs
                </h3>

               <p>Designing and working with RESTful backend APIs</p>
              </div>

            </Reveal>


          </div>

        </section>


        {/* PROJECTS */}
        <section
          id="projects"
          className="projects-section"
        >

          <Reveal>

            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Projects
            </h2>

          </Reveal>


          <div className="projects-grid">


            <Reveal>

              <div className="project-card">

                <div className="project-number">
                  01
                </div>

                <h3>
                  Parking Management System
                </h3>

                <p>
                     A Java-based console application designed to manage
                     vehicle entry, exit, parking slots, tickets, and fees.
                     The system supports multiple vehicle types and tracks
                     parking duration and slot availability using OOP principles.
                </p>

                <div className="tech-stack">
                  <span>Java</span>
                  <span>Object Oriented Programming</span>
                </div>

                <a
  href="https://github.com/Manoj-bhat07/Parking-System.git"
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View Project

  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.4 7.88 10.93.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
    />
  </svg>
</a>
              </div>

            </Reveal>


            <Reveal delay={0.15}>

              <div className="project-card">

                <div className="project-number">
                  02
                </div>

                <h3>
                  Number Guessing Game
                </h3>

                <p>
                  
                  A console-based Java game where the player guesses a
                  randomly generated number. Built to practice loops,
                  conditional logic, random number generation, and
                  core Java problem-solving.
                </p>

                <div className="tech-stack">
                  <span>Java</span>
                </div>
                 <a
  href="https://github.com/Manoj-bhat07/NumberGuessingGame.git"
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View Project

  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.4 7.88 10.93.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
    />
  </svg>
</a>
              </div>

            </Reveal>


          </div>

        </section>

{/* Contact */}
<section id="contact" className="contact-section">
  <div className="section-container">

    <Reveal>
      <div className="contact-heading">
        <span className="section-label">CONTACT</span>

        <h2>LET'S CONNECT</h2>

        <p>
          Have a project or opportunity in mind?
          I'd love to hear from you.
        </p>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="contact-card">

        <div className="contact-content">

          <span className="contact-small-title">
            GET IN TOUCH
          </span>

          <p>
            I'm currently open to opportunities and
            backend development roles.
          </p>

          <div className="contact-email">

            <span>Email</span>

            <a
              href="mailto:manojdevelopment2007@gmail.com"
              className="email-link"
            >
              manojdevelopment2007@gmail.com →
            </a>

          </div>

        </div>

      </div>
    </Reveal>

    <Reveal delay={0.4}>
     <div className="social-links">

  {/* GitHub */}
  <a
    href="https://github.com/Manoj-bhat07"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.4 7.88 10.93.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  </a>

 {/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/manoj-bhat-24-/"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
>
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" />
    <path
      d="M6.5 8.5V17H9V8.5H6.5ZM7.75 5C6.92 5 6.25 5.67 6.25 6.5S6.92 8 7.75 8 9.25 7.33 9.25 6.5 8.58 5 7.75 5ZM11 8.5V17H13.5V12.8C13.5 11.7 13.7 10.5 15.1 10.5C16.5 10.5 16.5 11.9 16.5 12.9V17H19V12.3C19 9.8 18.5 8.2 15.8 8.2C14.5 8.2 13.6 8.9 13.2 9.6H13.15V8.5H11Z"
      fill="currentColor"
    />
  </svg>
</a>


  {/* Email */}
  <a
    href="mailto:manojbhatdevelopment2007@gmail.com"
    aria-label="Email"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </svg>
  </a>

</div>
    </Reveal>

  </div>

          <footer>

            <p>
              © 2026 Manoj Bhat
            </p>

            <p>
              Java Backend Developer
            </p>

          </footer>

        </section>

      </main>

    </div>
  );
}

export default App;
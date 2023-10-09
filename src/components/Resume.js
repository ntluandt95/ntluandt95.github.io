import React from "react";
import "../Resume.css"; // Import your CSS file for styling

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1 className="my-name">Liam Nguyen</h1>
        <div className="contact-info">
          <p>
            (701) 730-7059 | ntluandt95@gmail.com |
            <a href="https://www.linkedin.com/in/thanh-nguyen-725676115/">
              Linkedin
            </a>
          </p>
        </div>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <ul>
          <li>
            2+ years of experience in Spring Boot and React full stack
            development.
          </li>
          <li>
            Proven ability to design, develop, and deploy high-quality software
            solutions.
          </li>
          <li>Strong problem-solving and analytical skills.</li>
          <li>
            Expertise in database management, cloud computing, and
            troubleshooting production incidents.
          </li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          BACHELOR OF SCIENCE IN COMPUTER SCIENCE | FALL 2021
          <br />
          NORTH DAKOTA STATE UNIVERSITY (FARGO, ND)
          <br />
          GPA: 3.8, Dean’s List (every semester)
        </p>
      </section>

      <section className="skills">
        <h2>Skills & Abilities</h2>
        <div className="skill-category">
          <h3>Languages and Frameworks</h3>
          <ul>
            <li>
              Java, Kotlin, Python, Spring MVC, Kafka, REST, GraphQL, Docker,
              Kubernetes, Javascript, TypeScript, React
            </li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Database Management</h3>
          <ul>
            <li>SQL, MySQL, PostgreSQL, NoSQL, Cassandra</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Operating System</h3>
          <ul>
            <li>Unix, Linux, Ubuntu</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Developer Tools</h3>
          <ul>
            <li>Git, Jira, Splunk</li>
          </ul>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job-entry">
          <h3>
            WALMART GLOBAL TECH | FULL STACK SOFTWARE ENGINEER | JANUARY 2022 –
            PRESENT
          </h3>
          <ul>
            <li>
              Designed and implemented Java-based software modules that
              optimized the processing of high volumes of payment data stored in
              a NoSQL database.
            </li>
            <li>
              Collaborated with business and technology stakeholders to lead the
              development and design of an automated settlement and payout
              system for the Mexican market.
            </li>
            <li>
              Devised and executed a distributed task execution framework using
              a Kafka pipeline. Applied the framework to the US market's
              settlement and payout process, resulting in a remarkable 80%
              enhancement in processing speed.
            </li>
            <li>
              Maintained and improved an automated software testing site using
              Test Driven Development (TDD), resulting in reduced testing time.
            </li>
            <li>
              Developed code optimized for running in a cloud environment,
              utilizing the 12-factor app architecture principles.
            </li>
            <li>
              Demonstrated expertise in troubleshooting and resolving multiple
              production incidents by performing root cause analysis (RCA) and
              implementing prompt and effective fixes with short turnaround
              times.
            </li>
            <li>
              Implemented Figma designs on the frontend using React,
              specializing in rendering logic, and streamlined international
              seller onboarding by efficiently managing tax classification,
              ensuring a seamless market experience for sellers worldwide.
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>
          <a href="https://pdfhost.io/v/JattNQr44_Liam_Nguyen_Resume">
            Download My Resume Here
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Resume;

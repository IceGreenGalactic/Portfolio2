import React from "react";
import { AboutSection, Card } from "./About.styled";

const About = () => {
  return (
    <AboutSection className="d-block justify-content-center" id="about">
      <h2 className="text-center">Here's a little about me</h2>

      <div className="row justify-content-center  m-auto mb-3">
        <div className="col-12 col-md-6 mb-4 ">
          <Card className="p-3 h-100 d-flex flex-column">
            <h3>🌈 Personal Life</h3>
            <p>
              I’m a parent, a lifelong learner, and someone who loves solving
              practical problems in creative ways.
            </p>
            <p>
              After 16 rewarding years in the kindergarten sector, I completed
              my Frontend Development studies at Noroff in January 2025 — and
              I’m now excited to start my journey as a developer.
            </p>
          </Card>
        </div>

        <div className="col-12 col-md-6 mb-4">
          <Card className="p-3 h-100 d-flex flex-column">
            <h3>🎓 Studies</h3>
            <p>Bachelor: Kindergarten Teacher Studies</p>
            <p>Master's: Special Needs Education</p>
            <p>Year Course: Sociology</p>
            <p>
              Frontend Development: Noroff Online Studies (completed Jan 2025)
            </p>
          </Card>
        </div>
      </div>

      <div className="row justify-content-center  m-auto">
        <div className="col-12 col-md-6 mb-4">
          <Card className="p-3 h-100 d-flex flex-column">
            <h3>🍎 My Career Journey</h3>
            <p>
              Working closely with children, parents, and colleagues has given
              me strong skills in communication, collaboration, and planning.
              Over the years I’ve also seen firsthand how digital tools can help
              (or frustrate) everyday work in kindergartens.
            </p>
            <p>
              When I discovered frontend development, it clicked. I loved seeing
              ideas turn into something real on the screen, and I quickly became
              hooked. As my understanding grew, my grades improved as well – and
              I finished my final projects with top marks. That mix of
              pedagogical insight and a genuine interest in code gives me a
              strong foundation for building user-friendly, accessible
              solutions.
            </p>
          </Card>
        </div>

        <div className="col-12 col-md-6 mb-4 d-flex">
          <Card className="p-3 h-100 d-flex flex-column">
            <h3>🚀 Looking Forward</h3>
            <p>
              I’m excited to join a team where I can keep learning, share ideas,
              and build products that actually help people in their everyday
              lives.
            </p>
            <p>
              I’m especially interested in EdTech and tools for kindergartens
              and schools, where my background gives me a lot of domain
              knowledge. At the same time, I’m open to other areas where I can
              grow as a developer and contribute to thoughtful, intuitive user
              experiences.
            </p>
            <p>
              I’m ready to take on new challenges, learn from experienced
              developers, and contribute with both my technical skills and my
              experience from education.
            </p>
          </Card>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;

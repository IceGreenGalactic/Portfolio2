import React from "react";
import { AboutSection, Card } from "./About.styled";

const About = () => {
  return (
    <AboutSection className="d-block justify-content-center" id="about">
      <h2 className="text-center">Here's a little about me</h2>

      <div className="row justify-content-center col-12 col-md-10 m-auto mb-3">
        <div className="col-12 col-md-6 mb-4 ">
          <Card className="p-3 h-100 d-flex flex-column">
            <h3>🌈 Personal Life</h3>
            <p>34-year-old and proud parent to an awesome kid.</p>
            <p>
              Curious, creative, and always on the lookout for new challenges.
            </p>
            <p>
              After 16 rewarding years in the kindergarten sector, I completed
              my Frontend Development studies at Noroff in January 2025 — and
              I’m now excited to begin my career in tech.
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

      <div className="row justify-content-center col-12 col-md-10 m-auto">
        <div className="col-12 col-md-6 mb-4">
          <Card className="p-3 h-100 d-flex flex-column">
            <h3>🍎 My Career Journey</h3>
            <p>
              With a strong background in teaching and pedagogy, I’ve developed
              skills in communication, planning, and problem-solving. But I also
              wanted to keep learning and challenge myself creatively. That’s
              how I discovered frontend development.
            </p>
            <p>
              During my studies, I started out with C’s, but as my understanding
              deepened I finished with A’s on my final projects. Coding quickly
              became something I truly enjoyed — I could sit down in the morning
              and suddenly realize the whole day had passed. That passion,
              combined with my educational insight, gives me a unique
              perspective on building user-friendly, accessible solutions.
            </p>
          </Card>
        </div>

        <div className="col-12 col-md-6 mb-4 d-flex">
          <Card className="p-3 h-100 d-flex flex-column">
            <h3>🚀 Looking Forward</h3>
            <p>
              I’m eager to contribute to a creative team where I can continue
              learning while building intuitive and impactful web applications.
            </p>
            <p>
              My goal is to create digital experiences that are both functional
              and engaging, while always keeping the user in focus. Ideally, I’d
              love to combine my background in education with tech to build
              tools that make a difference.
            </p>
            <p>
              Ready to take on new challenges, I’m excited to grow as a
              developer and make a difference in the tech industry.
            </p>
          </Card>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;

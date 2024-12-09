import React from 'react';
import { AboutSection, Card } from './About.styled';

const About = () => {
  return (
    <AboutSection className="d-block justify-content-center">
      <h2 className="text-center">Here's a little about me</h2>

      <div className="row justify-content-center col-12 col-md-10 m-auto mb-3">


        <div className="col-12 col-md-6 mb-4 d-flex">
          <Card className="p-3 d-flex flex-column">
            <h3>🌈 Personal Life</h3>
            <p>33-year-old parent to an awesome kid.</p>
            <p>Always on the lookout for new adventures and challenges.</p>
            <p>
              Now, embarking on a new chapter. I’ve completed my studies in frontend development at Noroff Online Studies, and I’m excited to start my career in web development.
            </p>
          </Card>
        </div>


        <div className="col-12 col-md-6 mb-4 d-flex">
          <Card className="p-3 d-flex flex-column">
            <h3>🎓 Studies</h3>
            <p>Bachelor: Kindergarten Teacher Studies</p>
            <p>Master's: Special Needs Education</p>
            <p>Year Course: Sociology</p>
            <p>Completed: Frontend Development at Noroff Online Studies</p>
          </Card>
        </div>

      </div>

 
      <div className="row justify-content-center col-12 col-md-10 m-auto">
        
        <div className="col-12 col-md-6 mb-4 d-flex">
          <Card className="p-3 d-flex flex-column">
            <h3>🍎 My Career Journey</h3>
            <p>
              I’m Kristine, a dedicated educator turned frontend developer. With a Master's in Special Needs Education and extensive experience as a kindergarten teacher, I’ve honed my ability to communicate, plan, and solve problems effectively.
            </p>
            <p>
              Over the past two years, I’ve transitioned into the world of frontend development, building a solid foundation in HTML, CSS, and JavaScript through Noroff Online Studies. During my studies, I gained hands-on experience with modern web development tools, and I’m eager to apply my skills in the tech industry.
            </p>
          </Card>
        </div>

        {/* Looking Forward Card */}
        <div className="col-12 col-md-6 mb-4 d-flex">
          <Card className="p-3 d-flex flex-column">
            <h3>🚀 Looking Forward</h3>
            <p>
              Now that I’ve completed my studies, I’m excited to start my career in frontend development. I’m passionate about creating websites that are not only functional but also visually appealing and accessible to all users. 
            </p>
            <p>
              My educational background has equipped me with a unique perspective on understanding user needs, simplifying complex ideas, and collaborating with teams. I look forward to the opportunity to continue learning and growing as a developer while contributing to meaningful projects.
            </p>
            <p>
              I’m eager to bring my skills, enthusiasm, and commitment to a dynamic development team. I am ready to make an impact and contribute to innovative, user-friendly web applications.
            </p>
          </Card>
        </div>

      </div>

    </AboutSection>
  );
};

export default About;

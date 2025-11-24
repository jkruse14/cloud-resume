import './App.css'
import { AboutMe } from './components/about-me/AboutMe';
import { WorkExperience } from './components/work-experience/work-experience'
import { Tabs } from './components/tabs/Tabs';
import { Education } from './components/education/Education';
import { Projects } from './components/projects/Projects';

import workExperienceJson from './data/work-experience.json';

function App() {
  const workExperienceContent = (
    <div>
      {workExperienceJson.map((we, index) => (
        <WorkExperience
          key={index}
          logoSrc={we.logoPath}
          companyName={we.company}
          position={we.title}
          startDate={we.startDate}
          endDate={we.endDate}
          responsibilities={we.responsibilities}
        />
      ))}
    </div>
  );

  return (
    <>
      <AboutMe />
      <Tabs 
        labels={['Work Experience', 'Education', 'Projects']}
        children={[workExperienceContent, <Education />, <Projects />]}
      />
    </>
  )
}

export default App

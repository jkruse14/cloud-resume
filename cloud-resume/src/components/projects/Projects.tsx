import './projects.css';
import projectsData from '../../data/projects.json';

interface ProjectItemProps {
  name: string;
  technologies: string[];
  description: string;
}

function ProjectItem({ name, technologies, description }: ProjectItemProps) {
  const getProjectInitials = (name: string) => {
    return name
      .split(/[\s]/) // Split on spaces
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <div className='proj-wrapper'>
      <div className="proj-name-wrapper">
        <div className="proj-logo-placeholder">
          {getProjectInitials(name)}
        </div>
        <label>{name}</label>
      </div>
      <label className="proj-item">Technologies: {technologies.join(', ')}</label>
      <div className="proj-description-wrapper">
        <label className="proj-item">Description:</label>
        <p className="proj-description">{description}</p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div>
      {projectsData.map((project, index) => (
        <ProjectItem
          key={index}
          name={project.name}
          technologies={project.technologies}
          description={project.description}
        />
      ))}
    </div>
  );
}
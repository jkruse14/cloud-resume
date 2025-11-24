import './education.css';
import educationData from '../../data/education.json';

interface EducationItemProps {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  logoSrc?: string;
}

const getLogoPath = (filename: string) => {
    return new URL(`../../assets/${filename}`, import.meta.url).href;
}

function EducationItem({ institution, degree, startDate, endDate, logoSrc }: EducationItemProps) {
  const getInstitutionInitials = (name: string) => {
    return name
      .split(/[\s-]/) // Split on spaces and hyphens
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <div className='ed-wrapper'>
      <div className="ed-institution-wrapper">
        {logoSrc ? (
          <img src={getLogoPath(logoSrc)} alt={`${institution} logo`} className="ed-logo" />
        ) : (
          <div className="ed-logo-placeholder">
            {getInstitutionInitials(institution)}
          </div>
        )}
        <label>{institution}</label>
      </div>
      {degree && <label className="ed-item">Degree: {degree}</label>}
      <label className="ed-item">Duration: {startDate} - {endDate}</label>
    </div>
  );
}

export function Education() {
  return (
    <div>
      {educationData.academic.map((edu, index) => (
        <EducationItem
          key={index}
          institution={edu.institution}
          degree={edu.degree}
          startDate={edu.startDate}
          endDate={edu.endDate}
          logoSrc={edu.logoPath}
        />
      ))}
    </div>
  );
}
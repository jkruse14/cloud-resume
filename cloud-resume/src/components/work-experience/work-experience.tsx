import './work-experience.css'

interface WorkExperienceProps {
    logoSrc?: string;
    companyName: string;
    position: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
}

const getLogoPath = (filename: string) => {
    return new URL(`../../assets/${filename}`, import.meta.url).href;
}

const getCompanyInitials = (companyName: string) => {
    return companyName
        .split(/[\s/]/) // Split on spaces and slashes
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2) // Take first 2 initials
        .join('');
}

export function WorkExperience({ logoSrc, companyName, position, startDate, endDate, responsibilities }: WorkExperienceProps) {
    return (
        <div className='we-wrapper'>
            <div className="we-company-wrapper">
                {logoSrc ? (
                    <img src={getLogoPath(logoSrc)} alt={`${companyName} logo`} className="we-logo" />
                ) : (
                    <div className="we-logo-placeholder">
                        {getCompanyInitials(companyName)}
                    </div>
                )}
                <label>{companyName}</label>
            </div>
            <label className="we-item">Title: {position}</label>
            <label className="we-item">Duration: {startDate} - {endDate ? endDate : 'Present'}</label>
            <div className="we-responsibilities-wrapper">
                <label className="we-item">Responsibilities:</label>
                <ul>
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
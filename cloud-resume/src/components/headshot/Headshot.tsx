import './headshot.css';

interface HeadshotProps {
  src: string;
  alt: string;
  bgBoxLeft?: string;
  gradientStart?: string;
  gradientEnd?: string;
}

export function Headshot({ src, alt, bgBoxLeft, gradientStart, gradientEnd }: HeadshotProps) {
  const gradient = `linear-gradient(90deg, ${gradientStart || '#3066b1'}, ${gradientEnd || '#89c4fb'})`;
  
  return (
    <div className="headshot-container">
      <div 
        className="headshot-box"
        style={{ background: gradient, left: bgBoxLeft || "50%" }}
      ></div>
      <img src={src} alt={alt} className="headshot-image" />
    </div>
  );
}
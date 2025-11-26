import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Justin Kruse. Built with React, TypeScript & AWS.</p>
        <p className="footer-subtitle">Designed and developed by Justin Kruse</p>
      </div>
    </footer>
  );
}
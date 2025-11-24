import { useState } from 'react';
import './tabs.css';

interface TabsProps {
  children: React.ReactNode[];
  labels: string[];
}

export function Tabs({ children, labels }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {labels.map((label, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children[activeTab]}
      </div>
    </div>
  );
}
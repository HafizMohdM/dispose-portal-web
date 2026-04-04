import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-wrapper">
        <div className="loader-spinner"></div>
        <span className="loader-text">Verifying Session...</span>
      </div>
    </div>
  );
};
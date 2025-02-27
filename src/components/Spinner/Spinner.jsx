import React from 'react';
import './Spinner.css'; // You'll create this CSS file to style the spinner.

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;

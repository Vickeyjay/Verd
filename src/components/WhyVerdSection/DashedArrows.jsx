import React from 'react';

const DashedArrow = ({ height = 60, className=''}) => (
  <svg
    className={className}
    width="12"
    height={height}
    viewBox={`0 0 10 ${height}`}
    xmlns="http://www.w3.org/2000/svg"
    data-aos="fade-up" data-aos-delay="100"
    // style={{ display: 'block', margin: '0 auto' }}
  >
    <line
      x1="6" y1="0"
      x2="6" y2={height - 10}
      stroke="#144027"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <polygon
      points={`0,${height - 10} 12,${height - 10} 6,${height}`}
      fill="#144027"
    />
  </svg>
);

export default DashedArrow;
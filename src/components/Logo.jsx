import React from "react";

const Logo = () => (
  <svg
    viewBox="0 0 450 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-auto max-h-full object-contain block"
  >
    <g transform="translate(60, 60) scale(0.7)">
      {/* Outer Magnifying Glass */}
      <circle cx="0" cy="0" r="45" stroke="#005A9C" strokeWidth="12" />
      <line x1="30" y1="30" x2="60" y2="60" stroke="#005A9C" strokeWidth="16" strokeLinecap="round" />
      
      {/* Orange Triangle/Pie shape inside */}
      <path d="M -20 -10 L 25 -10 L 10 35 Z" fill="#F26522" />
      
      {/* Blue Zig-Zag Arrow */}
      <path d="M -30 10 L -10 -15 L 10 0 L 45 -45" fill="none" stroke="#008FD3" strokeWidth="10" strokeLinejoin="miter" />
      <polygon points="35,-45 55,-45 45,-25" fill="#008FD3" transform="rotate(-30 45 -45)" />
    </g>

    {/* CareerHub Text */}
    <text x="140" y="70" 
          fontFamily="Inter, sans-serif" 
          fontSize="52" 
          fontWeight="800" 
          textAnchor="start"
          className="brand">
      CareerHub
    </text>


    {/* Find Your Future. Text */}
    <text x="145" y="105" 
          fontFamily="Inter, sans-serif" 
          fontSize="22" 
          fontWeight="600" 
          fill="#008FD3"
          textAnchor="start">
      Find Your Future.
    </text>
  </svg>
);

export default Logo;

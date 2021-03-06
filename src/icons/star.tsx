import React from 'react';
import { TIconProps } from '../types/common';

const Star: React.FC<TIconProps> = ({
  width = '24',
  height = '24',
  className,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" />
    </svg>
  );
}

export default Star;

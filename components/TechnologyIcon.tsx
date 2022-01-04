import React, { ReactElement, ReactNode } from 'react';

interface TechnologyIconProps {
  label: string;
  svgIcon: ReactNode;
}

const TechnologyIcon = ({
  label,
  svgIcon,
}: TechnologyIconProps): ReactElement => {
  return (
    <li>
      <span className="not-sr-only">{svgIcon}</span>
      <span className="sr-only">{label}</span>
    </li>
  );
};

export default TechnologyIcon;

import React, { ReactElement, ReactNode } from 'react';

interface SectionHeadingProps {
  kicker?: ReactNode | string;
  heading: ReactNode | string;
}

const SectionHeading = ({
  kicker,
  heading,
}: SectionHeadingProps): ReactElement => {
  const HeadingTag = kicker ? 'h4' : 'h3';

  return (
    <div className="c-section-heading__wrapper">
      {kicker && (
        <div className="c-section-kicker__wrapper">
          <div className="c-section-kicker__line" />
          <h3 className="c-section-kicker highlighted-secondary">{kicker}</h3>
        </div>
      )}
      {<HeadingTag className="c-section-heading">{heading}</HeadingTag>}
    </div>
  );
};

export default SectionHeading;

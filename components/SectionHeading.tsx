import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

interface SectionHeadingProps {
  heading: ReactNode | string;
  kicker?: ReactNode | string;
  onDarkBg?: boolean;
}

const SectionHeading = ({
  kicker,
  heading,
  onDarkBg = false,
}: SectionHeadingProps): ReactElement => {
  const HeadingTag = kicker ? 'h4' : 'h3';

  return (
    <div className="c-section-heading__wrapper">
      {kicker && (
        <div className="c-section-kicker__wrapper">
          <div className="c-section-kicker__line" />
          <h3 className="c-section-kicker text-gradient">{kicker}</h3>
        </div>
      )}
      {
        <HeadingTag
          className={classNames('c-section-heading', {
            'c-section-heading--on-dark-bg': onDarkBg,
          })}
        >
          {heading}
        </HeadingTag>
      }
    </div>
  );
};

export default SectionHeading;

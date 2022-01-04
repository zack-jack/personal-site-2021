import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface SocialIconLinkedInProps {
  width?: number;
  className?: string;
}

const SocialIconLinkedIn = ({
  width = 48,
  className = '',
}: SocialIconLinkedInProps): ReactElement => {
  return (
    <>
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        viewBox="0 0 24 24"
        className={classNames('c-social-icon c-social-icon--linkedin', {
          [`${className}`]: className,
        })}
      >
        <defs>
          <linearGradient
            id="social-icon-linkedin-gradient"
            gradientTransform="rotate(45)"
          >
            <stop offset="0%" stopColor="var(--color-secondary)" />
            <stop offset="50%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-tertiary)" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"
            className="c-social-icon__path"
          />
        </g>
      </svg>
      <span className="sr-only">LinkedIn</span>
    </>
  );
};

export default SocialIconLinkedIn;

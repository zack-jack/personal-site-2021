import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface SocialIconGithubProps {
  width?: number;
  className?: string;
}

const SocialIconGithub = ({
  width = 48,
  className = '',
}: SocialIconGithubProps): ReactElement => {
  return (
    <>
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        viewBox="0 0 24 24"
        className={classNames('c-social-icon c-social-icon--github', {
          [`${className}`]: className,
        })}
      >
        <defs>
          <linearGradient
            id="social-icon-github-gradient"
            gradientTransform="rotate(45)"
          >
            <stop offset="0%" stopColor="var(--color-secondary)" />
            <stop offset="50%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-quaternary)" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.909-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.251-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.307.679.917.679 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.579.688.481A9.997 9.997 0 0022 12c0-5.523-4.477-10-10-10z"
            className="c-social-icon__path"
          />
        </g>
      </svg>
      <span className="sr-only">Github</span>
    </>
  );
};

export default SocialIconGithub;

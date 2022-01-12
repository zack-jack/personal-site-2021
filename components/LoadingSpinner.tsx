import { ReactElement } from 'react';
import classNames from 'classnames';

interface LoadingSpinnerProps {
  color?: string;
  width?: number;
  className?: string;
}

const LoadingSpinner = ({
  color = '#FFFFFF',
  width = 24,
  className = '',
}: LoadingSpinnerProps): ReactElement => {
  return (
    <>
      <span className="sr-only">Loading...</span>
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        stroke={color}
        width={width}
        viewBox="0 0 38 38"
        className={classNames('not-sr-only', {
          [`${className}`]: className,
        })}
      >
        <g
          transform="translate(1 1)"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        >
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </>
  );
};

export default LoadingSpinner;

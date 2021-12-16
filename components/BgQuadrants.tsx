import React, { ReactElement } from 'react';

interface BgQuadrants {
  primary?: string;
  secondary?: string;
}

const BgQuadrants = ({
  primary = '#E2E8F0',
  secondary = '#CBD5E1',
}): ReactElement => {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3175 3174"
      className="bg-quadrants"
    >
      <defs>
        <linearGradient
          id="bg-pattern-quadrants"
          x1=".639%"
          x2="99.361%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={primary} />
          <stop offset="100%" stopColor={secondary} />
        </linearGradient>
      </defs>
      <path
        fill="url(#bg-pattern-quadrants)"
        fillRule="evenodd"
        d="M1973.15 1193.185v788.41h-786.766v-688.41c0-55.228 44.772-100 100-100h686.767zm-1310.445-1.171c217.26 0 393.383 176.124 393.383 393.383v1.645c0 217.26-176.123 393.383-393.383 393.383S269.322 1804.3 269.322 1587.042v-1.645c0-217.26 176.124-393.383 393.383-393.383zm392.212-926.418v688.41c0 55.23-44.771 100-100 100H268.151v-788.41h786.766zm918.234 0v788.41h-686.767c-55.228 0-100-44.771-100-100v-688.41h786.767z"
        transform="rotate(22 162.072 2556.164)"
      />
    </svg>
  );
};

export default BgQuadrants;
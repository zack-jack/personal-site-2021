import React, { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

const TechnologiesGrid = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="technologies-grid">
      <Image
        alt="HTML 5"
        src="/assets/images/_icon-html.svg"
        data-tip="HTML 5"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="CSS 3"
        src="/assets/images/_icon-css.svg"
        data-tip="CSS 3"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="JavaScript"
        src="/assets/images/_icon-javascript.svg"
        data-tip="JavaScript"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="React"
        src="/assets/images/_icon-react.svg"
        data-tip="React"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="Vue"
        src="/assets/images/_icon-vue.svg"
        data-tip="Vue"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="Svelte"
        src="/assets/images/_icon-svelte.svg"
        data-tip="Svelte"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="TypeScript"
        src="/assets/images/_icon-typescript.svg"
        data-tip="TypeScript"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="Tailwind CSS"
        src="/assets/images/_icon-tailwindcss.svg"
        data-tip="Tailwind CSS"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="Webpack"
        src="/assets/images/_icon-webpack.svg"
        data-tip="Webpack"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="Node"
        src="/assets/images/_icon-node.svg"
        data-tip="Node"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="Jest"
        src="/assets/images/_icon-jest.svg"
        data-tip="Jest"
        tabIndex={-1}
        width={64}
        height={64}
      />
      <Image
        alt="Git"
        src="/assets/images/_icon-git.svg"
        data-tip="Git"
        tabIndex={-1}
        width={64}
        height={64}
      />
      {isMounted && (
        <ReactTooltip
          backgroundColor="#4B5563"
          effect="solid"
          place="bottom"
          className="font-body text-xs font-semibold tracking-wide"
        />
      )}
    </div>
  );
};

export default TechnologiesGrid;

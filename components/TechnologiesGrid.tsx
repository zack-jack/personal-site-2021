import React, { ReactElement } from 'react';
import Image from 'next/image';

const TechnologiesGrid = (): ReactElement => {
  return (
    <div className="technologies-grid">
      <Image
        src="/assets/images/_icon-html.svg"
        alt="HTML 5"
        title="HTML 5"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-css.svg"
        alt="CSS 3"
        title="CSS 3"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-javascript.svg"
        alt="JavaScript"
        title="JavaScript"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-react.svg"
        alt="React"
        title="React"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-vue.svg"
        alt="Vue"
        title="Vue"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-svelte.svg"
        alt="Svelte"
        title="Svelte"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-typescript.svg"
        alt="TypeScript"
        title="TypeScript"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-tailwindcss.svg"
        alt="Tailwind CSS"
        title="Tailwind CSS"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-webpack.svg"
        alt="Webpack"
        title="Webpack"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-node.svg"
        alt="Node"
        title="Node"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-jest.svg"
        alt="Jest"
        title="Jest"
        width={64}
        height={64}
      />
      <Image
        src="/assets/images/_icon-git.svg"
        alt="Git"
        title="Git"
        width={64}
        height={64}
      />
    </div>
  );
};

export default TechnologiesGrid;

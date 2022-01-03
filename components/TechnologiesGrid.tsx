import React, { ReactElement, useEffect, useState } from 'react';
import IconHtml from '../public/assets/images/_icon-html.svg';
import IconCss from '../public/assets/images/_icon-css.svg';
import IconJavascript from '../public/assets/images/_icon-javascript.svg';
import IconReact from '../public/assets/images/_icon-react.svg';
import IconVue from '../public/assets/images/_icon-vue.svg';
import IconSvelte from '../public/assets/images/_icon-svelte.svg';
import IconTypescript from '../public/assets/images/_icon-typescript.svg';
import IconTailwindcss from '../public/assets/images/_icon-tailwindcss.svg';
import IconWebpack from '../public/assets/images/_icon-webpack.svg';
import IconNode from '../public/assets/images/_icon-node.svg';
import IconJest from '../public/assets/images/_icon-jest.svg';
import IconGit from '../public/assets/images/_icon-git.svg';
import ReactTooltip from 'react-tooltip';

const TechnologiesGrid = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="technologies-grid">
      <IconHtml
        data-tip="HTML 5"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconCss
        data-tip="CSS 3"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconJavascript
        data-tip="JavaScript"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconReact
        data-tip="React"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconVue
        data-tip="Vue"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconSvelte
        data-tip="Svelte"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconTypescript
        data-tip="TypeScript"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconTailwindcss
        data-tip="Tailwind CSS"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconWebpack
        data-tip="Webpack"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconNode
        data-tip="Node JS"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconJest
        data-tip="Jest"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      <IconGit
        data-tip="Git"
        tabIndex="-1"
        className="technologies-grid__icon"
      />
      {isMounted && (
        <ReactTooltip
          backgroundColor="#4B5563"
          effect="solid"
          offset={{ bottom: 4 }}
          place="bottom"
          className="font-body font-semibold tracking-wide"
        />
      )}
    </div>
  );
};

export default TechnologiesGrid;

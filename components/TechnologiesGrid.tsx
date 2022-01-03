import React, { ReactElement } from 'react';
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
  return (
    <div className="technologies-grid">
      <IconHtml
        data-tip="HTML 5"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconCss
        data-tip="CSS 3"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconJavascript
        data-tip="JavaScript"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconReact
        data-tip="React"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconVue
        data-tip="Vue"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconSvelte
        data-tip="Svelte"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconTypescript
        data-tip="TypeScript"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconTailwindcss
        data-tip="Tailwind CSS"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconWebpack
        data-tip="Webpack"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconNode
        data-tip="Node JS"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconJest
        data-tip="Jest"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <IconGit
        data-tip="Git"
        tabindex="-1"
        className="technologies-grid__icon"
      />
      <ReactTooltip
        backgroundColor="#4B5563"
        effect="solid"
        offset={{ bottom: 4 }}
        place="bottom"
        className="font-body font-semibold tracking-wide"
      />
    </div>
  );
};

export default TechnologiesGrid;

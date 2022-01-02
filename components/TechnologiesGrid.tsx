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
      <IconHtml data-tip="HTML 5" className="technologies-grid__icon" />
      <IconCss data-tip="CSS 3" className="technologies-grid__icon" />
      <IconJavascript
        data-tip="JavaScript"
        className="technologies-grid__icon"
      />
      <IconReact data-tip="React" className="technologies-grid__icon" />
      <IconVue data-tip="Vue" className="technologies-grid__icon" />
      <IconSvelte data-tip="Svelte" className="technologies-grid__icon" />
      <IconTypescript
        data-tip="TypeScript"
        className="technologies-grid__icon"
      />
      <IconTailwindcss
        data-tip="Tailwind CSS"
        className="technologies-grid__icon"
      />
      <IconWebpack data-tip="Webpack" className="technologies-grid__icon" />
      <IconNode data-tip="Node JS" className="technologies-grid__icon" />
      <IconJest data-tip="Jest" className="technologies-grid__icon" />
      <IconGit data-tip="Git" className="technologies-grid__icon" />
      <ReactTooltip
        effect="solid"
        offset={{ bottom: 4 }}
        place="bottom"
        className="font-body"
      />
    </div>
  );
};

export default TechnologiesGrid;

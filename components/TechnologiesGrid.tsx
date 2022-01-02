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

const TechnologiesGrid = (): ReactElement => {
  return (
    <div className="technologies-grid">
      <IconHtml className="technologies-grid__icon" />
      <IconCss className="technologies-grid__icon" />
      <IconJavascript className="technologies-grid__icon" />
      <IconReact className="technologies-grid__icon" />
      <IconVue className="technologies-grid__icon" />
      <IconSvelte className="technologies-grid__icon" />
      <IconTypescript className="technologies-grid__icon" />
      <IconTailwindcss className="technologies-grid__icon" />
      <IconWebpack className="technologies-grid__icon" />
      <IconNode className="technologies-grid__icon" />
      <IconJest className="technologies-grid__icon" />
      <IconGit className="technologies-grid__icon" />
    </div>
  );
};

export default TechnologiesGrid;

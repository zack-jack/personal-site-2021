import { ReactElement, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import IconHtml from 'public/assets/images/_icon-html.svg';
import IconCss from 'public/assets/images/_icon-css.svg';
import IconJavaScript from 'public/assets/images/_icon-javascript.svg';
import IconReact from 'public/assets/images/_icon-react.svg';
import IconVue from 'public/assets/images/_icon-vue.svg';
import IconSvelte from 'public/assets/images/_icon-svelte.svg';
import IconTypeScript from 'public/assets/images/_icon-typescript.svg';
import IconTailwindCss from 'public/assets/images/_icon-tailwindcss.svg';
import IconWebpack from 'public/assets/images/_icon-webpack.svg';
import IconNode from 'public/assets/images/_icon-node.svg';
import IconJest from 'public/assets/images/_icon-jest.svg';
import IconGit from 'public/assets/images/_icon-git.svg';
import TechnologyIcon from 'components/TechnologyIcon';

const TechnologiesGrid = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="technologies-grid__wrapper">
      <ul className="technologies-grid">
        <TechnologyIcon
          label="HTML 5"
          svgIcon={
            <IconHtml data-tip="HTML 5" className="technologies-grid__icon" />
          }
        />
        <TechnologyIcon
          label="CSS 3"
          svgIcon={
            <IconCss data-tip="CSS 3" className="technologies-grid__icon" />
          }
        />
        <TechnologyIcon
          label="JavaScript"
          svgIcon={
            <IconJavaScript
              data-tip="JavaScript"
              className="technologies-grid__icon"
            />
          }
        />
        <TechnologyIcon
          label="React"
          svgIcon={
            <IconReact data-tip="React" className="technologies-grid__icon" />
          }
        />
        <TechnologyIcon
          label="Vue"
          svgIcon={
            <IconVue data-tip="Vue" className="technologies-grid__icon" />
          }
        />
        <TechnologyIcon
          label="Svelte"
          svgIcon={
            <IconSvelte data-tip="Svelte" className="technologies-grid__icon" />
          }
        />
        <TechnologyIcon
          label="TypeScript"
          svgIcon={
            <IconTypeScript
              data-tip="TypeScript"
              className="technologies-grid__icon"
            />
          }
        />
        <TechnologyIcon
          label="Tailwind CSS"
          svgIcon={
            <IconTailwindCss
              data-tip="Tailwind CSS"
              className="technologies-grid__icon"
            />
          }
        />
        <TechnologyIcon
          label="Webpack"
          svgIcon={
            <IconWebpack
              data-tip="Webpack"
              className="technologies-grid__icon"
            />
          }
        />
        <TechnologyIcon
          label="Node JS"
          svgIcon={
            <IconNode data-tip="Node JS" className="technologies-grid__icon" />
          }
        />
        <TechnologyIcon
          label="Jest"
          svgIcon={
            <IconJest data-tip="Jest" className="technologies-grid__icon" />
          }
        />
        <TechnologyIcon
          label="Git"
          svgIcon={
            <IconGit data-tip="Git" className="technologies-grid__icon" />
          }
        />
        {isMounted && (
          <ReactTooltip
            backgroundColor="#1F2937"
            effect="solid"
            place="bottom"
            className="font-body text-xs font-semibold tracking-wide"
          />
        )}
      </ul>
    </div>
  );
};

export default TechnologiesGrid;

import { ReactElement } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import NavDesktop from 'components/NavDesktop';
import NavMenuMobile from 'components/NavMenuMobile';
import useScrolledDown from 'hooks/useScrolledDown';
import LogoZackJackson from 'public/assets/images/_logo-zack-jackson.svg';

const AppHeader = (): ReactElement => {
  const isScrolledDown: boolean = useScrolledDown();

  return (
    <div className="app-header">
      <header
        id="header"
        className={classNames('app-header__content', {
          'app-header--scrolled': isScrolledDown,
        })}
      >
        <Link href="/">
          <a className="app-header__logo-link">
            <div className="flex items-center">
              <LogoZackJackson aria-hidden className="app-header__logo" />
              <span className="app-header__logo-text">Zack Jackson</span>
              <span className="sr-only">Home</span>
            </div>
          </a>
        </Link>
        <NavDesktop />
        <NavMenuMobile />
      </header>
    </div>
  );
};

export default AppHeader;

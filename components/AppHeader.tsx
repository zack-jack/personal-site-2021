import { ReactElement } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import NavMenuMobile from 'components/NavMenuMobile';
import useScrolledDown from 'hooks/useScrolledDown';
import LogoZackJackson from 'public/assets/images/_logo-zack-jackson.svg';

const AppHeader = (): ReactElement => {
  const isScrolledDown: boolean = useScrolledDown();

  return (
    <header
      id="header"
      className={classNames('app-header', {
        'app-header--scrolled': isScrolledDown,
      })}
    >
      <Link href="/">
        <a className="app-header__logo">
          <LogoZackJackson aria-hidden className="app-header__logo-link" />
          <span className="sr-only">Home</span>
        </a>
      </Link>
      <NavMenuMobile />
    </header>
  );
};

export default AppHeader;

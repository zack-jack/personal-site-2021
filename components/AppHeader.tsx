import { ReactElement } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import NavMenuMobile from 'components/NavMenuMobile';
import useScrolledDown from 'hooks/useScrolledDown';

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
        <a aria-label="Go to Homepage" className="app-header__logo">
          Zack Jackson
        </a>
      </Link>
      <NavMenuMobile />
    </header>
  );
};

export default AppHeader;

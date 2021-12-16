import React, { ReactElement } from 'react';
import Link from 'next/link';

const AppHeader = (): ReactElement => {
  return (
    <header id="header" className="app-header">
      <Link href="/">
        <a aria-label="Go to Homepage" className="app-header__logo">
          Zack Jackson.
        </a>
      </Link>
    </header>
  );
};

export default AppHeader;

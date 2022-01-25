import { ReactElement } from 'react';
import { CloudDownloadIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const ResumeLink = (): ReactElement => (
  <>
    <span>Résumé</span>
    <CloudDownloadIcon className="w-5 h-5 ml-2 text-primary-100" />
  </>
);

const NAV_LINKS = [
  { key: 'about', name: 'About', href: '/#about' },
  { key: 'contact', name: 'Contact', href: '/#contact' },
  {
    key: 'resume',
    name: <ResumeLink />,
    href: 'https://drive.google.com/file/d/1sgLTMTH87mnNxcgLc4HPjWJLbZOKWZ6O/view?usp=sharing',
    target: '_blank',
  },
];

const NavDesktop = (): ReactElement => {
  return (
    <nav className="c-nav-desktop">
      <ul className="c-nav-desktop__list">
        {NAV_LINKS.map(({ key, name, href, target }) => (
          <li key={key} className="c-nav-desktop__list-item">
            <Link href={href}>
              <a
                target={target || '_self'}
                rel="noopener noreferrer"
                className="c-nav-desktop__link"
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;

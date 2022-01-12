import { ReactElement } from 'react';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/solid';
import SocialIconGithub from 'components/SocialIconGithub';
import SocialIconLinkedIn from 'components/SocialIconLinkedIn';

const AppFooter = (): ReactElement => {
  return (
    <footer id="footer" className="app-footer">
      <div className="app-footer__social-wrapper">
        <Link href="https://github.com/zack-jack">
          <a target="_blank" rel="noopener noreferrer">
            <SocialIconGithub />
            <span className="sr-only">Github</span>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/zack-jackson/">
          <a target="_blank" rel="noopener noreferrer" className="ml-10">
            <SocialIconLinkedIn />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Link>
      </div>
      <div className="app-footer__made-with">
        Made with
        <HeartIcon className="app-footer__made-with-icon" />
        in Charlotte, NC.
      </div>
    </footer>
  );
};

export default AppFooter;

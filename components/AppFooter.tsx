import React, { ReactElement } from 'react';
import Link from 'next/link';
import Emoji from './Emoji';
import SocialIconGithub from './SocialIconGithub';
import SocialIconLinkedIn from './SocialIconLinkedIn';

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
        <span>Made with</span>
        <Emoji label="heart emoji" symbol={'\u{1F5A4}'} className="ml-1" />
        <span className="ml-2">in Charlotte, NC.</span>
      </div>
    </footer>
  );
};

export default AppFooter;

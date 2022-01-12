import { ReactElement, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import Link from 'next/link';
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from 'react-spring';
import Hamburger from 'components/Hamburger';
import SocialIconGithub from 'components/SocialIconGithub';
import SocialIconLinkedIn from 'components/SocialIconLinkedIn';

const ITEMS_TRANSITION_DURATION = 200; // ms
const TRANSITION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Résumé', href: '/resume' },
  { name: 'Contact', href: '/#contact' },
];

const NavMenuMobile = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useSpringRef();
  const liRef = useSpringRef();
  const socialIconsRef = useSpringRef();

  // animations for nav drawer
  const navSpringStyles = useSpring({
    ref: navRef,
    from: { width: '0%' },
    to: { width: isMenuOpen ? '100%' : '0%' },
  });

  // animations for nav items
  const liTransitions = useTransition(isMenuOpen ? TRANSITION_ITEMS : [], {
    ref: liRef,
    trail: ITEMS_TRANSITION_DURATION / TRANSITION_ITEMS.length,
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
  });

  // animations for social icons
  const socialIconsSpringStyles = useSpring({
    ref: socialIconsRef,
    opacity: isMenuOpen ? 1 : 0,
  });

  // Chain for animation ordering
  useChain(
    isMenuOpen
      ? [navRef, liRef, socialIconsRef]
      : [liRef, socialIconsRef, navRef],
    [0, isMenuOpen ? 0.2 : 0, 0.4]
  );

  return (
    <FocusTrap active={isMenuOpen}>
      <div>
        <Hamburger
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
        <animated.div
          role="dialog"
          aria-modal="true"
          title="Mobile Navigation"
          className="c-nav-menu-mobile__wrapper"
          style={navSpringStyles}
        >
          <nav aria-hidden={!isMenuOpen} className="c-nav-menu-mobile">
            <ul
              id="nav-menu-mobile"
              aria-labelledby="nav-menu-trigger"
              role="menu"
            >
              {liTransitions((styles, { name, href }) => (
                <animated.li
                  key={name.toLowerCase()}
                  className="c-nav-menu-mobile__menu-item"
                  style={styles}
                >
                  <Link href={href}>
                    <a
                      className="c-nav-menu-mobile__link"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {name}
                    </a>
                  </Link>
                </animated.li>
              ))}
            </ul>
          </nav>
          <animated.ul
            aria-hidden={!isMenuOpen}
            className="c-nav-menu-mobile__socials"
            style={socialIconsSpringStyles}
          >
            <li>
              <Link href="https://github.com/zack-jack">
                <a
                  tabIndex={!isMenuOpen ? -1 : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIconGithub />
                  <span className="sr-only">Github</span>
                </a>
              </Link>
            </li>
            <li className="ml-10">
              <Link href="https://www.linkedin.com/in/zack-jackson/">
                <a
                  tabIndex={!isMenuOpen ? -1 : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIconLinkedIn />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Link>
            </li>
          </animated.ul>
        </animated.div>
      </div>
    </FocusTrap>
  );
};

export default NavMenuMobile;

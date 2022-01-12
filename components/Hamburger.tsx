import { ReactElement } from 'react';
import { animated, useSpring } from 'react-spring';

interface HamburgerProps {
  isMenuOpen: boolean;
  toggleMenu: Function;
}

const Hamburger = ({
  isMenuOpen,
  toggleMenu,
}: HamburgerProps): ReactElement => {
  const topBar = useSpring({
    transform: isMenuOpen
      ? 'translate(0, 4px) rotate(45deg)'
      : 'translate(0, -8px) rotate(0deg)',
  });
  const midBar = useSpring({
    opacity: isMenuOpen ? 0 : 1,
    transform: isMenuOpen
      ? 'translate(8px, 0) rotate(0deg)'
      : 'translate(0, 0) rotate(0deg)',
  });
  const botBar = useSpring({
    transform: isMenuOpen
      ? 'translate(0, -4px) rotate(-45deg)'
      : 'translate(0, 8px) rotate(0deg)',
  });

  return (
    <button
      id="nav-menu-trigger"
      aria-controls="nav-menu-mobile"
      aria-label="Open Site Navigation"
      aria-expanded={isMenuOpen}
      aria-haspopup
      type="button"
      className="c-hamburger"
      onClick={(): void => toggleMenu()}
    >
      <div aria-hidden className="c-hamburger__bars">
        <animated.div className="c-hamburger__bar" style={topBar} />
        <animated.div className="c-hamburger__bar" style={midBar} />
        <animated.div className="c-hamburger__bar" style={botBar} />
      </div>
      <span className="sr-only">{isMenuOpen ? 'Close Menu' : 'Open Menu'}</span>
    </button>
  );
};

export default Hamburger;

import { ReactElement, ReactNode } from 'react';
import { animated, config, easings, useTransition } from '@react-spring/web';
import Link from 'next/link';
import SocialIconGithub from 'components/SocialIconGithub';
import SocialIconLinkedIn from 'components/SocialIconLinkedIn';

const h1 = (
  <h1 className="home-intro__heading">
    Front-End
    <br /> Developer
  </h1>
);
const h2 = (
  <h2 className="home-intro__subheading">Based out of Charlotte, NC</h2>
);
const socials = (
  <div className="home-intro__socials">
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
);

const ITEMS_TRANSITION_DURATION = 600;
const TRANSITION_ITEMS: ReactNode[] = [h1, h2, socials];

const HomeIntroHeadings = (): ReactElement => {
  const transitions = useTransition(TRANSITION_ITEMS, {
    trail: ITEMS_TRANSITION_DURATION / TRANSITION_ITEMS.length,
    from: { opacity: 0, transform: 'translateY(10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    config: {
      duration: ITEMS_TRANSITION_DURATION,
      easing: easings.easeInOutSine,
    },
  });

  return (
    <>
      {transitions((styles, item) => {
        return <animated.div style={styles}>{item}</animated.div>;
      })}
    </>
  );
};

export default HomeIntroHeadings;

import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import AppLink from '../components/AppLink';
import BgQuadrants from '../components/BgQuadrants';
import Emoji from '../components/Emoji';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

// SSR Suspense is not yet supported but maybe soon-ish? :(
const BrandLogos = dynamic(() => import('../components/BrandLogos'));
const TechnologiesGrid = dynamic(
  () => import('../components/TechnologiesGrid')
);

const Home: NextPage = (): ReactElement => (
  <>
    <section id="intro" className="home-intro">
      <BgQuadrants />
      <div className="home-intro__heading-wrapper">
        <h1 className="home-intro__heading">
          Front-End
          <br /> Developer
        </h1>
        <h2 className="home-intro__subheading mt-6">
          Based out of Charlotte, NC
        </h2>
      </div>
      <div className="home-intro__actions">
        <AppLink href="/resume" arrow="top-right">
          R&eacute;sum&eacute;
        </AppLink>
        <Link href="#about">
          <a className="c-btn mt-6">About me</a>
        </Link>
      </div>
    </section>
    <section id="about" className="home-about">
      <SectionHeading
        kicker="About me"
        heading={
          <>
            <span>{"Hi, I'm Zack"}</span>
            <Emoji
              label="hand waving emoji"
              symbol={'\u{1F44B}'}
              className="ml-2"
            />
          </>
        }
      />
      <div className="home-about__copy mt-10">
        <p>
          {
            "I'm a web developer who enjoys building enjoyable and accessible user experiences."
          }
        </p>
        <p className="mt-8">
          My specialty is in front-end development, but I do enjoy building APIs
          and exploring new technologies from time to time.
        </p>
        <p className="mt-8">
          {'You can find a full list of my relevant'}{' '}
          <AppLink href="#skills" color="secondary" inline>
            skills
          </AppLink>{' '}
          {'and some of the'}{' '}
          <AppLink href="#work" color="tertiary" inline>
            {"brands I've worked with"}
          </AppLink>{' '}
          {'in the sections below.'}
        </p>
      </div>
    </section>
    <section id="skills" className="home-skills">
      <div className="home-skills__heading-wrapper">
        <SectionHeading
          kicker="Relevant Skills"
          heading="Some of My Favorite Developer Tools"
        />
      </div>
      <div className="home-skills__content mt-10">
        <TechnologiesGrid />
      </div>
    </section>
    <section id="work" className="home-work">
      <SectionHeading kicker="My Work" heading="Brands I've Worked With" />
      <BrandLogos className="mt-10" />
    </section>
    <section id="contact" className="home-contact">
      <SectionHeading kicker="Let's Talk" heading="Contact Me" />
      <ContactForm className="mt-10" />
    </section>
  </>
);

export default Home;

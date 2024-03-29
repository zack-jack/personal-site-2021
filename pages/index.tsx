import { ReactElement } from 'react';
import type { NextPage } from 'next';
import { CloudDownloadIcon } from '@heroicons/react/outline';
import { ArrowNarrowDownIcon } from '@heroicons/react/solid';
import loadable from '@loadable/component';
import Image from 'next/image';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import AppLink from 'components/AppLink';
import Emoji from 'components/Emoji';
import HomeIntroHeadings from 'components/HomeIntroHeadings';
import SectionHeading from 'components/SectionHeading';

const AnimatedBlob = loadable(() => import('components/AnimatedBlob'));
const BrandLogos = loadable(() => import('components/BrandLogos'));
const ContactForm = loadable(() => import('components/ContactForm'));
const TechnologiesGrid = loadable(() => import('components/TechnologiesGrid'));

const Home: NextPage = (): ReactElement => (
  <div className="home">
    <section id="intro" className="home-intro">
      <div className="home-intro__hero">
        <div className="home-intro__hero-image-wrapper">
          <Image
            alt="A mac, keyboard, plant, and coffee cup on a desktop"
            src="https://res.cloudinary.com/tone-shop/image/upload/v1642434168/_image-computer-setup.svg"
            layout="fill"
          />
        </div>
        <div className="home-intro__headings">
          <HomeIntroHeadings />
        </div>
      </div>
      <div className="home-intro__actions">
        <Link href="#about">
          <a className="mt-6">
            <div aria-hidden className="home-intro__arrow-down-wrapper">
              <ArrowNarrowDownIcon className="home-intro__arrow-down" />
            </div>
            <span className="sr-only">Scroll down to About Me Section</span>
          </a>
        </Link>
      </div>
    </section>
    <section id="about" className="home-about">
      <AnimatedBlob className="home-about__blob" />
      <div className="home-about__content">
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
        <div className="mt-10 home-about__copy">
          <p>
            {
              "I'm a web developer who strives to build delightful and accessible user experiences."
            }
          </p>
          <p className="mt-8">
            My specialty is in front-end development, but I do enjoy building
            APIs and exploring new technologies from time to time.
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
      </div>
    </section>
    <section id="skills" className="home-skills">
      <div>
        <div className="home-skills__heading-wrapper">
          <SectionHeading
            kicker="Relevant Skills"
            heading="Some of My Favorite Developer Tools"
          />
        </div>
        <div className="mt-10 home-skills__grid-wrapper 1024:mt-16">
          <LazyLoad offset={200} once>
            <TechnologiesGrid />
          </LazyLoad>
        </div>
      </div>
    </section>
    <section id="work" className="home-work">
      <div className="home-work__content">
        <SectionHeading kicker="My Work" heading="Brands I've Worked With" />
        <LazyLoad offset={200} once>
          <BrandLogos className="mt-10 1024:mt-16" />
        </LazyLoad>
      </div>
    </section>
    <section id="contact" className="home-contact">
      <div className="home-contact__content">
        <SectionHeading kicker="Let's Talk" heading="Contact Me" />
        <ContactForm className="mt-10 1024:mt-16" />
        <div className="mt-20">
          <Link href="https://drive.google.com/file/d/1sgLTMTH87mnNxcgLc4HPjWJLbZOKWZ6O/view?usp=sharing">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 c-link"
            >
              <span>Download Résumé</span>
              <CloudDownloadIcon className="w-5 h-5 ml-2 text-primary-100" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;

import { ReactElement } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CloudDownloadIcon } from '@heroicons/react/outline';
import { ArrowNarrowDownIcon } from '@heroicons/react/solid';
import AppLink from 'components/AppLink';
import Emoji from 'components/Emoji';
import SectionHeading from 'components/SectionHeading';
import ContactForm from 'components/ContactForm';
import AnimatedBlob from 'components/AnimatedBlob';
import SocialIconGithub from 'components/SocialIconGithub';
import SocialIconLinkedIn from 'components/SocialIconLinkedIn';

// SSR Suspense is not yet supported but maybe soon-ish? :(
const BrandLogos = dynamic(() => import('components/BrandLogos'));
const TechnologiesGrid = dynamic(() => import('components/TechnologiesGrid'));

const Home: NextPage = (): ReactElement => (
  <div className="home">
    <section id="intro" className="home-intro">
      <div className="home-intro__hero">
        <div className="home-intro__hero-image-wrapper">
          <Image
            alt="A mac, keyboard, plant, and coffee cup on a desktop"
            src="/assets/images/_image-computer-setup.svg"
            layout="fill"
          />
        </div>
        <div className="home-intro__headings">
          <h1 className="home-intro__heading">
            Front-End
            <br /> Developer
          </h1>
          <h2 className="home-intro__subheading">Based out of Charlotte, NC</h2>
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
        <div className="home-about__copy mt-10">
          <p>
            {
              "I'm a web developer who enjoys building enjoyable and accessible user experiences."
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
        <div className="home-skills__grid-wrapper mt-10 1024:mt-16">
          <TechnologiesGrid />
        </div>
      </div>
    </section>
    <section id="work" className="home-work">
      <div className="home-work__content">
        <SectionHeading kicker="My Work" heading="Brands I've Worked With" />
        <BrandLogos className="mt-10 1024:mt-16" />
      </div>
    </section>
    <section id="contact" className="home-contact">
      <div className="home-contact__content">
        <SectionHeading kicker="Let's Talk" heading="Contact Me" />
        <ContactForm className="mt-10 1024:mt-16" />
        <div className="mt-20">
          <Link href="/Resume.pdf">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="c-link py-1"
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

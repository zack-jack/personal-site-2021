import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import BgQuadrants from '../components/BgQuadrants';
import Emoji from '../components/Emoji';

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <section id="intro" className="home-intro">
        <BgQuadrants />
        <div className="home-intro__heading-wrapper">
          <h1>
            Front End
            <br /> Web Developer
          </h1>
          <h2 className="home-intro__subheading mt-6">
            Based out of Charlotte, NC
          </h2>
        </div>
        <div className="home-intro__actions mt-6">
          <Link href="#about">
            <a className="c-btn">Learn More</a>
          </Link>
          <Link href="#">
            <a className="c-btn c-btn--secondary mt-6">R&eacute;sum&eacute;</a>
          </Link>
        </div>
      </section>
      <section id="about" className="home-about">
        <h3 className="home-about__heading">
          <span>{"Hi, I'm "}</span>
          <span className="text-blue-100">Zack</span>
          <Emoji
            label="hand waving emoji"
            symbol={'\u{1F44B}'}
            className="ml-2"
          />
        </h3>
        <div className="home-about__copy mt-10">
          <p>
            {
              "I'm a web developer who enjoys building user experiences that are both enjoyable and accessible."
            }
          </p>
          <p className="mt-8">
            While I do curiously dabble in different parts of the tech stack, my
            specialty is in the front end.
          </p>
          <p className="mt-8">
            {'You can find a full list of my relevant'}{' '}
            <Link href="#skills">
              <a className="c-link">skills</a>
            </Link>{' '}
            {'and some of the'}{' '}
            <Link href="#work">
              <a className="c-link">{"brands I've worked with"}</a>
            </Link>{' '}
            {'in the sections below.'}
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

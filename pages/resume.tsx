import { ReactElement } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Resume: NextPage = (): ReactElement => (
  <div className="resume__wrapper">
    <div className="resume__actions">
      <h1>R&eacute;sum&eacute;</h1>
      <button type="button" className="c-btn mt-12">
        Download PDF
      </button>
    </div>
    <div className="c-hairline mt-12" />
    <div className="resume">
      <div className="resume__header">
        <h2 className="resume__heading">Zack Jackson</h2>
        <h3 className="resume__subheading">Front-End Developer</h3>
      </div>
      {/* CONTACT */}
      <section className="resume__section">
        <h3 className="resume__section-heading">Contact</h3>
        <p className="mt-6">540.623.5204</p>
        <p>z.jackson58@gmail.com</p>
        <Link href="https://github.com/zack-jack/">
          <a target="_blank" rel="noopener noreferrer" className="resume__link">
            https://github.com/zack-jack/
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/zack-jackson/">
          <a target="_blank" rel="noopener noreferrer" className="resume__link">
            https://linkedin.com/in/zack-jackson/
          </a>
        </Link>
      </section>
      {/* EXPERIENCE */}
      <section className="resume__section">
        <h3 className="resume__section-heading">Experience</h3>
        <div className="resume__row">
          <div className="resume__col-left">
            <p>Present</p>
          </div>
          <div className="resume__col-right">
            <h4 className="resume__entry-heading">Front-End Developer</h4>
            <p className="resume__entry-subheading">Red Ventures</p>
            <ul className="resume__entry-list">
              <li>
                Built an authenticated experience web app for the MYMOVE
                ecosystem.
              </li>
              <li>
                Rewrote the USPS Change-of-Address suite of applications and led
                A/B testing efforts for user conversion.
              </li>
              <li>
                Integrated Allconnect provider widgets for placement on CNET and
                Bankrate.
              </li>
            </ul>
          </div>
        </div>
        <div className="resume__row">
          <div className="resume__col-left">
            <p>2019</p>
          </div>
          <div className="resume__col-right">
            <h4 className="resume__entry-heading">
              System Design Engineer III
            </h4>
            <p className="resume__entry-subheading">Kaeser Compressors Inc.</p>
            <ul className="resume__entry-list">
              <li>
                Automated processes for compilation and presentation of air
                system audit data.
              </li>
              <li>
                Implemented pressure band controls for large industrial air
                compressor systems.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* SKILLS */}
      <section className="resume__section">
        <h3 className="resume__section-heading">Skills</h3>
        <ul className="mt-6">
          <li>HTML 5 + CSS 3</li>
          <li>JavaScript / TypeScript</li>
          <li>React, Vue, Svelte</li>
          <li>Redux, Vuex</li>
          <li>Jest, Testing Library</li>
          <li>Webpack, Git, CI / CD</li>
        </ul>
      </section>
      {/* EDUCATION */}
      <section className="resume__section">
        <h3 className="resume__section-heading">Education</h3>
        <div className="resume__row">
          <div className="resume__col-left">
            <p>2012</p>
          </div>
          <div className="resume__col-right">
            <h4 className="resume__entry-heading">
              Virginia Commonwealth University
            </h4>
            <p className="resume__entry-subheading">Richmond, VA</p>
            <p className="resume__entry-subheading">
              B.S. Mechanical Engineering
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Resume;

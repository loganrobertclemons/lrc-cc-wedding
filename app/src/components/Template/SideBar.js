import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/lc7.jpg`} alt="" />
      </Link>
      <header>
        <h2>Logan Clemons</h2>
        <p><a href="mailto:clemonswedding2020@gmail.com">clemonswedding2020@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, we&apos;re getting married! Here&apos;s some info about our wedding.
        Check out our {' '}
        <Link to="/venues">venues</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Clemons Wedding 2021 <Link to="/">clemons.wedding</Link>.</p>
    </section>
  </section>
);

export default SideBar;

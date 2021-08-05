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
        <h2>L&amp;C Clemons Wedding Info!</h2>
        <p><a href="mailto:clemonswedding2020@gmail.com">@clemons-wedding.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, we&apos;re getting married! Here&apos;s some info about our wedding.
        Check out our {' '}
        <Link to="/events">events</Link>, {' '}
        view <Link to="/accomodations">accomodations</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">About Us</Link> : <Link to="/" className="button">General Info</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Clemons Wedding 2021 <Link to="/">2021.clemons-wedding</Link>.</p>
    </section>
  </section>
);

export default SideBar;

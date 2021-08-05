import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Website for Logan and Cameron Clemons&apos;s Wedding."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Logan and Cameron&apos;s (2nd) Wedding
          </p>
        </div>
      </header>
      <p> Welcome to our wedding website - Read more <strong><Link to="/about">about us</Link></strong>,
        or you can check out our {' '}
        <strong><Link to="/events">event information</Link></strong>, {' '}
        view <strong><Link to="/accomodations">places to stay</Link></strong>, {' '}
        or <strong><Link to="/contact">contact</Link></strong> us.
      </p>
      <p>
        We are registered at <strong><a href="https://www.target.com/gift-registry/gift/3def3f99232244388a52cb086bc95c5a" target="_blank" rel="noreferrer">Target</a></strong>
        , as well as <strong><a href="https://www.honeyfund.com/wedding/manning-clemons-11-06-2021" target="_blank" rel="noreferrer">HoneyFund</a></strong>
        , if you would like to purchase us a wedding present or contribute to our honeymoon.
      </p>
      <p>
        The dress code for the wedding is cocktail/Sunday Best.
      </p>
      <p>
        Our ceremony will be held on November 6th, 2021 at <strong><a href="http://www.westendumc.org">West End United Methodist</a></strong>
        , our reception is at <strong><a href="https://www.marathonvillage.net/events-meetings">A Room With a View at Marathon Village</a></strong>
        , and our rehearsal dinner will be held on November 5th, 2021 at  <strong><a href="https://www.tnbrew.com">Tennessee Brew Works</a></strong> following the ceremony.
        Can&apos;t wait to celebrate our (2nd) wedding with you!
      </p>
      {/* <p>
        Possibly where the registration goes
      </p> */}
    </article>
  </Main>
);

export default Index;

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
            Logan and Cameron Clemons&apos;s (2nd) Wedding
          </p>
        </div>
      </header>
      <p> Welcome to our wedding website - Read more <Link to="/about">about us</Link>,
        or you can check out our {' '}
        <Link to="/events">event information</Link>, {' '}
        view <Link to="/accomodations">places to stay</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
      </p>
      <p>
        We are registered at <a href="https://www.target.com/gift-registry/gift/3def3f99232244388a52cb086bc95c5a" target="_blank" rel="noreferrer">Target</a>
        , as well as <a href="https://www.honeyfund.com/wedding/manning-clemons-11-06-2021" target="_blank" rel="noreferrer">HoneyFund</a>
        , if you would like to purchase us a wedding present or contribute to our honeymoon.
      </p>
      <p>
        Our ceremony will be held on November 6th, 2021 at <a href="http://www.westendumc.org">West End United Methodist</a>
        , our reception is at  <a href="https://www.marathonvillage.net/events-meetings">A Room With a View at Marathon Village</a>
        , and our rehearsal dinner will be held on November 5th, 2021 at  <a href="https://www.tnbrew.com">Tennessee Brew Works</a> following the ceremony.
        Can&apos;t wait to celebrate our (2nd) wedding with you!
      </p>
      {/* <p>
        Possibly where the registration goes
      </p> */}
    </article>
  </Main>
);

export default Index;

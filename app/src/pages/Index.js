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
        <Link to="/venues">venue information</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
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
      <p> Source available <a href="https://github.com/loganrobertclemons/lrc-portfolio">here</a>.</p>
    </article>
  </Main>
);

export default Index;

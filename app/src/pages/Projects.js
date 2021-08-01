import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Venues/Cell';
import data from '../data/venues';

const Venues = () => (
  <Main
    title="Venues"
    description="Clemons wedding venues."
  >
    <article className="post" id="venues">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/venues">Venue Information</Link></h2>
          <p>Venue information and a rough schedule of events</p>
        </div>
      </header>
      {data.map((venue) => (
        <Cell
          data={venue}
          key={venue.title}
        />
      ))}
    </article>
  </Main>
);

export default Venues;

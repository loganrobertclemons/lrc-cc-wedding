import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Events/Cell';
import data from '../data/events';

const Events = () => (
  <Main
    title="Events"
    description="Clemons wedding events."
  >
    <article className="post" id="events">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/events">Events Information</Link></h2>
          <p>Event information and a rough schedule of events</p>
        </div>
      </header>
      {data.map((event) => (
        <Cell
          data={event}
          key={event.title}
        />
      ))}
    </article>
  </Main>
);

export default Events;

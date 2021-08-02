import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Accomodations/Cell';
import data from '../data/accomodations';

const Accomodations = () => (
  <Main
    title="Accomodations"
    description="Where to stay for the wedding."
  >
    <article className="post" id="accomodations">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/accomodations">Accomodation Information</Link></h2>
          <p>Where to stay</p>
        </div>
      </header>
      {data.map((accomodation) => (
        <Cell
          data={accomodation}
          key={accomodation.title}
        />
      ))}
    </article>
  </Main>
);

export default Accomodations;

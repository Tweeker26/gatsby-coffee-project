import React from 'react';
import { Link } from 'gatsby';

import Title from '../Globals/Title';

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus adipisci aut beatae, dolores ducimus ea excepturi
              expedita explicabo fuga hic incidunt iusto labore laudantium
              maiores mollitia nam nulla odio odit quae quis quo quod quos
              recusandae repellat repellendus similique ullam, vitae! Aperiam
              delectus eveniet exercitationem facere in magni perspiciatis
              sequi?
            </p>
            <Link to="/about">
              <button className="btn btn-yellow text-uppercase">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

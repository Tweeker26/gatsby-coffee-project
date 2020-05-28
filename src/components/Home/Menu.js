import React, { useState } from 'react';
import GatsbyImage from 'gatsby-image';

import Title from '../Globals/Title';

const getCategories = (items) => {
  let tempItems = items.map((item) => {
    return item.node.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  return ['all', ...categories];
};

const Menu = ({ items }) => {
  const [state, setState] = useState({
    items: items.edges,
    coffeeItems: items.edges,
    categories: getCategories(items.edges),
  });

  const handleItems = (category) => {
    let tempItems = [...state.items];
    if (category === 'all') {
      setState((prevState) => ({ ...prevState, coffeeItems: tempItems }));
    } else {
      let items = tempItems.filter(({ node }) => node.category === category);
      setState((prevState) => ({ ...prevState, coffeeItems: items }));
    }
  };

  if (state.items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {state.categories.map((category, index) => (
                <button
                  type="button"
                  key={index}
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => handleItems(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            {state.coffeeItems.map(({ node }) => (
              <div
                key={node.id}
                className="col-11 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <GatsbyImage fixed={node.image.fixed} />
                </div>
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <b>{node.title}</b>
                    </h6>
                    <h6 className="mb-0 text-yellow">
                      <small>${node.price}</small>
                    </h6>
                  </div>
                  <p className="text-body">
                    <small>{node.description.description}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Menu;

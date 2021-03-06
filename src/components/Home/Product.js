import React from 'react';
import GatsbyImage from 'gatsby-image';

const Product = ({ product }) => (
  <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
    <div className="card">
      <GatsbyImage fluid={product.image.fluid} className="card-img-top" />
      <div className="card-body text-center">
        <h5>
          <b>{product.title}</b>
        </h5>
        <h6>${product.price}</h6>
        <button
          className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
          data-item-id={product.id}
          data-item-name={product.title}
          data-item-price={product.price}
          data-item-image={product.image.fluid.src}
          data-item-url="/"
        >
          add to cart
        </button>
      </div>
    </div>
  </div>
);

export default Product;

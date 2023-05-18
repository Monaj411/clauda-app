import React from "react";

const Product = () => {
  return (
    <React.Fragment>
      <div className="container fontBody">
        <h1 className="heading text-center">
          Let's gets you the right account that best fits your needs
        </h1>
        <p className="text-center">
          Kindly selecet the best option that describes you the best
        </p>

        <div class="shadow p-3 mb-5 welcome rounded">
          <a href="#" class="btn button text-black stretched-link">
            Collection
          </a>
        </div>
        <div class="shadow p-3 mb-5 welcome rounded">
          <a href="#" class="btn button text-black stretched-link">
            Payout
          </a>
        </div>
        <div class="shadow p-3 mb-5 welcome rounded">
          <a href="#" class="btn button text-black stretched-link">
            Prepaid Cards
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;

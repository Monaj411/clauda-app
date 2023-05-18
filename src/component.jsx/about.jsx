import React from "react";
import Social from "./social";

const About = () => {
  return (
    <React.Fragment>
      <div className="container welcome">
        <div class=" p-2 text-white">
          <p class="text-center">
            <h2 className="heading">About Clauda</h2>
          </p>
          <p>
            Clauda is a leading global payment pltform that partner with
            freelancers, SMBs, marketplaces and enterprises to solve their
            biggest payment challenges. leveraging robust technology,
            compliance, operations and banking infrastructure.
          </p>
          <div>
            <Social />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

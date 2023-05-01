import React from "react";

export default function Projects() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row featurette" data-aos="fade-right">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Insurance</h2>
          <p className="lead">
            Axiom data analytics and artificial intelligence solutions help
            insurance companies streamline their processes, reduce risks, and
            improve customer satisfaction. With our expertise in data management
            and business agility, Axiom can help insurers stay ahead of the
            competition in a rapidly changing market.
          </p>
        </div>
        <div className="col-md-5">
          <div className="bd-placeholder-insurtech bd-placeholder-img-lg featurette-image img-fluid mx-auto"></div>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette" data-aos="fade-left">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Retail</h2>
          <p className="lead">
            Axiom web and mobile development services help retailers create
            engaging online experiences for their customers, while our data
            analytics solutions provide insights into customer behavior and
            preferences. Axiom can help retailers transform their operations and
            achieve long-term success.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <div className="bd-placeholder-supply bd-placeholder-img-lg featurette-image img-fluid mx-auto"></div>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette" data-aos="fade-right">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Supply Chain</h2>
          <p className="lead">
            Axiom cloud computing and data analytics solutions can help optimize
            every stage of the supply chain. From inventory management to
            logistics, we provide the tools and insights needed to improve
            efficiency, reduce costs, and increase profitability. Let Axiom help
            you take your supply chain to the next level.
          </p>
        </div>
        <div className="col-md-5">
          <div className="bd-placeholder-retail bd-placeholder-img-lg featurette-image img-fluid mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

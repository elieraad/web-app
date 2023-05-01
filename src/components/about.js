import React from "react";

export default function About() {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3" data-aos="fade-up">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">About Axiom</h1>
            <p className="fs-4">
              Axiom is a software development company specialized in data
              analytics, artificial intelligence, and cloud computing. We offer
              a range of services including web and mobile development, data
              management, business agility, and digital transformation. Axiom
              expertise spans multiple industries, with a proven record of
              success in the insurance, retail, and supply chain sectors. Our
              mission is to help businesses transform their operations and
              achieve long-term success through innovative technology solutions.
            </p>
            <a className="btn btn-primary btn-lg" type="button" href="#contact">
              Contact Us
            </a>
          </div>
          <div className="bd-placeholder-about col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}

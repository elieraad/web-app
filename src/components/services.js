import React from "react";

export default function Services() {
  const delay = window.innerWidth < 995 ? 0 : 500;
  return (
    <div className="row">
      <h1 className="text-center display-5 fw-bold">Axiom Services</h1>
      <div className="col-lg-4" data-aos="fade-up">
        <div className="bd-placeholder-dt rounded-circle"></div>
        <h2 className="fw-normal">Digital Transformation</h2>
        <p style={{ marginTop: "1em", textAlign: "left" }}>
          Stay ahead of the curve and transform your business with Axiom
          cutting-edge digital solutions. Our expert team will help you leverage
          the latest technologies to streamline your operations, engage with
          customers in new and innovative ways, and drive growth and
          profitability in the digital age.
        </p>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
        <div className="bd-placeholder-agile rounded-circle"></div>
        <h2 className="fw-normal">Business Agility</h2>
        <p style={{ marginTop: "1em", textAlign: "left" }}>
          Adapt quickly to changing market conditions and customer needs with
          Axiom agile business solutions. Our experienced coaches and trainers
          will work closely with your team to implement lean practices and agile
          methodologies to deliver high-quality products and services that meet
          your customers' expectations.
        </p>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay * 2}>
        <div className="bd-placeholder-data rounded-circle"></div>
        <h2 className="fw-normal">Data Management</h2>
        <p style={{ marginTop: "1em", textAlign: "left" }}>
          Unlock the power of your data with Axiom comprehensive data management
          solutions. Our skilled professionals will help you harness the
          insights buried in your data to improve decision-making, optimize
          operations, and drive business value. Trust Axiom to keep your data
          secure and compliant with the latest regulations and industry
          standards.
        </p>
      </div>
    </div>
  );
}

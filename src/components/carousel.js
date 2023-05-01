import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { useState } from "react";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <CarouselItem>
        <div className="bd-placeholder-bi"></div>
        <Carousel.Caption className="text-start">
          <h1>Data Analytics</h1>
          <p>
            Axiom will help you manage and analyze data to improve outcomes and
            streamline operations
          </p>
          <p>
            <a className="btn btn-lg btn-primary" href="#contact">
              Inquiry Now
            </a>
          </p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <div className="bd-placeholder-ai"></div>
        <Carousel.Caption>
          <h1>Artificial Intelligence</h1>
          <p>
            Axiom offers AI solutions help clients automate routine tasks,
            reduce errors, and improve efficiency
          </p>
          <p>
            <a className="btn btn-lg btn-primary" href="#contact">
              Learn more
            </a>
          </p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <div className="bd-placeholder-dev"></div>
        <Carousel.Caption className="text-end">
          <h1>Software Development</h1>
          <p>
            At Axiom, we develop scalable and secure digital solutions tailored
            to your business needs
          </p>
          <p>
            <a className="btn btn-lg btn-primary" href="#contact">
              Get in touch
            </a>
          </p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
}

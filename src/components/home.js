import React, { useEffect, useState, useRef } from "react";
import HomeCarousel from "./carousel";
import Services from "./services";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import AOS from "aos";

export default function Home({ setActiveSection }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
    AOS.refresh();
  }, []);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Intersection threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setActiveSection(index);
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleSectionRefs = (ref, index) => {
    sectionRefs.current[index] = ref;
  };
  return (
    <section>
      <section id="home" ref={(ref) => handleSectionRefs(ref, 0)}>
        <HomeCarousel />
      </section>

      <div className="container marketing">
        <section id="services" ref={(ref) => handleSectionRefs(ref, 1)}>
          <Services />
        </section>

        <hr className="featurette-divider" />

        <section id="projects" ref={(ref) => handleSectionRefs(ref, 2)}>
          <Projects />
        </section>

        <hr className="featurette-divider" />

        <section id="about" ref={(ref) => handleSectionRefs(ref, 3)}>
          <About />
        </section>

        <hr className="featurette-divider" />

        <section id="contact" ref={(ref) => handleSectionRefs(ref, 4)}>
          <Contact />
        </section>
        <hr className="featurette-divider" />
      </div>
    </section>
  );
}

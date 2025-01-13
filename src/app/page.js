"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Globe,
  Code,
  Smartphone,
  MonitorSmartphone,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import emailjs from "emailjs-com";
import ContactForm from "./ContactForm";

// Sample projects focused on dropshipping and private label e-commerce
const projects = [
  {
    title: "Beauty Products",
    category: "E-commerce",
    image: "beauty.png",
    description:
      "Premium skincare brand with custom-branded products sourced from top manufacturers",
  },
  {
    title: "Electronics & Gadgets",
    category: "Dropshipping",
    image: "tech.png",
    description:
      "Automated dropshipping store for premium tech accessories with global shipping",
  },
  {
    title: "Home Essentials",
    category: "E-commerce",
    image: "home.png",
    description:
      "Home essentials brand featuring custom-manufactured products with unique designs",
  },
];

// Updated testimonials to reflect dropshipping and private label success stories
const testimonials = [];

const AxiomLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({});

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mobile menu handler
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send(
      "service_j8jqgeh",
      "template_t1cf9md",
      templateParams,
      "MgcX3FIwAK5Guq8BG"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Updated Navigation with Mobile Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl sm:text-2xl font-bold tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AXIOM
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#work"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Work
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-base font-medium hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
              <a
                href="#work"
                className="block px-3 py-2 text-base font-medium hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Work
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Updated Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,255,0.15),transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-sm font-medium text-blue-400 mb-4">
              WELCOME TO THE FUTURE OF DIGITAL
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
              We Create
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Digital Magic
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Lebanon's premier digital agency, crafting extraordinary web
              experiences that captivate, engage, and convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-6">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Journey</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#work"
                className="w-full sm:w-auto text-center text-gray-400 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Clients */}
      <div className="py-12 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-400 mb-8">
            Powered by Industry Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center justify-items-center">
            {/* Keep existing client logos but update their container styles */}
            <div className="h-16 sm:h-20 w-full sm:w-52 rounded-lg flex items-center justify-center px-4">
              <Image
                src="meta.svg"
                width={40}
                height={40}
                alt="Meta logo"
                className="w-40 h-auto object-contain"
              />
            </div>
            {/* Microsoft Logo */}
            <div className="h-16 sm:h-20 w-full sm:w-52 rounded-lg flex items-center justify-center px-4">
              <Image
                src="microsoft.svg"
                width={40}
                height={40}
                alt="Microsoft logo"
                className="w-40 h-auto object-contain"
              />
            </div>
            {/* Google Logo */}
            <div className="h-16 sm:h-20 w-full sm:w-52 rounded-lg flex items-center justify-center px-4">
              <Image
                src="google.svg"
                width={40}
                height={40}
                alt="Google logo"
                className="w-40 h-auto object-contain"
              />
            </div>
            {/* GitHub Logo */}
            <div className="h-16 sm:h-20 w-full sm:w-52 rounded-lg flex items-center justify-center px-4">
              <Image
                src="github.svg"
                width={40}
                height={40}
                alt="GitHub logo"
                className="w-40 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced Services Section */}
      <section
        id="services"
        className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              Comprehensive digital solutions tailored for the Middle Eastern
              market
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service cards with improved mobile layout */}
            {[
              {
                icon: <Globe className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Web Development",
                description:
                  "Custom websites and web applications built with cutting-edge technology.",
                features: [
                  "React & Next.js",
                  "Laravel & WordPress",
                  "E-commerce Solutions",
                ],
              },
              {
                icon: <Smartphone className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Mobile Solutions",
                description:
                  "Native and cross-platform mobile applications for modern businesses.",
                features: [
                  "iOS Development",
                  "Android Development",
                  "React Native",
                ],
              },
              {
                icon: <MonitorSmartphone className="w-6 sm:w-8 h-6 sm:h-8" />,
                title: "Digital Experience",
                description:
                  "Immersive user experiences that captivate and convert.",
                features: ["UI/UX Design", "User Research", "Analytics"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sm text-blue-400 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed", icon: <Code /> },
              { number: "50+", label: "Happy Clients", icon: <Users /> },
              { number: "5+", label: "Years Experience", icon: <Star /> },
              { number: "3", label: "Countries Served", icon: <Globe /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              Ready to start your digital journey? We'll get back to you within
              48 hours.
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8">
            <ContactForm />
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            By submitting this form, you agree to our privacy policy and terms
            of service.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,255,0.15),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your vision, our
            expertise.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  AXIOM
                </span>
              </div>
              <p className="text-gray-400">
                Crafting digital excellence in the Middle East.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Web Development
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Mobile Solutions
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Digital Experience
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  UI/UX Design
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Beirut, Lebanon</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  info@axiomtech.me
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/axiomtech-me"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 Axiom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AxiomLanding;

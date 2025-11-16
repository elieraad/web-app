"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const careers = [
  {
    title: "Social Media Specialist",
    type: "Commission-based",
    responsibilities: [
      "Develop and execute social media strategies across platforms (Instagram, TikTok, LinkedIn, etc.).",
      "Create and schedule engaging content that drives engagement and leads.",
      "Monitor performance metrics and optimize campaigns for maximum results.",
      "Collaborate with the team to align social media strategy with sales goals.",
    ],
    qualifications: [
      "Proven experience in social media marketing or digital content creation.",
      "Strong understanding of fitness and wellness industry trends is a plus.",
      "Excellent communication and creative skills.",
      "Self-motivated and commission-driven mindset.",
    ],
    perks: [
      "Flexible hours",
      "High earning potential",
      "Opportunity to grow with the agency",
    ],
  },
  {
    title: "Sales Representative",
    type: "Commission-based",
    responsibilities: [
      "Identify and reach out to potential fitness studio clients.",
      "Conduct demos or presentations of our management system.",
      "Follow up on leads and manage the sales pipeline.",
      "Collaborate with the team to develop sales strategies and campaigns.",
    ],
    qualifications: [
      "Proven experience in sales, preferably in SaaS or fitness industry.",
      "Strong communication, negotiation, and persuasion skills.",
      "Goal-oriented and self-motivated with a commission-driven mindset.",
      "Ability to work independently and manage multiple leads at once.",
    ],
    perks: [
      "Flexible hours",
      "High commission opportunities",
      "Be part of a growing digital agency",
    ],
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-wider"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AXIOM
            </span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-purple-900 via-black to-blue-900 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-700 opacity-20 rounded-full animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
            Grow With Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Join our team and help shape the future of fitness studio
            management. Commission-based roles available for ambitious, driven
            professionals.
          </p>
          <Link
            href="#roles"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
          >
            Explore Open Positions
          </Link>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Why Work With Us</h2>
          <p className="text-gray-400 mb-12 text-lg">
            We are a fast-growing digital agency in Lebanon, helping fitness
            studios manage and scale their operations. Join us and enjoy a
            dynamic, creative, and rewarding environment.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Flexible Hours</h3>
              <p className="text-gray-400">
                Work on your own schedule and focus on results.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">
                High Earning Potential
              </h3>
              <p className="text-gray-400">
                Commission-based roles with uncapped earnings.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Career Growth</h3>
              <p className="text-gray-400">
                Opportunities to grow with a thriving digital agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {careers.map((role, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 hover:scale-105 transition-transform duration-300 text-left"
              >
                <h3 className="text-3xl font-bold mb-2">{role.title}</h3>
                <p className="text-gray-400 mb-4">
                  <strong>Type:</strong> {role.type}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-200 mb-2">
                    Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-200 mb-2">
                    Qualifications:
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {role.qualifications.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-200 mb-2">Perks:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {role.perks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/#contact"
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,255,0.15),transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Axiom?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Apply now and start your journey with Lebanon's premier digital
            agency.
          </p>
          <Link
            href="/#contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Apply Today
          </Link>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-gray-800 text-center text-gray-400">
        © 2025 Axiom. All rights reserved.
      </footer>
    </div>
  );
};

export default CareersPage;

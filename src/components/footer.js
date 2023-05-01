import React from "react";

export default function Footer() {
  return (
    <footer className="container">
      <p className="float-end">
        <a href="#">Back to top</a>
      </p>
      <p>
        &copy; <span id="year">{new Date().getFullYear()}</span> Axiom
      </p>
    </footer>
  );
}

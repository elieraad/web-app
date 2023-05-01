import React from "react";

import NavigationBar from "./components/navigation";
import Home from "./components/home";
import Footer from "./components/footer";

import { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <section>
      <NavigationBar activeSection={activeSection} />
      <Home setActiveSection={setActiveSection} />
      <Footer />
    </section>
  );
}

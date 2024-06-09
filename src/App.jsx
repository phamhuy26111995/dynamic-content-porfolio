import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";

import Contact from "./components/Contact";

import PersonalProjects from "./components/PersonalProjects";
import RealProjects from "./components/RealProjects";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <PersonalProjects />
      <RealProjects />
      <Contact />
    </div>
  );
}

export default App;

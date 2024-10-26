import React from "react";
// import Banner from "./components/Banner";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import About from "./components/About";

// import Contact from "./components/Contact";

// import PersonalProjects from "./components/PersonalProjects";
// import RealProjects from "./components/RealProjects";

const Header = React.lazy(() => import("./components/Header"));
const Nav = React.lazy(() => import("./components/Nav"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const PersonalProjects = React.lazy(() => import("./components/PersonalProjects"));
const RealProjects = React.lazy(() => import("./components/RealProjects"));
const Banner = React.lazy(() => import("./components/Banner"));


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

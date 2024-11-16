import { Modal } from "antd";
import React from "react";
import AppModal from "./components/AppModal";


const Header = React.lazy(() => import("./components/Header"));
const Nav = React.lazy(() => import("./components/Nav"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const PersonalProjects = React.lazy(() => import("./components/PersonalProjects"));
const RealProjects = React.lazy(() => import("./components/real-project/RealProjects"));
const Banner = React.lazy(() => import("./components/Banner"));


function App() {
  const [reRenderKey, setReRenderKey] = React.useState(1);

  return (
    <div key={reRenderKey} className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <AppModal />
      <Header setReRenderKey={setReRenderKey}  />
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

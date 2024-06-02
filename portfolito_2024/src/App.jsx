import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { database } from "./firebaseConfig";
import { useRecoilState, useRecoilValue } from "recoil";
import { fullDataAtom } from "./recoil/atom";
import { get, ref } from "firebase/database";
import { fullDataSelector } from "./recoil/selectors";
import PersonalProjects from "./components/PersonalProjects";
import RealProjects from "./components/RealProjects";

function App() {
  const { t, i18n } = useTranslation();
  const fullData = useRecoilValue(fullDataSelector({}));
  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <PersonalProjects />
      {/* <Work /> */}
      <RealProjects />
      <Contact />
    </div>
  );
}

export default App;

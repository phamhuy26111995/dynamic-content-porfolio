import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [firstname, setFirstname] = useState("HUY");
  const [surname, setSurname] = useState("PHẠM");
  const {t : translate} = useTranslation();




  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <p className="text-2xl font-bold text-gradient">{surname}</p>
            <p className="text-2xl font-bold text-gradient">{firstname}</p>
          </a>
          <Link smooth="true" spy="true" to="contact">
            <button className="btn btn-sm">{translate('workWithMe')}</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

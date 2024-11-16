import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { headerSelector } from "../recoil/selectors";

const Header = ({setReRenderKey}) => {
  const { t: translate, i18n } = useTranslation();
  const { firstname, surname } = useRecoilValue(headerSelector);

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    setReRenderKey(prev => prev + 1)
  }

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <p className="text-2xl font-bold text-gradient">{surname}</p>
            <p className="text-2xl font-bold text-gradient">{firstname}</p>
          </a>
          <div className="flex items-center gap-6">
            <Link smooth="true" spy="true" to="contact">
              <button className="btn btn-sm">{translate("workWithMe")}</button>
            </Link>
            <div className="flex">
              <div
                className="cursor-pointer"
                onClick={() => changeLanguage("vi-VN")}
              >
                <img
                  src="https://res.cloudinary.com/dgmmn28ih/image/upload/v1717829597/vietnam_round_icon_64_dk1gd0.png"
                  alt="menu"
                  className="w-full h-full"
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => changeLanguage("en-US")}
              >
                <img
                  src="https://res.cloudinary.com/dgmmn28ih/image/upload/v1717829597/united_states_of_america_round_icon_64_g9efla.png"
                  alt="menu"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Tooltip } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2xl
          rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl
          text-white/50 items-center
        "
        >
          <Tooltip title={t("home")}>
            <Link
              activeClass="active"
              smooth="true"
              spy="true"
              to="home"
              offset={-200}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiHomeAlt />
            </Link>
          </Tooltip>

          <Tooltip title={t("aboutMe")}>
            <Link
              activeClass="active"
              smooth="true"
              spy="true"
              to="about"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
          </Tooltip>

          <Tooltip title={t("personalProjects")}>
            <Link
              activeClass="active"
              smooth="true"
              spy="true"
              to="services"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsClipboardData />
            </Link>
          </Tooltip>

          <Tooltip title={t("realProjects")}>
            <Link
              activeClass="active"
              smooth="true"
              spy="true"
              to="work"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsBriefcase />
            </Link>
          </Tooltip>

          <Tooltip title={t("contact")}>
            <Link
              activeClass="active"
              smooth="true"
              spy="true"
              to="contact"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <BsChatSquare />
            </Link>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

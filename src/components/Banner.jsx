import React from "react";
import Blob from "./Blob";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { useRecoilValue } from "recoil";
import { bannerSelector } from "../recoil/selectors";
import TypewriterComponent from "typewriter-effect";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const bannerData = useRecoilValue(bannerSelector);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const {
    content: {
      surname,
      firstname,
      introduce,
      role,
      githubLink,
      linkedinLink,
      facebookLink,
      cvUrl,
    },
    image,
  } = bannerData;

  return (
    <section className="min-h-[85vh] lg:min-h-[78] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              {surname} <span>{firstname}</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white text-2xl">
                {t("aboutMeDescription")}{" "}
              </span>
              <div className="inline-block">
                <TypewriterComponent
                  style={{ display: "inline-block" }}
                  options={{
                    wrapperClassName: "text-2xl text-gradient inline-block",
                    strings: role,
                    autoStart: true,
                    loop: true,
                    cursorClassName: "lg:text-[30px]",
                  }}
                />
              </div>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {introduce[currentLanguage]}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link smooth="true" spy="true" to="contact">
                <button className="btn btn-lg">{t("contact")}</button>
              </Link>
              <a href={cvUrl} className="text-gradient btn-link" download>
                {t("downloadCV")}
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href={linkedinLink} target="_blank">
                <FaLinkedin />
              </a>
              <a href={githubLink} target="_blank">
                <FaGithub />
              </a>
              <a href={facebookLink} target="_blank">
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="hidden lg:flex flex-1 lg:max-w-[1000px]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
          >
            <Blob image={image} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

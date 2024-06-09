import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { Carousel } from "antd";
import { personalProjSelector } from "../recoil/selectors";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const services = [
  {
    name: "projectName",
  },
  {
    name: "projectDescription",
  },
  {
    name: "projectLink",
  },
];


const PersonalProjects = () => {
  const personalProjData = useRecoilValue(personalProjSelector);

  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1  lg:bg-bottom  n mb-12 lg:mb-0"
        >
          {/* text and img  */}
          <Carousel autoplay dots={{ className: "!-bottom-[2.5rem]" }}>
            {personalProjData.map((proj, index) => {
              return (
                <div key={index} className="px-5">
                  <CarouselItem content={proj.content} image={proj.image} />
                </div>
              );
            })}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

function CarouselItem({ content, image }) {
  // Tên dự án , mô tả, link, img
  const { t: translate } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0];

  return (
    <div className="flex flex-col lg:flex-row gap-x-10 ">
      {/* text and img  */}
      <div className="flex-1  lg:bg-bottom  mb-12 lg:mb-0">
        <div className="lg:h-[100%] lg:py-7">
          <img className="h-[100%]" src={image} alt="" />
        </div>
      </div>
      {/* {services} */}
      <div className="flex-1 text-white">
        <div>
          {services.map((service, index) => {
            return (
              <div
                className="border-b border-white/20  py-[20px] flex"
                key={index}
              >
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                    {translate(`${service.name}`)}
                  </h4>
                  <p className="font-secondary leading-tight">
                    {content[currentLanguage][service.name]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;

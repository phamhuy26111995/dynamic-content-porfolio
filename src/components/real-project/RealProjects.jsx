import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isOpenAppModal } from "../../recoil/atom";
import { FaGitlab, FaJava, FaJira, FaReact } from "react-icons/fa";
import {
  SiHibernate,
  SiIntellijidea,
  SiJira,
  SiMysql,
  SiVisualstudiocode,
} from "react-icons/si";
import useOpenAppModal from "../../hooks/useOpenAppModal";

import { Carousel, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { realProjectSelector } from "../../recoil/selectors";
import i18n from "../../i18n";
import SeeMoreComponent from "./SearchMore";
import TechComponent from "./TechComponent";
import parse from "html-react-parser";

function RealProjects() {
  const realProjectData = useRecoilValue(realProjectSelector);

  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <Carousel autoplay dots={{ className: "!-bottom-[2.5rem]" }}>
          {realProjectData.map((project, index) => (
            <RealProjectItem key={index} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function ItemFirstCol({ projectInfo, technologies }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between">
          <h2 className="h2 mb-0  leading-tight text-accent">
            {projectInfo.title}
          </h2>
        </div>
        <p className="max-w-sm text-white">
          {t("role")} : {projectInfo.role}
        </p>
        <p className="max-w-sm  text-white">
          {t("period")} : {projectInfo.period}
        </p>
        <p className="max-w-sm  text-white">
          {t("teamSize")} : {projectInfo.numberOfMember}
        </p>
      </div>
      <div>
        <div className="flex justify-between">
          <h2 className="h2 mb-0  leading-tight text-accent">
            {t("technologies")}
          </h2>
        </div>
        <p className="max-w-sm mb-16">
          <TechComponent technologies={technologies} />
        </p>
      </div>
    </>
  );
}

function ItemSecondCol({ projectDescription, myRole }) {
  const { setIsOpenAppModal, setPropsAppModal } = useOpenAppModal();
  const { t } = useTranslation();

  function onOpenModalProjectDesc() {
    setIsOpenAppModal((prevProp) => !prevProp);
    setPropsAppModal({
      title: <h1>{t("projectDescription")}</h1>,
      children: parse(projectDescription),
      onCancel: () => setIsOpenAppModal(false),
      onOk: () => setIsOpenAppModal(false),
    });
  }

  function onOpenModalResponsible() {
    setIsOpenAppModal((prevProp) => !prevProp);
    setPropsAppModal({
      title: <h1>{t("responsibility")}</h1>,
      children: parse(myRole),
      onCancel: () => setIsOpenAppModal(false),
      onOk: () => setIsOpenAppModal(false),
    });
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between">
          <h2 className="h2 mb-0 leading-tight text-accent">
            {t("projectDescription")}
          </h2>
          <SeeMoreComponent
            onClickProps={onOpenModalProjectDesc}
            key={"project-desc"}
          />
        </div>
        <p className="max-w-sm mb-10 text-white">{t("clickToSeeMore")}</p>
      </div>
      <div>
        <div className="flex justify-between">
          <h2 className="h2 mb-0 leading-tight text-accent">
            {t("responsibility")}
          </h2>
          <SeeMoreComponent
            onClickProps={onOpenModalResponsible}
            key={"responsible"}
          />
        </div>
        <p className="max-w-sm text-white">{t("clickToSeeMore")}</p>
      </div>
    </>
  );
}

function RealProjectItem({ project }) {
  const currentLang = i18n.language;

  const realProject = project[currentLang];
  
  return (
    <div>
      <div className="flex gap-x-10">
        <div className="flex flex-col flex-1">
          <ItemFirstCol
            projectInfo={realProject.projectInfo}
            technologies={realProject.technologies}
          />
        </div>
        <div className="flex flex-col flex-1">
          <ItemSecondCol
            projectDescription={realProject.description}
            myRole={realProject.myRole}
          />
        </div>
      </div>
    </div>
  );
}

export default RealProjects;

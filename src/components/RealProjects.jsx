import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isOpenAppModal } from "../recoil/atom";
import { FaJava, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import useOpenAppModal from "../hooks/useOpenAppModal";
import { MoreOutlined } from "@ant-design/icons";
import { Carousel, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { realProjectSelector } from "../recoil/selectors";
import i18n from "../i18n";

const ICON_MAPPING = {
  react: <FaReact />,
  java: <FaJava />,
  mysql: <SiMysql />,
};

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
  const { setIsOpenAppModal, setPropsAppModal } = useOpenAppModal();
  const { t } = useTranslation();

  function onOpenModalTech() {
    setIsOpenAppModal((prevProp) => !prevProp);
    setPropsAppModal({
      title: <h1>Tech</h1>,
      children: <h1>Technologies</h1>,
      onCancel: () => setIsOpenAppModal(false),
      onOk: () => setIsOpenAppModal(false),
    });
  }

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
          <SeeMoreComponent onClickProps={onOpenModalTech} key={"usage-tech"} />
        </div>
        <p className="max-w-sm mb-16">
          <TechComponent technologies={technologies} />
        </p>
      </div>
    </>
  );
}

function ItemSecondCol() {
  const { setIsOpenAppModal, setPropsAppModal } = useOpenAppModal();
  const { t } = useTranslation();

  function onOpenModalProjectDesc() {
    setIsOpenAppModal((prevProp) => !prevProp);
    setPropsAppModal({
      title: <h1>Project Description</h1>,
      children: <h1>Project Description</h1>,
      onCancel: () => setIsOpenAppModal(false),
      onOk: () => setIsOpenAppModal(false),
    });
  }

  function onOpenModalResponsible() {
    setIsOpenAppModal((prevProp) => !prevProp);
    setPropsAppModal({
      title: <h1>Responsibility</h1>,
      children: <h1>Responsibility</h1>,
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

function SeeMoreComponent({ onClickProps }) {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("seeMore")}>
      <div
        onClick={onClickProps}
        className="cursor-pointer text-3xl text-accent"
      >
        <MoreOutlined />
      </div>
    </Tooltip>
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
          <ItemSecondCol />
        </div>
      </div>
    </div>
  );
}

function TechComponent({ technologies }) {
  const techArr = technologies.split(",");

  return (
    <div className="flex gap-6">
      {techArr.map((el) => (
        <>
          <div className="flex items-center text-white gap-2 h-11">
            <div className="text-white text-3xl">{ICON_MAPPING[el]}</div>
          </div>
        </>
      ))}
    </div>
  );
}

export default RealProjects;

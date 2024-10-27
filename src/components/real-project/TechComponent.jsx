import React from "react";
import { FaGitlab, FaJava, FaJira, FaReact } from "react-icons/fa";
import {
  SiHibernate,
  SiIntellijidea,
  SiJira,
  SiMysql,
  SiVisualstudiocode,
} from "react-icons/si";


const ICON_MAPPING = {
  react: <FaReact />,
  java: <FaJava />,
  mysql: <SiMysql />,
  gitlab : <FaGitlab />,
  jira : <FaJira />,
  hibernate : <SiHibernate />
};

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

export default TechComponent;

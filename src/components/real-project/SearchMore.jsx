import React from "react";
import { Tooltip } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";


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


export default SeeMoreComponent;
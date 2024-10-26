import { Modal } from "antd";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { appModalProps, isOpenAppModal } from "../recoil/atom";

function AppModal() {
  const isOpenModal = useRecoilValue(isOpenAppModal);
  const modalProps = useRecoilValue(appModalProps);

  return <Modal open={isOpenModal} {...modalProps} />;
}

export default AppModal;

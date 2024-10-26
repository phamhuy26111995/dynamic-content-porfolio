import React from "react";
import { appModalProps, isOpenAppModal } from "../recoil/atom";
import { useSetRecoilState } from "recoil";


function useOpenAppModal() {
    const setIsOpenAppModal = useSetRecoilState(isOpenAppModal);

    const setPropsAppModal = useSetRecoilState(appModalProps);


    return {setIsOpenAppModal , setPropsAppModal};

}

export default useOpenAppModal;
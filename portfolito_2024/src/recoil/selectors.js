import { selector, selectorFamily } from "recoil";
import {
  aboutAtom,
  bannerAtom
} from "./atom";

import { get as firebaseGet, ref } from "firebase/database";
import { database } from "../firebaseConfig";

export const fullDataSelector = selectorFamily({
  key: "fullDataSelector",
  get: (obj) => async () => {
    const dbRef = ref(database);
    const snapshot = await firebaseGet(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }

    return null;
  },
});

export const bannerSelector = selector({
  key: "bannerSelector",
  get: ({ get }) => {
    const fullData = get(fullDataSelector({}));
    if (fullData) {
      const resultData = {
        ...fullData.banner,
      };
      return {
        ...resultData,
        content: {
          ...resultData.content,
          role: resultData.content.role
            ? Object.keys(resultData.content.role).map(
                (key) => resultData.content.role[key]
              )
            : ["Back-end Developer", "Front-end Developer"],
        },
      };
    }

    return get(bannerAtom);
  },
});

export const aboutSelector = selector({
  key: "aboutSelector",
  get: ({ get }) => {
    const fullData = get(fullDataSelector({}));
    if (fullData) {
      return {
        ...fullData.about,
      };
    }

    return get(aboutAtom);
  },
});

export const personalProjSelector = selector({
  key: "personalProjSelector",
  get: ({ get }) => {
    const fullData = get(fullDataSelector({}));

    if (fullData) {
      const listPersonalProject = {
        ...fullData.personalProjects.listProject,
      };

      return Object.keys(listPersonalProject).map(
        (key) => listPersonalProject[key]
      );
    }

    return [];
  },
});

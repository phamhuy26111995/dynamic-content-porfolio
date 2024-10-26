import { atom } from "recoil";

export const fullDataAtom = atom({
  key: "fullDataAtom",
  default: undefined,
});

export const isOpenAppModal = atom({
  key : "appModal",
  default : false
});

export const appModalProps = atom({
  key : "appModalProps",
  default : {
    title : "",
    children : <></>,
  }
});

export const headerAtom = atom({
  key: "headerAtom",
  default: {
    header: {
      leftContent: {
        firstname: "HUY",
        surname: "PHẠM",
      },
    },
  },
});

export const bannerAtom = atom({
  key: "bannerAtom",
  default: {
    banner: {
      content: {
        surname: "PHẠM",
        firstname: "HUY",
        introduce:
          "I graduated from the Information Technology field, specializing in System Administration and Network Management. However, during my work experience, I realized that system administration relied mainly on the software created by others based on their logic. Wanting to improve my ability and use my strength in logic skills, I decided to change to Software Development to become the one who actively creates products. My career goal is to become a highly skilled Solution Architect, taking charge of designing and implementing innovative solutions.",
        role: {
          role_1: "Back-end Developer",
          role_2: "Front-end Developer",
        },
      },
      image:
        "https://res.cloudinary.com/dgmmn28ih/image/upload/v1683041917/MicrosoftTeams-image-removebg-preview.png",
    },
  },
});

export const aboutAtom = atom({
  key: "aboutAtom",
  default: {
    about: {
      content: {},
      video:
        "https://res.cloudinary.com/dgmmn28ih/video/upload/v1717218375/3896015822535954978_r0nsf0.mp4",
    },
  },
});

export const personalProjectsAtom = atom({
  key: "personalProjects",
  default: {
    listProject: [
      {
        content : "",
        image: "",
      },
      {
        content : "",
        image: "",
      },
      {
        content : "",
        image: "",
      },
    ],
  },
});

import img1 from "./assets/wordshare.jpg";
import img2 from "./assets/nosweat.jpg";
import img3 from "./assets/hidden.jpg";
import img4 from "./assets/memory.jpg";
import img5 from "./assets/wellness.jpg";

export const projects = [
  {
    link: "https://wordshare.herokuapp.com/",
    title: "Word Share \nFrontend",
    subtitle: "HTML5, CSS with React Boostrap, ReactJS",
    description:
      "A creative space for authors and artisits to share your thoughts, ideas, and projects.",
    image: img1,
    alt: "Word Share Frontend",
  },
  {
    link: "https://ws-api.herokuapp.com/",
    title: "Word Share \nBackend",
    subtitle: "Django Rest Framework, Postrgres DB",
    description: "The backend for Word Share",
    image: img1,
    alt: "Word Share Backend",
  },
  {
    link: "https://no-sweat-fitforum.herokuapp.com/",
    title: "No Sweat!",
    subtitle:
      "HTML5, CSS with Bootstrap, Python,\nDjango Rest Framework, Postgres DB",
    description:
      "A fitness forum for beginners and experts to exchange tips, experiences, and support.",
    image: img2,
    alt: "No Sweat",
  },
  {
    link: "https://the-hidden-room.herokuapp.com/",
    title: "The Hidden Room",
    subtitle: "HTML5, CSS, Python",
    description:
      "A text-based adventure where you navigate a dungeon to try to return to the safety of your bed.",
    image: img3,
    alt: "The Hidden Room",
  },
  {
    link: "https://gnikroo.github.io/Memory-Game/",
    title: "Memory",
    subtitle: "HTML5, CSS, JavaScript",
    description: "The classic memory game in eye-catching neon.",
    image: img4,
    alt: "Memory",
  },
  {
    link: "https://gnikroo.github.io/Wellness/",
    title: "Wellness - \nBegin with you",
    subtitle: "HTML5, CSS",
    description:
      "A static website dedicated to helping a beginner understand how to approach their health in a holistic way.",
    image: img5,
    alt: "Wellness",
  },
];

export const languages = ["HTML5", "CSS", "JavaScript", "Python"];

export const frameworks = ["Django", "Flask", "Bootstrap", "React", "jQuery"];

export const versionControls = ["GitHub", "Git"];

export const databaseSystems = ["MySQL", "PostgreSql"];

export const developmentEnvirons = ["Gitpod", "Visual Studio Code"];

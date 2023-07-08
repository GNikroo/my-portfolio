import fullstack from "./assets/fullstackdiploma.png";
import img3 from "./assets/hidden.jpg";
import img4 from "./assets/memory.jpg";
import modjs from "./assets/modernjs-cert.png";
import img2 from "./assets/nosweat.jpg";
import python from "./assets/python-cert.jpeg";
import img5 from "./assets/wellness.jpg";
import img1 from "./assets/wordshare.jpg";

export const about = [
  {
    subtitle: "Education",
    description: `In June 2023, I have earned a Diploma in Full Stack Software Development with a specialization in advanced front end fromt Code Institute. I also have an Associate of Science in Early Childhood Education and Teaching.`,
  },
  {
    subtitle: "Skills",
    description: `I have thirteen years of early childhood education experience in
international preschools located across Stockholm. As a
preschool teacher, I have cultivated valuable interpersonal
skills working with students and colleagues alike. I have become adept at problem-solving, divergent thinking,
active listening, and collaborative work.`,
  },
  {
    subtitle: "Goals",
    description: `I have a solid foundation in both front-end and back-end
development encompassing HTML, CSS, JavaScript, and Python. I hope to work with a team where I
can utilize my diverse experiences and dedication to continuous
learning so that I may make meaningful contributions.`,
  },
];
export const projects = [
  {
    link: "https://wordshare.herokuapp.com/",
    title: "Word Share Frontend",
    subtitle: "HTML5, CSS with React Boostrap, ReactJS",
    description:
      "A creative space for authors and artisits to share your thoughts, ideas, and projects.",
    image: img1,
    alt: "Word Share Frontend",
  },
  {
    link: "https://ws-api.herokuapp.com/",
    title: "Word Share Backend",
    subtitle: "Django Rest Framework, Postrgres DB",
    description: "The backend for Word Share",
    image: img1,
    alt: "Word Share Backend",
  },
  {
    link: "https://no-sweat-fitforum.herokuapp.com/",
    title: "No Sweat!",
    subtitle:
      "HTML5, CSS with Bootstrap, Python,Django Rest Framework, Postgres DB",
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

export const certificates = [
  {
    institution: "Code Institute",
    course: "Diploma in Full Stack Development: Advanced Front End",
    date: "June 30, 2023",
    image: fullstack,
  },
  {
    institution: "ui.dev",
    course: "Modern JavaScript",
    date: "June 12, 2023",
    image: modjs,
  },
  {
    institution: "Udemy",
    course: "The Python Bible",
    date: "August 22, 2022",
    image: python,
  },
];

export const languages = ["HTML5", "CSS", "JavaScript", "Python"];

export const frameworks = ["Django", "Flask", "Bootstrap", "React", "jQuery"];

export const versionControls = ["GitHub", "Git"];

export const databaseSystems = ["MySQL", "PostgreSql"];

export const developmentEnvirons = ["Gitpod", "VS Code"];

import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={`${styles.App} mx-auto`}>
      <NavBar />
      <About />
      <Project />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

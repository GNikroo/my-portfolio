import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={`${styles.App} mx-auto`}>
        <NavBar />
        <div className={styles.Content}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

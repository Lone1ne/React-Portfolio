import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "../src/styles/App.css";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <NavBar />

        <Routes>
          <Route path="/React-Portfolio" element={<About />} />
          <Route path="/React-Portfolio/projects" element={<Projects />} />
          <Route path="/React-Portfolio/contact" element={<Contact />} />
          <Route path="/React-Portfolio/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

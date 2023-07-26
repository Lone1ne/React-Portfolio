import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/React-Portfolio" element={<About />} />
            <Route path="/React-Portfolio/projects" element={<Projects />} />
            <Route path="/React-Portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

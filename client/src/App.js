import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

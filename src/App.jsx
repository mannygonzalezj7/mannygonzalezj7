import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SoftwareDevelopment from "./pages/Software-Development";
import GraphicDesign from "./pages/Graphic-Design";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import UIUX from "./pages/UIUX";
import Project from "./pages/Project-Page";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <Routes>
            <Route path="/mannygonzalezj7/" element={<Home />} />
            <Route
              path="/mannygonzalezj7/SoftwareDevelopment"
              element={<SoftwareDevelopment />}
            />
            <Route path="/mannygonzalezj7/UIUX" element={<UIUX />} />
            <Route
              path="/mannygonzalezj7/GraphicDesign"
              element={<GraphicDesign />}
            />
            <Route path="/mannygonzalezj7/Contact" element={<Contact />} />
            <Route
              path="/mannygonzalezj7/:category/:projectId"
              element={<Project />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

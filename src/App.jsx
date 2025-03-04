import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import ScrollToTop from "./utils/scrollToTop";
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
    <Router basename="/" scrollRestoration="manual">
      <div className="App">
        <Header />
        <div className="Content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/SoftwareDevelopment"
              element={<SoftwareDevelopment />}
            />
            <Route path="/UIUX" element={<UIUX />} />
            <Route path="/GraphicDesign" element={<GraphicDesign />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/:category/:projectId" element={<Project />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Prediction from "./pages/Prediction";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
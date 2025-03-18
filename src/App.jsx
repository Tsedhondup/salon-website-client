import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/About" element={<AboutPage />} /> */}
        </Routes>
        {/* <Footers /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

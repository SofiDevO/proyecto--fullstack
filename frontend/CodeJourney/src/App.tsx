import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { SectionPageError } from "./pages/SectionPageError/SectionPageError";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { TeamMembers } from "./pages/TeamMembers/TeamMembers";
import { Registro } from "./pages/Registro/Registro";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/equipo" element={<TeamMembers/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/*" element={<SectionPageError />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;

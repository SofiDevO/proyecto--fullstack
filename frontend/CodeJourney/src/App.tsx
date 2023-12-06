import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SectionPageError } from "./pages/SectionPageError/SectionPageError";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { Registro } from "./pages/Registro/Registro";
import { TeamMembers } from "./pages/TeamMembers/TeamMembers";

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

      </Router>
    </>
  );
}
export default App;

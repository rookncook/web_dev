import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
const Kanbas = () => {
    return (
      <div className="d-flex">
        <div>
        <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1,}}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          {/* <Route path="*" element={<h1>I am currently building this</h1>} /> */}
        </Routes>
        </div>
      </div>
     );
  }
   
  export default Kanbas;




